const axios = require("axios");
const imageService = require("../services/image.service");
const projectService = require("../services/project.service");
const {
  SuccessResponse,
  SuccessArrayResponse,
} = require("../utils/Responses/Succes.response");

const projectController = {
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  getAll: async (req, res, next) => {
    const projects = await projectService.getAll();
    res.status(200).json(new SuccessArrayResponse(projects));
  },
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  getById: async (req, res, next) => {
    const id = req.params.id;
    const project = await projectService.getById(id);
    res.status(200).json(project);
  },
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  create: async (req, res, next) => {
    const newProject = req.body;
    const user = req.user;

    if (req.files) {
      console.log(req.files);
      const images = req.files.map((i) => (i = { path: i.filename }));
      newProject.images = await imageService.create(images);
    }
    const project = await projectService.create(newProject, user.id);
    res.status(201).json(new SuccessResponse(project, 201));
  },
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  update: async (req, res, next) => {
    const updatedProject = req.body;
    const id = req.params.id;
    console.log(id);
    if (req.files && req.files.length) {
      const images = req.files.map((i) => (i = { path: i.filename }));
      updatedProject.images = await imageService.create(images);
    }
    // res.status(200).json("ok");
    const project = await projectService.update(updatedProject, id);
    return res.status(200).json(new SuccessResponse(project));
  },
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  delete: async (req, res, next) => {
    const id = req.params.id;
    const isProjectDelete = await projectService.softDelete(id);

    return res.status(204).json(
      new SuccessResponse({
        message: "projet id:" + (id ? id : ""),
      })
    );
  },
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  deleteImage: async (req, res, next) => {
    const { id, imageId } = req.params;
    const project = await projectService.deleteImage(id, imageId);

    res.status(204).json({});
  },
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  test: async (req, res, next) => {
    try {
      const query = req.query;
      const decodedQuery = {};
      const keyAuthorize = ["c", "a", "p", "l"];

      // query.l = query.l ? query.l : "Belgique";
      for (const key in query) {
        if (query.hasOwnProperty(key) && keyAuthorize.includes(key)) {
          let decodedValue = query[key].replace(/%20/g, " ");
          decodedQuery[key] = decodedValue;
        }
      }
      const queryString = Object.values(decodedQuery)
        .map((value) => value)
        .join(" ");
      const encodeQuery = encodeURIComponent(queryString);

      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeQuery}`
      );
      const cities = await response.data.map(
        (p) =>
          (item = {
            cities: p.display_name.split(",").slice(0, 2).join(),
            long: p.lon,
            lat: p.lat,
          })
      );
      return res.json(cities);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = projectController;

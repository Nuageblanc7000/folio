import { IImage } from './iimage.interface';
import { ITechnology } from './itechnology.interface';
import { IUser } from './iuser.interface';

export interface IProject {
  id: string;
  title: string;
  description: string;
  link: string;
  github: string;
  user: IUser;
  technologies: ITechnology[];
  images: IImage[];
}

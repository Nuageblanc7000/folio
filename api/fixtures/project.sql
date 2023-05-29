use foliorw;

SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE projects;
TRUNCATE TABLE users;
TRUNCATE TABLE technologies;
TRUNCATE TABLE images;
TRUNCATE TABLE project_technology;

SET FOREIGN_KEY_CHECKS = 1;



insert into users (`firstname`, `lastname`, `email`, `password`) 
	values ("remy","wetterene","wetterene.remy@gmail.com","test");



INSERT INTO `technologies` (`id`, `title`, `icon`, `createdAt`, `updatedAt`) VALUES
(1, 'angular', '1684795925662.angular.svg', '2023-05-22 22:52:05', '2023-05-22 22:52:05'),
(2, 'react', '1684795938163.react.svg', '2023-05-22 22:52:17', '2023-05-22 22:52:17'),
(3, 'github', '1684795957979.github.svg', '2023-05-22 22:52:37', '2023-05-22 22:52:37'),
(4, 'nodejs', '1684795999646.nodejs.svg', '2023-05-22 22:53:19', '2023-05-22 22:53:19'),
(5, 'typescript', '1684834105691.Fichier_3typescript.svg', '2023-05-23 09:28:24', '2023-05-23 09:28:24'),
(6, 'bootstrap', '1684834133623.boostrap.svg', '2023-05-23 09:28:53', '2023-05-23 09:28:53'),
(7, 'php', '1684834207683.Fichier_6php.svg', '2023-05-23 09:30:07', '2023-05-23 09:30:07'),
(8, 'mongodb', '1684834308521.Fichier_7mongodb.svg', '2023-05-23 09:31:47', '2023-05-23 09:31:47'),
(9, 'express', '1684834338590.Fichier_8express.svg', '2023-05-23 09:32:17', '2023-05-23 09:32:17'),
(10, 'symfony', '1684834355388.Fichier_9symfony.svg', '2023-05-23 09:32:34', '2023-05-23 09:32:34'),
(11, 'mysql', '1684834368095.Fichier_10mysql.svg', '2023-05-23 09:32:48', '2023-05-23 09:32:48'),
(12, 'html', '1684834383557.html.svg', '2023-05-23 09:33:02', '2023-05-23 09:33:02'),
(13, 'css', '1684837420095.Fichier_11css.svg', '2023-05-23 10:23:39', '2023-05-23 10:23:39');

INSERT INTO `projects` (`id`, `title`, `description`, `createdAt`, `updatedAt`, `deletedAt`, `UserId`) VALUES
(1, 'tolink', 'Mon projet est une application que j\'ai développée seul. Elle permet aux utilisateurs de rechercher des restaurants et de les ajouter à leurs favoris. Les restaurateurs ont la possibilité de créer une page complète pour leur établissement, incluant la gestion des horaires d\'ouverture, la mise en valeur de leurs spécialités, etc. Les utilisateurs peuvent ainsi constituer un carnet d\'adresses personnalisé de restaurants favoris. L\'application se distingue par son interface conviviale et son potentiel à faciliter la recherche et la gestion des favoris. C\'est un outil pratique pour connecter les utilisateurs aux restaurants qui correspondent à leurs préférences.', '2023-05-24 17:55:50', '2023-05-24 17:55:50', NULL, 1),
(2, 'frinki', 'J\'ai développé une web app de vente d\'occasion de vêtements similaire à des plateformes populaires telles que Deuxième Main ou Vinted. Les utilisateurs peuvent facilement publier des annonces de vente de vêtements et entrer en contact avec d\'autres utilisateurs via une messagerie intégrée. La web app comprend également une fonctionnalité de recherche avancée avec une barre de recherche permettant de filtrer par catégories ou mots-clés. Mon objectif était de créer une plateforme conviviale et pratique pour faciliter l\'achat et la vente de vêtements d\'occasion.', '2023-05-24 20:31:49', '2023-05-24 20:31:49', NULL, 1);

INSERT INTO `images` (`id`, `path`, `createdAt`, `updatedAt`, `ProjectId`) VALUES
(4, '1684957041999.tolink.PNG', '2023-05-24 19:37:21', '2023-05-24 19:37:21', 1),
(5, '1684960310878.frinki.JPG', '2023-05-24 20:31:49', '2023-05-24 20:31:49', 2); 
INSERT INTO `project_technology` (`createdAt`, `updatedAt`, `ProjectId`, `TechnologyId`) VALUES
('2023-05-24 17:55:50', '2023-05-24 17:55:50', 1, 7),
('2023-05-24 17:55:50', '2023-05-24 17:55:50', 1, 10),
('2023-05-24 17:55:50', '2023-05-24 17:55:50', 1, 12),
('2023-05-24 17:55:50', '2023-05-24 17:55:50', 1, 13),
('2023-05-24 20:31:49', '2023-05-24 20:31:49', 2, 7),
('2023-05-24 20:31:49', '2023-05-24 20:31:49', 2, 10),
('2023-05-24 20:31:49', '2023-05-24 20:31:49', 2, 12),
('2023-05-24 20:31:49', '2023-05-24 20:31:49', 2, 13);
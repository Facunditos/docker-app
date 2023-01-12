use docker_app_db;
DROP TABLE IF EXISTS `Users`;
create table `Users`(
	`id` int(6) not null auto_increment,
	`first_name` varchar(100) not null,
	primary key(`id`)
) engine=InnoDB default charset=utf8mb4;

lock tables `Users` write;
INSERT INTO `Users` 
   (first_name )
VALUES
    ('Facundo'),
    ('Nahuel'),
    ('Agustín');
unlock tables;
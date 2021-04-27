-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 104.236.92.64    Database: final_project
-- ------------------------------------------------------
-- Server version	8.0.23-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `recipes`
--

DROP TABLE IF EXISTS `recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `instructions` mediumtext,
  `category` varchar(45) NOT NULL,
  `author` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_idx` (`category`),
  KEY `author_id_idx` (`author`),
  CONSTRAINT `recipes_author_id` FOREIGN KEY (`author`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `recipes_category` FOREIGN KEY (`category`) REFERENCES `categories` (`category`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
INSERT INTO `recipes` VALUES (1,'French Fries','Fry potatoes, add salt','SNACK',1),(11,'Milkshake','1. In a blender, blend together ice cream and milk. \n2. Pour into a glass and garnish with whipped topping, sprinkles, and a cherry.','SNACK',1),(12,'Potato Salad','1. Boil potatoes until tender, remove from pot allow to cool. \n2. While still warm peel and dice potatoes into cubes.\n3. Add diced celery and onions to the potato mixture.\n4. Add 4 chopped-up hard-boiled eggs into the mixture.\n5. Add Mayonnaise, salt, and pepper.\n6. Chill overnight before serving.','DINNER',3),(17,'French Fries?','Fry potatoes, add salt. Lots of salt!','SNACK',4),(18,'Dumplings','Bring water to a boil in a large pot. Add dumping. Close the lid and boil for 10 mins. Open the lid and boil for an additional 5 mins. Drain and serve.','DINNER',2),(19,'Pancake','Mix pancake mix with water. Add cooking oil to a pan, when hot add the pancake mix. Cook until solid and golden. Serve.','BREAKFAST',3),(20,'Apple','Look at the apple. Reflect on your life. Enjoy!','SNACK',5),(21,'Baked Apples','1. Pre-heat oven to 375F (190C)\n2. Remove the core of the apples. careful to leave the bottom half-inch (1.5 cm) intact\n3. Stuff the hole with brown sugar.\n4. Bake for 30 to 45 mins.\n5. Serve with ice cream','SNACK',5);
/*!40000 ALTER TABLE `recipes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-26 22:01:43

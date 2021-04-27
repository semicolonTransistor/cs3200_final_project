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
-- Table structure for table `ingredients_to_recipes`
--

DROP TABLE IF EXISTS `ingredients_to_recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingredients_to_recipes` (
  `recipe` int NOT NULL,
  `ingredient` int NOT NULL,
  `quantity` float NOT NULL,
  `unit` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`recipe`,`ingredient`),
  KEY `ingrediant_id_idx` (`ingredient`),
  CONSTRAINT `ingredients_to_recipes_ingrediant_id` FOREIGN KEY (`ingredient`) REFERENCES `ingredients` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `ingredients_to_recipes_recipe_id` FOREIGN KEY (`recipe`) REFERENCES `recipes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredients_to_recipes`
--

LOCK TABLES `ingredients_to_recipes` WRITE;
/*!40000 ALTER TABLE `ingredients_to_recipes` DISABLE KEYS */;
INSERT INTO `ingredients_to_recipes` VALUES (1,1,1,'teaspoon'),(1,3,4,'ea'),(11,16,1,'cup'),(11,17,2,'scoops'),(11,19,4,'cubes'),(12,1,0.75,'teaspoon'),(12,2,0.75,'teaspoon'),(12,3,6,'ea'),(12,20,2,'stalks'),(12,21,5,'ea'),(12,22,6,'ea'),(12,23,1.5,'cups'),(17,1,1,'pound'),(17,3,4,'ea'),(18,11,25,'ea'),(18,12,5,'liters'),(19,12,1,'cup'),(19,14,1,'tablespoon'),(19,15,1,'box'),(20,18,1,''),(21,17,4,'scoops'),(21,18,4,'ea'),(21,24,1,'cup');
/*!40000 ALTER TABLE `ingredients_to_recipes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-26 22:01:42

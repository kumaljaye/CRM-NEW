-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: crm
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `add_cr`
--

DROP TABLE IF EXISTS `add_cr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `add_cr` (
  `id` int NOT NULL AUTO_INCREMENT,
  `topic` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `add_cr`
--

LOCK TABLES `add_cr` WRITE;
/*!40000 ALTER TABLE `add_cr` DISABLE KEYS */;
INSERT INTO `add_cr` VALUES (1,'bh.bjk',NULL),(2,'bh.bjk',NULL),(3,'bh.bjk',NULL),(4,'bh.bjk',NULL),(5,'bh.bjk',NULL),(6,'bh.bjk',NULL),(7,'bh.bjk',NULL),(8,', m',NULL),(9,', m',NULL),(10,', m',NULL),(11,', m',NULL),(12,', m',NULL),(13,', m',NULL),(14,', m',NULL),(15,', m',NULL),(16,', m',NULL),(17,', m',NULL),(18,', m',NULL),(19,', m',NULL),(20,', m',NULL),(21,', m',NULL),(22,', m',NULL),(23,', m',NULL),(24,', m',NULL),(25,', m',NULL),(26,', m',NULL),(27,', m',NULL),(28,', m',NULL),(29,', m',NULL),(30,', m',NULL),(31,', m',NULL),(32,', m',NULL),(33,', m',NULL),(34,'bjhb',NULL),(35,'cmg','vg,bn'),(36,'ggd','dfgbdfc'),(37,'ggd','dfgbdfc'),(38,'dfgbdf','dggb'),(39,'dfgbdf','dggb'),(40,'fgdgd','dfgb'),(41,'fgdgd','dfgb'),(42,'fgdgd','dfgb'),(43,'gdsnb','gsdb'),(44,'bsfdfs','gsdb'),(45,'bsfdfs','gsdb'),(46,'kumal','gsdb'),(47,'kiumn','jh'),(48,'kiumn','jh'),(49,' mn','hb'),(50,'gdh','dfga'),(51,'gdh','dfga'),(52,'klgmsdf','ngjlkd'),(53,'vbv jh','fkgh'),(54,'fgsbsfd','fsgavsdg'),(55,'ho','hi');
/*!40000 ALTER TABLE `add_cr` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-22 16:47:59

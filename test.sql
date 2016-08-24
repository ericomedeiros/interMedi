-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 24, 2016 at 04:42 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `reac_rem`
--

CREATE TABLE `reac_rem` (
  `id_reac_rem` int(11) NOT NULL,
  `id_med1` int(11) NOT NULL,
  `id_med2` int(11) NOT NULL,
  `rea_type` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reac_rem`
--

INSERT INTO `reac_rem` (`id_reac_rem`, `id_med1`, `id_med2`, `rea_type`) VALUES
(1, 50, 51, 'c'),
(2, 52, 53, 'v'),
(3, 54, 55, 'i'),
(4, 56, 57, 'c'),
(5, 58, 59, 'c'),
(6, 60, 61, 'v'),
(7, 62, 63, 'i'),
(8, 64, 65, 'v'),
(9, 66, 67, 'i'),
(10, 68, 69, 'c'),
(11, 70, 71, 'v'),
(12, 72, 73, 'c'),
(13, 74, 75, 'i'),
(14, 76, 77, 'i'),
(15, 78, 79, 'i'),
(16, 80, 81, 'v'),
(17, 82, 83, 'c'),
(18, 84, 85, 'v'),
(19, 86, 87, 'i'),
(20, 88, 89, 'c'),
(21, 90, 91, 'i'),
(22, 92, 93, 'c'),
(23, 50, 83, 'v'),
(24, 62, 78, 'c'),
(25, 80, 78, 'c'),
(26, 66, 56, ''),
(27, 92, 50, ''),
(28, 93, 97, ''),
(29, 95, 55, ''),
(30, 77, 66, ''),
(31, 50, 83, 'v');

-- --------------------------------------------------------

--
-- Table structure for table `remedio`
--

CREATE TABLE `remedio` (
  `id_remedio` int(11) NOT NULL,
  `rem_name` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `remedio`
--

INSERT INTO `remedio` (`id_remedio`, `rem_name`) VALUES
(50, 'voriconazol'),
(51, 'vancomicina'),
(52, 'tramadol'),
(53, 'tiopental'),
(54, 'tigeciclina'),
(55, 'sulfato de magnésio'),
(56, 'sulfametoxazol-trimetoprima'),
(57, 'salbutamol'),
(58, 'ringer lactato'),
(59, 'ranitidina'),
(60, 'propofol'),
(61, 'prometazina'),
(62, 'polimixina B'),
(63, 'piperacilina-tazobactam'),
(64, 'penicilina G potassica'),
(65, 'pancurônio'),
(66, 'oxacilina'),
(67, 'ondansetrona'),
(68, 'omeprazol'),
(69, 'octreotide'),
(70, 'noradrenalina'),
(71, 'nitroprussiato de sodio'),
(72, 'nitroglicerina'),
(73, 'naloxona'),
(74, 'morfina'),
(75, 'midazolam'),
(76, 'micafungina'),
(77, 'metronidazol'),
(78, 'metoprolol'),
(79, 'metoclopramida'),
(80, 'metilprednisolona'),
(81, 'meropenem'),
(82, 'meperidina'),
(83, 'manitol'),
(84, 'linezolida'),
(85, 'lidocaina'),
(86, 'levofloxacino'),
(87, 'lanatosídeo'),
(88, 'insulina regular'),
(89, 'imipenem-cilastatina'),
(90, 'hioscina'),
(91, 'hidrocortisona'),
(92, 'heparina'),
(93, 'haloperidol'),
(94, 'gluconato de calcio'),
(95, 'gentamicina'),
(96, 'ganciclovir'),
(97, 'furosemida'),
(98, 'fosfato de potassio'),
(99, 'flumazenil'),
(100, 'fluconazol'),
(101, 'fitomenadiona'),
(102, 'filgrastima'),
(103, 'fentanil'),
(104, 'fenobarbital'),
(105, 'fenitoína'),
(106, 'esmolol'),
(107, 'ertapenem'),
(108, 'droperidol'),
(109, 'DOPamina'),
(110, 'DOBUTamina'),
(111, 'dimenidrato'),
(112, 'diazepam'),
(113, 'dexametasona'),
(114, 'clorpromazina'),
(115, 'cloreto de potassio'),
(116, 'cloreto de calcio'),
(117, 'clonidina'),
(118, 'clindamicina'),
(119, 'ciprofloxacino'),
(120, 'cetoprofeno'),
(121, 'cetamina'),
(122, 'cefUROxima'),
(123, 'cefTRIAXona'),
(124, 'cefTAZidima'),
(125, 'cefoxitina'),
(126, 'cefoTAxima'),
(127, 'ceFEPima'),
(128, 'ceFAZolina'),
(129, 'cefaLOTina'),
(130, 'bicarbonato de sodio'),
(131, 'azitromicina'),
(132, 'atropina'),
(133, 'atracúrio'),
(134, 'anfotericina B'),
(135, 'ampicilina-sulbactam'),
(136, 'ampicilina'),
(137, 'amoxicilina-clavulanato'),
(138, 'amiodarona'),
(139, 'aminofilina'),
(140, 'amicacina'),
(141, 'albumina'),
(142, 'adrenalina'),
(143, 'acido tranexamico'),
(144, 'aciclovir');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reac_rem`
--
ALTER TABLE `reac_rem`
  ADD PRIMARY KEY (`id_reac_rem`);

--
-- Indexes for table `remedio`
--
ALTER TABLE `remedio`
  ADD PRIMARY KEY (`id_remedio`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reac_rem`
--
ALTER TABLE `reac_rem`
  MODIFY `id_reac_rem` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT for table `remedio`
--
ALTER TABLE `remedio`
  MODIFY `id_remedio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=145;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

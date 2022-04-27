-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 27, 2022 at 09:03 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chopradu`
--

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `memberID` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `name` varchar(200) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `roleID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `monthlyrentalfee`
--

CREATE TABLE `monthlyrentalfee` (
  `rentalID` int(11) NOT NULL,
  `rentalDetail` varchar(100) NOT NULL,
  `month` date NOT NULL,
  `year` year(4) NOT NULL,
  `waterBill` double NOT NULL,
  `waterUnit` double NOT NULL,
  `electricityBill` double NOT NULL,
  `powerUnit` double NOT NULL,
  `cleaningFee` double NOT NULL,
  `wasteDisposalFee` double NOT NULL,
  `shopID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `orderID` int(11) NOT NULL,
  `orderDate` date NOT NULL,
  `orderStatus` varchar(20) NOT NULL,
  `subtotal` double NOT NULL,
  `shopID` int(11) NOT NULL,
  `memberID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `orderdetail`
--

CREATE TABLE `orderdetail` (
  `orderDetailID` int(11) NOT NULL,
  `detail` varchar(200) NOT NULL,
  `quantity` int(3) NOT NULL,
  `price` double NOT NULL,
  `productID` int(11) NOT NULL,
  `orderID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `productID` int(11) NOT NULL,
  `productName` varchar(50) NOT NULL,
  `productDetail` varchar(200) NOT NULL,
  `productPrice` double NOT NULL,
  `status` varchar(50) NOT NULL,
  `typeID` int(11) NOT NULL,
  `shopID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `producttype`
--

CREATE TABLE `producttype` (
  `typeID` int(11) NOT NULL,
  `typeName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `producttype`
--

INSERT INTO `producttype` (`typeID`, `typeName`) VALUES
(3, 'ก๋วยเตี๋ยว'),
(6, 'ขนมหวาน'),
(12, 'ข้าวแกง'),
(4, 'น้ำ'),
(5, 'ผลไม้'),
(2, 'อาหารตามสั่ง'),
(10, 'โรตี');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `roleID` int(11) NOT NULL,
  `roleName` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`roleID`, `roleName`, `status`) VALUES
(1, 'Admin', '1'),
(2, 'Member', '2'),
(3, 'Owner', '3'),
(4, 'User', '4');

-- --------------------------------------------------------

--
-- Table structure for table `shop`
--

CREATE TABLE `shop` (
  `shopID` int(11) NOT NULL,
  `shopName` varchar(100) NOT NULL,
  `shopPhone` varchar(10) NOT NULL,
  `shopDetail` varchar(50) NOT NULL,
  `openingTime` varchar(50) NOT NULL,
  `shopType` varchar(50) NOT NULL,
  `shopRentalContract` varchar(100) NOT NULL,
  `memberID` int(11) NOT NULL,
  `shopTypeID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `shoptype`
--

CREATE TABLE `shoptype` (
  `shopTypeID` int(11) NOT NULL,
  `typeName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `yearlyrent`
--

CREATE TABLE `yearlyrent` (
  `rentID` int(11) NOT NULL,
  `rentDetail` varchar(50) NOT NULL,
  `year` year(4) NOT NULL,
  `rentalFee` int(10) NOT NULL,
  `shopID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`memberID`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `roleID` (`roleID`);

--
-- Indexes for table `monthlyrentalfee`
--
ALTER TABLE `monthlyrentalfee`
  ADD PRIMARY KEY (`rentalID`),
  ADD KEY `shopID` (`shopID`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`orderID`),
  ADD KEY `order_ibfk_2` (`memberID`),
  ADD KEY `order_ibfk_3` (`shopID`);

--
-- Indexes for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD PRIMARY KEY (`orderDetailID`),
  ADD KEY `productID` (`productID`),
  ADD KEY `orderID` (`orderID`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`productID`),
  ADD UNIQUE KEY `productName` (`productName`),
  ADD KEY `typeID` (`typeID`),
  ADD KEY `product_ibfk_2` (`shopID`);

--
-- Indexes for table `producttype`
--
ALTER TABLE `producttype`
  ADD PRIMARY KEY (`typeID`),
  ADD UNIQUE KEY `typeName` (`typeName`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`roleID`);

--
-- Indexes for table `shop`
--
ALTER TABLE `shop`
  ADD PRIMARY KEY (`shopID`),
  ADD UNIQUE KEY `shopName` (`shopName`),
  ADD KEY `shop_ibfk_1` (`memberID`),
  ADD KEY `shopTypeID` (`shopTypeID`);

--
-- Indexes for table `shoptype`
--
ALTER TABLE `shoptype`
  ADD PRIMARY KEY (`shopTypeID`);

--
-- Indexes for table `yearlyrent`
--
ALTER TABLE `yearlyrent`
  ADD PRIMARY KEY (`rentID`),
  ADD KEY `shopID` (`shopID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `memberID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `monthlyrentalfee`
--
ALTER TABLE `monthlyrentalfee`
  MODIFY `rentalID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `orderID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orderdetail`
--
ALTER TABLE `orderdetail`
  MODIFY `orderDetailID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `productID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `producttype`
--
ALTER TABLE `producttype`
  MODIFY `typeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `roleID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `shop`
--
ALTER TABLE `shop`
  MODIFY `shopID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `shoptype`
--
ALTER TABLE `shoptype`
  MODIFY `shopTypeID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `yearlyrent`
--
ALTER TABLE `yearlyrent`
  MODIFY `rentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `member`
--
ALTER TABLE `member`
  ADD CONSTRAINT `member_ibfk_1` FOREIGN KEY (`roleID`) REFERENCES `role` (`roleID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `monthlyrentalfee`
--
ALTER TABLE `monthlyrentalfee`
  ADD CONSTRAINT `monthlyrentalfee_ibfk_1` FOREIGN KEY (`shopID`) REFERENCES `shop` (`shopID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_2` FOREIGN KEY (`memberID`) REFERENCES `member` (`memberID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `order_ibfk_3` FOREIGN KEY (`shopID`) REFERENCES `shop` (`shopID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD CONSTRAINT `orderdetail_ibfk_1` FOREIGN KEY (`productID`) REFERENCES `product` (`productID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `orderdetail_ibfk_2` FOREIGN KEY (`orderID`) REFERENCES `order` (`orderID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`typeID`) REFERENCES `producttype` (`typeID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`shopID`) REFERENCES `shop` (`shopID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `shop`
--
ALTER TABLE `shop`
  ADD CONSTRAINT `shop_ibfk_1` FOREIGN KEY (`memberID`) REFERENCES `member` (`memberID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `shop_ibfk_2` FOREIGN KEY (`shopTypeID`) REFERENCES `shoptype` (`shopTypeID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `yearlyrent`
--
ALTER TABLE `yearlyrent`
  ADD CONSTRAINT `yearlyrent_ibfk_1` FOREIGN KEY (`shopID`) REFERENCES `shop` (`shopID`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

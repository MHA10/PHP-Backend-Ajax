<?php
$servername = "localhost";
$username = "root";
$password = "123";
$dbname = "mydb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "CREATE TABLE Families (
f_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50)
)";

if ($conn->query($sql) === TRUE) {
  echo "Table Families created successfully";
} else {
  echo "Error creating table: " . $conn->error;
}

$sql = "CREATE TABLE Users (
    u_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    f_id INT(6) UNSIGNED,
    name VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50),
    dob Date
)";
    
if ($conn->query($sql) === TRUE) {
    echo "Table Users created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$sql = "ALTER TABLE `Users` 
ADD CONSTRAINT `fk_f_id` 
FOREIGN KEY (`f_id`) REFERENCES `Families`(`f_id`)";
  
if ($conn->query($sql) === TRUE) {
  echo "FK added successfully";
} else {
  echo "Error adding FK: " . $conn->error;
}

$sql = "CREATE TABLE Groceries (
    g_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    description VARCHAR(50),
    punit_count INT(6),
    u_id INT(6) UNSIGNED,
    FOREIGN KEY (u_id) REFERENCES Users(u_id)
)";
    
if ($conn->query($sql) === TRUE) {
    echo "Table Groceries created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$sql = "ALTER TABLE `Groceries` 
ADD CONSTRAINT `fk_u_id` 
FOREIGN KEY (`u_id`) REFERENCES `Users`(`u_id`)";
  
if ($conn->query($sql) === TRUE) {
  echo "FK added successfully";
} else {
  echo "Error adding FK: " . $conn->error;
}

$conn->close();
?>
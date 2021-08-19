<?php

require __DIR__ . '/config.php';

$connection = getConnection();

$sql = "INSERT INTO Groceries (name, description, punit_count)
VALUES ('" . $_REQUEST['Name'] . "','" . $_REQUEST['Name'] . "','" . $_REQUEST['Value'] . "')";

if ($connection->query($sql) === TRUE) {
    var_dump("New record created successfully");
} else {
    var_dump("Error: " . $connection->error);
}

$connection->close();
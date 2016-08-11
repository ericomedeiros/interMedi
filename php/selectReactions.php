<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM reac_rem WHERE id_med1 IN (".implode(",",$request).") and id_med2 IN (".implode(",",$request).")";
$result = $conn->query($sql);

$json = mysqli_fetch_all($result,MYSQLI_ASSOC);


echo json_encode($json);
$conn->close();
?>
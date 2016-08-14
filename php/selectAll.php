<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT `id_remedio`,`rem_name` FROM `remedio`";
$result = $conn->query($sql);
echo "[";
echo json_encode($result->fetch_assoc());
while ($row = $result->fetch_assoc()) {
	echo ',{"id_remedio":"'.$row["id_remedio"].'","rem_name":"'.$row["rem_name"].'"}';
}
echo "]";
$conn->close();
?>
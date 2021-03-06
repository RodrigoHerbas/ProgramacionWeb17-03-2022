<?php
    header('Content-Type: application/json');
    include_once 'dbconfig.php';

    $conn = new mysqli($servername, $username, $password, $database, $port);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $name = $_POST['name'];
    $description = $_POST['description'];
    $price = $_POST['price'];
    $brand = $_POST['brand'];

    $sql = "INSERT INTO product(name, description, price, brand) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);

    $stmt->bind_param('ssds', $name, $description, $price, $brand);

    $stmt->execute();
    $conn->close();

    echo json_encode(array('result' => 'ok'));
?>

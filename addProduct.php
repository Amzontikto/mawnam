<?php
session_start();
include "db.php";

// ตรวจสอบว่าเป็นแอดมินหรือไม่
if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'admin') {
    die("คุณไม่มีสิทธิ์เข้าถึงหน้านี้");
}

// เมื่อกดปุ่มเพิ่มสินค้า
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $conn->real_escape_string($_POST['name']);
    $description = $conn->real_escape_string($_POST['description']);
    $price = $_POST['price'];

    // อัพโหลดรูป
    $image = "";
    if (!empty($_FILES['image']['name'])) {
        $targetDir = "uploads/";
        if (!is_dir($targetDir)) {
            mkdir($targetDir, 0777, true);
        }
        $image = $targetDir . basename($_FILES["image"]["name"]);
        move_uploaded_file($_FILES["image"]["tmp_name"], $image);
    }

    // บันทึกลง DB
    $sql = "INSERT INTO products (name, description, price, image) 
            VALUES ('$name', '$description', '$price', '$image')";
    
    if ($conn->query($sql) === TRUE) {
        echo "<p style='color:green;'>✅ เพิ่มสินค้าเรียบร้อย!</p>";
    } else {
        echo "เกิดข้อผิดพลาด: " . $conn->error;
    }
}
?>

<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>เพิ่มสินค้า - Mawnam Studio</title>
  <style>
    body { font-family: Arial, sans-serif; background: #111; color: white; padding: 20px; }
    form { background: #222; padding: 20px; border-radius: 10px; max-width: 400px; margin: auto; }
    input, textarea { width: 100%; padding: 10px; margin: 10px 0; border-radius: 6px; border: none; }
    button { background: red; color: white; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; }
    button:hover { background: darkred; }
  </style>
</head>
<body>
  <h2>เพิ่มสินค้าใหม่</h2>
  <form method="POST" enctype="multipart/form-data">
    <input type="text" name="name" placeholder="ชื่อสินค้า" required>
    <textarea name="description" placeholder="รายละเอียดสินค้า"></textarea>
    <input type="number" step="0.01" name="price" placeholder="ราคา" required>
    <input type="file" name="image" accept="image/*">
    <button type="submit">เพิ่มสินค้า</button>
  </form>
</body>
</html>
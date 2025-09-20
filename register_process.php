<?php
include "db.php";

$username = $_POST['username'];
$password = $_POST['password'];
$confirm  = $_POST['confirm'];

if ($password !== $confirm) {
    echo "<script>alert('รหัสผ่านไม่ตรงกัน!'); window.location.href='register.html';</script>";
    exit();
}

// ตรวจสอบว่า user มีอยู่แล้วหรือไม่
$check = $conn->query("SELECT * FROM users WHERE username='$username'");
if ($check->num_rows > 0) {
    echo "<script>alert('มีผู้ใช้นี้แล้ว!'); window.location.href='register.html';</script>";
    exit();
}

// บันทึกลง DB
$sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
if ($conn->query($sql) === TRUE) {
    echo "<script>alert('สมัครสมาชิกสำเร็จ!'); window.location.href='login.html';</script>";
} else {
    echo "Error: " . $conn->error;
}
$conn->close();
?>
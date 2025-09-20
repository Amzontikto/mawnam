<?php
session_start();
include "db.php";

$username = $_POST['username'];
$password = $_POST['password'];

// ตรวจสอบว่ามี user นี้ใน DB ไหม
$sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $_SESSION['username'] = $username;

    echo "<script>
        localStorage.setItem('currentUser', '$username');
        window.location.href = 'index.html';
    </script>";
} else {
    echo "<script>
        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
        window.location.href='login.html';
    </script>";
}
$conn->close();
?>

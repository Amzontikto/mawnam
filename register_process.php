<?php
session_start();
include "db.php";

$username = $_POST['username'];
$password = $_POST['password'];

// บันทึก user ใหม่ลง DB
$sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
if ($conn->query($sql) === TRUE) {
    // ✅ สมัครเสร็จแล้วให้ login อัตโนมัติ
    $_SESSION['username'] = $username;

    echo "<script>
      localStorage.setItem('currentUser', '$username');
      alert('สมัครสมาชิกสำเร็จ! กำลังเข้าสู่ระบบ...');
      window.location.href = 'index.html';
    </script>";
} else {
    echo "<script>
      alert('เกิดข้อผิดพลาด: " . $conn->error . "');
      window.history.back();
    </script>";
}
$conn->close();
?>

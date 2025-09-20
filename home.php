<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.html");
    exit();
}
?>
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>หน้าหลัก</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="box">
    <h2>ยินดีต้อนรับ <?php echo $_SESSION['username']; ?> 🎉</h2>
    <p>คุณเข้าสู่ระบบเรียบร้อยแล้ว</p>
    <a href="logout.php" class="btn">ออกจากระบบ</a>
  </div>
</body>
</html>
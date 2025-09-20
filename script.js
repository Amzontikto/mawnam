document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // ป้องกันการรีเฟรชหน้า
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // ตัวอย่างตรวจสอบ
  if(username === "admin" && password === "1234") {
    alert("ล็อกอินสำเร็จ!");
    window.location.href = "dashboard.html"; // เปลี่ยนหน้า
  } else {
    alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
  }
});

// ฟังก์ชันสมัครสมาชิก
function registerUser(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  if (password !== confirm) {
    alert("รหัสผ่านไม่ตรงกัน!");
    return;
  }

  // ดึง users ปัจจุบันจาก localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // เช็คว่ามีชื่อผู้ใช้นี้แล้วหรือยัง
  if (users.find(u => u.username === username)) {
    alert("มีชื่อผู้ใช้นี้แล้ว!");
    return;
  }

  // เพิ่ม user ใหม่เข้า array
  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("สมัครสมาชิกสำเร็จ!");
  setTimeout(() => {
    window.location.href = "login.html"; // กลับไปหน้า login
  }, 500);
}

// ฟังก์ชันเข้าสู่ระบบ
function loginUser(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // ดึง users จาก localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // หาผู้ใช้
  const found = users.find(u => u.username === username && u.password === password);

  if (!found) {
    alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!");
    return;
  }

  // เก็บ user ที่ login อยู่
  localStorage.setItem("currentUser", username);

  alert("เข้าสู่ระบบสำเร็จ!");
  setTimeout(() => {
    window.location.href = "index2.html"; // ✅ เปลี่ยนไปหน้า index2 หลัง login
  }, 500);
}

// ฟังก์ชันเช็คว่ามีคน login อยู่รึเปล่า (ไว้ใช้ใน index2.html)
function checkLogin() {
  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
    alert("กรุณาเข้าสู่ระบบก่อน!");
    window.location.href = "login.html";
  } else {
    document.getElementById("welcomeUser").textContent = "ยินดีต้อนรับ " + currentUser;
  }
}

// ฟังก์ชันออกจากระบบ
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}

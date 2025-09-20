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

  // เก็บ user ลง localStorage
  localStorage.setItem("user_" + username, password);

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

  const storedPassword = localStorage.getItem("user_" + username);

  if (storedPassword === null) {
    alert("ไม่พบบัญชีผู้ใช้นี้!");
    return;
  }

  if (storedPassword !== password) {
    alert("รหัสผ่านไม่ถูกต้อง!");
    return;
  }

  // เก็บ user ที่ login อยู่
  localStorage.setItem("currentUser", username);

  alert("เข้าสู่ระบบสำเร็จ!");
  setTimeout(() => {
    window.location.href = "index.html"; // ไปหน้า index
  }, 500);
}

// ฟังก์ชันเช็คว่ามีคน login อยู่รึเปล่า (ไว้ใช้ใน index.html)
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

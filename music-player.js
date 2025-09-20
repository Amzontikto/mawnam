// ✅ สร้าง audio object เดียว ใช้ร่วมกันทุกหน้า
if (!window.bgMusic) {
  window.bgMusic = new Audio("music.mp3");
  window.bgMusic.loop = true;

  // โหลดค่าที่เคยเก็บไว้
  const savedTime = localStorage.getItem("musicTime") || 0;
  const savedMuted = localStorage.getItem("musicMuted") === "true";
  const savedVolume = parseFloat(localStorage.getItem("musicVolume")) || 0.5;

  window.bgMusic.currentTime = savedTime;
  window.bgMusic.muted = savedMuted;
  window.bgMusic.volume = savedVolume;

  // เล่นอัตโนมัติเมื่อผู้ใช้กดปุ่ม / login สำเร็จ
  document.addEventListener("click", () => {
    if (window.bgMusic.paused) {
      window.bgMusic.play().catch(()=>{});
    }
  }, { once:true });

  // บันทึกสถานะก่อนออกจากหน้า
  window.addEventListener("beforeunload", () => {
    localStorage.setItem("musicTime", window.bgMusic.currentTime);
    localStorage.setItem("musicMuted", window.bgMusic.muted);
    localStorage.setItem("musicVolume", window.bgMusic.volume);
  });
}

// ✅ ฟังก์ชันปรับเสียง
function changeVolume(change) {
  let newVolume = Math.min(1, Math.max(0, window.bgMusic.volume + change));
  window.bgMusic.volume = newVolume;
  localStorage.setItem("musicVolume", newVolume);
}
function toggleMute() {
  window.bgMusic.muted = !window.bgMusic.muted;
  localStorage.setItem("musicMuted", window.bgMusic.muted);
}
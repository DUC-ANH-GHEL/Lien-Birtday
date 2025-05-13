// const poem = [
//     "Hôm nay nắng nhẹ, gió hiền",
//     "Trái tim anh gọi... cái tên Liên dịu dàng.",
//     "Một năm trôi, thật nhẹ nhàng",
//     "Lại đến ngày ấy – ngày vàng trong tim.",
//     "Chúc em rạng rỡ như chim",
//     "Hót vang niềm vui giữa nghìn hoa thơm.",
//     "Mỗi ngày em sống đẹp hơn",
//     "Cười xinh như nắng, dịu êm như chiều.",
//     "Cảm ơn em đến thật nhiều",
//     "Cho anh thương nhớ, cho yêu đậm đà.",
//     "Dù mai sóng gió đường xa",
//     "Anh vẫn nắm chặt tay em, không rời.",
//     "Chúc em tuổi mới rạng ngời",
//     "An vui, khỏe mạnh, trọn đời bên anh."
//   ];
  
//   function openGift() {
//     const gift = document.querySelector(".gift");
//     gift.classList.add("hide");
  
//     const box = document.getElementById("poemBox");
//     box.innerHTML = "";
//     let i = 0;
//     const interval = setInterval(() => {
//       if (i < poem.length) {
//         const line = document.createElement("div");
//         line.className = "poem-line";
//         line.innerText = poem[i];
//         box.appendChild(line);
//         i++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 1200);
//   }
  
//   // Pháo hoa
//   function shootSchoolPride() {
//     confetti({ angle: 60, spread: 55, particleCount: 50, origin: { x: 0 }, colors: ['#bb0000', '#ffffff'] });
//     confetti({ angle: 120, spread: 55, particleCount: 50, origin: { x: 1 }, colors: ['#bb0000', '#ffffff'] });
//   }
//   function snowEffect() {
//     confetti({ particleCount: 200, startVelocity: 0, ticks: 300, origin: { y: 0 }, colors: ['#ffffff'], shapes: ['circle'], gravity: 0.5, scalar: 0.8 });
//   }
//   function fireworksEffect() {
//     const duration = 15000;
//     const end = Date.now() + duration;
//     const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
//     const interval = setInterval(() => {
//       const timeLeft = end - Date.now();
//       if (timeLeft <= 0) return clearInterval(interval);
//       confetti(Object.assign({}, defaults, {
//         particleCount: 50,
//         origin: { x: Math.random(), y: Math.random() * 0.6 }
//       }));
//     }, 250);
//   }
  
//   // Main flow
//   window.onload = () => {
//     shootSchoolPride();
//     setTimeout(fireworksEffect, 1000);
//     setTimeout(snowEffect, 2000);
  
//     const heart = document.querySelector(".heart");
//     heart.classList.add("show");
  
//     // Ẩn trái tim sau 10s
//     setTimeout(() => {
//       heart.classList.add("hide");
//     }, 10000);
  
//     // 1,5s sau khi ẩn trái tim mới cho ảnh xuất hiện và chạy ngang
//     setTimeout(() => {
//       const images = document.querySelector(".images");
//       images.classList.add("slide");
//       images.style.visibility = "visible";
//     }, 1500);
  
//     // Hộp quà hiện sau ảnh kết thúc (32s)
//     setTimeout(() => {
//       document.querySelector(".gift").classList.add("show");
//     }, 32000);
//   };
  

const poem = [
    "Hôm nay nắng nhẹ, gió hiền",
    "Trái tim anh gọi... tên Liên dịu dàng.",
    "Một năm trôi, thật nhẹ nhàng",
    "Lại đến ngày ấy – ngày vàng trong tim.",
    "Chúc em rạng rỡ như chim",
    "Hót vang niềm vui giữa nghìn hoa thơm.",
    "Mỗi ngày em sống đẹp hơn",
    "Cười xinh như nắng, dịu êm như chiều.",
    "Cảm ơn em đến thật nhiều",
    "Cho anh thương nhớ, cho yêu đậm đà.",
    "Dù mai sóng gió đường xa",
    "Anh vẫn nắm chặt tay em, không rời.",
    "Chúc em tuổi mới rạng ngời",
    "An vui, khỏe mạnh, trọn đời bên anh."
  ];
  
  // Gõ chữ intro từng ký tự
  function typeIntroText(text, elementId, speed = 120, callback) {
    const el = document.getElementById(elementId);
    let i = 0;
    const interval = setInterval(() => {
      el.textContent += text.charAt(i);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (callback) callback();
      }
    }, speed);
  }
  
  // Bắt đầu toàn bộ trải nghiệm sau khi click
  function startExperience() {
    const intro = document.getElementById("intro");
    intro.style.display = "none";
  
    const bgm = document.getElementById("bgm");
    if (bgm.paused) {
      bgm.play().catch(err => console.log("Audio blocked:", err));
    }
  
    startMainAnimation();
  }
  
  function generateCircleText(text) {
    const circle = document.getElementById("circleText");
    circle.innerHTML = "";
  
    const radius = 100;
    const chars = text.split("");
    const angleStep = 360 / chars.length;
  
    chars.forEach((char, index) => {
      const angle = angleStep * index;
      const rad = angle * (Math.PI / 180);
      const x = Math.cos(rad) * radius;
      const y = Math.sin(rad) * radius;
  
      const span = document.createElement("span");
      span.innerText = char;
      span.style.transform = `translate(${x}px, ${y}px) rotate(${-angle}deg)`;
      span.style.transformOrigin = "center center";
      span.style.display = "inline-block";
  
      circle.appendChild(span);
    });
  
    // ✅ THÊM: kích hoạt animation sau khi render chữ
    circle.classList.remove("rotate-animation");
    void circle.offsetWidth; // force reflow
    circle.classList.add("rotate-animation");
  }
  
  
  

  
  // Bắt đầu hiệu ứng trái tim, ảnh, quà...
  function startMainAnimation() {

    generateCircleText("Chúc mừng sinh nhật Liên Liên");
    // Sau 6.2s thì bắt đầu tách từng chữ bay lên thành dòng
setTimeout(() => {
    const letters = document.querySelectorAll("#circleText span");
  
    letters.forEach((char, index) => {
      char.style.transition = `all 1s ease ${index * 0.05}s`;
      char.style.transform = `translate(${index * 20 - 150}px, -150px) rotate(0deg) scale(1.2)`;
      char.style.position = "absolute";
      char.style.opacity = "1";
    });
  
    // Sau toàn bộ thời gian bay, gom thành tiêu đề
    setTimeout(() => {
      const wrapper = document.getElementById("circleTextWrapper");
      wrapper.classList.add("as-title");
    }, 2500);
  }, 6200);
  

// setTimeout(() => {
//   document.getElementById("circleTextWrapper").style.display = "none";

//   // Sau khi chữ vòng tròn kết thúc, hiện tiêu đề như cũ
//   const fixedTitle = document.createElement("h1");
//   fixedTitle.className = "title";
//   fixedTitle.innerText = "Chúc mừng sinh nhật Liên Liên";
//   document.body.appendChild(fixedTitle);
// }, 6200);





    shootSchoolPride();
    setTimeout(fireworksEffect, 1000);
    setTimeout(snowEffect, 2000);
  
    const heart = document.querySelector(".heart");
    heart.classList.add("show");
  
    setTimeout(() => {
      heart.classList.add("hide");
    }, 10000);
  
    setTimeout(() => {
      const images = document.querySelector(".images");
      images.classList.add("slide");
      images.style.visibility = "visible";
    }, 1500);
  
    setTimeout(() => {
      document.querySelector(".gift").classList.add("show");
    }, 30000);
  }
  
  // Mở hộp quà và hiện thơ
  function openGift() {
    const gift = document.querySelector(".gift");
    gift.classList.add("hide");
  
    const box = document.getElementById("poemBox");
    box.innerHTML = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < poem.length) {
        const line = document.createElement("div");
        line.className = "poem-line";
        line.innerText = poem[i];
        box.appendChild(line);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 2200);

    // Sau 15s kể từ khi hết thơ thì hiện thiệp
    setTimeout(() => {
        const card = document.getElementById("invitationCard");
        card.style.display = "block";
    }, 20000);
  
  }
  
  // Pháo hoa
  function shootSchoolPride() {
    confetti({ angle: 60, spread: 55, particleCount: 50, origin: { x: 0 }, colors: ['#bb0000', '#ffffff'] });
    confetti({ angle: 120, spread: 55, particleCount: 50, origin: { x: 1 }, colors: ['#bb0000', '#ffffff'] });
  }
  function snowEffect() {
    confetti({ particleCount: 200, startVelocity: 0, ticks: 300, origin: { y: 0 }, colors: ['#ffffff'], shapes: ['circle'], gravity: 0.5, scalar: 0.8 });
  }
  function fireworksEffect() {
    const duration = 15000;
    const end = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    const interval = setInterval(() => {
      const timeLeft = end - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      confetti(Object.assign({}, defaults, {
        particleCount: 50,
        origin: { x: Math.random(), y: Math.random() * 0.6 }
      }));
    }, 250);
  }
  
  // Khi trang vừa load
  window.onload = () => {
    const introText = "Hôm nay, ngày 14/5 – có một người đẹp ra đời, và cả vũ trụ dừng lại để chúc mừng em...";
    typeIntroText(introText, "typing-text");
  };
  
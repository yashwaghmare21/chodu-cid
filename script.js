document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.8s ease";
    setTimeout(() => {
      document.body.style.opacity = "1";
    }, 100);
  });
  
  const buttons = document.querySelectorAll(".btn");
  
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.style.transform = "scale(0.95)";
      setTimeout(() => {
        btn.style.transform = "scale(1)";
      }, 150);
    });
  });
  
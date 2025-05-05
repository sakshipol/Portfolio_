

  function toggleTheme() {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    const icon = document.getElementById("theme-icon");
    const text = document.getElementById("theme-text");

    if (isDark) {
      icon.textContent = "🌞";
      text.textContent = "Light Mode";
    } else {
      icon.textContent = "🌙";
      text.textContent = "Dark Mode";
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const root = document.documentElement;
    const icon = document.getElementById("theme-icon");
    const text = document.getElementById("theme-text");

    if (savedTheme === "dark") {
      root.classList.add("dark");
      icon.textContent = "🌞";
      text.textContent = "Light Mode";
    } else {
      icon.textContent = "🌙";
      text.textContent = "Dark Mode";
    }
  });


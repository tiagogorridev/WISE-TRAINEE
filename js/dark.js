document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const themeImage = document.getElementById("logo");
    const moonIcon = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.toggle("dark-mode", savedTheme === "dark");
        if (savedTheme === "dark") {
            themeImage.src = "assets/img/logo-dark.png";
            themeImage.alt = "Imagem do Tema Escuro";
            moonIcon.src = "assets/img/lua-dark.png";
            moonIcon.alt = "Ícone do Tema Escuro";
        }
    }

    themeToggle.addEventListener("click", () => {
        const isDark = body.classList.toggle("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        if (isDark) {
            themeImage.src = "assets/img/logo-dark.png";
            themeImage.alt = "Imagem do Tema Escuro";
            moonIcon.src = "assets/img/lua-dark.png";
            moonIcon.alt = "Ícone do Tema Escuro";
        } else {
            themeImage.src = "assets/img/logo.png";
            themeImage.alt = "Imagem do Tema Claro";
            moonIcon.src = "assets/img/lua.png";
            moonIcon.alt = "Ícone do Tema Claro";
        }
    });
});

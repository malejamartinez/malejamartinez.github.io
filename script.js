// MODO OSCURO: aplicar preferencia guardada
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const darkToggle = document.getElementById("darkModeToggle");
    const sidebarToggle = document.getElementById("sidebarToggle");
    const sidebarOverlay = document.getElementById("sidebarOverlay");

    // Leer preferencia de localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        darkToggle.checked = true;
    }

    // Evento para cambiar modo oscuro
    if (darkToggle) {
        darkToggle.addEventListener("change", () => {
            if (darkToggle.checked) {
                body.classList.add("dark-mode");
                localStorage.setItem("theme", "dark");
            } else {
                body.classList.remove("dark-mode");
                localStorage.setItem("theme", "light");
            }
        });
    }

    // Toggle panel lateral
    if (sidebarToggle) {
        sidebarToggle.addEventListener("click", () => {
            body.classList.toggle("sidebar-open");
        });
    }

    // Cerrar panel al hacer clic en el overlay
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener("click", () => {
            body.classList.remove("sidebar-open");
        });
    }
});

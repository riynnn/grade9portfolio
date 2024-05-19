function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelector('.dark-mode-switch').classList.toggle('dark-mode');
    
    // Save the dark mode preference to localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}

window.onload = function() {
    var darkModeSetting = localStorage.getItem("darkMode");
    if (darkModeSetting === "enabled") {
        toggleDarkMode(); // Enable dark mode if previously enabled
    }
}

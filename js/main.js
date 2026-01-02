let name = document.getElementById("namee");
let email = document.getElementById("emaile");
let subject = document.getElementById("sube");
let message = document.getElementById("msg");
function vf(){
    if (name.value===""){
        document.getElementById("name").innerHTML =("name required")
    }
    if (email.value===""){
        document.getElementById("email").innerHTML =("email required")
    }
    if (subject.value===""){
        document.getElementById("sub").innerHTML =("subject required")
    }
    if (message.value===""){
        document.getElementById("message").innerHTML =("message required")
    }
}
function toggleDarkMode() {
    const htmlElement = document.documentElement;
    const isDarkMode = htmlElement.classList.contains('dark-mode');
    
    if (isDarkMode) {
        htmlElement.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
    } else {
        htmlElement.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
    }
}

function initDarkMode() {
    const savedDarkMode = localStorage.getItem('darkMode');
    const htmlElement = document.documentElement;
    
    if (savedDarkMode === 'true') {
        htmlElement.classList.add('dark-mode');
        document.getElementById('darkModeToggle').checked = true;
    } else if (savedDarkMode === 'false') {
        htmlElement.classList.remove('dark-mode');
        document.getElementById('darkModeToggle').checked = false;
    } else {
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        if (prefersDarkScheme.matches) {
            htmlElement.classList.add('dark-mode');
            document.getElementById('darkModeToggle').checked = true;
            localStorage.setItem('darkMode', 'true');
        }
    }
}

document.addEventListener('DOMContentLoaded', initDarkMode);
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('darkModeToggle');
    if (toggleButton) {
        toggleButton.addEventListener('change', toggleDarkMode);
    }
});

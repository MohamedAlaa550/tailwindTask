
initializeModeAndButton();

document.getElementById("toggle").addEventListener("click", function () {

    if (document.documentElement.classList.contains("dark")) {
        localStorage.theme = 'light';
    } else {
        localStorage.theme = 'dark';
    }


    getMode();


    updateToggleText();
});


function getMode() {
    document.documentElement.classList.toggle(
        'dark',
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
}


function updateToggleText() {
    document.getElementById("toggle").textContent =
        document.documentElement.classList.contains("dark") ? "Light Mode" : "Dark Mode";
}


function initializeModeAndButton() {

    getMode();


    updateToggleText();
}

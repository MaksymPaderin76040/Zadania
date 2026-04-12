let currentTheme = "red";

function changeTheme() {
    let link = document.getElementById("theme");

    if (currentTheme === "red") {
        link.href = "green.css";
        currentTheme = "green";
    } else {
        link.href = "red.css";
        currentTheme = "red";
    }
}

function toggleSection() {
    let section = document.getElementById("toggleSection");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}
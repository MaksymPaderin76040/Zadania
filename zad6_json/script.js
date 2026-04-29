function changeTheme() {
    var link = document.getElementById("theme");
    if (link.href.includes("red.css")) {
        link.href = "green.css";
    } else {
        link.href = "red.css";
    }
}

function toggleSection() {
    var section = document.getElementById("toggleSection");
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}



function sprawdzFormularz() {
    var imie      = document.getElementById("imie").value.trim();
    var nazwisko  = document.getElementById("nazwisko").value.trim();
    var email     = document.getElementById("email").value.trim();
    var wiadomosc = document.getElementById("wiadomosc").value.trim();

    ukryjBlad("err-imie");
    ukryjBlad("err-nazwisko");
    ukryjBlad("err-email");
    ukryjBlad("err-wiadomosc");
    ukryjBlad("sukces");

    var poprawny = true;

    if (imie === "") {
        pokazBlad("err-imie", "Imię jest wymagane.");
        poprawny = false;
    } else if (/\d/.test(imie)) {
        pokazBlad("err-imie", "Imię nie może zawierać cyfr.");
        poprawny = false;
    }

    if (nazwisko === "") {
        pokazBlad("err-nazwisko", "Nazwisko jest wymagane.");
        poprawny = false;
    } else if (/\d/.test(nazwisko)) {
        pokazBlad("err-nazwisko", "Nazwisko nie może zawierać cyfr.");
        poprawny = false;
    }

    if (email === "") {
        pokazBlad("err-email", "E-mail jest wymagany.");
        poprawny = false;
    } else if (!poprawnyEmail(email)) {
        pokazBlad("err-email", "Podaj poprawny adres e-mail (np. jan@gmail.com).");
        poprawny = false;
    }

    if (wiadomosc === "") {
        pokazBlad("err-wiadomosc", "Wiadomość jest wymagana.");
        poprawny = false;
    }

    if (poprawny) {
        var sukces = document.getElementById("sukces");
        sukces.style.display = "block";
    }
}

function pokazBlad(id, tekst) {
    var el = document.getElementById(id);
    el.textContent = tekst;
    el.style.display = "block";
}

function ukryjBlad(id) {
    var el = document.getElementById(id);
    el.style.display = "none";
}

function poprawnyEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}



fetch("data.json")
    .then(response => response.json())
    .then(data => {

        let ul = document.getElementById("umiejetnosci-list");

        data.umiejetnosci.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            ul.appendChild(li);
        });

        let ulProj = document.getElementById("projekty-list");

        data.projekty.forEach(projekt => {
            let li = document.createElement("li");

            li.innerHTML = "<strong>" + projekt.nazwa + "</strong> - " + projekt.opis;

            ulProj.appendChild(li);
        });

    });
async function loadComponent(id, file) {
    const element = document.getElementById(id);

    if (element) {
        const response = await fetch(file);
        element.innerHTML = await response.text();
    }
}

loadComponent("header", "components/Header.html");
loadComponent("footer", "components/Footer.html");

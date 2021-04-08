function renderPage() {
    renderMenu();
    renderNav();
}

function renderMenu() {
    var template = document.getElementById('template').innerHTML;

    var rendered = Mustache.render(template, menu);

    document.getElementById('target').innerHTML = rendered;
}

function renderNav(){
    var navTemplate = document.getElementById('nav-template').innerHTML;

    var navRendered = Mustache.render(navTemplate, menu);

    document.getElementById('nav-target').innerHTML = navRendered;
}
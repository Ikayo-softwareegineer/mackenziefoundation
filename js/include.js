document.addEventListener("DOMContentLoaded", function () {
    // Determine if we're in the pages directory
    const inPagesDir = window.location.pathname.includes('/pages/');
    const basePath = inPagesDir ? '../' : '';

    // Load header
    fetch(`${basePath}includes/header.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
            const headerStyle = document.createElement("link");
            headerStyle.rel = "stylesheet";
            headerStyle.href = `${basePath}styles/header.css`;
            document.head.appendChild(headerStyle);
        });

    // Load footer
    fetch(`${basePath}includes/footer.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
            const footerStyle = document.createElement("link");
            footerStyle.rel = "stylesheet";
            footerStyle.href = `${basePath}styles/footer.css`;
            document.head.appendChild(footerStyle);
        });
});

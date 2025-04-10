document.addEventListener("DOMContentLoaded", function () {
    // Load header
    fetch("includes/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
            const headerStyle = document.createElement("link");
            headerStyle.rel = "stylesheet";
            headerStyle.href = "..styles/header.css";
            document.head.appendChild(headerStyle);
        });

    // Load footer
    fetch("includes/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
            const footerStyle = document.createElement("link");
            footerStyle.rel = "stylesheet";
            footerStyle.href = "../styles/footer.css";
            document.head.appendChild(footerStyle);
        });
});

const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
<header class="header">
    <img src="/img/stagefright_logo_web.png" class="brand-logo" alt="LOGO" height="100" width="350">

    <nav class="navbar" style="font-family: 'Poppins', sans-serif">
        <a href="stagefright/index.html" class="metal-mania-regular">Home</a>
        <a href="stagefright/store.html" class="metal-mania-regular">Store</a>
        <a href="stagefright/tourdates.html" class="metal-mania-regular">Tour Dates</a>
        <a href="stagefright/about.html" class="metal-mania-regular">About</a>
        <a href="stagefright/contact.html" class="metal-mania-regular">Contact</a>
    </nav>
</header>
    `;
}

createNav();
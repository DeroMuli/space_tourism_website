var navsnippet = `
<style>
.nav_holder {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.logo_background {
    background-color: #FFFFFF;
    border-radius: 50%;
    height: 48px;
    width: 48px;
    margin-left: 55px;
    margin-top: 64px;
}

nav {
    background-color: rgba(255, 255, 255, 0.04);
    height: 96px;
    width: 830px;
    margin-top:40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

ol {
    list-style-type: decimal-leading-zero;
    list-style-position: inside;
}

ol li {
    color: #FFFFFF;
    float: left;
    margin-left: 20px;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 19.2px;
    letter-spacing: 2.7px ;
    text-transform: uppercase;
    height: 96px;
    padding-top: 40px;
}

ol li::marker {
    font-weight: 700;
}

ol li:hover {
    border-bottom: 3px solid rgba(255, 255, 255, 0.52);
}

a {
    color: #FFFFFF;
    text-decoration: none;
}

.active {
    border-bottom: 3px solid rgba(255, 255, 255, 1);
}
</style>
<div class="nav_holder">
    <div class="logo_background">
        <img src="assets/shared/logo.svg" alt="logo">
    </div>
    <nav>
        <ol>
            <a href="index.html"><li>HOME</li></a>
            <a href="destination.html"><li>DESTINATION</li></a>
            <a href="crew.html"><li>CREW</li></a>
            <a href="technology.html"><li>TECHNOLOGY</li></a>
        </ol>
    </nav>
</div>
`

var nav = document.getElementById('nav');
nav.innerHTML = navsnippet;

var nav_links = document.querySelectorAll('nav ol a');
nav_links.forEach(function (link) {
    link.addEventListener('click', function (event) {
        var href = link.getAttribute('href');
        sessionStorage.setItem('href', href);
    });
}
);

var href = sessionStorage.getItem('href');
if (href) {
    var link = document.querySelector('nav ol a[href="' + href + '"]');
    nav_links.forEach(function (link) {
        var list_item = link.childNodes[0];
        list_item.classList.remove('active');
    }
    );
    var list_item = link.childNodes[0];
    list_item.classList.add('active');
}

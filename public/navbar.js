const body = document.querySelector("body");
const body_before = `<section class="bezel"></section>
        <section class="film-lines">
            <div class="menu top-menu">
                <ul>
                    <li><a href="/">a1a-ecosyetm</a></li>
                    <li><a href="lore.html">About Us</a></li>
                    <li>
                        <img src="aia-eco.jpg" class="logo" />
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="stats.html">Statics</a></li>
                </ul>
            </div>`;
const body_after = `<div class="menu bottom-menu">
                <ul id="mob-menu">
                    <li><a href="lore.html">a1a-ecosyetm</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Tools</a></li>
                    <li><a href="stats.html">Statics</a></li>
                </ul>
            </div>
        </section>
        <section class="bezel"></section>`;
const body_content = body.innerHTML;
body.innerHTML = body_before + body_content + body_after;

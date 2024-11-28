import "./style.css";

const app = document.getElementById("app");

app.innerHTML = `
    <div class="header" id="header1">
    <header class='header-rekuten'>
        <div class="header-top">
            <div class="header-logo">
                <a href="https://fr.shopping.rakuten.com/">
                    <img src="https://fr.shopping.rakuten.com/visuels/0_TECH/shared-svg/RakutenLogos.svg" alt="Rakuten Logo">
                </a>
            </div>
            <div class="header-search">
                <input type="text" placeholder="Rechercher un produit, une catégorie, une marque...">
                <button type="submit">
                    <svg width='16' height='16' class='button-search icon'>
                        <use href="symbol-defs.svg#icon-search"></use>
                    </svg>
                </button>
            </div>
        </div>
        <nav class="header-nav">
            <ul>
                <li><a href="#">Parcourir les catégories</a></li>
                <li><a href="#"> Mettre en vente</a></li>
                <li><a href="#"> Aide</a></li>
                <li><a href="#">ClubR</a></li>
                <li><a href="#"> Mes favoris</a></li>
                <li><a href="#"> Se connecter</a></li>
                <li><a href="#"> Panier</a></li>
            </ul>
        </nav>
    </header>
    
    
    
    </div>
    <div class="header hidden" id="header2">
    <div class="info-line">
        <p class="info">€2 Home delivery within 1-2 days | Free collection from store</p>
      </div>
    <nav class="navigation">
      <div class="logo-line">
        <div class="logo_searchbox">
        <a href="" class="logo">NEXT<img src="/static-content/icons/header/next/v3/default/new-next-gold-logo.svg" alt=""></a>
        <input type="text" class="search-product" placeholder="Search product or brand">
        </div>
        <div class="my_account_bascket_checkout">
        <a href="" class="my_account">My Account<svg class="icon"><use href="symbol-defs.svg#icon-user"></use></svg></a>
        <a href="" class="bascket"><svg class="icon icon-cart"><use href="symbol-defs.svg#icon-cart"></use></svg></a>
        <button class="checkout_button">CHECKOUT</button>
        <svg class="icon"> <use href="symbol-defs.svg#icon-earth"></use></svg>
        </div>
      </div>
      <div class="list_line">
        <ul class="list">
          <li class="item"><a href="" class="item_link_christmas">CHRISTMAS</a></li>
          <li class="item"><a href="" class="item_link">WOMEN</a></li>
          <li class="item"><a href="" class="item_link">MEN'S</a></li>
          <li class="item"><a href="" class="item_link">GIRLS</a></li>
          <li class="item"><a href="" class="item_link">BOYS</a></li>
          <li class="item"><a href="" class="item_link">BABY</a></li>
          <li class="item"><a href="" class="item_link">SHOES</a></li>
          <li class="item"><a href="" class="item_link">HOME</a></li>
          <li class="item"><a href="" class="item_link">BRANDS</a></li>
          <li class="item"><a href="" class="item_link_clearance">CLEARANCE</a></li>
        </ul>
      </div>
    </nav>
    </div>
    <div class="content">
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis maximus etiam suscipit molestie auctor consequat vulputate tempor vestibulum. Quisque lacus suscipit per, viverra sapien blandit curae. Phasellus in odio eros volutpat rhoncus eleifend habitant. Pretium integer mattis ridiculus mattis curae nisi massa eu mattis. Augue elit porttitor mus; purus tempus sapien sodales. Suscipit hendrerit posuere molestie natoque leo sit libero tristique facilisis? Varius vulputate odio eu interdum purus facilisi pharetra felis. Proin consequat suscipit efficitur finibus nisl tempus.

        Lacinia porttitor nulla pharetra nec tincidunt urna? Aptent nisi vestibulum, pellentesque praesent natoque ante himenaeos. Dapibus est ultricies ex imperdiet cras. Sit sed semper enim ut pretium velit accumsan ac porttitor! Facilisi tristique ipsum facilisi; arcu montes semper ornare. Lacinia vulputate odio vivamus orci pharetra id suspendisse. Eu rhoncus quisque nisi tortor dictum justo aliquam at. Rhoncus penatibus dui velit urna luctus orci?
        
        Iaculis inceptos aliquam placerat augue ex luctus vehicula. Ex fusce elementum facilisis augue morbi ridiculus at luctus. Ultrices dis dapibus bibendum orci lacinia tellus. Lectus at arcu rutrum cras leo molestie nam. Aenean mattis nibh etiam quis integer sapien quam. Lorem quisque suscipit congue purus tincidunt nascetur. Mollis leo ut class sodales egestas primis nibh. Ipsum massa primis arcu fames dui nullam euismod fusce tempor. Vivamus eleifend a, vulputate himenaeos mattis himenaeos.
        
        Ultrices sociosqu vitae nulla dictum duis auctor odio urna. Diam per suscipit fusce, facilisis arcu orci phasellus. Nam lacinia donec efficitur proin pretium ultricies. Rutrum lobortis potenti at mi nullam. Eros arcu ac dignissim senectus lacus quisque habitant. Fusce class a donec in imperdiet. Consectetur arcu molestie felis cursus ut habitant aliquet curabitur. Mollis lorem quisque bibendum fermentum magna vivamus, aliquam sapien. Hac ridiculus dis himenaeos, at faucibus montes. Orci semper nullam curabitur convallis tellus adipiscing eleifend nibh.
        
        Porttitor litora mauris pharetra lacus nostra suscipit. Interdum leo sem ipsum montes felis posuere. Conubia lacus dapibus sagittis sem facilisi arcu integer. Convallis inceptos mollis at urna placerat convallis ex ultricies nec. Elit vehicula primis adipiscing auctor potenti quisque nisl malesuada leo. Aliquet mi vehicula pellentesque cras ac elementum consequat curae. Sapien hac id convallis conubia netus metus nostra eu sollicitudin.</p>
        <div class="timer" id="timer">1:30</div>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis maximus etiam suscipit molestie auctor consequat vulputate tempor vestibulum. Quisque lacus suscipit per, viverra sapien blandit curae. Phasellus in odio eros volutpat rhoncus eleifend habitant. Pretium integer mattis ridiculus mattis curae nisi massa eu mattis. Augue elit porttitor mus; purus tempus sapien sodales. Suscipit hendrerit posuere molestie natoque leo sit libero tristique facilisis? Varius vulputate odio eu interdum purus facilisi pharetra felis. Proin consequat suscipit efficitur finibus nisl tempus.

        Lacinia porttitor nulla pharetra nec tincidunt urna? Aptent nisi vestibulum, pellentesque praesent natoque ante himenaeos. Dapibus est ultricies ex imperdiet cras. Sit sed semper enim ut pretium velit accumsan ac porttitor! Facilisi tristique ipsum facilisi; arcu montes semper ornare. Lacinia vulputate odio vivamus orci pharetra id suspendisse. Eu rhoncus quisque nisi tortor dictum justo aliquam at. Rhoncus penatibus dui velit urna luctus orci?
        
        Iaculis inceptos aliquam placerat augue ex luctus vehicula. Ex fusce elementum facilisis augue morbi ridiculus at luctus. Ultrices dis dapibus bibendum orci lacinia tellus. Lectus at arcu rutrum cras leo molestie nam. Aenean mattis nibh etiam quis integer sapien quam. Lorem quisque suscipit congue purus tincidunt nascetur. Mollis leo ut class sodales egestas primis nibh. Ipsum massa primis arcu fames dui nullam euismod fusce tempor. Vivamus eleifend a, vulputate himenaeos mattis himenaeos.
        
        Ultrices sociosqu vitae nulla dictum duis auctor odio urna. Diam per suscipit fusce, facilisis arcu orci phasellus. Nam lacinia donec efficitur proin pretium ultricies. Rutrum lobortis potenti at mi nullam. Eros arcu ac dignissim senectus lacus quisque habitant. Fusce class a donec in imperdiet. Consectetur arcu molestie felis cursus ut habitant aliquet curabitur. Mollis lorem quisque bibendum fermentum magna vivamus, aliquam sapien. Hac ridiculus dis himenaeos, at faucibus montes. Orci semper nullam curabitur convallis tellus adipiscing eleifend nibh.
        
        Porttitor litora mauris pharetra lacus nostra suscipit. Interdum leo sem ipsum montes felis posuere. Conubia lacus dapibus sagittis sem facilisi arcu integer. Convallis inceptos mollis at urna placerat convallis ex ultricies nec. Elit vehicula primis adipiscing auctor potenti quisque nisl malesuada leo. Aliquet mi vehicula pellentesque cras ac elementum consequat curae. Sapien hac id convallis conubia netus metus nostra eu sollicitudin.</p>
    </div>
    <div class="footer" id="footer1">



    <footer>
        <div class="footer-links">
            <div class="links-column">
                <h3>LIENS UTILES</h3>
                <ul>
                    <li><a href="#">Mon compte</a></li>
                    <li><a href="#">Mon panier</a></li>
                    <li><a href="#">Paiement en plusieurs fois</a></li>
                    <li><a href="#">Vendre</a></li>
                    <li><a href="#">Suivre ma commande</a></li>
                    <li><a href="#">Mon Club R</a></li>
                </ul>
            </div>
            <div class="links-column">
                <h3>AIDE</h3>
                <ul>
                    <li><a href="#">Besoin d'aide ?</a></li>
                    <li><a href="#">Ouvrir un e-shop en tant que commerçant</a></li>
                    <li><a href="#">Frais de protection acheteurs</a></li>
                    <li><a href="#">Signaler un contenu illicite</a></li>
                    <li><a href="#">Plan du site</a></li>
                    <li><a href="#">Le blog</a></li>
                </ul>
            </div>
            <div class="links-column">
                <h3>RAKUTEN</h3>
                <ul>
                    <li><a href="#">Carrières</a></li>
                    <li><a href="#">Conditions générales</a></li>
                    <li><a href="#">*Conditions des offres</a></li>
                    <li><a href="#">Politique Vie privée</a></li>
                    <li><a href="#">Gestion des cookies</a></li>
                    <li><a href="#">Affiliation</a></li>
                    <li><a href="#">Devenez annonceur</a></li>
                    <li><a href="#">A propos de Rakuten</a></li>
                    <li><a href="#">Fonctionnement du service</a></li>
                    <li><a href="#">Assurances</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-top">
            <!-- Social Media and Payment Methods in one line -->
            <div class="top-section">
                <div class="social-links">
                    <a href="#" class="social-icon"><img src="https://fr.shopping.rakuten.com/visuels/0_TECH/shared-svg/linkedinIcon.svg" alt="LinkedIn"></a>
                    <a href="#" class="social-icon"><img src="https://fr.shopping.rakuten.com/visuels/0_TECH/shared-svg/facebookIcon.svg" alt="Facebook"></a>
                    <a href="#" class="social-icon"><img src="https://fr.shopping.rakuten.com/visuels/0_TECH/shared-svg/twitterIcon.svg" alt="Twitter"></a>
                    <a href="#" class="social-icon"><img src="https://fr.shopping.rakuten.com/visuels/0_TECH/shared-svg/instagramIcon.svg" alt="Instagram"></a>
                    <a href="#" class="social-icon"><img src="https://fr.shopping.rakuten.com/visuels/0_TECH/shared-svg/youtubeIcon.svg" alt="YouTube"></a>
                    <a href="#" class="social-icon"><img src="https://fr.shopping.rakuten.com/visuels/0_TECH/shared-svg/pinterestIcon.svg" alt="Pinterest"></a>
                </div>
                <div class="separator"></div>
                <div class="payment-methods">
                    <img src="https://fr.shopping.rakuten.com/visuels/0_TECH/shared-svg/visaIcon.svg" alt="Visa">
                    <img src="https://fr.shopping.rakuten.com/visuels/0_TECH/shared-svg/mastercardIcon.svg" alt="Mastercard">
                    <img src="https://fr.shopping.rakuten.com/visuels/0_TECH/shared-svg/klarna.svg" alt="Klarna">
                    <img src="https://fr.shopping.rakuten.com/visuels/0_TECH/shared-svg/paypalIcon.svg" alt="PayPal">
                    <img src="https://fr.shopping.rakuten.com/visuels/0_TECH/shared-svg/floaLogo.svg" alt="Floa">
                    <img src="https://fr.shopping.rakuten.com/visuels/0_TECH/shared-svg/americanExpress.svg" alt="American Express">
                </div>
            </div>
        </div>

        <!-- App Download Section -->
        <div class="app-section">
            <div class="app-content">
                <div class="app-text">
                    Avec l'appli Rakuten, bénéficiez de 5% remboursés en Rakuten Points sur tous vos achats !
                </div>
                <div class="app-buttons">
                    <a href="#" class="app-store">
                        <img src="https://fr.shopping.rakuten.com/visuels/0_TECH/shared-svg/appStoreIcon.svg" alt="Télécharger dans l'App Store">
                    </a>
                    <a href="#" class="play-store">
                        <img src="https://fr.shopping.rakuten.com/visuels/0_TECH/shared-svg/playStoreIcon.svg" alt="DISPONIBLE SUR Google Play">
                    </a>
                </div>
            </div>
        </div>

        <!-- Navigation Links -->
        <nav class="footer-nav">
            <div class="nav-container">
                <img src="https://fr.shopping.rakuten.com/visuels/0_TECH/shared-svg/RakutenLogos.svg" alt="Rakuten Logo" class="nav-logo">
                <div class="nav-links">
                    <a href="#">Rakuten Kobo</a>
                    <a href="#">Rakuten TV</a>
                    <a href="#">Rakuten Viber</a>
                    <a href="#">Rakuten Viki</a>
                    <a href="#">Plus de services</a>
                    <a href="#">À propos de Rakuten</a>
                </div>
            </div>
            <select class="country-select">
                <option value="fr">France</option>
                <option value="de">Allemagne</option>
                <option value="br">Brésil</option>
                <option value="us">Etats-Unis</option>
                <option value="jp">Japon</option>
                <option value="tw">Taïwan</option>
            </select>
        </nav>

        <!-- Copyright -->
        <div class="copyright">
            © Rakuten France 2000 - 2024
        </div>

        <!-- Black Friday Links -->
        <div class="black-friday-links">
            <a href="#">Offres Black <br> Friday</a>
            <a href="#">Eden Park Black <br> Friday</a>
            <a href="#">Basket Homme Black <br> Friday</a>
            <a href="#">Calvin Klein Black <br> Friday</a>
            <a href="#">Fauteuil Black <br> Friday</a>
            <a href="#">Manteau Homme Black <br> Friday</a>
            <a href="#">Sergent Major Black <br> Friday</a>
            <a href="#">Lego Technic Black <br> Friday</a>
            <a href="#">Black Friday <br> Livres</a>
            <a href="#">Manette PS5 Black <br> Friday</a>
        </div>
    </footer>


    </div>
    <footer class="footer hidden" id="footer2">
      <div class="line">
      <div class="my_account_footer">
        <svg class="footer-icon"><use href="symbol-defs.svg#icon-user"></use></svg>
        <div class="account-info">
          <h3 class="account-name"><a href="#" class="account-name-link">My Account</a></h3>
          <p class="account-sign-in"><a href="" class="account-sign-in-link">Sign-in to your account</a></p>
        </div>
      </div>
      </div>

      <div class="second-line">
      <div class="footer-info">
        <div class="help">
          <h3 class="footer-title">Help</h3>
          <ul class="footer-list">
            <li class="footer-item"><a href="" class="footer-link">Returns Information</a></li>
            <li class="footer-item"><a href="" class="footer-link">Shipping Information</a></li>
            <li class="footer-item"><a href="" class="footer-link">Contact Us</a></li>
            <li class="footer-item"><a href="" class="footer-link">Product Recall</a></li>
            <li class="footer-item"><a href="" class="footer-link">Find a Store</a></li>
          </ul>
        </div>

        <div class="privacy-&-legal">
          <h3 class="footer-title">Privacy & Legal</h3>
          <ul class="footer-list">
            <li class="footer-item"><a href="" class="footer-link">Privacy & Cookie Policy</a></li>
            <li class="footer-item"><a href="" class="footer-link">Gender Pay Gap Report</a></li>
            <li class="footer-item"><a href="" class="footer-link">Terms & Conditions</a></li>
            <li class="footer-item"><a href="" class="footer-link">Cookies</a></li>
          </ul>
        </div>

        <div class="departments">
          <h3 class="footer-title">Departments</h3>
          <ul class="footer-list">
            <li class="footer-item"><a href="" class="footer-link">Womens</a></li>
            <li class="footer-item"><a href="" class="footer-link">Mens</a></li>
            <li class="footer-item"><a href="" class="footer-link">Boys</a></li>
            <li class="footer-item"><a href="" class="footer-link">Girls</a></li>
            <li class="footer-item"><a href="" class="footer-link">Home</a></li>
            <li class="footer-item"><a href="" class="footer-link">Baby</a></li>
            <li class="footer-item"><a href="" class="footer-link">Brands</a></li>
          </ul>
        </div>

        <div class="other-services">
          <h3 class="footer-title">Other Services</h3>
          <ul class="footer-list">
            <li class="footer-item"><a href="" class="footer-link">Media & Press</a></li>
            <li class="footer-item"><a href="" class="footer-link">The Company</a></li>
            <li class="footer-item"><a href="" class="footer-link">Careers@next</a></li>
          </ul>
        </div>
      </div>
      </div>

      <div class="market-sign">
        <a href="" class="market-sign-link">View mobile site</a>
        <p class="market-sign-text">© 2024 Next Retail Ltd. All rights reserved.</p>
      </div>

    </footer>

   
   
</div>
    <button class="scroll-top" id="scrollTopBtn">Scroll to Top</button>
`;

let timerElement = document.getElementById("timer");
let header1 = document.getElementById("header1");
let header2 = document.getElementById("header2");
let footer1 = document.getElementById("footer1");
let footer2 = document.getElementById("footer2");
let scrollTopBtn = document.getElementById("scrollTopBtn");

let timeLeft = 90;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  if (timeLeft > 0) {
    timeLeft--;
  } else {
    timeLeft = 90;
    toggleHeadersAndFooters();
  }
}

function toggleHeadersAndFooters() {
  header1.classList.toggle("hidden");
  header2.classList.toggle("hidden");
  footer1.classList.toggle("hidden");
  footer2.classList.toggle("hidden");
}

setInterval(updateTimer, 1000);

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

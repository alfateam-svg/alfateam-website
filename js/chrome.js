function renderChrome(){
  document.getElementById('site-header').innerHTML = `
    <div class="header-inner">
      <a href="index.html" class="logo">ALFA <span>TEAM</span></a>
      <nav>
        <a href="listings.html" data-i18n="nav_listings">Listings</a>
        <a href="about.html" data-i18n="nav_about">About</a>
        <a href="contact.html" data-i18n="nav_contact">Contact</a>
        <div class="lang-toggle">
          <button data-lang="en" onclick="setLang('en')">EN</button>
          <button data-lang="ro" onclick="setLang('ro')">RO</button>
        </div>
      </nav>
    </div>`;

  document.getElementById('site-footer').innerHTML = `
    <div class="wrap">
      <div class="col">
        <h4 data-i18n="footer_col1">Alfa Team Invest</h4>
        <p class="mono" style="max-width:260px;font-size:0.82rem;line-height:1.6;" data-i18n="footer_tagline"></p>
      </div>
      <div class="col">
        <h4 data-i18n="footer_nav">Navigate</h4>
        <a href="listings.html" data-i18n="nav_listings"></a>
        <a href="about.html" data-i18n="nav_about"></a>
        <a href="contact.html" data-i18n="nav_contact"></a>
      </div>
      <div class="col">
        <h4 data-i18n="footer_contact">Contact</h4>
        <a href="mailto:contact@alfateaminvest.ro">contact@alfateaminvest.ro</a>
        <a href="tel:+40000000000">+40 000 000 000</a>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© ${new Date().getFullYear()} Alfa Team Invest · alfateaminvest.ro</span>
      <span>Satu Mare, Romania</span>
    </div>`;
  applyLang();
}
document.addEventListener('DOMContentLoaded', renderChrome);

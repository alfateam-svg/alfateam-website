// Bilingual dictionary — RO / EN
const DICT = {
  nav_listings:   { en: "Listings", ro: "Proprietăți" },
  nav_about:      { en: "About", ro: "Despre noi" },
  nav_contact:    { en: "Contact", ro: "Contact" },
  hero_eyebrow:   { en: "Commercial & Industrial Real Estate — Worldwide", ro: "Imobiliare Comerciale și Industriale — Global" },
  hero_title:     { en: "Assets built for operations, not open houses.", ro: "Active construite pentru operațiuni, nu pentru vizionări." },
  hero_lead:      { en: "Alfa Team sources and structures industrial, logistics and commercial property acquisitions across global markets.", ro: "Alfa Team identifică și structurează achiziții de proprietăți industriale, logistice și comerciale pe piețe globale." },
  hero_cta:       { en: "View listings", ro: "Vezi proprietățile" },
  hero_cta2:      { en: "Talk to us", ro: "Contactează-ne" },
  stat_1_label:   { en: "Active listings", ro: "Proprietăți active" },
  stat_2_label:   { en: "Countries", ro: "Țări" },
  stat_3_label:   { en: "Sq. meters managed", ro: "Mp administrați" },
  section_featured_eyebrow: { en: "Portfolio", ro: "Portofoliu" },
  section_featured_title:   { en: "Featured assets", ro: "Proprietăți recomandate" },
  view_all:       { en: "View all listings →", ro: "Vezi toate proprietățile →" },
  price_on_request: { en: "Price on request", ro: "Preț la cerere" },
  size_label:     { en: "Size", ro: "Suprafață" },
  location_label: { en: "Location", ro: "Locație" },
  footer_col1:    { en: "Alfa Team Invest", ro: "Alfa Team Invest" },
  footer_tagline: { en: "Commercial & industrial real estate, worldwide.", ro: "Imobiliare comerciale și industriale, la nivel global." },
  footer_nav:     { en: "Navigate", ro: "Navigare" },
  footer_contact: { en: "Contact", ro: "Contact" },
  all_categories: { en: "All", ro: "Toate" },
  cat_industrial: { en: "Industrial", ro: "Industrial" },
  cat_commercial: { en: "Commercial", ro: "Comercial" },
  cat_office:     { en: "Office", ro: "Birouri" },
  cat_land:       { en: "Land", ro: "Teren" },
  listings_title: { en: "All listings", ro: "Toate proprietățile" },
  contact_title:  { en: "Get in touch", ro: "Contactează-ne" },
  contact_lead:   { en: "Tell us what you're looking to acquire or list — we'll respond within one business day.", ro: "Spune-ne ce dorești să achiziționezi sau să listezi — răspundem în cel mult o zi lucrătoare." },
  form_name:      { en: "Name", ro: "Nume" },
  form_email:     { en: "Email", ro: "Email" },
  form_message:   { en: "Message", ro: "Mesaj" },
  form_send:      { en: "Send message", ro: "Trimite mesajul" },
  about_title:    { en: "About Alfa Team", ro: "Despre Alfa Team" },
  about_body:     { en: "Alfa Team Invest sources, evaluates and structures commercial and industrial property opportunities for investors and operators across global markets. We work directly — no listing noise, no generic brochures.", ro: "Alfa Team Invest identifică, evaluează și structurează oportunități de proprietăți comerciale și industriale pentru investitori și operatori pe piețe globale. Lucrăm direct — fără zgomot inutil, fără broșuri generice." },
  no_listings:    { en: "No listings match this filter yet.", ro: "Nu există proprietăți pentru acest filtru încă." },
  ref:            { en: "Ref", ro: "Ref" },
};

function getLang(){
  return localStorage.getItem('at_lang') || 'en';
}
function setLang(l){
  localStorage.setItem('at_lang', l);
  applyLang();
}
function t(key){
  const lang = getLang();
  return (DICT[key] && DICT[key][lang]) || (DICT[key] && DICT[key].en) || key;
}
function applyLang(){
  const lang = getLang();
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('.lang-toggle button').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  document.querySelectorAll('[data-i18n-render]').forEach(el=>{
    if (window.renderDynamic) window.renderDynamic();
  });
}
document.addEventListener('DOMContentLoaded', applyLang);

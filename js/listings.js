async function fetchListings({ featured=false, category=null } = {}){
  let query = supabaseClient.from('listings').select('*').eq('status','active').order('created_at',{ascending:false});
  if (featured) query = query.eq('featured', true);
  if (category && category !== 'all') query = query.eq('category', category);
  const { data, error } = await query;
  if (error){ console.error(error); return []; }
  return data || [];
}

function formatPrice(l){
  if (l.price_on_request || !l.price_eur) return t('price_on_request');
  return '€' + Number(l.price_eur).toLocaleString('en-US');
}

function listingCard(l){
  const lang = getLang();
  const title = lang === 'ro' ? l.title_ro : l.title_en;
  const img = l.cover_image || 'https://placehold.co/600x450/1D2227/EAEAE4?text=ALFA+TEAM';
  return `
    <a class="listing-card" href="listing.html?id=${l.id}">
      <div class="img">
        <span class="ref mono">${t('ref')} ${l.ref_code || '—'}</span>
        <img src="${img}" alt="${title}">
      </div>
      <div class="body">
        <h3>${title}</h3>
        <div class="meta">
          <span>${l.city || ''}${l.city && l.country ? ', ' : ''}${l.country || ''}</span>
          <span class="price">${formatPrice(l)}</span>
        </div>
      </div>
    </a>`;
}

async function renderFeatured(){
  const el = document.getElementById('featured-grid');
  if (!el) return;
  const listings = await fetchListings({ featured:true });
  el.innerHTML = listings.length
    ? listings.slice(0,6).map(listingCard).join('')
    : `<p class="mono" style="grid-column:1/-1;color:#8A9096;">${t('no_listings')}</p>`;
}

let currentCategory = 'all';
async function renderListingsPage(){
  const el = document.getElementById('listings-grid');
  if (!el) return;
  const listings = await fetchListings({ category: currentCategory });
  el.innerHTML = listings.length
    ? listings.map(listingCard).join('')
    : `<p class="mono" style="grid-column:1/-1;color:#8A9096;">${t('no_listings')}</p>`;
}

function setCategory(cat){
  currentCategory = cat;
  document.querySelectorAll('.filter-bar button').forEach(b=>{
    b.classList.toggle('active', b.dataset.cat === cat);
  });
  renderListingsPage();
}

window.renderDynamic = function(){
  renderFeatured();
  renderListingsPage();
};

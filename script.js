/**
 * ==========================================================================
 * RIDWAN RATTAN EXPORT CIREBON - INTERACTIVE JAVASCRIPT ENGINE
 * 100% Vanilla JS (No Frameworks, No Libraries, Zero External Dependencies)
 * Includes: Business & Product Dataset, Calculator Logic, Dynamic Grid,
 * Modal System, Accordion FAQ, Scroll-Reveal, Responsive Nav.
 * ==========================================================================
 */

// ==========================================================================
// MAIN DATASET: BUSINESS INFO, PRODUCT CATALOGUE, SHIPPING & FAQ
// ==========================================================================

const businessInfo = {
  name: "Ridwan Rattan Export Cirebon",
  legalName: "CV. Ridwan Rotan Mandiri",
  owner: "Pak Ridwan",
  tagline: "The Beauty of Cirebon Natural Rattan Weaving for Global Markets",
  location: "Cirebon, West Java, Indonesia",
  address: "Tegalwangi Rattan Craft Center, Jl. Raya Kanci - Tegalwangi No. 88, Weru, Cirebon 45154",
  phone: "+62 812-3456-7890",
  whatsapp: "6281234567890",
  email: "export@ridwanrattan.com",
  certifications: ["SVLK (Timber Legality Assurance System)", "ISPM 15 Fumigation Standard", "Phytosanitary Certificate"],
  stats: [
    { label: "Years of Experience", value: "12+" },
    { label: "Export Destination Countries", value: "28+" },
    { label: "Skilled Local Artisans", value: "150+" },
    { label: "Containers Shipped / Year", value: "85+" }
  ]
};

const productsData = [
  {
    id: "rattan-chair-monaco",
    name: "Monaco Lounge Chair",
    category: "kursi",
    categoryLabel: "Chairs & Seating",
    isReady: true,
    stockCount: 45,
    badgeText: "Ready Stock",
    badgeClass: "bg-success",
    basePrice: 850000,
    image: "Gemini_Generated_Image_5x2ogb5x2ogb5x2o.jpg",
    description: "Ergonomic natural rattan lounge chair with a sturdy Grade A Cirebon manau rattan frame. Highly popular in tropical cafes and resorts across Europe & Australia.",
    material: "Selected Manau Rattan Poles, Rattan Peel Weaving, Water-based Clear Finish",
    dimensions: "75 cm (L) x 70 cm (W) x 85 cm (H)",
    weightKg: 6.5,
    variants: [
      { id: "natural-honey", name: "Natural Honey (Natural Rattan Tone)", extraPrice: 0 },
      { id: "dark-walnut", name: "Dark Walnut (Deep Wood Brown)", extraPrice: 50000 },
      { id: "rustic-whitewash", name: "Rustic Whitewash (Classic White)", extraPrice: 75000 }
    ]
  },
  {
    id: "rattan-chair-peacock",
    name: "Peacock Queen Chair",
    category: "kursi",
    categoryLabel: "Chairs & Seating",
    isReady: true,
    stockCount: 18,
    badgeText: "Ready Stock",
    badgeClass: "bg-success",
    basePrice: 1750000,
    image: "Gemini_Generated_Image_phyuzophyuzophyu.jpg",
    description: "Legendary icon of Indonesian rattan furniture with a grand curved backrest and peacock-tail ornament. Carefully crafted by master artisans using high-level traditional weaving techniques.",
    material: "Kubu Grey Rattan, Fine Rattan Core (Slimit), Soft White Linen Foam Cushion",
    dimensions: "105 cm (L) x 65 cm (W) x 145 cm (H)",
    weightKg: 11.0,
    variants: [
      { id: "natural-gloss", name: "Natural Glossy (Natural Shine)", extraPrice: 0 },
      { id: "vintage-gold", name: "Vintage Honey Gold (Golden Yellow)", extraPrice: 100000 },
      { id: "matte-black", name: "Modern Matte Black", extraPrice: 120000 }
    ]
  },
  {
    id: "rattan-table-boho",
    name: "Boho Drum Coffee Table",
    category: "meja",
    categoryLabel: "Coffee & Side Tables",
    isReady: true,
    stockCount: 32,
    badgeText: "Ready Stock",
    badgeClass: "bg-success",
    basePrice: 650000,
    image: "Realistic Rattan Coffee Table Living Room.png",
    description: "Round drum-shaped coffee table with geometric rattan lattice weave and protective rim. Strong load-bearing capacity, resistant to both tropical and cold humidity.",
    material: "Solid Mandola Rattan Frame, Rattan Peel Weaving, Protective Top Rim",
    dimensions: "Diameter 60 cm x Height 45 cm",
    weightKg: 7.0,
    variants: [
      { id: "dia-60", name: "Standard Size (Diameter 60 cm)", extraPrice: 0 },
      { id: "dia-80", name: "Large Size (Diameter 80 cm)", extraPrice: 150000 }
    ]
  },
  {
    id: "rattan-sofa-lounger",
    name: "Paradise Daybed",
    category: "sofa",
    categoryLabel: "Sofas & Daybeds",
    isReady: false,
    stockCount: 8,
    badgeText: "Pre-Order (PO 7-10 Days)",
    badgeClass: "bg-warning text-dark",
    basePrice: 2800000,
    image: "Cozy Wooden Bench Entryway.png",
    description: "Spacious two-seater daybed lounge with thick water-repellent cushions built to 5-star hotel standards. Delivers maximum comfort on villa terraces or living rooms.",
    material: "35mm Jumbo Rattan Pole Main Frame, High-Density Foam Mattress & Dacron Pillows",
    dimensions: "160 cm (L) x 80 cm (W) x 75 cm (H)",
    weightKg: 22.0,
    variants: [
      { id: "cushion-cream", name: "Natural Cream Cushion Fabric", extraPrice: 0 },
      { id: "cushion-grey", name: "Slate Grey Cushion Fabric", extraPrice: 100000 },
      { id: "cushion-terracotta", name: "Warm Terracotta Cushion Fabric", extraPrice: 100000 }
    ]
  },
  {
    id: "rattan-lamp-pendant",
    name: "Pendant Lampshade",
    category: "dekorasi",
    categoryLabel: "Lighting & Decor",
    isReady: true,
    stockCount: 75,
    badgeText: "Ready Stock",
    badgeClass: "bg-success",
    basePrice: 320000,
    image: "Warm Wicker Pendant Glow.png",
    description: "Aesthetic hanging lampshade with an open-weave lattice that casts warm light shadows across walls in cafes, restaurants, hotel rooms, and dining areas.",
    material: "Fine Peeled Rattan Fiber & Rust-Resistant Wire Frame, E27 Cable Fitting",
    dimensions: "Diameter 40 cm x Height 40 cm",
    weightKg: 1.5,
    variants: [
      { id: "shape-bell", name: "Bell Shape (Ø 40 cm)", extraPrice: 0 },
      { id: "shape-dome", name: "Dome Shape (Ø 50 cm)", extraPrice: 45000 },
      { id: "shape-cylinder", name: "Cylinder Shape (Ø 35 cm)", extraPrice: 30000 }
    ]
  },
  {
    id: "rattan-basket-storage",
    name: "Multi-Storage Basket Set",
    category: "keranjang",
    categoryLabel: "Baskets & Storage",
    isReady: true,
    stockCount: 60,
    badgeText: "Ready Stock",
    badgeClass: "bg-success",
    basePrice: 275000,
    image: "basket-rattan.jpg",
    description: "Versatile multi-purpose basket with dual handle accents. Ideal for laundry, indoor potted plants, children's toys, or bathroom essentials.",
    material: "Rattan Core (Slimit), Dried Banana Leaf Weave & Wire Frame",
    dimensions: "Size M: Ø 30x30 cm | Size L: Ø 38x38 cm",
    weightKg: 2.0,
    variants: [
      { id: "size-m", name: "Single Size M (Diameter 30 cm)", extraPrice: 0 },
      { id: "size-l", name: "Single Size L (Diameter 38 cm)", extraPrice: 50000 },
      { id: "bundle-set", name: "2-in-1 Value Bundle (Size M + L)", extraPrice: 175000 }
    ]
  }
];

const shippingDestinations = [
  {
    id: "cirebon-jabar",
    name: "Cirebon & West Java (Local)",
    category: "Domestic",
    sea: {
      label: "Land Cargo / Regular Truck",
      icon: "bi-truck",
      baseCost: 35000,
      costPerKg: 3500,
      minDays: 1,
      maxDays: 2,
      note: "Direct delivery to workshop or buyer address"
    },
    air: {
      label: "Express Courier",
      icon: "bi-lightning-charge",
      baseCost: 25000,
      costPerKg: 12000,
      minDays: 1,
      maxDays: 1,
      note: "24-hour delivery service for small/medium parcels"
    }
  },
  {
    id: "jabodetabek",
    name: "Jabodetabek & Banten (Jakarta, Bogor, Depok, Tangerang, Bekasi)",
    category: "Domestic",
    sea: {
      label: "Land Expedition Truck Cargo",
      icon: "bi-truck",
      baseCost: 50000,
      costPerKg: 4500,
      minDays: 2,
      maxDays: 3,
      note: "Safe for large furniture and wooden pallet packing"
    },
    air: {
      label: "Next Day Express Courier",
      icon: "bi-airplane",
      baseCost: 35000,
      costPerKg: 18000,
      minDays: 1,
      maxDays: 2,
      note: "Fast delivery via priority air/express route"
    }
  },
  {
    id: "luar-jawa",
    name: "Outside Java (Sumatra, Bali, Kalimantan, Sulawesi, Nusa Tenggara)",
    category: "Domestic",
    sea: {
      label: "Domestic Sea Cargo (Pelni / Ro-Ro Vessel)",
      icon: "bi-water",
      baseCost: 120000,
      costPerKg: 8500,
      minDays: 5,
      maxDays: 9,
      note: "Most economical option for inter-island bulk furniture"
    },
    air: {
      label: "Domestic Air Cargo",
      icon: "bi-airplane",
      baseCost: 90000,
      costPerKg: 32000,
      minDays: 2,
      maxDays: 4,
      note: "Fast arrival at destination city airport"
    }
  },
  {
    id: "southeast-asia",
    name: "Southeast Asia (Singapore, Malaysia, Thailand, Philippines)",
    category: "International Export",
    sea: {
      label: "Sea Freight LCL Container (Tanjung Priok Port)",
      icon: "bi-water",
      baseCost: 450000,
      costPerKg: 22000,
      minDays: 7,
      maxDays: 12,
      note: "Includes ISPM 15 fumigation documents & export packing"
    },
    air: {
      label: "International Air Freight Cargo",
      icon: "bi-airplane",
      baseCost: 650000,
      costPerKg: 85000,
      minDays: 3,
      maxDays: 5,
      note: "Best choice for sample orders and exhibition displays"
    }
  },
  {
    id: "east-asia",
    name: "East Asia (Japan, South Korea, Taiwan)",
    category: "International Export",
    sea: {
      label: "Export Sea Freight LCL Container",
      icon: "bi-water",
      baseCost: 600000,
      costPerKg: 28000,
      minDays: 12,
      maxDays: 18,
      note: "Destination ports Tokyo/Yokohama, Busan, Keelung"
    },
    air: {
      label: "Air Cargo International Priority",
      icon: "bi-airplane",
      baseCost: 850000,
      costPerKg: 110000,
      minDays: 4,
      maxDays: 6,
      note: "Secure cargo handling and flight insurance"
    }
  },
  {
    id: "australia",
    name: "Australia & New Zealand (Sydney, Melbourne, Auckland)",
    category: "International Export",
    sea: {
      label: "Ocean Freight Container Cargo",
      icon: "bi-water",
      baseCost: 750000,
      costPerKg: 32000,
      minDays: 14,
      maxDays: 22,
      note: "Complete Australian Biosecurity & Quarantine (BICON) certificates"
    },
    air: {
      label: "Express Air Freight",
      icon: "bi-airplane",
      baseCost: 950000,
      costPerKg: 125000,
      minDays: 5,
      maxDays: 7,
      note: "Door-to-door service to Australian international airports"
    }
  },
  {
    id: "europe",
    name: "Europe (Netherlands, Germany, France, Belgium, United Kingdom)",
    category: "International Export",
    sea: {
      label: "Ocean Freight LCL/FCL (Port of Rotterdam / Hamburg)",
      icon: "bi-water",
      baseCost: 950000,
      costPerKg: 38000,
      minDays: 28,
      maxDays: 38,
      note: "Favorite export route for Cirebon rattan furniture to Europe"
    },
    air: {
      label: "Worldwide Air Cargo Priority",
      icon: "bi-airplane",
      baseCost: 1200000,
      costPerKg: 165000,
      minDays: 5,
      maxDays: 8,
      note: "Direct cargo flight to Schiphol / Frankfurt"
    }
  },
  {
    id: "north-america",
    name: "United States & Canada (USA - West Coast / East Coast)",
    category: "International Export",
    sea: {
      label: "Ocean Freight Cargo (Port of Los Angeles / Long Beach / NY)",
      icon: "bi-water",
      baseCost: 1100000,
      costPerKg: 42000,
      minDays: 30,
      maxDays: 45,
      note: "Compliant with CBP customs & USDA Fumigation Certified"
    },
    air: {
      label: "Priority Air Express Transpacific",
      icon: "bi-airplane",
      baseCost: 1400000,
      costPerKg: 185000,
      minDays: 6,
      maxDays: 9,
      note: "Shortest transit time for urgent orders"
    }
  }
];

const faqData = [
  {
    question: "Are Pak Ridwan's rattan furniture and craft products ready stock?",
    answer: "Yes! Most popular items such as the Monaco Lounge Chair, Peacock Chair, Boho Coffee Table, Pendant Lampshade, and Basket Sets are available in <strong>Ready Stock</strong> status at our Cirebon warehouse. For custom finish colors or large orders exceeding daily stock capacity (such as container orders), the system automatically enters the <em>Pre-Order (PO)</em> queue with a production time of around 7–21 working days."
  },
  {
    question: "What product variants and finishes are available?",
    answer: "Each product type offers flexible variations, such as finishing color options (<em>Natural Honey Glossy, Dark Walnut, Rustic Whitewash, Modern Matte Black</em>), diameter/dimension variations for tables and lampshades, as well as cushion fabric color choices that are water-repellent and outdoor-friendly."
  },
  {
    question: "How do I calculate the total price for bulk / export orders?",
    answer: "You can directly use the <strong>Order &amp; Shipping Calculator</strong> on this website. Simply choose the product, variant, and set the order quantity. The website automatically calculates the total price along with volume discount tiers: <strong>5% off</strong> for orders of at least 10 units, and <strong>10% off</strong> for wholesale orders above 50 units!"
  },
  {
    question: "How much is the shipping cost and how is it calculated?",
    answer: "Shipping costs are calculated transparently based on total item weight/volume multiplied by the per-kilogram rate of the destination zone plus a base cargo handling fee. Sea/land routes are more economical, while air routes prioritize delivery speed."
  },
  {
    question: "How long is the estimated delivery time to my address or destination port?",
    answer: "Estimated delivery times are displayed directly in the calculator when you select a destination country or city:<br>• <strong>Java Region:</strong> 1 – 3 business days.<br>• <strong>Outside Java:</strong> 5 – 9 days (sea) or 2 – 4 days (air).<br>• <strong>Southeast Asia:</strong> 7 – 12 days (sea) or 3 – 5 days (air).<br>• <strong>Australia:</strong> 14 – 22 days (sea) or 5 – 7 days (air).<br>• <strong>Europe &amp; Americas:</strong> 28 – 45 days (container ship) or 5 – 9 days (air cargo)."
  },
  {
    question: "Do Pak Ridwan's rattan products have official international export certifications?",
    answer: "Of course! All of our export products meet international standards: processed through kiln drying (anti-mold), eco-friendly anti-borer chemical dipping, <strong>SVLK</strong> timber/rattan legality certification, plant quarantine certificates (<em>Phytosanitary</em>), and <strong>ISPM 15</strong> fumigation certificates required by customs in the United States, Europe, and Australia."
  },
  {
    question: "What are the next steps after calculating costs in the calculator?",
    answer: "Once you get your quotation summary in the calculator, you can click <strong>'Contact Pak Ridwan via WhatsApp'</strong> or <strong>'Copy Quotation Details'</strong>. The system prepares a neat message containing item details, variant, destination, and total cost so Pak Ridwan can promptly issue an official <em>Invoice / Proforma Invoice</em> for you."
  }
];

// ==========================================================================
// MAIN WEBSITE INITIALIZATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Content Rendering
  renderStats();
  renderProducts('all');
  initProductFilter();
  populateCalculatorDropdowns();
  renderFAQ();
  initCalculatorEvents();
  initContactForm();

  // 2. Initialize Interactive UI Features (Vanilla UI Engine)
  initNavigation();
  initHeaderScrollEffect();
  initModalListeners();
  initScrollReveal();

  // 3. Run initial calculation
  calculateTotalAndShipping();
});

// ==========================================================================
// 1. RENDER BUSINESS STATISTICS
// ==========================================================================
function renderStats() {
  const statsContainer = document.getElementById('statsContainer');
  if (!statsContainer || !businessInfo.stats) return;

  statsContainer.innerHTML = businessInfo.stats.map((item, index) => `
    <div class="stat-card reveal delay-${index + 1}">
      <div class="stat-value">${item.value}</div>
      <div class="stat-label">${item.label}</div>
    </div>
  `).join('');
}

// ==========================================================================
// 2. RENDER PRODUCT CATALOGUE & VARIANTS (CORE FEATURES 1, 2, 3)
// ==========================================================================
function renderProducts(categoryFilter = 'all') {
  const container = document.getElementById('productGrid');
  if (!container) return;

  const filteredProducts = categoryFilter === 'all'
    ? productsData
    : productsData.filter(p => p.category === categoryFilter);

  if (filteredProducts.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; color: var(--text-muted);">
        <p style="font-size: 1.1rem; font-weight: 600;">No products available in this category yet.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredProducts.map(product => {
    // Variant pill tags
    const variantTags = product.variants.map(v =>
      `<span class="variant-pill">${v.name}</span>`
    ).join('');

    const formattedPrice = formatRupiah(product.basePrice);
    const usdEstimate = Math.round(product.basePrice / 15500);

    return `
      <article class="product-card reveal">
        <div class="product-media-wrap">
          <span class="badge badge-category-top">${product.categoryLabel}</span>
          <span class="badge badge-status-top ${product.badgeClass}">${product.badgeText}</span>
          <img src="${product.image}" alt="${product.name}" class="product-media-img" loading="lazy">
        </div>

        <div class="product-info-wrap">
          <h3 class="product-title">${product.name}</h3>
          <p class="product-desc">${product.description}</p>
          
          <div class="product-spec-list">
            <div class="spec-item">
              <span class="spec-name">Material:</span>
              <span class="spec-val" title="${product.material}">${product.material}</span>
            </div>
            <div class="spec-item">
              <span class="spec-name">Dimensions:</span>
              <span class="spec-val">${product.dimensions}</span>
            </div>
            <div class="spec-item">
              <span class="spec-name">Warehouse Stock:</span>
              <span class="spec-val" style="color: ${product.stockCount > 10 ? 'var(--status-success)' : 'var(--status-warning)'};">
                ${product.stockCount} units ready to ship
              </span>
            </div>
          </div>

          <div class="product-variants-preview">
            <span class="variant-label-small">Variant Options:</span>
            <div class="variant-tags-container">${variantTags}</div>
          </div>

          <div class="product-footer">
            <div class="product-price-display">
              <span class="price-caption">Starting From</span>
              <span class="price-main">${formattedPrice}</span>
              <span class="price-usd-sub">≈ $${usdEstimate} USD</span>
            </div>
            <div class="product-actions">
              <button type="button" class="btn btn-sm btn-outline-secondary" onclick="openProductDetailModal('${product.id}')" title="View Full Specifications">
                Details
              </button>
              <button type="button" class="btn btn-sm btn-primary" onclick="selectProductToCalc('${product.id}')" title="Simulate Order & Shipping">
                Calculate
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Observe newly rendered elements for scroll reveal
  initScrollReveal();
}

// Product Category Filter
function initProductFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderProducts(category);
    });
  });
}

// ==========================================================================
// 3. PURE VANILLA JS PRODUCT DETAIL MODAL
// ==========================================================================
function initModalListeners() {
  const modalOverlay = document.getElementById('productDetailModal');
  if (!modalOverlay) return;

  // Close when clicking the dark backdrop outside the modal box
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeProductDetailModal();
    }
  });

  // Close button with cross icon
  const closeBtns = modalOverlay.querySelectorAll('.modal-close-trigger');
  closeBtns.forEach(btn => {
    btn.addEventListener('click', closeProductDetailModal);
  });

  // Close when pressing the ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeProductDetailModal();
    }
  });
}

function openProductDetailModal(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const modalOverlay = document.getElementById('productDetailModal');
  const modalImg = document.getElementById('modalProductImg');
  const modalTitle = document.getElementById('modalProductTitle');
  const modalBadge = document.getElementById('modalProductBadge');
  const modalCategory = document.getElementById('modalProductCategory');
  const modalDesc = document.getElementById('modalProductDesc');
  const modalMaterial = document.getElementById('modalProductMaterial');
  const modalDim = document.getElementById('modalProductDim');
  const modalWeight = document.getElementById('modalProductWeight');
  const modalStock = document.getElementById('modalProductStock');
  const modalVariantsList = document.getElementById('modalProductVariants');
  const modalPrice = document.getElementById('modalProductPrice');
  const modalCalcBtn = document.getElementById('modalCalcBtn');

  if (modalImg) modalImg.src = product.image;
  if (modalTitle) modalTitle.textContent = product.name;
  if (modalBadge) {
    modalBadge.className = `badge ${product.badgeClass}`;
    modalBadge.textContent = product.badgeText;
  }
  if (modalCategory) modalCategory.textContent = product.categoryLabel;
  if (modalDesc) modalDesc.textContent = product.description;
  if (modalMaterial) modalMaterial.textContent = product.material;
  if (modalDim) modalDim.textContent = product.dimensions;
  if (modalWeight) modalWeight.textContent = `${product.weightKg} kg / unit`;
  if (modalStock) modalStock.textContent = `${product.stockCount} units`;
  if (modalPrice) modalPrice.textContent = `${formatRupiah(product.basePrice)} (≈ $${Math.round(product.basePrice / 15500)} USD)`;

  if (modalVariantsList) {
    modalVariantsList.innerHTML = product.variants.map(v => `
      <li class="modal-variant-row">
        <span><strong>${v.name}</strong></span>
        <span class="badge ${v.extraPrice > 0 ? 'bg-warning' : 'bg-success'}">
          ${v.extraPrice > 0 ? '+ ' + formatRupiah(v.extraPrice) : 'Standard Price'}
        </span>
      </li>
    `).join('');
  }

  if (modalCalcBtn) {
    modalCalcBtn.onclick = () => {
      closeProductDetailModal();
      selectProductToCalc(product.id);
    };
  }

  if (modalOverlay) {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeProductDetailModal() {
  const modalOverlay = document.getElementById('productDetailModal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Shortcut button "Calculate" from product card to calculator
function selectProductToCalc(productId) {
  const productSelect = document.getElementById('calcProductSelect');
  if (!productSelect) return;

  productSelect.value = productId;
  updateVariantDropdown();
  calculateTotalAndShipping();

  // Smooth scroll to calculator
  const calcSection = document.getElementById('kalkulator');
  if (calcSection) {
    calcSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ==========================================================================
// 4. TOTAL PRICE, SHIPPING & DELIVERY ESTIMATE CALCULATOR (CORE FEATURES 4, 5, 6)
// ==========================================================================
let selectedShippingMode = 'sea'; // 'sea' or 'air'

function populateCalculatorDropdowns() {
  const productSelect = document.getElementById('calcProductSelect');
  const destinationSelect = document.getElementById('calcDestinationSelect');

  if (productSelect) {
    productSelect.innerHTML = productsData.map(p => `
      <option value="${p.id}">${p.name} - Starting ${formatRupiah(p.basePrice)}</option>
    `).join('');
  }

  if (destinationSelect) {
    const domestic = shippingDestinations.filter(d => d.category === 'Domestic');
    const international = shippingDestinations.filter(d => d.category !== 'Domestic');

    destinationSelect.innerHTML = `
      <optgroup label="Domestic Shipping (Indonesia)">
        ${domestic.map(d => `<option value="${d.id}">${d.name}</option>`).join('')}
      </optgroup>
      <optgroup label="International Export Shipping">
        ${international.map(d => `<option value="${d.id}">🌍 ${d.name}</option>`).join('')}
      </optgroup>
    `;
  }

  updateVariantDropdown();
}

function updateVariantDropdown() {
  const productSelect = document.getElementById('calcProductSelect');
  const variantSelect = document.getElementById('calcVariantSelect');
  if (!productSelect || !variantSelect) return;

  const selectedProductId = productSelect.value;
  const product = productsData.find(p => p.id === selectedProductId);
  if (!product) return;

  variantSelect.innerHTML = product.variants.map((v) => `
    <option value="${v.id}" data-extra="${v.extraPrice}">
      ${v.name} ${v.extraPrice > 0 ? '(+ ' + formatRupiah(v.extraPrice) + ')' : '(Base Price)'}
    </option>
  `).join('');
}

function initCalculatorEvents() {
  const productSelect = document.getElementById('calcProductSelect');
  const variantSelect = document.getElementById('calcVariantSelect');
  const qtyInput = document.getElementById('calcQuantity');
  const destinationSelect = document.getElementById('calcDestinationSelect');
  const modeSeaCard = document.getElementById('shippingModeSea');
  const modeAirCard = document.getElementById('shippingModeAir');

  if (productSelect) {
    productSelect.addEventListener('change', () => {
      updateVariantDropdown();
      calculateTotalAndShipping();
    });
  }

  if (variantSelect) {
    variantSelect.addEventListener('change', calculateTotalAndShipping);
  }

  if (qtyInput) {
    qtyInput.addEventListener('input', () => {
      if (qtyInput.value < 1) qtyInput.value = 1;
      calculateTotalAndShipping();
    });
  }

  if (destinationSelect) {
    destinationSelect.addEventListener('change', calculateTotalAndShipping);
  }

  if (modeSeaCard && modeAirCard) {
    modeSeaCard.addEventListener('click', () => {
      selectedShippingMode = 'sea';
      modeSeaCard.classList.add('selected');
      modeAirCard.classList.remove('selected');
      calculateTotalAndShipping();
    });

    modeAirCard.addEventListener('click', () => {
      selectedShippingMode = 'air';
      modeAirCard.classList.add('selected');
      modeSeaCard.classList.remove('selected');
      calculateTotalAndShipping();
    });
  }

  const copyBtn = document.getElementById('copyQuotationBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', copyQuotationToClipboard);
  }
}

let currentCalculationResult = null;

function calculateTotalAndShipping() {
  const productSelect = document.getElementById('calcProductSelect');
  const variantSelect = document.getElementById('calcVariantSelect');
  const qtyInput = document.getElementById('calcQuantity');
  const destinationSelect = document.getElementById('calcDestinationSelect');

  if (!productSelect || !variantSelect || !qtyInput || !destinationSelect) return;

  const product = productsData.find(p => p.id === productSelect.value) || productsData[0];
  const variantId = variantSelect.value;
  const variant = product.variants.find(v => v.id === variantId) || product.variants[0];
  const quantity = Math.max(1, parseInt(qtyInput.value, 10) || 1);
  const destination = shippingDestinations.find(d => d.id === destinationSelect.value) || shippingDestinations[0];

  // 1. Calculate Unit Price & Subtotal
  const unitPrice = product.basePrice + (variant.extraPrice || 0);
  const subtotalProduct = unitPrice * quantity;

  // 2. Bulk Order Volume Discount
  let discountPercent = 0;
  if (quantity >= 50) {
    discountPercent = 10;
  } else if (quantity >= 10) {
    discountPercent = 5;
  }
  const discountAmount = Math.round(subtotalProduct * (discountPercent / 100));
  const totalProductPrice = subtotalProduct - discountAmount;

  // 3. Availability Status
  let availabilityStatus = "";
  if (quantity <= product.stockCount) {
    availabilityStatus = `Ready Stock (${product.stockCount} units available in warehouse)`;
  } else {
    const shortage = quantity - product.stockCount;
    availabilityStatus = `Pre-Order (${product.stockCount} units in warehouse, ${shortage} units in PO queue ±7-14 days)`;
  }

  // 4. Calculate Weight and Shipping Cost
  const totalWeightKg = Math.round(product.weightKg * quantity * 10) / 10;
  const shippingPlan = destination[selectedShippingMode] || destination.sea;
  const shippingCost = shippingPlan.baseCost + Math.round(shippingPlan.costPerKg * totalWeightKg);

  // 5. Estimated Arrival Time
  const estimatedDaysText = `${shippingPlan.minDays} - ${shippingPlan.maxDays} Business Days`;

  // 6. Overall Grand Total
  const grandTotal = totalProductPrice + shippingCost;
  const grandTotalUSD = Math.round(grandTotal / 15500);

  currentCalculationResult = {
    productName: product.name,
    variantName: variant.name,
    quantity: quantity,
    unitPrice: unitPrice,
    subtotalProduct: subtotalProduct,
    discountPercent: discountPercent,
    discountAmount: discountAmount,
    totalProductPrice: totalProductPrice,
    availabilityStatus: availabilityStatus,
    destinationName: destination.name,
    shippingModeName: shippingPlan.label,
    totalWeightKg: totalWeightKg,
    shippingCost: shippingCost,
    estimatedDaysText: estimatedDaysText,
    shippingNote: shippingPlan.note,
    grandTotal: grandTotal,
    grandTotalUSD: grandTotalUSD
  };

  updateReceiptUI(currentCalculationResult);
}

function updateReceiptUI(res) {
  document.getElementById('receiptProductName').textContent = res.productName;
  document.getElementById('receiptVariantName').textContent = res.variantName;
  document.getElementById('receiptQuantity').textContent = `${res.quantity} units (${res.totalWeightKg} kg)`;
  document.getElementById('receiptUnitPrice').textContent = formatRupiah(res.unitPrice);
  document.getElementById('receiptSubtotal').textContent = formatRupiah(res.subtotalProduct);

  const discountRow = document.getElementById('receiptDiscountRow');
  const discountEl = document.getElementById('receiptDiscount');
  if (res.discountPercent > 0) {
    discountRow.style.display = 'flex';
    discountEl.textContent = `- ${formatRupiah(res.discountAmount)} (${res.discountPercent}%)`;
  } else {
    discountRow.style.display = 'none';
  }

  const availBadge = document.getElementById('receiptAvailabilityBadge');
  if (availBadge) {
    availBadge.textContent = res.availabilityStatus;
  }

  document.getElementById('receiptDestination').textContent = res.destinationName;
  document.getElementById('receiptShippingMethod').textContent = res.shippingModeName;
  document.getElementById('receiptShippingCost').textContent = formatRupiah(res.shippingCost);

  document.getElementById('receiptEstimateDays').textContent = res.estimatedDaysText;
  document.getElementById('receiptShippingNote').textContent = res.shippingNote;

  document.getElementById('receiptGrandTotal').textContent = formatRupiah(res.grandTotal);
  document.getElementById('receiptGrandTotalUSD').textContent = `≈ $${res.grandTotalUSD} USD (Est. Rate 1 USD = Rp 15.500)`;

  const waBtn = document.getElementById('whatsappOrderBtn');
  if (waBtn) {
    const waText = encodeURIComponent(
      `Hello Pak Ridwan, I am interested in ordering the following export rattan product based on the website simulation:\n\n` +
      `📦 *Product:* ${res.productName}\n` +
      `🎨 *Variant:* ${res.variantName}\n` +
      `🔢 *Quantity:* ${res.quantity} units (Est. Weight: ${res.totalWeightKg} kg)\n` +
      `💰 *Product Price:* ${formatRupiah(res.totalProductPrice)}\n` +
      `🚚 *Shipping Destination:* ${res.destinationName}\n` +
      `🚢 *Shipping Method:* ${res.shippingModeName}\n` +
      `📦 *Shipping Cost:* ${formatRupiah(res.shippingCost)}\n` +
      `⏱️ *Estimated Arrival:* ${res.estimatedDaysText}\n` +
      `🏷️ *Grand Total:* ${formatRupiah(res.grandTotal)} (≈ $${res.grandTotalUSD} USD)\n\n` +
      `Please share more information regarding issuing an official Invoice and shipping schedule. Thank you!`
    );
    waBtn.href = `https://wa.me/${businessInfo.whatsapp}?text=${waText}`;
  }
}

function copyQuotationToClipboard() {
  if (!currentCalculationResult) return;
  const res = currentCalculationResult;

  const quoteText =
    `==============================================
QUOTATION SUMMARY - ${businessInfo.name}
Address: ${businessInfo.address}
==============================================
Product         : ${res.productName}
Variant         : ${res.variantName}
Order Quantity  : ${res.quantity} units (Total Weight: ${res.totalWeightKg} kg)
Availability    : ${res.availabilityStatus}
Unit Price      : ${formatRupiah(res.unitPrice)}
Product Subtotal: ${formatRupiah(res.subtotalProduct)}
Discount        : ${res.discountPercent > 0 ? formatRupiah(res.discountAmount) + ' (' + res.discountPercent + '%)' : '0 (None)'}
Total Products  : ${formatRupiah(res.totalProductPrice)}
----------------------------------------------
Shipping Zone   : ${res.destinationName}
Cargo Mode      : ${res.shippingModeName}
Shipping Cost   : ${formatRupiah(res.shippingCost)}
Estimated ETA   : ${res.estimatedDaysText}
----------------------------------------------
GRAND TOTAL     : ${formatRupiah(res.grandTotal)} (≈ $${res.grandTotalUSD} USD)
==============================================
Contact Pak Ridwan on WhatsApp: ${businessInfo.phone}`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(quoteText).then(() => {
      alert("✅ Quotation details copied to clipboard! You can paste them directly into WhatsApp or email.");
    }).catch(() => {
      prompt("Copy the quotation text below:", quoteText);
    });
  } else {
    prompt("Copy the quotation text below:", quoteText);
  }
}

// ==========================================================================
// 5. PURE VANILLA JS ACCORDION FAQ (CORE FEATURE 7)
// ==========================================================================
function renderFAQ() {
  const container = document.getElementById('faqAccordion');
  if (!container) return;

  container.innerHTML = faqData.map((item, index) => {
    const isFirst = index === 0;

    return `
      <div class="accordion-item ${isFirst ? 'active' : ''}">
        <button type="button" class="accordion-trigger" aria-expanded="${isFirst ? 'true' : 'false'}">
          <span>${item.question}</span>
          <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="accordion-content-panel" style="${isFirst ? 'max-height: 500px;' : 'max-height: 0;'}">
          <div class="accordion-content-inner">
            ${item.answer}
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach click event listener to each accordion item
  const accordionItems = container.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    const panel = item.querySelector('.accordion-content-panel');

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items (accordion behavior)
      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherTrigger = otherItem.querySelector('.accordion-trigger');
          const otherPanel = otherItem.querySelector('.accordion-content-panel');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherPanel) otherPanel.style.maxHeight = '0';
        }
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 30 + 'px';
      } else {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = '0';
      }
    });
  });
}

// ==========================================================================
// 6. RESPONSIVE NAVIGATION & SCROLLSPY (ACTIVE LINK SWITCHER)
// ==========================================================================
function initNavigation() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Helper function to switch active link
  function setActiveLink(targetHref) {
    navLinks.forEach(link => {
      if (link.getAttribute('href') === targetHref) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // 1. Click event listener on each navbar link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href');
      setActiveLink(href);

      // Close mobile menu if open
      if (navMenu && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        if (menuToggle) {
          menuToggle.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Other action buttons targeting page sections (e.g., Order Simulation CTA)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if (!anchor.classList.contains('nav-link')) {
      anchor.addEventListener('click', () => {
        const href = anchor.getAttribute('href');
        if (href && href.length > 1) {
          setActiveLink(href);
        }
      });
    }
  });

  // 2. Mobile Menu Toggle
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      } else {
        navMenu.classList.add('open');
        menuToggle.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Close when clicking outside the navigation area
    document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 3. Scrollspy: Automatically updates active highlight based on scroll position
  let isThrottled = false;
  function updateScrollSpy() {
    if (isThrottled) return;
    isThrottled = true;

    requestAnimationFrame(() => {
      const scrollPos = window.scrollY + 130;
      let currentSectionId = '';

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSectionId = section.getAttribute('id');
        }
      });

      // Detect top of page (Home)
      if (window.scrollY < 120) {
        currentSectionId = 'beranda';
      }

      // Detect bottom of page (Contact)
      const scrollHeight = document.documentElement.scrollHeight;
      const windowBottom = window.innerHeight + window.scrollY;
      if (windowBottom >= scrollHeight - 60) {
        currentSectionId = 'kontak';
      }

      if (currentSectionId) {
        setActiveLink(`#${currentSectionId}`);
      }

      isThrottled = false;
    });
  }

  window.addEventListener('scroll', updateScrollSpy, { passive: true });
  updateScrollSpy();
}

// Header Glassmorphism Effect on Scroll
function initHeaderScrollEffect() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ==========================================================================
// 7. LIGHTWEIGHT SCROLL-REVEAL OBSERVER (INTERSECTION OBSERVER)
// ==========================================================================
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) {
    // Fallback for older browsers: show immediately
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal:not(.revealed)').forEach(el => {
    observer.observe(el);
  });
}

// ==========================================================================
// 8. CONTACT FORM INTERACTION
// ==========================================================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('contactAlert');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
      alert("Please complete all form fields!");
      return;
    }

    if (alertBox) {
      alertBox.className = "alert-message alert-success show";
      alertBox.innerHTML = `
        <strong>Thank you, ${name}!</strong> Your message has been sent directly to Pak Ridwan's official email. We will get back to you within 1x24 business hours.
      `;
      form.reset();
      setTimeout(() => {
        alertBox.className = "alert-message alert-success";
      }, 7000);
    }
  });
}

// Rupiah Formatter Helper
function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(number);
}
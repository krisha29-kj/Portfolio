const LOOKBOOK_DATA = [
  {
    id: "silk-sandalwood-drape",
    title: "Sandalwood Silk Sari Gown",
    category: "couture",
    categoryName: "Couture & Bridal",
    season: "Autumn / Winter 2026",
    textile: "Hand-loomed Mulberry Silk & Tissue Organza",
    summary: "Fluid pre-draped column silhouette with hand-pleated shoulder pallu and delicate antique zari edging.",
    styling: "Pair with sculptural gold ear cuffs, warm bronze shimmer, and minimalist strappy heels.",
    gradient: "linear-gradient(145deg, #4A3728 0%, #8E6E4E 100%)",
    palette: ["#4A3728", "#C8A97E", "#FAF7F2"]
  },
  {
    id: "ivory-khadi-trench",
    title: "Alabaster Handspun Khadi Trench",
    category: "resort",
    categoryName: "Resort & Tailoring",
    season: "Resort 2026",
    textile: "Organic Unbleached Khadi Linen",
    summary: "Relaxed double-breasted silhouette with mother-of-pearl buttons and soft dropped shoulders.",
    styling: "Layer over wide-leg ivory trousers and woven tan leather mules.",
    gradient: "linear-gradient(145deg, #9C8E7E 0%, #CFC4B6 100%)",
    palette: ["#FAF7F2", "#CFC4B6", "#665F57"]
  },
  {
    id: "crimson-bandhani-cape",
    title: "Sindoor Bandhani Heritage Cape",
    category: "heritage",
    categoryName: "Artisanal Heritage",
    season: "Festive Edit 2026",
    textile: "Kutch Hand-Knotted Gajji Silk",
    summary: "Floor-grazing ceremonial cape crafted from authentic tie-dye silk with hand-couched mirror borders.",
    styling: "Style over a monochrome black raw-silk bustier and high-waisted palazzo.",
    gradient: "linear-gradient(145deg, #6E1F1F 0%, #2C1212 100%)",
    palette: ["#7D2222", "#1C1A17", "#DFCFAF"]
  },
  {
    id: "olive-botanical-suit",
    title: "Sage Botanical Linen Co-ord",
    category: "resort",
    categoryName: "Resort & Tailoring",
    season: "Spring / Summer 2026",
    textile: "Botanically Dyed Flax Linen",
    summary: "Cropped architectural waistcoat paired with high-rise pleated culottes in muted olive sage.",
    styling: "Complete with tortoiseshell sunglasses, pearl drop earrings, and raffia tote.",
    gradient: "linear-gradient(145deg, #4B5644 0%, #7B8773 100%)",
    palette: ["#5B6653", "#E5DFD5", "#1C1A17"]
  },
  {
    id: "midnight-zardozi-lehenga",
    title: "Nocturne Zardozi Lehenga",
    category: "couture",
    categoryName: "Couture & Bridal",
    season: "Bridal Atelier 2026",
    textile: "Pure Obsidian Velvet & Antique Gold Wire",
    summary: "Sixteen-panel flared skirt hand-embroidered over 420 hours by master zardozi artisans.",
    styling: "Wear with a sleek center-parted bun, choker necklace, and sheer embroidered veil.",
    gradient: "linear-gradient(145deg, #191817 0%, #3E3326 100%)",
    palette: ["#191817", "#B39258", "#8C584C"]
  },
  {
    id: "indigo-shibori-dress",
    title: "Indigo Clamp-Dyed Midi Dress",
    category: "heritage",
    categoryName: "Artisanal Heritage",
    season: "Capsule Edit 2026",
    textile: "Natural Indigo Vat-Dyed Chanderi",
    summary: "Tiered midi silhouette featuring geometric clamp-resist patterns and delicate pintuck bodice.",
    styling: "Pair with oxidized silver bangles and handcrafted leather kolhapuris.",
    gradient: "linear-gradient(145deg, #1E2E42 0%, #486382 100%)",
    palette: ["#1E2E42", "#6A86A8", "#FAF7F2"]
  }
];

const JOURNAL_ARTICLES = [
  {
    tag: "Trend Forecast &bull; A/W 2026",
    title: "The Return of Quiet Luxury & Raw Handloom",
    readTime: "4 Min Read",
    excerpt: "Why discerning wardrobes are trading loud logos for tactile organic silks, neutral earth palettes, and heirloom craftsmanship.",
    gradient: "linear-gradient(135deg, #6B5B4B 0%, #A38F78 100%)"
  },
  {
    tag: "Craft & Culture",
    title: "Inside Kutch's Mirror-Work & Bandhani Clusters",
    readTime: "6 Min Read",
    excerpt: "Documenting our seasonal residency with third-generation weavers preserving natural vegetable dyes and hand-knotted textiles.",
    gradient: "linear-gradient(135deg, #7A2E2E 0%, #421919 100%)"
  },
  {
    tag: "Wardrobe Architecture",
    title: "Building a 12-Piece Capsule Wardrobe That Lasts",
    readTime: "5 Min Read",
    excerpt: "How to balance structured blazers, fluid silk drapes, and versatile neutral tones for effortless day-to-evening transitions.",
    gradient: "linear-gradient(135deg, #4E5949 0%, #2B3328 100%)"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Hamburger Menu
  const hamburger = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => navMenu.classList.toggle("open"));
  }

  // Render Lookbook Grid
  const lookGrid = document.getElementById("lookbookContainer");
  if (lookGrid) {
    const isPreview = lookGrid.dataset.preview === "true";

    function renderCards(category = "all") {
      let list = LOOKBOOK_DATA;
      if (isPreview) {
        list = LOOKBOOK_DATA.slice(0, 3);
      } else if (category !== "all") {
        list = LOOKBOOK_DATA.filter(item => item.category === category);
      }

      lookGrid.innerHTML = list.map(item => `
        <article class="editorial-card" data-look="${item.id}">
          <div class="swatch-art" style="background: ${item.gradient};">
            <span class="badge-glass">${item.categoryName}</span>
            <small style="letter-spacing:0.18em; text-transform:uppercase; opacity:0.88;">${item.season}</small>
          </div>
          <div class="card-body">
            <div>
              <h3>${item.title}</h3>
              <p>${item.summary}</p>
            </div>
            <div class="card-footer-row">
              <span>View Moodboard</span>
              <span>&rarr;</span>
            </div>
          </div>
        </article>
      `).join("");

      document.querySelectorAll(".editorial-card").forEach(card => {
        card.addEventListener("click", () => openLookModal(card.dataset.look));
      });
    }

    renderCards("all");

    // Category Filter Buttons
    const pills = document.querySelectorAll(".pill-btn");
    pills.forEach(pill => {
      pill.addEventListener("click", () => {
        pills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        renderCards(pill.dataset.cat);
      });
    });
  }

  // Render Journal Articles (Journal Page)
  const journalGrid = document.getElementById("journalGrid");
  if (journalGrid) {
    journalGrid.innerHTML = JOURNAL_ARTICLES.map(art => `
      <article class="editorial-card" style="cursor:default;">
        <div class="swatch-art" style="aspect-ratio:16/10; background:${art.gradient};">
          <span class="badge-glass">${art.tag}</span>
          <small style="letter-spacing:0.16em; text-transform:uppercase; opacity:0.85;">${art.readTime}</small>
        </div>
        <div class="card-body">
          <div>
            <h3>${art.title}</h3>
            <p>${art.excerpt}</p>
          </div>
          <div class="card-footer-row">
            <span>Editorial Essay</span>
            <span>2026</span>
          </div>
        </div>
      </article>
    `).join("");
  }

  // Modal Logic
  const modal = document.getElementById("lookModal");
  const closeBtn = document.getElementById("modalCloseBtn");

  function openLookModal(id) {
    const look = LOOKBOOK_DATA.find(x => x.id === id);
    if (!look || !modal) return;

    document.getElementById("mLeft").style.background = look.gradient;
    document.getElementById("mSeason").textContent = look.season;
    document.getElementById("mCat").textContent = look.categoryName;
    document.getElementById("mTitle").textContent = look.title;
    document.getElementById("mSummary").textContent = look.summary;
    document.getElementById("mTextile").textContent = look.textile;
    document.getElementById("mStyling").textContent = look.styling;

    const paletteBox = document.getElementById("mPalette");
    paletteBox.innerHTML = look.palette.map(c => `<span class="dot" style="background:${c};" title="${c}"></span>`).join("");

    const bookBtn = document.getElementById("mBookBtn");
    if (bookBtn) {
      bookBtn.href = `contact.html?piece=${encodeURIComponent(look.title)}`;
    }

    modal.classList.add("active");
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    modal.addEventListener("click", e => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }

  // Contact Form Pre-fill & Confirmation
  const bookingForm = document.getElementById("atelierForm");
  if (bookingForm) {
    const params = new URLSearchParams(window.location.search);
    const piece = params.get("piece");
    const service = params.get("service");

    if (piece && document.getElementById("messageBox")) {
      document.getElementById("messageBox").value = `Hello, I would like to inquire about custom sizing and pricing for: ${piece}.`;
    }
    if (service && document.getElementById("serviceSelect")) {
      document.getElementById("serviceSelect").value = service;
    }

    bookingForm.addEventListener("submit", e => {
      e.preventDefault();
      const guestName = document.getElementById("guestName").value;
      const chosenService = document.getElementById("serviceSelect").value;
      const toast = document.getElementById("formToast");
      toast.style.display = "block";
      toast.textContent = `Merci, ${guestName}. Your private appointment request for "${chosenService}" has been received. Our concierge will reach out within 24 hours.`;
      bookingForm.reset();
    });
  }
});

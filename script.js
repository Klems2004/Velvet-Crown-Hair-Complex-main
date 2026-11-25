// =====================================================================
// Velvet Crown Hair Complex: one script for all three pages.
// Each page only runs the parts it needs, because every setup function
// first checks that its elements exist on the current page.
// =====================================================================

// ---------------------------------------------------------------------
// 1. SETTINGS: edit these first. Every page follows.
// ---------------------------------------------------------------------
const CONFIG = {
  name: "Velvet Crown Hair Complex",
  phone: "+234 800 000 0000",
  whatsapp: "2348000000000", // country code + number, no "+", no spaces, no leading 0
  email: "hello@example.com",
  address: "Plot 12, Sample Road, Lagos",
  mapQuery: "Lagos, Nigeria", // what the map searches for. Use the real address later.
  topbarNote: "Pickup and delivery available",
  currency: "₦",
  timeZone: "Africa/Lagos",

  // Opening hours in minutes after midnight, Sunday first. null means closed.
  // 9 * 60 = 9:00 am, 19 * 60 = 7:00 pm.
  openHours: [
    [12 * 60, 18 * 60], // Sunday
    [9 * 60, 19 * 60], // Monday
    [9 * 60, 19 * 60], // Tuesday
    [9 * 60, 19 * 60], // Wednesday
    [9 * 60, 19 * 60], // Thursday
    [9 * 60, 19 * 60], // Friday
    [9 * 60, 19 * 60], // Saturday
  ],

  // Where the contact form is sent (for example a Formspree address).
  // While it is empty, the form says clearly that nothing was sent.
  contactEndpoint: "",

  // Set to false when the real shops and prices are in, to hide the "demo website" notice.
  showSampleNotice: true,
};

// ---------------------------------------------------------------------
// 2. DATA: the products, types and shops. Edit or add rows here.
//    "img" is the file name inside the images folder.
//    "featured: true" puts a product in "Customer favourites" on the home page.
//    "tag" can be "Best seller" or "New", or left out.
// ---------------------------------------------------------------------
const CATEGORIES = [
  { id: "wigs", name: "Wigs", img: "cat-wigs.jpg" },
  { id: "bundles", name: "Bundles", img: "cat-bundles.svg" },
  { id: "closures", name: "Frontals and closures", img: "cat-closures.jpg" },
  { id: "braids", name: "Braids and extensions", img: "cat-braids.jpg" },
  { id: "care", name: "Hair care", img: "cat-care.svg" },
];

const PRODUCTS = [
  { id: "silky-lob", name: "Silky Straight Lob Wig, 16 inch", cat: "wigs", price: 120000, tag: "Best seller", featured: true, note: "Sleek, shoulder-length and easy to style.", img: "wig-silky-lob.jpg" },
  { id: "burgundy-curl", name: "Burgundy Deep Curl Wig, 22 inch", cat: "wigs", price: 135000, tag: "Best seller", featured: true, note: "Full, bouncy curls in rich burgundy.", img: "wig-burgundy-curl.jpg" },
  { id: "blonde-bob", name: "613 Blonde Bob Wig, 12 inch", cat: "wigs", price: 85000, featured: true, note: "Bright blonde with a sharp, neat cut.", img: "wig-blonde-bob.jpg" },
  { id: "copper-long", name: "Copper Red Straight Wig, 26 inch", cat: "wigs", price: 165000, tag: "New", featured: true, note: "Long, glossy and bold.", img: "wig-copper-long.jpg" },
  { id: "classic-bob", name: "Classic Black Bob Wig, 12 inch", cat: "wigs", price: 68000, note: "A lace front bob that suits every day.", img: "wig-black-bob.jpg" },
  { id: "ginger-bob", name: "Ginger Bob Wig with Fringe, 12 inch", cat: "wigs", price: 72000, tag: "New", note: "A bright ginger bob with a full fringe.", img: "wig-ginger-bob.jpg" },
  { id: "auburn-lace", name: "Auburn Straight Lace Wig, 14 inch", cat: "wigs", price: 98000, note: "Warm auburn with a natural lace hairline.", img: "wig-auburn-lace.jpg" },
  { id: "grey-bob", name: "Silver Grey Bob Wig, 12 inch", cat: "wigs", price: 90000, note: "A smooth silver bob that turns heads.", img: "wig-grey-bob.jpg" },
  { id: "ombre-wave", name: "Ombre Body Wave Wig, 18 inch", cat: "wigs", price: 150000, note: "Dark roots fading into warm brown waves.", img: "wig-ombre-wave.jpg" },
  { id: "body-wave-bundles", name: "Body Wave Bundles, 3 pieces", cat: "bundles", price: 85000, tag: "Best seller", note: "Soft waves, sold as a set of three.", img: "body-wave-bundles.svg" },
  { id: "straight-bundles", name: "Straight Bundles, 3 pieces", cat: "bundles", price: 78000, note: "Sleek and straight, in natural brown.", img: "straight-bundles.svg" },
  { id: "deep-wave-bundles", name: "Deep Wave Bundles, 3 pieces", cat: "bundles", price: 92000, note: "Defined, bouncy waves.", img: "deep-wave-bundles.svg" },
  { id: "burgundy-bundles", name: "Burgundy Straight Bundles, 3 pieces", cat: "bundles", price: 88000, tag: "New", note: "A rich wine colour that stands out.", img: "burgundy-bundles.svg" },
  { id: "frontal-13x4", name: "13x4 Lace Frontal", cat: "closures", price: 65000, tag: "Best seller", note: "Wide lace for a natural hairline.", img: "frontal-13x4.svg" },
  { id: "closure-5x5", name: "5x5 HD Lace Closure", cat: "closures", price: 55000, note: "Thin lace that blends with the skin.", img: "closure-5x5.svg" },
  { id: "braided-wig", name: "Box Braids Lace Wig, 24 inch", cat: "braids", price: 95000, note: "Ready-made braids on a lace front.", img: "wig-braided.jpg" },
  { id: "box-braids", name: "Box Braids Pack", cat: "braids", price: 28000, note: "Ready to install, in black.", img: "box-braids.svg" },
  { id: "passion-twist", name: "Passion Twist Pack", cat: "braids", price: 32000, tag: "New", note: "Light, curly-ended twists.", img: "passion-twist.svg" },
  { id: "knotless-braids", name: "Knotless Braids Pack", cat: "braids", price: 35000, note: "Gentle on the scalp, in honey.", img: "knotless-braids.svg" },
  { id: "growth-oil", name: "Hair Growth Oil", cat: "care", price: 9500, note: "A light oil for the scalp and ends.", img: "growth-oil.svg" },
  { id: "moisture-shampoo", name: "Moisture Shampoo", cat: "care", price: 7500, note: "Gentle daily cleansing.", img: "moisture-shampoo.svg" },
  { id: "leave-in", name: "Leave-in Conditioner", cat: "care", price: 8500, note: "Softness that stays between washes.", img: "leave-in.svg" },
  { id: "care-set", name: "Wig Care Set", cat: "care", price: 22000, tag: "Best seller", note: "Shampoo and conditioner for your wig.", img: "care-set.svg" },
];

const SHOPS = [
  { name: "Crown Wigs", floor: "Ground floor", about: "Ready-to-wear wigs in every length." },
  { name: "Bundle Bar", floor: "Ground floor", about: "Straight, wavy and curly bundles." },
  { name: "Lace Lab", floor: "Ground floor", about: "Frontals, closures and wig making." },
  { name: "Glow Hair Care", floor: "Ground floor", about: "Shampoos, oils and treatments." },
  { name: "Braid Corner", floor: "First floor", about: "Braiding hair and twist packs." },
  { name: "Silk and Satin", floor: "First floor", about: "Bonnets, scarves and accessories." },
  { name: "Wig Repair Desk", floor: "First floor", about: "Cleaning, repairs and customising." },
  { name: "Colour Room", floor: "First floor", about: "Wig colouring and toning." },
  { name: "Style Studio Salon", floor: "Second floor", about: "Installs, braiding and styling." },
  { name: "Little Crowns", floor: "Second floor", about: "Hairstyles for girls." },
  { name: "Wholesale Hair Hub", floor: "Second floor", about: "Bulk orders for resellers." },
];
const FLOORS = ["Ground floor", "First floor", "Second floor"];

// ---------------------------------------------------------------------
// 3. SMALL HELPERS
// ---------------------------------------------------------------------
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

// el("p", "note", "Hello") makes <p class="note">Hello</p>. textContent keeps text safe.
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

const money = (amount) => CONFIG.currency + amount.toLocaleString("en-NG");
const productById = (id) => PRODUCTS.find((p) => p.id === id);
const whatsappLink = (message) =>
  `https://wa.me/${CONFIG.whatsapp}` + (message ? `?text=${encodeURIComponent(message)}` : "");

// ---------------------------------------------------------------------
// 4. OPENING HOURS: "Open now" worked out in the shop's own time zone,
//    so it is right even when the visitor is in another country.
// ---------------------------------------------------------------------
const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function formatMinutes(total) {
  const hours24 = Math.floor(total / 60);
  const minutes = String(total % 60).padStart(2, "0");
  const suffix = hours24 >= 12 ? "pm" : "am";
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  return `${hours12}:${minutes} ${suffix}`;
}

function shopTimeNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: CONFIG.timeZone,
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const get = (type) => parts.find((p) => p.type === type).value;
  return {
    day: DAY_NAMES.indexOf(get("weekday")),
    minutes: (Number(get("hour")) % 24) * 60 + Number(get("minute")),
  };
}

function openStatus() {
  const { day, minutes } = shopTimeNow();
  const today = CONFIG.openHours[day];
  if (today && minutes >= today[0] && minutes < today[1]) {
    return { open: true, text: `Open now, until ${formatMinutes(today[1])}` };
  }
  for (let ahead = 0; ahead < 7; ahead++) {
    const d = (day + ahead) % 7;
    const slot = CONFIG.openHours[d];
    if (slot && (ahead > 0 || minutes < slot[0])) {
      const when = ahead === 0 ? "today" : ahead === 1 ? "tomorrow" : DAY_NAMES[d];
      return { open: false, text: `Closed now, opens ${when} at ${formatMinutes(slot[0])}` };
    }
  }
  return { open: false, text: "Closed now" };
}

// ---------------------------------------------------------------------
// 5. FILL THE PAGE FROM CONFIG
//    data-bind="name"      -> text comes from CONFIG.name
//    data-href="whatsapp"  -> link opens a WhatsApp chat
// ---------------------------------------------------------------------
function applyConfig() {
  $$("[data-bind]").forEach((node) => {
    const value = CONFIG[node.dataset.bind];
    if (value) node.textContent = value;
  });

  $$("[data-href]").forEach((node) => {
    const kind = node.dataset.href;
    if (kind === "whatsapp") node.href = whatsappLink("Hello, I'd like some help choosing hair.");
    if (kind === "tel") node.href = "tel:" + CONFIG.phone.replace(/[^\d+]/g, "");
    if (kind === "mailto:email") node.href = "mailto:" + CONFIG.email;
  });

  document.title = document.title.replaceAll("Velvet Crown Hair Complex", CONFIG.name);
  $$("[data-year]").forEach((node) => (node.textContent = new Date().getFullYear()));
  $$("[data-sample-notice]").forEach((node) => (node.hidden = !CONFIG.showSampleNotice));

  const showStatus = () => {
    const status = openStatus();
    $$("[data-open-status]").forEach((node) => {
      node.textContent = status.text;
      node.classList.toggle("is-closed", !status.open);
    });
  };
  showStatus();
  setInterval(showStatus, 60000); // refresh every minute
}

// ---------------------------------------------------------------------
// 6. HEADER: the phone menu
// ---------------------------------------------------------------------
function setupMenu() {
  const header = $("#site-header");
  const toggle = $("#menu-toggle");
  const nav = $("#primary-nav");

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    header.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  toggle.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      setMenu(false);
      toggle.focus();
    }
  });
  window.matchMedia("(min-width: 901px)").addEventListener("change", (e) => {
    if (e.matches) setMenu(false);
  });
}

// ---------------------------------------------------------------------
// 7. BASKET
//    The basket is a list of { id, qty }. It is saved in the browser so it
//    survives moving between pages. It holds no personal details.
// ---------------------------------------------------------------------
const BASKET_KEY = "hair-complex-basket";
let basket = [];
let lastFocus = null;

function loadBasket() {
  try {
    const saved = JSON.parse(localStorage.getItem(BASKET_KEY) || "[]");
    // Keep only real products, and keep each quantity between 1 and 20.
    return saved
      .filter((line) => productById(line.id))
      .map((line) => ({ id: line.id, qty: Math.min(20, Math.max(1, Number(line.qty) || 1)) }));
  } catch (error) {
    return []; // storage blocked or corrupted: start with an empty basket
  }
}

function saveBasket() {
  try {
    localStorage.setItem(BASKET_KEY, JSON.stringify(basket));
  } catch (error) {
    /* private window: the basket still works until the page is closed */
  }
}

function basketCount() {
  return basket.reduce((sum, line) => sum + line.qty, 0);
}

function basketTotal() {
  return basket.reduce((sum, line) => sum + productById(line.id).price * line.qty, 0);
}

function orderMessage() {
  const lines = basket.map((line) => {
    const p = productById(line.id);
    return `${line.qty} x ${p.name} (${money(p.price)} each)`;
  });
  return [
    `Hello ${CONFIG.name}, I'd like to order:`,
    "",
    ...lines,
    "",
    `Total: ${money(basketTotal())}`,
    "",
    "Please confirm availability, the final price and delivery or pickup.",
  ].join("\n");
}

let toastTimer;
function toast(message) {
  const node = $("#toast");
  node.textContent = message;
  node.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => node.classList.remove("is-visible"), 2200);
}

function addToBasket(id) {
  const line = basket.find((l) => l.id === id);
  if (line) line.qty = Math.min(20, line.qty + 1);
  else basket.push({ id, qty: 1 });
  saveBasket();
  renderBasket();
  const button = $(".basket-btn");
  button.classList.remove("bump");
  void button.offsetWidth; // restart the little bounce animation
  button.classList.add("bump");
  toast(`Added ${productById(id).name} to your basket`);
}

function changeQty(id, change) {
  const line = basket.find((l) => l.id === id);
  if (!line) return;
  line.qty += change;
  if (line.qty < 1) basket = basket.filter((l) => l.id !== id);
  if (line && line.qty > 20) line.qty = 20;
  saveBasket();
  renderBasket();
}

function removeLine(id) {
  basket = basket.filter((l) => l.id !== id);
  saveBasket();
  renderBasket();
}

function renderBasket() {
  $$("[data-basket-count]").forEach((node) => (node.textContent = basketCount()));
  const body = $("#basket-body");
  const foot = $("#basket-foot");
  body.replaceChildren();
  foot.replaceChildren();

  if (!basket.length) {
    const empty = el("div", "drawer-empty");
    empty.append(el("p", "", "Your basket is empty."));
    const link = el("a", "btn btn-primary", "Browse the shop");
    link.href = "shop.html";
    empty.append(link);
    body.append(empty);
    return;
  }

  basket.forEach((line) => {
    const p = productById(line.id);
    const row = el("div", "line-item");
    const img = document.createElement("img");
    img.src = "images/" + p.img;
    img.alt = "";
    img.width = 64;
    img.height = 76;

    const info = el("div");
    info.append(el("p", "line-name", p.name), el("p", "line-price", money(p.price)));
    const qty = el("div", "qty");
    const minus = el("button", "", "−");
    minus.type = "button";
    minus.dataset.action = "minus";
    minus.dataset.id = p.id;
    minus.setAttribute("aria-label", `Remove one ${p.name}`);
    const count = el("span", "", String(line.qty));
    const plus = el("button", "", "+");
    plus.type = "button";
    plus.dataset.action = "plus";
    plus.dataset.id = p.id;
    plus.setAttribute("aria-label", `Add one more ${p.name}`);
    qty.append(minus, count, plus);
    info.append(qty);

    const remove = el("button", "remove", "Remove");
    remove.type = "button";
    remove.dataset.action = "remove";
    remove.dataset.id = p.id;
    remove.setAttribute("aria-label", `Remove ${p.name} from basket`);

    row.append(img, info, remove);
    body.append(row);
  });

  const totalRow = el("div", "total-row");
  totalRow.append(el("span", "", "Total"), el("span", "", money(basketTotal())));
  const note = el("small", "", "The final price and delivery cost are confirmed with you on WhatsApp.");
  const order = el("a", "btn btn-primary btn-lg", "Order on WhatsApp");
  order.href = whatsappLink(orderMessage());
  order.target = "_blank";
  order.rel = "noopener noreferrer";
  const clear = el("button", "clear", "Empty basket");
  clear.type = "button";
  clear.dataset.action = "clear";
  foot.append(totalRow, note, order, clear);
}

function setupBasket() {
  basket = loadBasket();

  // Build the drawer once and put it on every page.
  const overlay = el("div", "overlay");
  overlay.id = "overlay";
  const drawer = document.createElement("aside");
  drawer.className = "drawer";
  drawer.id = "basket";
  drawer.setAttribute("role", "dialog");
  drawer.setAttribute("aria-modal", "true");
  drawer.setAttribute("aria-labelledby", "basket-title");
  drawer.innerHTML =
    '<div class="drawer-head"><h2 id="basket-title">Your basket</h2>' +
    '<button class="icon-btn" type="button" data-close aria-label="Close basket">&times;</button></div>' +
    '<div class="drawer-body" id="basket-body"></div><div class="drawer-foot" id="basket-foot"></div>';
  const toastNode = el("div", "toast");
  toastNode.id = "toast";
  toastNode.setAttribute("role", "status");
  toastNode.setAttribute("aria-live", "polite");
  document.body.append(overlay, drawer, toastNode);

  function openDrawer() {
    lastFocus = document.activeElement;
    overlay.classList.add("is-open");
    drawer.classList.add("is-open");
    document.body.style.overflow = "hidden";
    $("[data-close]", drawer).focus();
  }
  function closeDrawer() {
    overlay.classList.remove("is-open");
    drawer.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  $$("[data-open-basket]").forEach((button) => button.addEventListener("click", openDrawer));
  overlay.addEventListener("click", closeDrawer);
  $("[data-close]", drawer).addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (event) => {
    if (!drawer.classList.contains("is-open")) return;
    if (event.key === "Escape") closeDrawer();
    if (event.key === "Tab") {
      // Keep the Tab key inside the open drawer.
      const items = $$("button, a[href]", drawer);
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  // One click listener for every button inside the drawer (event delegation).
  drawer.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const { action, id } = button.dataset;
    if (action === "plus") changeQty(id, 1);
    if (action === "minus") changeQty(id, -1);
    if (action === "remove") removeLine(id);
    if (action === "clear") {
      basket = [];
      saveBasket();
      renderBasket();
    }
    // Rebuilding the list loses focus, so put it back on the same button.
    const same = $(`[data-action="${action}"][data-id="${id}"]`, drawer);
    if (same) same.focus();
    else $("[data-close]", drawer).focus();
  });

  renderBasket();
}

// ---------------------------------------------------------------------
// 8. PRODUCT CARDS, HOME PAGE AND SHOP PAGE
// ---------------------------------------------------------------------
function productCard(p) {
  const card = el("article", "card");
  const imageBox = el("div", "card-img");
  const img = document.createElement("img");
  img.src = "images/" + p.img;
  img.alt = p.name + " (illustration)";
  img.width = 400;
  img.height = 480;
  img.loading = "lazy";
  imageBox.append(img);
  if (p.tag) imageBox.append(el("span", p.tag === "New" ? "pill pill--new" : "pill", p.tag));

  const body = el("div", "card-body");
  const category = CATEGORIES.find((c) => c.id === p.cat);
  const add = el("button", "btn btn-primary btn-sm", "Add to basket");
  add.type = "button";
  add.setAttribute("aria-label", `Add ${p.name} to basket`);
  add.addEventListener("click", () => {
    addToBasket(p.id);
    add.textContent = "Added";
    setTimeout(() => (add.textContent = "Add to basket"), 1400);
  });

  const foot = el("div", "card-foot");
  foot.append(el("span", "price", money(p.price)), add);
  body.append(el("p", "card-cat", category.name), el("h3", "", p.name), el("p", "card-note", p.note), foot);
  card.append(imageBox, body);
  return card;
}

function setupHome() {
  const cats = $("#category-cards");
  const featured = $("#featured");
  if (!cats || !featured) return;

  CATEGORIES.forEach((c) => {
    const count = PRODUCTS.filter((p) => p.cat === c.id).length;
    const item = el("li");
    const link = el("a", "cat");
    link.href = "shop.html?cat=" + c.id;
    const box = el("span", "cat-img");
    box.style.display = "block";
    const img = document.createElement("img");
    img.src = "images/" + c.img;
    img.alt = "";
    img.width = 400;
    img.height = 480;
    img.loading = "lazy";
    box.append(img);
    link.append(box, el("span", "cat-name", c.name), el("span", "cat-count", `${count} styles`));
    item.append(link);
    cats.append(item);
  });

  PRODUCTS.filter((p) => p.featured).forEach((p) => featured.append(productCard(p)));
}

function setupShop() {
  const grid = $("#product-grid");
  if (!grid) return;
  const chipsBox = $("#category-chips");
  const search = $("#search");
  const sort = $("#sort");
  const count = $("#result-count");
  const empty = $("#empty");

  // The filters live in one object. render() redraws the grid from it.
  const state = { cat: "all", q: "", sort: "featured" };
  const fromUrl = new URLSearchParams(location.search).get("cat");
  if (CATEGORIES.some((c) => c.id === fromUrl)) state.cat = fromUrl;

  const chips = [{ id: "all", name: "All hair" }, ...CATEGORIES].map((c) => {
    const chip = el("button", "chip", c.name);
    chip.type = "button";
    chip.dataset.cat = c.id;
    chip.addEventListener("click", () => {
      state.cat = c.id;
      try {
        history.replaceState(null, "", c.id === "all" ? "shop.html" : "shop.html?cat=" + c.id);
      } catch (error) {
        /* some browsers block this on local files; the filter still works */
      }
      render();
    });
    chipsBox.append(chip);
    return chip;
  });

  function render() {
    chips.forEach((chip) => chip.setAttribute("aria-pressed", String(chip.dataset.cat === state.cat)));
    const query = state.q.trim().toLowerCase();
    let list = PRODUCTS.filter((p) => {
      const category = CATEGORIES.find((c) => c.id === p.cat).name;
      const inCategory = state.cat === "all" || p.cat === state.cat;
      const matches = !query || (p.name + " " + category + " " + p.note).toLowerCase().includes(query);
      return inCategory && matches;
    });
    if (state.sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (state.sort === "high") list = [...list].sort((a, b) => b.price - a.price);

    grid.replaceChildren(...list.map(productCard));
    empty.hidden = list.length > 0;
    count.textContent = list.length ? `Showing ${list.length} of ${PRODUCTS.length} items` : "No items found";
  }

  search.addEventListener("input", () => {
    state.q = search.value;
    render();
  });
  sort.addEventListener("change", () => {
    state.sort = sort.value;
    render();
  });
  $("#clear-filters").addEventListener("click", () => {
    state.cat = "all";
    state.q = "";
    search.value = "";
    render();
    search.focus();
  });

  render();
}

// ---------------------------------------------------------------------
// 9. VISIT PAGE: hours, map, shop directory
// ---------------------------------------------------------------------
function setupVisit() {
  const hours = $("#hours");
  if (!hours) return;

  const todayIndex = shopTimeNow().day;
  // Show Monday first and Sunday last.
  [1, 2, 3, 4, 5, 6, 0].forEach((d) => {
    const slot = CONFIG.openHours[d];
    const row = el("div", d === todayIndex ? "is-today" : "");
    row.append(el("dt", "", DAY_NAMES[d]), el("dd", "", slot ? `${formatMinutes(slot[0])} to ${formatMinutes(slot[1])}` : "Closed"));
    hours.append(row);
  });

  const mapBox = $("#map");
  if (CONFIG.mapQuery) {
    const frame = document.createElement("iframe");
    frame.title = "Map showing where the complex is";
    frame.loading = "lazy";
    frame.referrerPolicy = "no-referrer-when-downgrade";
    frame.src = `https://maps.google.com/maps?q=${encodeURIComponent(CONFIG.mapQuery)}&output=embed`;
    mapBox.append(frame);
    $("#directions").href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.mapQuery)}`;
  }

  // Shop directory with floor filter
  const chipsBox = $("#floor-chips");
  const list = $("#shop-list");
  let floor = "all";
  const buttons = ["all", ...FLOORS].map((name) => {
    const chip = el("button", "chip", name === "all" ? "All floors" : name);
    chip.type = "button";
    chip.addEventListener("click", () => {
      floor = name;
      renderShops();
    });
    chipsBox.append(chip);
    return { chip, name };
  });

  function renderShops() {
    buttons.forEach(({ chip, name }) => chip.setAttribute("aria-pressed", String(name === floor)));
    list.replaceChildren(
      ...SHOPS.filter((s) => floor === "all" || s.floor === floor).map((s) => {
        const item = el("li", "shop");
        item.append(el("h3", "", s.name), el("span", "floor-tag", s.floor), el("p", "", s.about));
        return item;
      })
    );
  }
  renderShops();

  setupContactForm();
}

// ---------------------------------------------------------------------
// 10. CONTACT FORM
//     Checks each field, then sends it. It only says "sent" when the
//     server really answered yes.
// ---------------------------------------------------------------------
// A rule returns an error message, or "" when the value is fine.
const rules = {
  name: (value) => (value.length >= 2 ? "" : "Enter your name."),
  phone: (value) => (value.replace(/\D/g, "").length >= 7 ? "" : "Enter a phone number we can call or message on WhatsApp."),
  message: (value) => (value.length >= 10 ? "" : "Write a short message (at least 10 characters)."),
};

function setupContactForm() {
  const form = $("#contact-form");
  const result = $("#contact-result");
  const button = $(".submit", form);
  const label = $(".btn-label", button);
  const touched = new Set();
  const valueOf = (name) => form.elements[name].value.trim();

  function validateField(name) {
    const message = rules[name](valueOf(name));
    const box = $(`[data-field="${name}"]`, form);
    $(".field-error", box).textContent = message;
    box.classList.toggle("is-invalid", Boolean(message));
    const control = form.elements[name];
    if (message) control.setAttribute("aria-invalid", "true");
    else control.removeAttribute("aria-invalid");
    return !message;
  }

  // Check a field after the visitor leaves it, then keep checking as they type.
  form.addEventListener("focusout", (event) => {
    const name = event.target.name;
    if (rules[name]) {
      touched.add(name);
      validateField(name);
    }
  });
  form.addEventListener("input", (event) => {
    const name = event.target.name;
    if (rules[name] && touched.has(name)) validateField(name);
  });

  function show(kind, title, paragraphs, extra) {
    result.className = "form-result is-" + kind;
    result.setAttribute("role", kind === "error" ? "alert" : "status");
    result.replaceChildren(el("h3", "", title));
    paragraphs.forEach((text) => result.append(el("p", "", text)));
    if (extra) result.append(extra);
    result.hidden = false;
    result.focus();
  }

  function setLoading(isLoading) {
    form.classList.toggle("is-loading", isLoading);
    button.disabled = isLoading;
    button.setAttribute("aria-busy", String(isLoading));
    label.textContent = isLoading ? "Sending" : "Send message";
  }

  function whatsappButton() {
    const link = el("a", "btn btn-primary", "Chat on WhatsApp");
    link.href = whatsappLink("Hello, I have a question.");
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return link;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    result.hidden = true;

    const names = Object.keys(rules);
    names.forEach((name) => touched.add(name));
    const invalid = names.filter((name) => !validateField(name));
    if (invalid.length) {
      form.elements[invalid[0]].focus();
      return;
    }

    // A hidden field that only bots fill in: stop quietly, show no success.
    if (form.elements.company.value) return;

    // No endpoint yet: be honest. Nothing was sent.
    if (!CONFIG.contactEndpoint) {
      show("notice", "This form is not connected yet", ["Your message was not sent. No email service is set up on this page yet.", "Please use WhatsApp instead."], whatsappButton());
      return;
    }

    setLoading(true);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(CONFIG.contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "New message from the website",
          type: "contact_message",
          name: valueOf("name"),
          phone: valueOf("phone"),
          topic: form.elements.topic.value,
          message: valueOf("message"),
          submittedAt: new Date().toISOString(),
        }),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Server answered " + response.status);

      // Only now do we say it worked.
      form.reset();
      touched.clear();
      names.forEach((name) => {
        const box = $(`[data-field="${name}"]`, form);
        box.classList.remove("is-invalid");
        $(".field-error", box).textContent = "";
      });
      show("success", "Message received", ["Thank you. We will reply as soon as we can."]);
    } catch (error) {
      show("error", "Your message could not be sent", ["Something went wrong and nothing was saved. Please check your connection and try again, or use WhatsApp."], whatsappButton());
    } finally {
      clearTimeout(timeout);
      setLoading(false);
    }
  });
}

// ---------------------------------------------------------------------
// 11. START
//     Each part starts on its own. If one fails, the others still run,
//     and the error appears in the browser console (F12).
// ---------------------------------------------------------------------
[applyConfig, setupMenu, setupBasket, setupHome, setupShop, setupVisit].forEach((start) => {
  try {
    start();
  } catch (error) {
    console.error(`${start.name} failed:`, error);
  }
});

// Tell the page the script is running. If this never happens, a small script in the
// head of each page shows a warning.
document.documentElement.setAttribute("data-ready", "");

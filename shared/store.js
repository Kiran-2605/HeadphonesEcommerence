export const STORAGE_KEYS = Object.freeze({
  cart: "headphoneCart",
  wishlist: "headphoneWishlist",
  buyNow: "headphoneBuyNow",
  theme: "headphoneTheme",
});

const DATA_SOURCES = [
  "../db.json",
  "../data/db.json",
  "http://127.0.0.1:3000/organic_results",
  "http://localhost:3000/organic_results",
];

// Embedded product data as fallback for GitHub Pages
const EMBEDDED_PRODUCTS = [{"us_item_id":"267146439","product_id":"2TKS8H7AZ8MU","title":"ASTRO Gaming A20 Wireless Headset Gen 2 for Xbox Series X | S, Xbox One, PC & Mac - White /Green","thumbnail":"https://i5.walmartimages.com/seo/ASTRO-Gaming-A20-Wireless-Headset-Gen-2-for-Xbox-Series-X-S-Xbox-One-PC-Mac-White-Green_1493b1c5-1d51-48de-91a5-f5214637de47.ddc389217e5028a982bc8f33d601f833.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF","rating":4.2,"reviews":629,"seller_name":"Walmart.com","out_of_stock":false,"sponsored":true,"primary_offer":{"offer_price":99,"was_price":139},"product_page_url":"https://www.walmart.com/ip/ASTRO-Gaming-A20-Wireless-Headset-Gen-2-for-Xbox-Series-X-S-Xbox-One-PC-Mac-White-Green/267146439"},{"us_item_id":"15937623026","product_id":"358ERNGVLOOQ","title":"AYEDLOE Wireless Gaming Headset for PS5, Switch, PC, Bluetooth PS5 Headset with Microphone Noise Cancelling, Stereo Sound, 45H+ Battery, Black","thumbnail":"https://i5.walmartimages.com/seo/UDH-Gaming-Headset-Black_04af649e-4f67-4dad-982a-f20e761ab5dd.0a46ceda1134458e299fc3591affad5c.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF","rating":4.4,"reviews":477,"seller_name":"PureGlow TECK","out_of_stock":false,"sponsored":true,"primary_offer":{"offer_price":29.99,"was_price":53.99},"product_page_url":"https://www.walmart.com/ip/UDH-Gaming-Headset-Black/15937623026"},{"us_item_id":"5229192348","product_id":"5X1IZF8WJAO3","title":"SteelSeries Arctis Nova 5P Wireless Gaming Headset—PS5, PS4, PC, Nintendo Switch, Mobile-Black","thumbnail":"https://i5.walmartimages.com/seo/SteelSeries-Arctis-Nova-5P-Wireless-Gaming-Headset-PlayStation-5-PlayStation-4-PC-Nintendo-Switch-Mobile-Black_bfc094b6-7662-4248-9bc8-dded394a0f65.a33cf1bd92e85692b4911a8e6b97e8b1.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF","rating":4.5,"reviews":507,"seller_name":"Walmart.com","out_of_stock":false,"sponsored":true,"primary_offer":{"offer_price":149},"product_page_url":"https://www.walmart.com/ip/SteelSeries-Arctis-Nova-5P-Wireless-Gaming-Headset-PS5-PS4-PC-Switch-Mobile-Black/5229192348"},{"us_item_id":"1277044012","product_id":"1L5MFTTFM28N","title":"Gaming Headset for PS4 PS5 Xbox One Switch with Noise Cancelling Stereo Bass Surround Sound","thumbnail":"https://i5.walmartimages.com/seo/Gaming-Headset-for-PS4-PS5-Xbox-One-Switch-PC-with-Noise-Cancelling-Stereo-Bass-Surround-Sound_fef912bd-aeb0-4c4c-9aa4-ebecc9d18c85.81c0c97ef19f952cd1ee6d2e0e39d9e1.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF","rating":4.4,"reviews":457,"seller_name":"GVDV","out_of_stock":false,"sponsored":false,"primary_offer":{"offer_price":9.99,"was_price":11.99},"product_page_url":"https://www.walmart.com/ip/Gaming-Headset-for-PS4-PS5-Xbox-One-Switch-PC-with-Noise-Cancelling-Stereo-Bass-Surround-Sound/1277044012"},{"us_item_id":"477503960","product_id":"7CX4B7YCRV3C","title":"Turtle Beach Recon 70 Wired Gaming Headset Multiplatform, Arctic Camo","thumbnail":"https://i5.walmartimages.com/seo/Turtle-Beach-Recon-70-Headset-Multiplatform-Arctic-Camo_786717fb-44dc-43ee-8465-0e34ffecadcf.c6da63e69897c25fe89dafae25c08203.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF","rating":4.3,"reviews":4616,"seller_name":"Walmart.com","out_of_stock":false,"sponsored":false,"primary_offer":{"offer_price":41.94,"was_price":59.99},"product_page_url":"https://www.walmart.com/ip/Turtle-Beach-Recon-70-Arctic-Camo-Multiplatform-Gaming-Headset-for-Xbox-X-Xbox-S-PS5-PS4-NSW-Mobile-PC/477503960"},{"us_item_id":"1782810299","product_id":"3DK8OD00BOX3","title":"HyperX Cloud III – Wired Gaming Headset, PC, PS5, Xbox Series X|S, Angled 53mm Drivers, DTS Spatial Audio, Memory Foam, Durable Frame, Ultra-Clear 10mm Mic, USB-C, USB-A, 3.5mm – Black/Red","thumbnail":"https://i5.walmartimages.com/seo/HyperX-Cloud-III-Wired-Gaming-Headset-Black-Red_3b46fa84-9343-452a-8ff4-bb1fd2101a45.19ed267250d7573c51f8ba4b99bcf5bd.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF","rating":4.4,"reviews":830,"seller_name":"Walmart.com","out_of_stock":false,"sponsored":true,"primary_offer":{"offer_price":79,"was_price":99},"product_page_url":"https://www.walmart.com/ip/HyperX-Cloud-III-Wired-Gaming-Headset-Black-Red/1782810299"},{"us_item_id":"12106519766","product_id":"6GW7XEK6C5HK","title":"RIG 400 GEN2 HX Gaming Headset for Xbox Series X/S, Xbox One, PlayStation 4|5, Mobile & PC with Dolby Atmos, Urban Camo","thumbnail":"https://i5.walmartimages.com/seo/RIG-400-HX-G2-Urban-Camo-ATMOS-Gaming-Headset-for-Xbox_7c3fcd1d-5767-43ca-98ee-2419074497a1.71d7619c348829b4915bf11b795fdf0f.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF","rating":4.4,"reviews":547,"seller_name":"Walmart.com","out_of_stock":false,"sponsored":true,"primary_offer":{"offer_price":43.88},"product_page_url":"https://www.walmart.com/ip/RIG-400-HX-G2-Urban-Camo-ATMOS-Gaming-Headset-for-Xbox/12106519766"},{"us_item_id":"5032784714","product_id":"19I9XKN9CCGD","title":"SteelSeries Arctis Nova 5 Wireless Gaming Headset—PC, PS5, PS4, Nintendo Switch, Mobile, Black","thumbnail":"https://i5.walmartimages.com/seo/SteelSeries-Arctis-Nova-5-Wireless-Gaming-Headset-PC-Playstation-5-Playstation-4-Nintendo-Switch-Mobile-Black_962fd9e9-b142-4064-bc35-05d4e228539a.7f5184815c71cbc147bd6786addf47a7.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF","rating":4.5,"reviews":472,"seller_name":"Walmart.com","out_of_stock":false,"sponsored":true,"primary_offer":{"offer_price":129.99},"product_page_url":"https://www.walmart.com/ip/SteelSeries-Arctis-Nova-5-Wireless-Gaming-Headset-PC-Playstation-5-Playstation-4-Nintendo-Switch-Mobile-Black/5032784714"},{"us_item_id":"1462448997","product_id":"1B4M5KY48T7L","title":"Razer Kraken V3 X Wired USB Type A Gaming Headset for PC, PS5, PS4, Chroma RGB, Black, 0.62lb","thumbnail":"https://i5.walmartimages.com/seo/Razer-Kraken-V3-X-Wired-USB-Type-A-Gaming-Headset-for-PC-PS5-PS4-Chroma-RGB-Black-0-62-lb_109da472-c3aa-454e-abfc-4ec47a5458db.36609ab1803f9b3d935a8e5abaa9d7d5.jpeg","rating":4.2,"reviews":1241,"seller_name":"Walmart.com","out_of_stock":false,"sponsored":false,"primary_offer":{"offer_price":49.98},"product_page_url":"https://www.walmart.com/ip/Razer-Kraken-V3-X-Wired-USB-Type-A-Gaming-Headset-for-PC-PS5-PS4-Chroma-RGB-Black-0-62-lb/1462448997"},{"us_item_id":"5332733906","product_id":"596UW3IHZ3KW","title":"Ecomoment Gaming Headset for PC, PS5, Xbox Series X/S, Xbox One, Switch, MAC, Xbox Headset with Noise Canceling Microphone, Wired Over-Ear Gaming Headphones with LED Light & 7.1 Surround Sound","thumbnail":"https://i5.walmartimages.com/seo/Ecomoment-Gaming-Headset-PC-PS5-Xbox-Series-X-S-Xbox-One-Switch-MAC-Xbox-Headset-Noise-Canceling-Microphone-Wired-Over-Ear-Gaming-Headphones-LED-Ligh_7d917f45-caeb-420a-9ec2-ec1d3515782d.62a958573e646900d2cc6f8b1d69c730.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF","rating":4.3,"reviews":805,"seller_name":"JTZCTECK","out_of_stock":false,"sponsored":false,"primary_offer":{"offer_price":10.99,"was_price":49.99},"product_page_url":"https://www.walmart.com/ip/Ecomoment-Gaming-Headset-PC-PS5-Xbox-Series-X-S-Xbox-One-Switch-MAC-Xbox-Headset-Noise-Canceling-Microphone-Wired-Over-Ear-Gaming-Headphones-LED-Ligh/5332733906"},{"us_item_id":"810488864","product_id":"4K831KG79U39","title":"RIG 800 PRO HS Gaming Headset For PlayStation","thumbnail":"https://i5.walmartimages.com/seo/RIG-800-PRO-HS-Gaming-Headset-For-PlayStation_27258757-ea84-4d66-b04f-bb1bb6ff992b.bcc604d6515103c432700dfd58e4cac2.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF","rating":4.4,"reviews":869,"seller_name":"Walmart.com","out_of_stock":false,"sponsored":true,"primary_offer":{"offer_price":79.97,"was_price":164},"product_page_url":"https://www.walmart.com/ip/RIG-800-PRO-HS-Gaming-Headset-For-PlayStation/810488864"},{"us_item_id":"829750319","product_id":"4F5WYDGFBJVP","title":"SteelSeries Arctis Nova 1 Multi-System Gaming Headset—Hi-Fi Drivers—360° Spatial Audio—AirWeave Memory Foam—Sonar—Ultra Lightweight—Noise-Cancelling Mic—PC, PS5, PS4, Switch, Xbox","thumbnail":"https://i5.walmartimages.com/seo/SteelSeries-Arctis-Nova-1-Wired-Gaming-Headset-for-PC-with-3-5mm-Jack-Black_ee0222d2-9f99-4a74-b5b9-bca284f562e5.1d9e9b09eb7979d257a5ee34a7137990.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF","rating":4.1,"reviews":1462,"seller_name":"Walmart.com","out_of_stock":false,"sponsored":true,"primary_offer":{"offer_price":36.49,"was_price":59.99},"product_page_url":"https://www.walmart.com/ip/SteelSeries-Arctis-Nova-1-Wired-Gaming-Headset-for-PC-with-3-5mm-Jack-Black/829750319"},{"us_item_id":"527818837","product_id":"31NMS9OBVZ1L","title":"RUNMUS Gaming Headset with Noise Canceling Mic for PS4, Xbox One, PC, Mobile, 7.1 Surround Sound Headphone with LED Light for Kids Adults","thumbnail":"https://i5.walmartimages.com/seo/RUNMUS-Gaming-Headset-with-Noise-Canceling-Mic-for-PS4-Xbox-One-PC-Mobile-7-1-Surround-Sound-Headphone-with-LED-Light-for-Kids-Adults_a988d1c2-ddcf-4f1c-a23c-6345c6f11eec.b39eff644b60c296175a6c9bb6a4f33b.png","rating":3.9,"reviews":1176,"seller_name":"GVDV","out_of_stock":false,"sponsored":false,"primary_offer":{"offer_price":17.99,"was_price":19.99},"product_page_url":"https://www.walmart.com/ip/RUNMUS-Gaming-Headset-with-Noise-Canceling-Mic-for-PS4-Xbox-One-PC-Mobile-7-1-Surround-Sound-Headphone-with-LED-Light-for-Kids-Adults/527818837"},{"us_item_id":"3610571110","product_id":"3X3CNA4EEFAT","title":"RIG 600 PRO HX Urban Camo Dual Wireless Gaming Headset with Bluetooth-Xbox, Playstation, Nintendo Switch and PC","thumbnail":"https://i5.walmartimages.com/seo/RIG-600-PRO-HX-Urban-Camo-Dual-Wireless-Gaming-Headset-with-Bluetooth-Xbox-Playstation-Nintendo-Switch-and-PC_867cb410-8718-4333-a5c9-dff29319131a.840f595c634c8b7e083da28567fd35d4.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF","rating":4.3,"reviews":880,"seller_name":"Walmart.com","out_of_stock":false,"sponsored":true,"primary_offer":{"offer_price":59.99,"was_price":94},"product_page_url":"https://www.walmart.com/ip/RIG-600-PRO-HX-Urban-Camo-Dual-Wireless-Gaming-Headset-with-Bluetooth-Xbox-Playstation-Nintendo-Switch-and-PC/3610571110"},{"us_item_id":"14291909633","product_id":"463CYNED5KTL","title":"KBEAR K01 Iems For Gaming, Wired Gaming Earbuds, Noise Cancelling In Ear Headphones With 3.5mm Plug, HIFI Immersive Bass In Ear Monitor Wired Earphones For Computer Laptop Music","thumbnail":"https://i5.walmartimages.com/seo/KBEAR-K01-Iems-Gaming-Wired-Gaming-Earbuds-Noise-Cancelling-Ear-Headphones-3-5mm-Plug-HIFI-Immersive-Bass-Ear-Monitor-Wired-Earphones-Computer-Laptop_26ad6f4c-e585-4dcc-b5aa-5cd70dd45ee6.8b6e67e9a68e1490c45c61463d051f7b.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF","rating":3.9,"reviews":10,"seller_name":"Yinyoostore","out_of_stock":false,"sponsored":false,"primary_offer":{"offer_price":14.99,"was_price":22.76},"product_page_url":"https://www.walmart.com/ip/KBEAR-K01-Iems-Gaming-Wired-Gaming-Earbuds-Noise-Cancelling-Ear-Headphones-3-5mm-Plug-HIFI-Immersive-Bass-Monitor-Earphones-Computer-Laptop/14291909633"},{"us_item_id":"1496314895","product_id":"50FROEDJIDV3","title":"Skullcandy Jib X T Wired in-Ear Earbuds with Microphone, Black","thumbnail":"https://i5.walmartimages.com/seo/Skullcandy-Jib-XT-Wired-in-Ear-Earbuds-with-Microphone-Black_fc198c82-c642-47b8-8849-8065eb18c54d.190781ab013ab0beab6bb8541e0342d0.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF","rating":4.4,"reviews":3483,"seller_name":"Walmart.com","out_of_stock":false,"sponsored":false,"primary_offer":{"offer_price":8.88},"product_page_url":"https://www.walmart.com/ip/Skullcandy-Jib-XT-Wired-in-Ear-Earbuds-with-Microphone-Black/1496314895"},{"us_item_id":"12400053625","product_id":"6R5CFOZC1WKI","title":"KZ EDX Pro in Ear Monitor Headphones KZ IEM Earphones Dual DD HiFi Stereo Sound Stage Earphones Wired Noise Cancelling Gaming Earbuds for Musicians Singer Audiophiles","thumbnail":"https://i5.walmartimages.com/seo/KZ-EDX-Pro-Ear-Monitor-Headphones-KZ-IEM-Earphones-Dual-DD-HiFi-Stereo-Sound-Stage-Earphones-Wired-Noise-Cancelling-Gaming-Earbuds-Musicians-Singer-A_fcdebc15-0560-4de7-8ffd-d4569f7604ab.62c6ccf5efc5eb85b6bd03dda4459809.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF","rating":4.7,"reviews":23,"seller_name":"Yinyoostore","out_of_stock":false,"sponsored":false,"primary_offer":{"offer_price":17.99,"was_price":22.76},"product_page_url":"https://www.walmart.com/ip/KZ-EDX-Pro-Ear-Monitor-Headphones-KZ-IEM-Earphones-Dual-DD-HiFi-Stereo-Sound-Stage-Earphones-Wired-Noise-Cancelling-Gaming-Earbuds-Musicians-Singer-A/12400053625"},{"us_item_id":"466663649","product_id":"30HCZGWBGIFK","title":"ASTRO A10 Gaming Headset Gen 2 Wired Headset-Over-ear gaming headphones with flip-to-mute microphone, 32mm drivers, compatible with Xbox, PC, Black","thumbnail":"https://i5.walmartimages.com/seo/ASTRO-A10-Gaming-Headset-Gen-2-Wired-Headset-Over-ear-gaming-headphones-flip-to-mute-microphone-32-mm-drivers-compatible-Xbox-PC-Black_7002fc62-5672-4b78-ae5c-6640e0a53329.99347f31884bbbf7c1fba8f327c4ece7.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF","rating":3.7,"reviews":1198,"seller_name":"AstockDeals","out_of_stock":false,"sponsored":false,"primary_offer":{"offer_price":32.99,"was_price":69},"product_page_url":"https://www.walmart.com/ip/ASTRO-A10-Gaming-Headset-Gen-2-Wired-Headset-Over-ear-gaming-headphones-flip-to-mute-microphone-32-mm-drivers-compatible-Xbox-PC-Black/466663649"},{"us_item_id":"47069363","product_id":"343HOD32S3XH","title":"Turtle Beach Recon 50 Wired Gaming Headset for Xbox Series X|S & Xbox One, Black","thumbnail":"https://i5.walmartimages.com/seo/Turtle-Beach-Recon-50-Headset-Xbox-Black_83fbfacf-4ab6-4943-814c-09ef6f5f2f97.8449a39657dc8dfd67474979c236f7ee.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF","rating":4.2,"reviews":6907,"seller_name":"Walmart.com","out_of_stock":false,"sponsored":false,"primary_offer":{"offer_price":29.95,"was_price":39.99},"product_page_url":"https://www.walmart.com/ip/Turtle-Beach-Ear-Force-Recon-50X-Gaming-Headset/47069363"},{"us_item_id":"12721950575","product_id":"5U0U50BZUU1V","title":"FONHAID Gaming Headset for Switch, Gaming Headphones with Microphone Noise-Canceling for PS5, Switch, PC, Wired Headset with Microhphone, Red & Blue","thumbnail":"https://i5.walmartimages.com/seo/Artsic-Gaming-Headset-Switch-Gaming-Headphones-Noise-Canceling-Mic-P5-P4-Switch-PC-Wired-PC-Gaming-Headset-Immersive-Sound-Red-Blue_54a02cba-8c05-4676-94b9-dcf89a67225c.8df501d6d8fd57cc5a411b3e3f640f2a.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF","rating":4.4,"reviews":209,"seller_name":"FONHAID","out_of_stock":false,"sponsored":true,"primary_offer":{"offer_price":13.89,"was_price":33.99},"product_page_url":"https://www.walmart.com/ip/Artsic-Gaming-Headset-Switch-Gaming-Headphones-Noise-Canceling-Mic-P5-P4-Switch-PC-Wired-PC-Gaming-Headset-Immersive-Sound-Red-Blue/12721950575"},{"us_item_id":"1966548918","product_id":"4CB14BPC1ODL","title":"Razer Barracuda X Wireless Gaming Headset for PC, PS5, PS4, NS, Mobile, 2.4GHz, Bluetooth, 250g, White","thumbnail":"https://i5.walmartimages.com/seo/Razer-Barracuda-X-Wireless-Gaming-Headset-for-PC-PS5-PS4-NS-Mobile-2-4GHz-Bluetooth-250g-White_8d2bb6f6-2eae-4c65-9a84-b4bdeccbc0d2.a06642af968ba22d000fc4de140e371b.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF","rating":4.3,"reviews":886,"seller_name":"Walmart.com","out_of_stock":false,"sponsored":false,"primary_offer":{"offer_price":99,"was_price":129.99},"product_page_url":"https://www.walmart.com/ip/Razer-Barracuda-X-Wireless-Gaming-Headset-for-PC-PS5-PS4-NS-Mobile-2-4GHz-Bluetooth-250g-White/1966548918"},{"us_item_id":"416099849","product_id":"6PJUOFILHVZ5","title":"Onn Wired Earphones with Mic and 3.5mm Jack, Black-Comfortable Silicone Ear Tips, High-Quality Sound","thumbnail":"https://i5.walmartimages.com/seo/onn-Wired-Earphones-with-Mic-3-5mm-jack-Black_860f830f-3d43-40d0-8a16-145854bfb50d.f324a820171c5fd5bcd7692bedc18232.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF","rating":4.3,"reviews":3256,"seller_name":"Walmart.com","out_of_stock":false,"sponsored":false,"primary_offer":{"offer_price":4.88},"product_page_url":"https://www.walmart.com/ip/onn-Wired-Earphones-with-Mic-3-5mm-jack-Black/416099849"}];

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80";

function parseJson(value, fallback) {
  if (!value) {
    return fallback;
  }

  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function roundCurrency(value) {
  return Math.round(value * 100) / 100;
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function cleanText(raw = "") {
  const parser = new DOMParser();
  const doc = parser.parseFromString(`<body>${raw}</body>`, "text/html");
  const decoded = doc.body.textContent || "";

  return decoded
    .replace(/\u00E2\u20AC\u201D/g, "-")
    .replace(/\u00E2\u20AC\u201C/g, "-")
    .replace(/\u00E2\u20AC\u2122/g, "'")
    .replace(/\u00C2\u00B7/g, "|")
    .replace(/\s+/g, " ")
    .trim();
}

function detectPlatforms(title) {
  const platforms = [];

  if (title.includes("ps5")) platforms.push("PS5");
  if (title.includes("ps4")) platforms.push("PS4");
  if (title.includes("xbox")) platforms.push("Xbox");
  if (title.includes("pc")) platforms.push("PC");
  if (title.includes("switch")) platforms.push("Switch");
  if (title.includes("mobile")) platforms.push("Mobile");
  if (title.includes("mac")) platforms.push("Mac");

  return platforms;
}

function pickBadge(item, price, oldPrice, rating, reviews) {
  if (item.out_of_stock) {
    return "Sold out";
  }

  if (oldPrice && oldPrice > price) {
    return `Save ${formatCurrency(oldPrice - price)}`;
  }

  if (rating >= 4.5 && reviews >= 300) {
    return "Top rated";
  }

  if (item.sponsored) {
    return "Featured";
  }

  if (price <= 40) {
    return "Value pick";
  }

  return "Hot right now";
}

function buildDescription(item, seller, title, platforms, isWireless, isWired) {
  if (item.description) {
    return cleanText(item.description);
  }

  const soundLine = title.includes("noise cancelling")
    ? "Noise cancelling audio"
    : title.includes("surround")
      ? "Surround-ready sound"
      : title.includes("stereo")
        ? "Stereo-tuned playback"
        : "Immersive everyday audio";

  const connectionLine = isWireless
    ? "wireless freedom"
    : isWired
      ? "low-latency wired performance"
      : "multi-device gaming comfort";

  const platformLine = platforms.length
    ? `for ${platforms.slice(0, 3).join(", ")}`
    : "for work, play, and long listening sessions";

  return `${soundLine} with ${connectionLine}, curated by ${seller} ${platformLine}.`;
}

export function getStorage(key, fallback = []) {
  return parseJson(localStorage.getItem(key), fallback);
}

export function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function updateNavCounts({ cartCountEl, wishlistCountEl }) {
  const cart = getStorage(STORAGE_KEYS.cart, []);
  const wishlist = getStorage(STORAGE_KEYS.wishlist, []);

  if (cartCountEl) {
    cartCountEl.textContent = String(cart.length);
  }

  if (wishlistCountEl) {
    wishlistCountEl.textContent = String(wishlist.length);
  }
}

export function showToast(toastEl, message, duration = 1800) {
  if (!toastEl) {
    return;
  }

  toastEl.textContent = message;
  toastEl.classList.remove("hidden");
  toastEl.classList.add("visible");

  window.clearTimeout(window.__headphoneToastTimeout);
  window.__headphoneToastTimeout = window.setTimeout(() => {
    toastEl.classList.remove("visible");
    toastEl.classList.add("hidden");
  }, duration);
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

function updateThemeButton(button, theme) {
  if (!button) {
    return;
  }

  const nextModeLabel = theme === "dark" ? "Light mode" : "Dark mode";
  button.textContent = nextModeLabel;
  button.setAttribute("aria-label", `Switch to ${nextModeLabel.toLowerCase()}`);
}

export function bindThemeToggle(button) {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme) || "light";
  applyTheme(savedTheme);
  updateThemeButton(button, savedTheme);

  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem(STORAGE_KEYS.theme, nextTheme);
    updateThemeButton(button, nextTheme);
  });
}

export function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(Number(value || 0));
}

export function normalizeProduct(item, index) {
  const name = cleanText(item.title || `Headphone ${index + 1}`);
  const title = name.toLowerCase();
  const seller = cleanText(item.seller_name || "Audio Select");
  const price = roundCurrency(
    Number(item.primary_offer?.offer_price ?? item.price ?? 0),
  );
  const oldPriceCandidate = roundCurrency(
    Number(item.primary_offer?.was_price ?? item.was_price ?? 0),
  );
  const oldPrice = oldPriceCandidate > price ? oldPriceCandidate : null;
  const rating = roundCurrency(Number(item.rating ?? 0));
  const reviews = Number(item.reviews ?? 0);
  const isWireless = title.includes("wireless") || title.includes("bluetooth");
  const isWired = title.includes("wired") || title.includes("3.5mm");
  const isGaming =
    title.includes("gaming") ||
    title.includes("ps5") ||
    title.includes("xbox") ||
    title.includes("switch");
  const platforms = detectPlatforms(title);
  const stockLabel = item.out_of_stock ? "Out of stock" : "Ready to ship";
  const shippingLabel =
    item.free_shipping_with_walmart_plus || item.free_shipping
      ? "Shipping available"
      : "Store delivery";
  const badge = pickBadge(item, price, oldPrice, rating, reviews);
  const tags = unique([
    isWireless ? "Wireless" : isWired ? "Wired" : "Hybrid",
    isGaming ? "Gaming" : "Everyday",
    platforms[0],
    price >= 100 ? "Premium" : price <= 40 ? "Budget" : "Popular",
  ]);
  const featuredScore =
    rating * 20 +
    Math.min(reviews / 50, 30) +
    (item.sponsored ? 6 : 0) +
    (oldPrice ? 8 : 0);

  return {
    id: item.product_id || item.us_item_id || `audio-${index + 1}`,
    name,
    description: buildDescription(
      item,
      seller,
      title,
      platforms,
      isWireless,
      isWired,
    ),
    price,
    oldPrice,
    rating,
    reviews,
    seller,
    image: item.thumbnail || FALLBACK_IMAGE,
    badge,
    tags,
    platforms,
    link: item.product_page_url || "#",
    stockLabel,
    shippingLabel,
    isOutOfStock: Boolean(item.out_of_stock),
    isWireless,
    isWired,
    isGaming,
    isBudget: price <= 40,
    isPremium: price >= 100,
    savings: oldPrice ? roundCurrency(oldPrice - price) : 0,
    featuredScore,
  };
}

async function fetchSource(source) {
  const response = await fetch(source, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Could not load ${source}`);
  }

  return response.json();
}

export async function loadCatalog() {
  // First try to load from external sources
  for (const source of DATA_SOURCES) {
    try {
      const data = await fetchSource(source);
      const items = Array.isArray(data)
        ? data
        : Array.isArray(data.organic_results)
          ? data.organic_results
          : Array.isArray(data.products)
            ? data.products
            : [];

      if (items.length) {
        return items.map(normalizeProduct);
      }
    } catch {
      continue;
    }
  }

  // Fallback to embedded data for GitHub Pages compatibility
  return EMBEDDED_PRODUCTS.map(normalizeProduct);
}

export function addUniqueProduct(product, key) {
  const items = getStorage(key, []);

  if (items.some((item) => item.id === product.id)) {
    return {
      added: false,
      message: `${product.name} is already saved.`,
    };
  }

  const nextItems = [...items, product];
  setStorage(key, nextItems);

  return {
    added: true,
    message:
      key === STORAGE_KEYS.cart
        ? `${product.name} added to cart.`
        : `${product.name} added to wishlist.`,
  };
}

export function removeStoredProduct(key, productId) {
  const items = getStorage(key, []);
  const nextItems = items.filter((item) => item.id !== productId);
  setStorage(key, nextItems);
  return nextItems;
}

export function clearStoredProducts(key) {
  setStorage(key, []);
}

export function saveBuyNowPayload(payload) {
  setStorage(STORAGE_KEYS.buyNow, payload);
}

export function getBuyNowPayload() {
  return getStorage(STORAGE_KEYS.buyNow, null);
}

export function clearBuyNowPayload() {
  localStorage.removeItem(STORAGE_KEYS.buyNow);
}

export function calculateOrderTotals(items) {
  const safeItems = Array.isArray(items) ? items : [];
  const subtotal = roundCurrency(
    safeItems.reduce((sum, item) => sum + Number(item.price || 0), 0),
  );
  const estimatedSavings = roundCurrency(
    safeItems.reduce((sum, item) => sum + Number(item.savings || 0), 0),
  );
  const shipping = safeItems.length === 0 ? 0 : subtotal >= 150 ? 0 : 11.99;
  const tax = roundCurrency(subtotal * 0.08);
  const total = roundCurrency(subtotal + shipping + tax);

  return {
    itemCount: safeItems.length,
    subtotal,
    estimatedSavings,
    shipping,
    tax,
    total,
  };
}

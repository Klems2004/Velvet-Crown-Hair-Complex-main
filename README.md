# Velvet Crown Hair Complex (sample website)

Plain HTML, CSS and JavaScript. No installation.

**Pages:** `index.html` (Home), `shop.html` (Shop), `visit.html` (Visit us)
**Shared files:** `style.css`, `script.js`, and the `images/` folder (keep it next to the pages)

## Run it
Open the folder in VS Code and use Live Server on `index.html`.
If a yellow bar says "script.js did not load", rename the file to exactly `script.js` (not `script (1).js`).

## Change the business details (one place)
Open `script.js` and edit `CONFIG` at the top: name, phone, WhatsApp number (country code + number, no "+", no leading 0), email, address, map search, opening hours and the form address.
Opening hours are numbers (minutes after midnight). 9 * 60 is 9:00 am, 19 * 60 is 7:00 pm. The "Open now" message follows them.

## Change products, types and shops
Still in `script.js`, in section 2: `PRODUCTS`, `CATEGORIES` and `SHOPS`. Copy one line, change it, save. Prices, names and descriptions are sample content.
To add a product: add a line to `PRODUCTS` and put its picture in `images/`.

## Pictures
The wigs, the hero picture and the Wigs, Frontals and Braids category cards use photos (`images/wig-*.jpg`, `hero.jpg`, `cat-*.jpg`). Bundles, closures, braid packs, hair care and the complex picture are still drawings.
To replace one: save your photo in `images/` (portrait 5:6, about 800 x 960 pixels, under 300 KB) and change the file name in the product's `img` field in `script.js`. For the hero or the complex picture, change the file name in `index.html`.
Only use photos you took, or that you have permission or a licence to use, and only show people who agreed to it.

## Colours and fonts
Top of `style.css` under `:root`.

## The basket
Customers add hair to a basket and tap "Order on WhatsApp". The page opens a WhatsApp chat with the list and total already written. No payment or personal details are taken on the website. The basket is saved in the visitor's browser only.

## Contact form
Paste a Formspree address into `contactEndpoint`. While empty, the form honestly says the message was not sent and offers WhatsApp. It only says "received" when the server answers with success.

## Before going live
Replace the sample shops, prices and contact details, set `showSampleNotice: false`, add real photos, and check the phone number, WhatsApp number and map.

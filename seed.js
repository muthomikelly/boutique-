require('dotenv').config();
const { DatabaseSync } = require('node:sqlite');
const path = require('path');

const db = new DatabaseSync(path.resolve('./data/boutique.db'));

for (const sql of [
  'ALTER TABLE products ADD COLUMN sizes TEXT',
  'ALTER TABLE products ADD COLUMN colors TEXT',
  'ALTER TABLE products ADD COLUMN item_type TEXT',
  'ALTER TABLE order_items ADD COLUMN color TEXT',
]) {
  try { db.exec(sql); } catch {}
}

const products = [
  // ── Women ──────────────────────────────────────────────────────────────────
  { name: 'Classic White Tee', description: 'Timeless white cotton t-shirt. Soft, breathable and perfect for any occasion.', price: 24.99, stock: 50, category: 'Women', sizes: 'XS,S,M,L,XL', image_url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80' },
  { name: 'Floral Summer Dress', description: 'Light and breezy floral dress, perfect for warm days and special occasions.', price: 49.99, stock: 20, category: 'Women', sizes: 'XS,S,M,L,XL', image_url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80' },
  { name: 'High Waist Skirt', description: 'Elegant high waist midi skirt. Versatile piece that pairs with anything.', price: 34.99, stock: 25, category: 'Women', sizes: 'XS,S,M,L,XL', image_url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80' },
  { name: 'Oversized Hoodie', description: 'Cozy oversized hoodie in soft fleece. Great for lounging or casual outings.', price: 44.99, stock: 40, category: 'Women', sizes: 'S,M,L,XL,XXL', image_url: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80' },
  { name: 'Leather Handbag', description: 'Premium genuine leather handbag with multiple compartments. Elegant and practical.', price: 89.99, stock: 15, category: 'Women', sizes: null, image_url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80' },
  { name: 'Silk Blouse', description: 'Luxurious silk blouse with a relaxed fit. Perfect for office or evening wear.', price: 54.99, stock: 18, category: 'Women', sizes: 'XS,S,M,L,XL', image_url: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600&q=80' },
  { name: 'Ankle Boots', description: 'Stylish ankle boots with a low block heel. Faux leather, easy to wear.', price: 69.99, stock: 22, category: 'Women', sizes: '36,37,38,39,40,41', image_url: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80' },
  { name: 'Gold Hoop Earrings', description: 'Classic gold hoop earrings. Lightweight and perfect for everyday wear.', price: 19.99, stock: 60, category: 'Women', sizes: null, image_url: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80' },
  { name: 'Silk Scarf', description: 'Luxurious silk scarf with a vibrant print. Wear it around your neck or in your hair.', price: 29.99, stock: 35, category: 'Women', sizes: null, image_url: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80' },
  { name: 'Blazer Jacket', description: 'Sharp tailored blazer in charcoal grey. Ideal for work or smart casual looks.', price: 79.99, stock: 18, category: 'Women', sizes: 'XS,S,M,L,XL', image_url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80' },

  // ── Men ─────────────────────────────────────────────────────────────────────
  { name: "Men's Slim Fit Jeans", description: 'Modern slim fit jeans in classic blue denim. Comfortable stretch fabric.', price: 59.99, stock: 30, category: 'Men', sizes: '28,30,32,34,36,38', image_url: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80' },
  { name: "Men's Polo Shirt", description: 'Classic polo shirt in premium piqué cotton. Smart casual essential.', price: 34.99, stock: 45, category: 'Men', sizes: 'S,M,L,XL,XXL', image_url: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&q=80' },
  { name: "Men's Chino Pants", description: 'Versatile chino pants in khaki. Perfect for office or weekend wear.', price: 49.99, stock: 28, category: 'Men', sizes: '28,30,32,34,36,38', image_url: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80' },
  { name: "Men's Leather Belt", description: 'Genuine leather belt with a classic buckle. A wardrobe staple.', price: 24.99, stock: 50, category: 'Men', sizes: 'S,M,L,XL', image_url: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&q=80' },
  { name: "Men's Oxford Shoes", description: 'Classic Oxford shoes in genuine leather. Timeless and sophisticated.', price: 89.99, stock: 15, category: 'Men', sizes: '39,40,41,42,43,44,45', image_url: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&q=80' },
  { name: "Men's Bomber Jacket", description: 'Stylish bomber jacket with ribbed cuffs. A modern streetwear essential.', price: 74.99, stock: 20, category: 'Men', sizes: 'S,M,L,XL,XXL', image_url: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80' },
  { name: "Men's Watch", description: 'Minimalist stainless steel watch. Elegant design for any occasion.', price: 119.99, stock: 12, category: 'Men', sizes: null, image_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80' },
  { name: "Men's Graphic Tee", description: 'Bold graphic tee in 100% cotton. Express your style.', price: 22.99, stock: 55, category: 'Men', sizes: 'S,M,L,XL,XXL', image_url: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80' },

  // ── Kids ─────────────────────────────────────────────────────────────────────
  { name: 'Kids Denim Overalls', description: 'Adorable denim overalls for little ones. Durable and easy to wash.', price: 29.99, stock: 35, category: 'Kids', sizes: '2Y,3Y,4Y,5Y,6Y,7Y,8Y', image_url: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&q=80' },
  { name: 'Kids Floral Dress', description: 'Sweet floral dress for girls. Soft cotton, perfect for any occasion.', price: 24.99, stock: 30, category: 'Kids', sizes: '2Y,3Y,4Y,5Y,6Y,7Y,8Y', image_url: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&q=80' },
  { name: 'Kids Sneakers', description: 'Colorful and comfortable sneakers for active kids. Non-slip sole.', price: 34.99, stock: 40, category: 'Kids', sizes: '25,26,27,28,29,30,31,32', image_url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80' },
  { name: 'Kids Hoodie Set', description: 'Matching hoodie and jogger set. Cozy and perfect for playtime.', price: 39.99, stock: 25, category: 'Kids', sizes: '2Y,3Y,4Y,5Y,6Y,7Y,8Y', image_url: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&q=80' },
  { name: 'Kids School Backpack', description: 'Spacious and lightweight backpack with fun prints. Fits all school essentials.', price: 27.99, stock: 45, category: 'Kids', sizes: null, image_url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80' },
  { name: 'Kids Raincoat', description: 'Waterproof raincoat in bright colors. Keep your little one dry and stylish.', price: 32.99, stock: 20, category: 'Kids', sizes: '2Y,3Y,4Y,5Y,6Y,7Y,8Y', image_url: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80' },

  // ── Cosmetics ────────────────────────────────────────────────────────────────
  { name: 'Matte Lipstick Set', description: 'Set of 6 long-lasting matte lipsticks in bold shades. Smooth and comfortable.', price: 29.99, stock: 60, category: 'Cosmetics', sizes: null, image_url: 'https://images.unsplash.com/photo-1586495777744-4e6232bf2f9a?w=600&q=80' },
  { name: 'Foundation SPF 30', description: 'Lightweight full-coverage foundation with SPF 30. Natural finish for all skin tones.', price: 39.99, stock: 40, category: 'Cosmetics', sizes: null, image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80' },
  { name: 'Eyeshadow Palette', description: '18-shade eyeshadow palette with matte and shimmer finishes. Highly pigmented.', price: 34.99, stock: 35, category: 'Cosmetics', sizes: null, image_url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80' },
  { name: 'Skincare Gift Set', description: 'Complete skincare routine: cleanser, toner, serum and moisturizer. For all skin types.', price: 59.99, stock: 20, category: 'Cosmetics', sizes: null, image_url: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80' },
  { name: 'Perfume — Rose Oud', description: 'Luxurious eau de parfum with notes of rose, oud and vanilla. Long-lasting.', price: 74.99, stock: 18, category: 'Cosmetics', sizes: null, image_url: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&q=80' },
  { name: 'Nail Polish Collection', description: 'Set of 10 vibrant nail polishes. Quick-dry formula, chip-resistant.', price: 19.99, stock: 55, category: 'Cosmetics', sizes: null, image_url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80' },
  { name: 'Mascara & Liner Duo', description: 'Volumizing mascara and precision liner. Waterproof formula for all-day wear.', price: 22.99, stock: 45, category: 'Cosmetics', sizes: null, image_url: 'https://images.unsplash.com/photo-1631214524020-3c69b4b74b4b?w=600&q=80' },
  { name: 'Hydrating Face Mask', description: 'Deep hydrating sheet mask with hyaluronic acid. Glowing skin in 20 minutes.', price: 14.99, stock: 80, category: 'Cosmetics', sizes: null, image_url: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80' },
];

// Clear old products (disable FK checks temporarily)
db.exec('PRAGMA foreign_keys = OFF');
db.exec('DELETE FROM order_items');
db.exec('DELETE FROM orders');
db.exec('DELETE FROM products');
db.exec("DELETE FROM sqlite_sequence WHERE name='products'");
db.exec("DELETE FROM sqlite_sequence WHERE name='orders'");
db.exec("DELETE FROM sqlite_sequence WHERE name='order_items'");
db.exec('PRAGMA foreign_keys = ON');

const stmt = db.prepare(
  `INSERT INTO products (name, description, price, stock, category, item_type, sizes, colors, image_url)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
);

function defaultColors(category) {
  if (category === 'Cosmetics') return 'Nude, Red, Pink, Berry';
  if (category === 'Kids') return 'Blue, Pink, Yellow, Green';
  if (category === 'Men') return 'Black, Navy, White, Grey';
  return 'Black, White, Pink, Red';
}

function defaultType(name) {
  const lower = name.toLowerCase();
  if (lower.includes('dress')) return 'Dress';
  if (lower.includes('tee') || lower.includes('shirt') || lower.includes('polo')) return 'Shirt';
  if (lower.includes('jeans') || lower.includes('pants')) return 'Pants';
  if (lower.includes('skirt')) return 'Skirt';
  if (lower.includes('hoodie')) return 'Hoodie';
  if (lower.includes('jacket') || lower.includes('blazer')) return 'Jacket';
  if (lower.includes('bag') || lower.includes('backpack')) return 'Bag';
  if (lower.includes('boots') || lower.includes('shoes') || lower.includes('sneakers')) return 'Shoes';
  if (lower.includes('earrings')) return 'Jewelry';
  if (lower.includes('scarf')) return 'Accessory';
  if (lower.includes('watch')) return 'Accessory';
  if (lower.includes('belt')) return 'Belt';
  if (lower.includes('lipstick')) return 'Lipstick';
  if (lower.includes('foundation')) return 'Foundation';
  if (lower.includes('eyeshadow')) return 'Eyeshadow';
  if (lower.includes('skincare') || lower.includes('mask')) return 'Skincare';
  if (lower.includes('perfume')) return 'Perfume';
  if (lower.includes('polish')) return 'Nail Polish';
  if (lower.includes('mascara') || lower.includes('liner')) return 'Mascara';
  return 'Item';
}

let added = 0;
for (const p of products) {
  stmt.run(
    p.name,
    p.description,
    p.price,
    p.stock,
    p.category,
    p.item_type || defaultType(p.name),
    p.sizes || null,
    p.colors || defaultColors(p.category),
    p.image_url
  );
  added++;
}

console.log(`✅ Seeded ${added} products across Women, Men, Kids and Cosmetics.`);

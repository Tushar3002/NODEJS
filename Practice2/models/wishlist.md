### 🔁 Quick Cheat Sheet
Relationship Type	Sequelize
One → Many	hasMany + belongsTo
Many → Many	belongsToMany
One → One	hasOne + belongsTo

### 🧩 Your architecture (final understanding)

✔ Orders → transactional data → direct relation → hasMany
✔ OrderItems → breakdown of order → direct relation → hasMany
✔ Wishlist → flexible mapping → needs join table → belongsToMany


# ⚡ Simple mental trick (very useful)
Question	If YES
Can A have many B?	→ maybe hasMany
Can B also have many A?	→ belongsToMany
Can B have only ONE A?	→ belongsTo




If you want to turn that content into a proper `.md` (Markdown) file, here’s how to do it cleanly and correctly.

### 1. Create a Markdown file

Just create a file with a `.md` extension, for example:

```
wishlist-guide.md
```

### 2. Paste and format your content

Your content is already close, but Markdown looks cleaner with headings and code blocks formatted like this:

````md
# 🧠 Step 4: How You Will Use It

## ✅ Add to Wishlist
```js
await Wishlist.create({
  userId: req.user.id,
  productId,
});
````

## ✅ Get Wishlist (IMPORTANT — using `as`)

```js
const user = await User.findByPk(req.user.id, {
  include: [
    {
      model: Product,
      as: "wishlist",
      attributes: ["id", "name", "price", "imageUrl"],
    },
  ],
});
```

## ✅ Remove from Wishlist

```js
await Wishlist.destroy({
  where: {
    userId: req.user.id,
    productId,
  },
});
```

---

# ⚠️ Step 5: Common Mistake (Don’t Do This)

❌ This will fail:

```js
include: [Product]
```

✔️ Must use:

```js
include: [{ model: Product, as: "wishlist" }]
```

---

# 🧠 Final Mental Model

```
User ────< Wishlist >──── Product
```

* No direct `User → Product` column
* `Wishlist` is the bridge

```



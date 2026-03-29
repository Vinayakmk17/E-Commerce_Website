import { useState } from "react";
import ProductCard from "../components/ProductCard";

function Home({ products, addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  // ✅ FILTER LOGIC
  const filteredProducts = products
    .filter((p) =>
      selectedCategory === "All" ? true : p.category === selectedCategory
    )
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div>

      {/* HERO */}
      <div
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8')",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "30px",
          fontWeight: "bold"
        }}
      >
        Welcome to Fashion Store 🛍️
      </div>

      {/* 🔍 SEARCH */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />
      </div>

      {/* CATEGORY */}
      <div style={{ padding: "20px" }}>
        <h2>Shop by Category</h2>

        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center"
        }}>
          <button onClick={() => setSelectedCategory("All")}>All</button>
          <button onClick={() => setSelectedCategory("Clothing")}>Men</button>
          <button onClick={() => setSelectedCategory("Footwear")}>Shoes</button>
          <button onClick={() => setSelectedCategory("Accessories")}>Accessories</button>
        </div>
      </div>

      {/* PRODUCTS */}
      <div style={{ padding: "20px" }}>
        <h2>{selectedCategory} Collection</h2>

        <div style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default Home;
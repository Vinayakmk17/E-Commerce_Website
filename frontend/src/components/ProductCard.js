import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        width: "220px",
        borderRadius: "10px",
        textAlign: "center",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}
    >
      <Link
        to={`/product/${product._id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <img
          src={product.image || "https://via.placeholder.com/200"}
          alt={product.name}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            borderRadius: "8px"
          }}
        />

        <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
      </Link>

      <p style={{ fontWeight: "bold", color: "green" }}>
        ₹ {product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        style={{
          backgroundColor: "#ff9900",
          border: "none",
          padding: "8px 12px",
          cursor: "pointer",
          borderRadius: "5px",
          marginTop: "10px"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
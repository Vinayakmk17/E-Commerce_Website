import { useParams } from "react-router-dom";

function ProductDetails({ products, addToCart }) {
  const { id } = useParams();

  const product = products.find((p) => p._id === id);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={{ padding: "20px", display: "flex", gap: "40px" }}>
      
      {/* IMAGE */}
      <div>
        <img
          src={product.image || "https://via.placeholder.com/300"}
          alt={product.name}
          style={{ width: "300px", borderRadius: "10px" }}
        />
      </div>

      {/* DETAILS */}
      <div>
        <h2>{product.name}</h2>
        <h3 style={{ color: "green" }}>₹ {product.price}</h3>
        <p>{product.description || "No description available"}</p>

        <button
          onClick={() => addToCart(product)}
          style={{
            padding: "10px 20px",
            backgroundColor: "orange",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
            marginTop: "10px"
          }}
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}

export default ProductDetails;
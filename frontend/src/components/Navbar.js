import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: "#333",
        color: "white"
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <h2>E-Commerce</h2>
      </Link>

      <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
        <h3>Cart 🛒 ({cartCount})</h3>
      </Link>
    </div>
  );
}

export default Navbar;
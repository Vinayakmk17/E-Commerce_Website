import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: "#131921",
        color: "white"
      }}
    >
      {/* LOGO */}
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <h2>🛍️ FashionStore</h2>
      </Link>

      {/* SEARCH BAR */}
      <input
        type="text"
        placeholder="Search..."
        style={{
          padding: "8px",
          width: "40%",
          borderRadius: "5px",
          border: "none"
        }}
      />

      {/* RIGHT SECTION */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        
        {/* USER */}
        {user ? (
          <>
            <span>Hi, {user.name}</span>

            <button
              onClick={() => {
                localStorage.removeItem("user");
                window.location.reload();
              }}
              style={{
                padding: "5px 10px",
                cursor: "pointer"
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" style={{ color: "white" }}>
            Login
          </Link>
        )}

        {/* CART */}
        <Link to="/cart" style={{ color: "white" }}>
          🛒 Cart ({cartCount})
        </Link>

      </div>
    </div>
  );
}

export default Navbar;
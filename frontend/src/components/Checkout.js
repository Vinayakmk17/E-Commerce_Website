import { useNavigate } from "react-router-dom";

function Checkout({ cart, setCart }) {
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const placeOrder = () => {
    alert("Order placed successfully! 🎉");
    setCart([]); // ✅ clear cart
    navigate("/"); // ✅ go to home
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item._id} style={{ marginBottom: "10px" }}>
              {item.name} - ₹ {item.price} × {item.qty}
            </div>
          ))}

          <h3>Total: ₹ {totalPrice}</h3>

          <h3>Enter Details</h3>

          <input placeholder="Name" /><br /><br />
          <input placeholder="Address" /><br /><br />

          <button
            onClick={placeOrder}
            style={{
              padding: "10px 20px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Checkout;
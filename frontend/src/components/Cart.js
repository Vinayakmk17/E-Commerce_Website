import { useNavigate } from "react-router-dom";

function Cart({ cart, increaseQty, decreaseQty, removeFromCart }) {
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item._id}
              style={{
                marginBottom: "15px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                background: "#fff"
              }}
            >
              <span>
                {item.name} - ₹ {item.price} × {item.qty}
              </span>

              <div style={{ marginTop: "5px" }}>
                <button onClick={() => increaseQty(item._id)}>+</button>
                <button onClick={() => decreaseQty(item._id)}>-</button>
                <button onClick={() => removeFromCart(item._id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h3>Total: ₹ {totalPrice}</h3>

          <button
            onClick={() => navigate("/checkout")}
            style={{
              padding: "10px 20px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px"
            }}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
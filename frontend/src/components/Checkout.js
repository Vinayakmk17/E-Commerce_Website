import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Checkout({ cart, setCart }) {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      alert("Please login first ❌");
      navigate("/login");
    }
  }, [user, navigate]);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const placeOrder = async () => {
    try {
      await axios.post("http://localhost:5000/api/orders", {
        user: user.email,
        items: cart,
        total: totalPrice
      });

      alert("Order placed successfully 🎉");

      setCart([]);
      navigate("/");

    } catch (error) {
      alert("Order failed ❌");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item._id}>
              {item.name} - ₹ {item.price} × {item.qty}
            </div>
          ))}

          <h3>Total: ₹ {totalPrice}</h3>

          <button onClick={placeOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Checkout;
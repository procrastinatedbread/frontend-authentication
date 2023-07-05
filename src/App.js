import "./styles.css";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";

import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Address from "./pages/Address";
import Login from "./pages/Login";
import { useContext } from "react";
import RequiresAuth from "./components/RequiresAuth";
import { AuthContext } from "./context/AuthContext";

const getActiveStyle = ({ isActive }) => ({
  margin: "1rem 0",
  fontWeight: isActive ? "600" : "200",
  padding: isActive ? "1rem" : "0.5rem",
  color: isActive ? "red" : ""
});

export default function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
    console.log(location);
    navigate(location?.state?.from?.pathname);
  };
  return (
    <div className="App">
      <nav>
        <NavLink style={getActiveStyle} to="/">
          Home
        </NavLink>
        ||
        <NavLink style={getActiveStyle} to="/category">
          Category
        </NavLink>
        ||
        <NavLink style={getActiveStyle} to="/cart">
          Cart
        </NavLink>
        ||
        <NavLink style={getActiveStyle} to="/wishlist">
          WishList
        </NavLink>
        ||
        <NavLink style={getActiveStyle} to="/address">
          Address
        </NavLink>
        ||
        <button onClick={handleClick}>{isLoggedIn ? "Logout" : "Login"}</button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<Login />} />
        <Route
          path="/address"
          element={
            <RequiresAuth>
              <Address />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

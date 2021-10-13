import "./header.css";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../actions";
function Header() {
  const cartCount = useSelector((state) => state.cart);

  return (
    <div className="container-fluid">
      <div className="row header">
        <div className="col-10 col-md-11 restaurant-name">
          <div><span><a ><img style={{filter: "opacity(0.5) drop-shadow(0 0 0 lightgrey)"}} src="https://img.icons8.com/material-outlined/24/000000/left.png"/></a></span> &nbsp;UNI Resto Cafe</div>
        </div>
        <div className="col-2 col-md-1 orders">
          <div>
            My Orders
            <span className="cart-basket">
              <i class="fas fa-shopping-cart"></i>
              <div class="cart-basket-count">{cartCount}</div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

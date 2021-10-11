import "./header.css";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../actions";
function Header() {
  const cartCount = useSelector((state) => state.cart);

  return (
    <div>
      <div className="row header">
        <div className="backbutton col-2"><a ><img style={{filter: "opacity(0.5) drop-shadow(0 0 0 lightgrey)"}} src="https://img.icons8.com/material-outlined/24/000000/left.png"/></a></div>  
        <div className="col-6 col-md-8 restaurant-name">
          <div>UNI Resto Cafe</div>
        </div>
        <div className="col-4 col-md-2 orders">
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

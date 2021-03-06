import "./TabContent.css";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../actions";

function TabContent() {


  const category = useSelector((state) => state.menus.menus);
  const dispatch = useDispatch();

  function increementQuantity(item, index) {
    category[index].count = category[index].count + 1;
    dispatch(allActions.setMenu([...category]));
    dispatch(allActions.setCart("add"));
  }

  function decreementQuantity(item, index) {

    if(category[index].count>0)
    {
        category[index].count = category[index].count-1;
        dispatch(allActions.setMenu([...category]));
        dispatch(allActions.setCart("remove"));
    }

  }

  return (
      <div className="container-fluid">
        <div className="row">
          {category
            ? category.map((item, index) => (
                <div className="col-12 menu-detail">
                  <div className="row">
                    <div className=" col-9 col-md-10">
                      <div className="row">
                        <div className="col-12 dish-name">
                          <span className="dish-icon">
                            {item.dish_Type==2?<img src="https://img.icons8.com/color/48/000000/vegetarian-food-symbol.png" />:
                            <img src="https://img.icons8.com/color/48/000000/non-vegetarian-food-symbol.png"/>}
                          </span>&nbsp;
                          {item.dish_name}
                        </div>

                        <div className="col-6 col-md-9 price">
                          {item.dish_price}
                          <span>{` ${item.dish_currency}`}</span>
                        </div>
                        <div className=" col-6 col-md-3 calories">
                          {`${item.dish_calories} calories`}
                        </div>
                        <div className="col-12 menu-description">
                          {item.dish_description}
                        </div>
                       <div className="col-12">
                       {item.dish_Availability?<div class="quantity">
                            <button
                              type="button"
                              onClick={() => {
                                decreementQuantity(item, index);
                              }}
                              class="btn minus"
                            >
                              -
                            </button>
                            <input
                              className="count"
                              type="text"
                              value={item.count ? item.count : 0}
                              readonly="readonly"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                increementQuantity(item, index);
                              }}
                              class="btn plus"
                            >
                              +
                            </button>
                          </div>:<div className="not-available">Not Available</div>}
                        </div>
                        {item.addonCat.length ? (
                          <div className="col-12 customization">
                            Customization Available
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className=" col-3 col-md-2 dish-image">
                      <img  src={item.dish_image} />
                    </div>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    
  );
}

export default TabContent;

import { useState, useEffect } from "react";
import "./NavTab.css";
import allActions from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import TabContent from "../tabcontent/TabContent";

function NavTab() {
  let [category, setCategory] = useState();
  let [latestSelected, setLatestSelected] = useState(0);
  const dispatch = useDispatch();

  function setSelected(item, index) {
    category[latestSelected].menu_selected = false;
    category[index].menu_selected = true;
    setLatestSelected(index);
    setCategory([...category]);
    dispatch(allActions.setMenu([...item.category_dishes]));
  }

  useEffect(() => {
    
    fetch("https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099")
      .then((data) => data.json())
      .then((result) => {
        let table_menu_list = result[0].table_menu_list;
        for (let menu = 0; menu < table_menu_list.length; menu++) {
          menu == 0
            ? (table_menu_list[menu].menu_selected = true)
            : (table_menu_list[menu].menu_selected = false);

          for (
            let dish = 0;
            dish < table_menu_list[menu].category_dishes.length;
            dish++
          ) {
            
            table_menu_list[menu].category_dishes[dish].count = 0;
          }
        }
       
        setCategory(result[0].table_menu_list);
        dispatch(
          allActions.setMenu(result[0].table_menu_list[0].category_dishes)
        );
      });
  }, []);

  return (
    <div>
      <div className=" menu-tab">
        {category
          ? category.map((item, index) => (
              <div className={item.menu_selected ? "category" : ""}>
                <a
                  className={item.menu_selected ? "category" : ""}
                  onClick={() => {
                    setSelected(item, index);
                  }}
                >
                  <div className="menu">{item.menu_category}</div>
                </a>
              </div>
            ))
          : ""}
      </div>
      <TabContent />
    </div>
  );
}

export default NavTab;

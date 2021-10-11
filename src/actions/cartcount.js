const setCart=(action)=>{
    if(action=="add") return {type:"setCartCountAdd"}
    if(action=="remove") return {type:"setCartCountDecrease"}
};

export default setCart;
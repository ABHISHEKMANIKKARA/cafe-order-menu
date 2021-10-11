const cart=(state=0,action)=>{
 
    switch(action.type){
        case "setCartCountAdd":return state+1
        case "setCartCountDecrease":return state-1
        default:return state

    }
}

export default cart;
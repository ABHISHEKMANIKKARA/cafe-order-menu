
const menus=(state={},action)=>{
 
    switch(action.type){
        case "setmenus":return { menus:[...action.payload.menu]}
        default:return state

    }
}

export default menus;
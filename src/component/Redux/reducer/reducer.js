
const initialState = {
    personalInfo:[null],
    todoItem:[],
    AddCardItems:[]
}
const reducer = (state = initialState,action)=>{
    switch(action.type){
        case 'personalinfo_data':
            return {
                ...state,
                personalInfo:action.payload
            }
            case 'Add_Card_Item':
                const exists = state.AddCardItems.find((item)=>item.id === action.payload.id)
                if(exists){
                    return{
                        ...state,
                        AddCardItems: state.AddCardItems.map((i)=>
                        i.id === action.payload.id ?{
                            ...i,
                            quantity:i.quantity+1
                        }:i
                        
                        )
                    }
                }
                return{
                    ...state,
                    AddCardItems:[...state.AddCardItems,action.payload]
                }

            default:
                return state
    }
}
export default reducer

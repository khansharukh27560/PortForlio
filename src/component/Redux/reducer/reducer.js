const initialState = {
    personalInfo:[null],
    todoItem:[]
}
const reducer = (state = initialState,action)=>{
    switch(action.type){
        case 'personalinfo_data':
            return {
                ...state,
                personalInfo:action.payload
            }
            case 'todo_item':
            return {
                ...state,
                todoItem:action.payload
            }
            default:
                return state
    }
}
export default reducer

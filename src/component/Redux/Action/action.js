
export default function personal(data){
    return{
        type:"personalinfo_data",
        payload:data
    }
}
export function todoItem(data){
    return{
        type:"todo_item",
        payload:data
    }
}

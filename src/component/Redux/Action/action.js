
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
export function AddCardItem(data){
    return{
        type:"Add_Card_Item",
        payload:data
    }
}

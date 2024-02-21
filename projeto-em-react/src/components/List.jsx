import Item from  './Item';
function List(){

    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
        <Item marca='Apple'/>
        <Item marca='Samsung'/>
        <Item marca='Xiaomi'/>
        </ul>
        </>
    )
}
export default List
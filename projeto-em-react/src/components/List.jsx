import Item from './Item';

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca='Apple' ano_lancamento={2023} />
                <Item marca='Samsung' ano_lancamento={2022} />
                <Item marca='Xiaomi' ano_lancamento={2021} />
            </ul>
        </>
    );
}
export default List;
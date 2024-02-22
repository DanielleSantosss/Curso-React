import PropTypes from 'prop-types'

function Item({ marca, ano_lancamento }) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
            <p>Teste</p>
        </>
    );
}
export default Item;

Item.propTypes = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Faltou a marca!',
    ano_lancamento: 0,
}
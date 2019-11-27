import React from 'react'; import PropTypes from 'prop-types'; const DizerOiFuncaoPura = (props) => <p>Olá {props.nome}!</p>;

DizerOiFuncaoPura.propTypes = { nome: PropTypes.string.isRequired }; export default DizerOiFuncaoPura;
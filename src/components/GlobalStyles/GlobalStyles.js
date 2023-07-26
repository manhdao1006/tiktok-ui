import PropTypes from 'prop-types';
import './GlobalStyles.scss';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;

// Trường hợp chỉ nhận 1 children

// import React from 'react';
// import PropTypes from 'prop-types';
// import './GlobalStyles.scss';

// function GlobalStyles({ children }) {
//     return React.Children.only(children);
// }

// GlobalStyles.propTypes = {
//     children: PropTypes.node.isRequired,
// };

// export default GlobalStyles;

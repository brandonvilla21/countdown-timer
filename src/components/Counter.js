import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({number, label}) => {
    return (
        <div style={styles.container}>
            <div style={styles.number}>{number}</div>
            <div style={styles.label}>{label}</div>
        </div>
    );
}

Counter.propTypes = {
    number: PropTypes.number,
    label: PropTypes.string,
};

const styles = {
    container: {
        textAlign: 'center',
        width: '80px',
        height: '80px',
        padding: '15px',
        margin: '15px',
        borderRadius: '8px',
        border: '1px solid #D3D3D3',
    },
    number: {
        fontSize: '50px',
        color: '#4D4D4D',
    },
    label: {
        color: '#9C9C9C',
    }
};

export default Counter;
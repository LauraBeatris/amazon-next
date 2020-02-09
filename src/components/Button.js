import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
    className,
    type,
    children,
    handleClick,
    ...rest
}) {
    return (
        <button
            className={`bg-blue-500 hover:bg-blue-700 p-2 text-white font-medium ${className} opacity-75 hover:opacity-100 transition-opacity duration-500 ease-out`}
            type={type}
            {...rest}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    type: 'button',
    className: '',
    handleClick: () => {},
};

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
        .isRequired,
    handleClick: PropTypes.func,
};

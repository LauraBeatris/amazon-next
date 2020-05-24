import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
    className,
    type,
    children,
    handleClick,
    ...rest
}) {
    const button = type;
    return (
        <button
            className={`bg-blue-500 hover:bg-blue-700 p-2 text-white font-medium ${className} transition-colors duration-500 ease-out outline-none border-none`}
            type={button}
            onClick={handleClick}
            {...rest}
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
    type: PropTypes.oneOf(['button', 'submit']),
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array,
        PropTypes.string,
    ]).isRequired,
    handleClick: PropTypes.func,
};

import React from 'react';
import PropTypes from 'prop-types';

export default function Tag({ name }) {
    return <div>{name}</div>;
}

Tag.propTypes = {
    name: PropTypes.string.isRequired,
};

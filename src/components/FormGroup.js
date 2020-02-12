import React, { useRef, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';

export default function FormGroup({ name, label, ...rest }) {
    const ref = useRef(null); // For ref comparation purposes
    const { fieldName, defaultValue, registerField, error } = useField(name);

    const [fieldValue, setFieldValue] = useState(defaultValue);
    const [touched, setTouched] = useState(false);

    // Registering the field in the form
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: ref.current,
            path: 'value',
        });
    }, [fieldName, ref.current]); // eslint-disable-line

    const inputClassName = useMemo(() => {
        let defaultBorder = 'border-b-2 border-gray-400';
        if (error) {
            defaultBorder = 'border-b-2 border-red-500';
        } else if (fieldValue) {
            defaultBorder = 'border-b-2 border-green-300';
        }

        return `transition-colors pb-1 font-light text-gray-700 w-full duration-300 bg-white ${defaultBorder} outline-none`;
    }, [error, fieldValue]);

    return (
        <div className="bg-white rounded py-2 text-gray-800 flex flex-col relative">
            {label && (
                <label
                    className={`${
                        !touched ? 'text-xs' : 'text-2xs'
                    } font-bold duration-500 transition-font h-5`}
                >
                    {label}
                </label>
            )}
            <input
                id={rest.id}
                name={name}
                ref={ref}
                placeholder={rest.placeholder}
                className={inputClassName}
                value={fieldValue}
                onChange={event => setFieldValue(event.target.value)}
                onFocus={() => setTouched(true)}
                onBlur={() => setTouched(false)}
                {...rest}
            />
            {error && (
                <span className="text-xs text-red-500 mt-2">{error}</span>
            )}
        </div>
    );
}

FormGroup.defaultProps = {
    label: null,
};

FormGroup.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
};

import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Input({ className, isDisabled, isReadOnly, isRequired, onChange, name, placeholder, value }) {
    const [textValue, setValue] = useState(value);
    
    const onTextChange = (e) => {
        setValue(e.target.value);
        onChange(e.target.value);
    };
    
    return (
        <input
            id={ name }
            name={ name }
            className={ className }
            onChange={ onTextChange }
            type="text"
            placeholder={ placeholder } 
            aria-label={ placeholder }
            disabled={ isDisabled }
            readOnly={ isReadOnly }
            required={ isRequired }
            value={ textValue }
        />
    );
}

Input.propTypes = {
    isDisabled: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    isRequired: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string
};

Input.defaultProps = {
    className: 'form-control'
};

import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

export function LabelInput({ children, name, label, labelPosition }) {
    return labelPosition === 'top' || labelPosition === 'left' ? (
        <div className={`form-group ${labelPosition}`}>
            <label htmlFor={ name } className="form-label">{ label }</label>
            { children }
        </div>
    ) : (
        <div className={ `form-group ${labelPosition}` }>
            { children }
            <label htmlFor={ name } className="form-label">{ label }</label>
        </div>
    );
}

export default function TextInput({ isDisabled, isReadOnly, isRequired, label, labelType, name, onChange, placeholder, value, variant }) {
    const input = (
        <Input
            isDisabled={ isDisabled } 
            isReadOnly={ isReadOnly }
            isRequired={ isRequired }
            name={ name }
            placeholder={ labelType === 'float' && !placeholder ? name : placeholder }
            value={ value }
            onChange={ onChange }
        />
    )

    const classNames = variant === 'standard' ? 'mb-3' : '';
    
    if (!label) {
        return <div className={ classNames }>{ input }</div>;
    }

    return (
        <LabelInput name={ name } label={ label } labelPosition={ labelType } variant={variant}>
            {input}
        </LabelInput>
    );
}

TextInput.defaultProps = {
    name: 'new',
    label: 'New Text Field',
    labelType: 'float'
};

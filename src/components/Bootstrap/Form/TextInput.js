import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../components/core/Form/Input';

export function FloatingLabelInput({ children, name, label }) {
    return (
        <div className='form-floating mb-3'>
            { children }
            <label htmlFor={ name }>{ label }</label>
        </div>
    );
}

export function TopLabelInput({ children, name, label }) {
    return (
        <div className='mb-3'>
            <label htmlFor={ name } className="form-label">{ label }</label>
            { children }
        </div>
    );
}

export function LeftLabelInput({ children, name, label }) {
    return (
        <div className='mb-3 row'>
             <label htmlFor={ name} className="col-form-control col-sm-2">{label}</label>
             <div className="col-sm-10">{ children }</div>
        </div>
    );
}

export default function TextInput({ isDisabled, isReadOnly, isRequired, label, labelType, name, placeholder, value }) {
    const input = (
        <Input
            isDisabled={ isDisabled } 
            isReadOnly={ isReadOnly }
            isRequired={ isRequired }
            name={ name }
            placeholder={ placeholder }
            value={ value }
            onChange={ (value) => console.log('value', value)  }
        />
    )
    
    if (!label) {
        return <div className='mb-3'>{ input }</div>;
    }

    const map = {
        float: () => <FloatingLabelInput name={ name } label={ label }>{input}</FloatingLabelInput>,
        top: () => <TopLabelInput name={ name } label={ label }>{input}</TopLabelInput>,
        left: () => <LeftLabelInput name={name} label={label}>{input}</LeftLabelInput>
    }

    return map[labelType] ? map[labelType]() : input;
}

TextInput.defaultProps = {
    name: 'new',
    label: 'New Text Field',
    labelType: 'float'
};

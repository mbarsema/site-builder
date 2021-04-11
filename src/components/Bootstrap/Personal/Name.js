import React from 'react';
import TextInput from '../Form/TextInput';

export default function Name() {
    return (
        <div className='row'>
            <div className='col-md-5'>
                <TextInput
                    name='newFirstName'
                    label='First Name'
                    labelType='float'
                />
            </div>
            <div className='col-md-2'>
                <TextInput
                    name='middle'
                    label='MI'
                    labelType='float'
                />
            </div>
            <div className='col-md-5'>
                <TextInput
                    name='newLastName'
                    label='Last Name'
                    labelType='float'
                />
            </div>
        </div>
    );
}
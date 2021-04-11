import React from 'react';
import Name from './Name';
import TextInput from '../Form/TextInput';

export default function Address() {
    return (
        <React.Fragment>
            <Name />
            <div className='row'>
                <div className='col-md-7'>
                    <TextInput
                        name='street'
                        label='Address'
                        labelType='float' 
                    />
                </div>
                <div className='col-md-5'>
                    <TextInput
                        name='apartment'
                        label='Apt'
                        labelType='float'
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-5'>
                    <TextInput
                        name='city'
                        label='City'
                        labelType='float'
                    />
                </div>
                <div className='col-md-2'>
                    <TextInput
                        name='state'
                        label='State'
                        labelType='float'
                    />
                </div>
                <div className='col-md-5'>
                    <TextInput
                        name='zipcode'
                        label='Zipcode'
                        labelType='float'
                    />
                </div>
            </div>
        </React.Fragment>
    );
}
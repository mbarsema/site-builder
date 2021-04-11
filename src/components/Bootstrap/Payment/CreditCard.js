import React from 'react';
import TextInput from '../Form/TextInput';

export default function CreditCard() {
    return (
        <React.Fragment>
            <div className='row'>
                <div className='col-md-12'>
                    <TextInput
                        label='Card Holder'
                        labelType='float'
                        name='cardHolder'
                    />
                </div>
                <div className='col-md-5'>
                <TextInput
                        label='Card Number'
                        labelType='float'
                        name='cardNumber'
                    />
                </div>
                <div className='col-md-2'>
                    <TextInput
                        label='CVV'
                        labelType='float'
                        name='cvv'
                    />
                </div>
                <div className='col-md-5'>
                    <TextInput
                        label='Expiration Date'
                        labelType='float'
                        name='expirationDate'
                    />
                </div>
            </div>
        </React.Fragment>
    );
}
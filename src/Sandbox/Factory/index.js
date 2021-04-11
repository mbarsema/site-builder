import React from 'react';
import TextInput from '../../components/Bootstrap/Form/TextInput';
import Address from '../../components/Bootstrap/Personal/Address';
import Name from '../../components/Bootstrap/Personal/Name';
import CreditCard from '../../components/Bootstrap/Payment/CreditCard';

export default function Factory(props) {
    const renderer = props.renderer;
    const elemType = props.elementType;
    const map = {
        Bootstrap: {
            TextInput: () => <TextInput { ...props } />,
            Address: () => <Address { ...props } />,
            Name: () => <Name { ...props } />,
            CreditCard: () => <CreditCard { ...props } />
        },
        FreeStyle: {

        }
    };

    return map[renderer] && map[renderer][elemType] ? map[renderer][elemType]() : null;
}

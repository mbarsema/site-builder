import React, { useState } from 'react';
import ToolBoxItem from './Item';
import AccordionPanel from '../../components/Bootstrap/Accordion/Panel';
import AccordionItem from '../../components/Bootstrap/Accordion/Item';
import AccordionHeader from '../../components/Bootstrap/Accordion/Header';
import AccordionBody from '../../components/Bootstrap/Accordion/Body';

export default function ToolBox() {
    const [openPanels, setOpenPanels] = useState({
        form: true,
        widget: true
    });
    const updatePanel = (type) => {
        setOpenPanels({
            ...openPanels,
            [type]: !openPanels[type]
        });
    }

    const accordions = [
        {
            type: 'widget',
            text: 'Widget',
            tools: [
                { elementType: 'Address', renderer: 'Bootstrap', text: 'Address' },
                { elementType: 'CreditCard', renderer: 'Bootstrap', text: 'Credit Card' },
                { elementType: 'Name', renderer: 'Bootstrap', text: 'Name' }
            ]
        },
        { 
            type: 'form',
            text: 'Form',
            tools: [
                { elementType: 'TextInput', renderer: 'Bootstrap', text: 'Text Input' }
            ]
        }
    ];

    return (
        <div id='toolbox' className='toolbox'>
           <AccordionPanel group='toolbox'>
                { accordions.map(({ text, tools, type }) => (
                    <AccordionItem key={ type }>
                        <AccordionHeader
                            isOpen={ openPanels[type] }
                            forComponent={ type }
                            onClick={ () => updatePanel(type) }
                        >
                            { text }
                        </AccordionHeader>
                        <AccordionBody id='widget' group='toolbox' isOpen={ openPanels.widget }>
                            { tools.map((tool) => (
                                <ToolBoxItem key={ `${tool.elementType}-${tool.renderer}` } { ...tool } /> 
                            ))}
                        </AccordionBody>
                    </AccordionItem>
                ))}   
           </AccordionPanel>
        </div>
    );
}

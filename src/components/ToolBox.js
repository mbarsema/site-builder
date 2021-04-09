import React, { useState } from 'react';
import AccordionPanel from './Accordion/Panel';
import AccordionItem from './Accordion/Item';
import AccordionHeader from './Accordion/Header';
import AccordionBody from './Accordion/Body';
import TextInput from '../toolbox/Form/TextInput';

export default function ToolBox() {
    const [openPanels, setOpenPanels] = useState({
        page: true
    });
    const updatePanel = (type) => {
        setOpenPanels({
            ...openPanels,
            page: !openPanels.page 
        });
    };

    return (
        <div id='toolbox' className='toolbox'>
           <AccordionPanel group='toolbox'>
               <AccordionItem>
                   <AccordionHeader
                    isOpen={ openPanels.page }
                    forComponent='page'
                    onClick={ updatePanel } 
                   >
                       Form
                    </AccordionHeader>
                   <AccordionBody id='textInput' group='toolbox' isOpen={ openPanels.page }>
                       <TextInput /> 
                   </AccordionBody>
               </AccordionItem>
           </AccordionPanel>
        </div>
    );
}

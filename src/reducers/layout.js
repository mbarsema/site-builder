import React from 'react';
const initialState = {
    type: 'Blog',
    children: [{
        elementType: 'NavBar',
        variant: 'dark',
        children: [
            { elementType: 'NavItem', children: 'About', linkTo: '/about' },
            { elementType: 'NavItem', children: 'Travel', linkTo: '/travel' },
            {
                elementType: 'NavDropDown',
                text: 'Wedding',
                children: [
                    { elementType: 'NavItem', children: 'Wedding', linkTo: '/wedding' },
                    { elementType: 'NavItem', children: 'Reception', linkTo: '/wedding/reception' },
                    { elementType: 'NavItem', children: 'Honeymoon', linkTo: '/wedding/honeymoon' },
                    { elementType: 'NavItem', children: 'Ceremony', linkTo: '/wedding/ceremony' },
                    { elementType: 'NavItem', children: 'Vendors', linkTo: '/wedding/vendors' },
                ]
            }
        ]
    }, {
        elementType: 'Container',
        variant: 'light',
        children: [
            <p>Bacon ipsum dolor amet sirloin frankfurter turkey ground round meatball fatback ribeye jerky tongue pancetta meatloaf picanha tri-tip prosciutto. Fatback tenderloin leberkas buffalo. Sirloin ribeye buffalo corned beef porchetta, fatback turducken ball tip filet mignon pig alcatra tongue cupim rump. Porchetta pastrami leberkas, spare ribs venison corned beef burgdoggen brisket strip steak beef tri-tip salami. Jowl capicola meatloaf, tail leberkas beef fatback. Leberkas ball tip kielbasa spare ribs.</p>,
            // { elementType: 'Paragraph', children: 'Bacon ipsum dolor amet sirloin frankfurter turkey ground round meatball fatback ribeye jerky tongue pancetta meatloaf picanha tri-tip prosciutto. Fatback tenderloin leberkas buffalo. Sirloin ribeye buffalo corned beef porchetta, fatback turducken ball tip filet mignon pig alcatra tongue cupim rump. Porchetta pastrami leberkas, spare ribs venison corned beef burgdoggen brisket strip steak beef tri-tip salami. Jowl capicola meatloaf, tail leberkas beef fatback. Leberkas ball tip kielbasa spare ribs.' },
            { elementType: 'Paragraph', children: 'Ground round beef bacon, rump pastrami chuck fatback short loin picanha. Doner bacon jerky filet mignon, pork kielbasa swine bresaola turducken. Tongue flank pork chop, ball tip drumstick pork belly jerky picanha filet mignon prosciutto doner fatback sirloin frankfurter kielbasa. Pig strip steak turkey, picanha meatball cow shoulder swine jowl ground round venison sirloin andouille. Meatloaf drumstick biltong hamburger.' },
            { elementType: 'Paragraph', children: 'Ground round strip steak ham hock biltong ball tip salami tri-tip jowl porchetta buffalo drumstick frankfurter swine ribeye kevin. Sirloin rump sausage bacon, strip steak tri-tip andouille buffalo meatball pig capicola cow t-bone. Ground round ham hock ribeye cupim brisket cow. Meatball landjaeger shank pancetta doner, tail shankle t-bone short ribs.' },
            { elementType: 'Paragraph', children: 'Shankle tongue cow, rump ground round chicken turducken bacon pork belly porchetta picanha brisket turkey meatball shank. Landjaeger salami kielbasa, corned beef jowl turducken picanha andouille capicola leberkas. Bacon landjaeger shank corned beef sirloin shankle, pig tenderloin brisket. Ground round shoulder venison pancetta andouille tongue, ball tip salami drumstick chuck. Buffalo sausage doner, pork salami frankfurter alcatra beef spare ribs. Shoulder brisket short ribs pork, tri-tip chislic frankfurter ham hock pork chop pancetta strip steak pork loin hamburger sausage burgdoggen.' },
            { elementType: 'Paragraph', children: 'Shank salami t-bone sausage, corned beef buffalo alcatra short ribs venison pancetta burgdoggen chuck drumstick fatback. Salami biltong meatball shank frankfurter pancetta bacon bresaola doner. Tenderloin salami pastrami pork loin kielbasa tri-tip burgdoggen beef ribs spare ribs meatloaf porchetta ribeye shoulder jowl. Biltong pork loin frankfurter short ribs. Turkey turducken ham fatback ball tip leberkas jowl sausage kielbasa sirloin ham hock short ribs landjaeger. Biltong prosciutto ground round, ham hock jowl pork salami. Pancetta tenderloin doner swine, tongue tri-tip landjaeger pork chop meatball andouille pig tail.' }
        ]
    }]
};


export default function LayoutReducer(state = initialState, action) {
    const { type, payload } = action;
    /*
    const map = {
        'ADD_ELEMENT': addElement,
        'DESIGNER_ENTER': onEnterWorkArea,
        'DESIGNER_EXIT': onExitWorkArea,
        'DESIGNER_DRAG': addDraggable,
        'DESIGNER_DROP': addDroppable
    };

    return map[type] ? map[type](state, payload) : state; 
    */

    return state;
  }
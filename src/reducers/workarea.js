const initialState = {
    layout: null,
    elements: [],
    draggedElement: null,
    hasInteraction: false
};

export function createElement(elementType) {
    return {
        elementType
    };
}

export function addElement(state, { elementType }) {
    return {
        ...state,
        elements: [...state.elements, createElement(element)]
    };
}

export function addDraggable(state, { elementType }) {
    return {
        ...state,
        draggedElement: elementType
    };
}

export function onEnterWorkArea(state) {
    return {
        ...state,
        hasInteraction: true
    };
}

export function onExitWorkArea(state) {
    return {
        ...state,
        hasInteraction: false
    };
}

export function addDroppable(state) {
    const elementType = state.draggedElement;

    return {
        ...state,
        hasInteraction: false,
        draggedElement: null,
        elements: [...state.elements, createElement(elementType)]
    };
}

export default function WorkAreaReducer(state = initialState, action) {
    const { type, payload } = action;
    const map = {
        'ADD_ELEMENT': addElement,
        'DESIGNER_ENTER': onEnterWorkArea,
        'DESIGNER_EXIT': onExitWorkArea,
        'DESIGNER_DRAG': addDraggable,
        'DESIGNER_DROP': addDroppable
    };

    return map[type] ? map[type](state, payload) : state; 
  }
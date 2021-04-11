const initialState = {
    layout: null,
    elements: [],
    draggedElement: null,
    hasInteraction: false
};

export function createElement(element) {
    return { ...element };
}

export function addElement(state, element) {
    return {
        ...state,
        elements: [...state.elements, createElement(element)]
    };
}

export function addDraggable(state, element) {
    return {
        ...state,
        draggedElement: element
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
    const element = state.draggedElement;

    return {
        ...state,
        hasInteraction: false,
        draggedElement: null,
        elements: [...state.elements, createElement(element)]
    };
}

export default function SandboxReducer(state = initialState, action) {
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
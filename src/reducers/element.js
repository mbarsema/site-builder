const initialState = {
    elements: {}
};

export function createElement(state, { element }) {
    return {
        ...state,
        [element.id]: element
    };
}

export function updateElement(state, { element }) {
    return {
        ...state,
        [element.id]: element
    };
}

export function removeElement(state, { element }) {
    let updatedState = { ...state };
    delete updatedState[element.id];
    return updatedState;
}

export default function ElementReducer(state = initialState, action) {
    const { type, payload } = action;
    const map = {
        'ADD_ELEMENT': createElement,
        'UPDATE_ELEMENT': updateElement,
        'REMOVE_ELEMENT': removeElement
    };

    return map[type] ? map[type](state, payload) : state; 
  }
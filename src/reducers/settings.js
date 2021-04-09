const initialState = {
    renderer: 'Bootstrap'
};

export function setRenderer(state, { renderer }) {
    return {
        ...state,
        renderer
    };
}

export default function SettingsReducer(state = initialState, action) {
    const { type, payload } = action;
    const map = {
        'SET_RENDERER': setRenderer
    };

    return map[type] ? map[type](state, payload) : state; 
  }
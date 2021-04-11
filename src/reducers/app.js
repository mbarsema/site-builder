const initialState = {
    layout: 'Blog'
};

export function setLayout(state, { layout }) {
    return {
        ...state,
        layout
    };
}

export default function SettingsReducer(state = initialState, action) {
    const { type, payload } = action;
    const map = {
        'SET_LAYOUT': setLayout
    };

    return map[type] ? map[type](state, payload) : state; 
  }
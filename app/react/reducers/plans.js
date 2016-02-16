const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: []
};

const plans = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLANS':
      return {
        isFetching: false,
        didInvalidate: false,
        items: action.plans
      };

    case 'UPDATE_PLAN':
      const items = state.items
      const index = items.map(x => x.id).indexOf(action.plan.id);
      return {
        ...state,
        items: [
          ...items.slice(0, index),
          action.plan,
          ...items.slice(index + 1)
        ]
      };

    default:
      return state;
  }
};

export default plans;
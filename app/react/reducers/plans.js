const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: []
};

const plans = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLANS':
      return action.plans;

    default:
      return state;
  }
};

export default plans;
const initialState = {
  initialDate: null,
  finalDate: null,
  items: []
};

const plans = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLANS':
      return {
        ...state,
        items: action.plans
      };

    case 'UPDATE_PLAN':
      const items = state.items;
      const index = items.map(x => x.id).indexOf(action.plan.id);
      let newItems = items;
      if (index > -1) {
        newItems = [
          ...items.slice(0, index),
          action.plan,
          ...items.slice(index + 1)
        ]
      }

      return {
        ...state,
        items: newItems
      };

    case 'SET_INITIAL_DATE':
      return {
        ...state,
        initialDate: action.data
      };

    case 'SET_FINAL_DATE':
      return {
        ...state,
        finalDate: action.data
      };

    default:
      return state;
  }
};

export default plans;
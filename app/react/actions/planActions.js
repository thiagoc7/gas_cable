import { putPlan, getPlans } from './../util/requestsManager';

export const setPlans = plans => ({
  type: 'SET_PLANS',
  plans
});

export const updatePlan = plan => ({
  type: 'UPDATE_PLAN',
  plan
});

export function sendUpdatePlanRequest(plan) {
  return dispatch => {
    return putPlan(plan)
        .catch(res => console.log(res));
  };
}

export function fetchPlans() {
  return (dispatch, getState) => {
    const { initialDate, finalDate } = getState().plans;
    return getPlans({ initialDate, finalDate })
        // .then(res => console.log(res))
        .then(res => dispatch(setPlans(res.data.plans)))
        .catch(res => console.log(res));
  };
}

export const setInitialDate = (data) => ({
  type: 'SET_INITIAL_DATE',
  data
});

export const setFinalDate = (data) => ({
  type: 'SET_FINAL_DATE',
  data
});
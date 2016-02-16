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
    return (
        $.ajax({
          method: 'PUT',
          url: `/plans/${plan.id}`,
          data: {plan},
          success: () => console.log('ok')
        })
    );
  };
}
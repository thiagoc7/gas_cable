export const setPlans = plans => ({
  type: 'SET_PLANS',
  plans
});

export function updatePlan(plan) {
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
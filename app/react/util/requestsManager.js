import request from 'axios';
import metaTagsManager from './metaTagsManager';

export function putPlan(plan) {
  return request({
    method: 'PUT',
    url: `/plans/${plan.id}`,
    responseType: 'json',
    headers: {
      'X-CSRF-Token': metaTagsManager.getCSRFToken()
    },
    data: {plan}
  });
}

export function getPlans(params = null) {
  return request({
    method: 'GET',
    url: `/plans.json`,
    responseType: 'json',
    headers: {
      'X-CSRF-Token': metaTagsManager.getCSRFToken()
    },
    params: params
  });
}
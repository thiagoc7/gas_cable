import _ from 'lodash';

export default {
  getCSRFToken() {
    const token = _.find(document.querySelectorAll('meta'), ['name', 'csrf-token']);
    return token ? token.content : null;
  }
};
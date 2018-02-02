import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  extractId(modelClass, data) {
    return data.instrument;
  }
});

import DS from 'ember-data';
import { underscore } from '@ember/string';
import { pluralize } from 'ember-inflector';

export default DS.RESTSerializer.extend({
  normalizeFindAllResponse(store, modelClass, payload, id, requestType) {
    const payloadKey = pluralize(modelClass.modelName);
    return this._super(store, modelClass, {[payloadKey]: payload.results}, id, requestType)
  },
  normalizeFindRecordResponse(store, modelClass, payload, id, requestType) {
    const payloadKey = modelClass.modelName;
    return this._super(store, modelClass, {[payloadKey]: payload}, id, requestType)
  },
  extractId(modelClass, data) {
    return data.url;
  },
  keyForAttribute(attr) {
    return underscore(attr);
  }
});

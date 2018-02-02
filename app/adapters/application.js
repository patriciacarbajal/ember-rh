import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend( DataAdapterMixin, {
  host: 'https://api.robinhood.com',
  authorizer: 'authorizer:robinhood',
  urlForFindAll() {
    return this._super(...arguments) + '/';
  },
  urlForFindRecord(id, modelName, snapshot) {
    if ( id && id.includes(this.get('host'))) {
      return id;
    } else {
      return this._super(id, modelName, snapshot);
    }
  }
});

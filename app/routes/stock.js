import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Route.extend({
  model(params) {
    return this.store.find('position', params.id);
  }
});

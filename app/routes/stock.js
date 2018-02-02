import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Route.extend({
  model(params) {
    return this.store.query('position', {
      filter: {
        intstrument: {
          quote: {
            symbol:params.instrument_quote_symbol
          }
        }
      }
    })
    .then((stock) => stock.get('firstObject');
  }
});

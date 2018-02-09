import Component from '@ember/component';
import { set, get, computed } from '@ember/object';
import { task } from 'ember-concurrency';

export default Component.extend({

  init() {
    this._super(...arguments);
    get(this, 'calculatePriceChange').perform();
  },

  calculatePriceChange: task(function*() {
    const instrument = yield get(this, 'model.instrument');
    const quote = yield get(instrument, 'quote');
    const askPrice = yield get(quote, 'askPrice');
    const previousClose = yield get(quote, 'previousClose');

    return askPrice - previousClose;
  }),

  priceChange: computed('calculatePriceChange.lastSuccessful.value', function(){
    const priceDifference = this.get('calculatePriceChange.lastSuccessful.value');
    return priceDifference;
  })

});


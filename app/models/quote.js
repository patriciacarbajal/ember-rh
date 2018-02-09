import DS from 'ember-data';

export default DS.Model.extend({
  askPrice: DS.attr('number'),
  symbol: DS.attr('string'),
  previousClose: DS.attr('number')
});

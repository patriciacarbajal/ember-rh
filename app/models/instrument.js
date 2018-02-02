import DS from 'ember-data';

export default DS.Model.extend({
  symbol: DS.attr('string'),
  fundamentals: DS.belongsTo('fundamental'),
  quote: DS.belongsTo('quote')
});
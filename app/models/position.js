import DS from 'ember-data';

export default DS.Model.extend({
  instrument: DS.belongsTo('instrument'),
  quantity: DS.attr('number'),
  averageBuyPrice: DS.attr('number'),
});

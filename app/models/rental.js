import attr from 'ember-data/attr';
import DS from 'ember-data';

export default DS.Model.extend({
  owner: attr(),
  city: DS.belongsTo('city', { async : true}),
  type: attr(),
  image: attr(),
  bedrooms: attr()
});

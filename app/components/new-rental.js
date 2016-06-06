import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },
    save1() {
      var params = {
        owner: this.get('owner') ? this.get('owner') : null,
        city: this.get('city') ? this.get('city') : null,
        type: this.get('type') ? this.get('type') : null,
        image: this.get('image') ? this.get('image') : null,
        bedrooms: this.get('bedrooms') ? this.get('bedrooms') : null
      };
      if (params.owner !== null ) {
        this.set('addNewRental', false);
        this.sendAction('save2', params);
      }
    }
  }
});

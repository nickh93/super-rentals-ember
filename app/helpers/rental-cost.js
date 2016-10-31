import Ember from 'ember';

export function rentalCost(params) {
  var rentalPrice = params[0].get('cost');

   if (rentalPrice >= 150){
     return Ember.String.htmlSafe('<span class ="cost"> $$$$ </span>');
   } else if (rentalPrice >= 100){
     return Ember.String.htmlSafe('<span class ="cost"> $$$ </span>');
   } else if (rentalPrice >= 50){
     return Ember.String.htmlSafe('<span class ="cost"> $$ </span>');
   } else if (rentalPrice <= 49){
     return Ember.String.htmlSafe('<span class ="cost"> $ </span>');
   }
}

export default Ember.Helper.helper(rentalCost);

import Base from 'ember-simple-auth/authenticators/base';
import { inject as service } from '@ember/service';
import rsvp from 'rsvp';

export default Base.extend({
  ajax: service(),

  restore(data) {
    return rsvp.resolve(data);
  },

  authenticate(username, password) {
    return this.get('ajax').post('https://api.robinhood.com/api-token-auth/',
      { data: {
        password: password,
        username: username
      }
    })
  }
});

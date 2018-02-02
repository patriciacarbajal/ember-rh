import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  actions: {
    authenticate() {
      const { username, password } = this.getProperties('username', 'password');
      this.get('session').authenticate('authenticator:robinhood', username, password)
        .catch((reason) => {
          this.set('errorMessage, reaon.error' || reason);
        })
    },
    invalidateSession() {
      this.get('session').invalidate();
    }
  }

});

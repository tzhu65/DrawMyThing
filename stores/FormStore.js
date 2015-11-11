var alt = require('../alt');
var FormActions = require('../actions/FormActions');

class FormStore {
  constructor() {

    this.bindListeners({
      submitUserForm: FormActions.SUBMIT_USER_FORM,
      submitCreateRoomForm: FormActions.SUBMIT_CREATE_ROOM_FORM
    });
  }

  submitUserForm(form) {
    return;
  }

  submitCreateRoomForm(form) {
    return;
  }
}

module.exports = alt.createStore(FormStore, 'FormStore');

import Component from '@ember/component';
import layout from '../templates/components/mdc-form-field';

export default Component.extend({
  //region Attributes
  /**
   * @type {Boolean}
   */
  'align-end': false,
  //endregion
  //region Ember hooks
  layout,
  classNames: ['mdc-form-field'],
  classNameBindings: ['align-end:mdc-form-field--align-end'],
  //endregion
});

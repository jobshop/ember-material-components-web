import Component from '@ember/component';
import layout from '../../templates/components/mdc-card/actions';

export default Component.extend({
  //region Attributes
  /**
   * @type {Boolean}
   */
  vertical: false,
  //endregion

  //region Ember Hooks
  layout,
  tagName: 'section',
  classNames: ['mdc-card__actions'],
  classNameBindings: ['vertical:mdc-card__actions--vertical']
  //endregion
});

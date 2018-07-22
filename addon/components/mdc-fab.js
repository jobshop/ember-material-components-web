import Component from '@ember/component';
import events from '../utils/global-event-handlers';
import MDCComponent from '../mixins/mdc-component';
import layout from '../templates/components/mdc-fab';

export default Component.extend(MDCComponent, {
  //region Attributes
  /**
   * @type {Boolean}
   */
  extended: false,
  /**
   * @type {Boolean}
   */
  mini: false,
  /**
   * @type {?String}
   */
  'aria-label': null,
  //endregion

  //region Ember Hooks
  layout,
  tagName: 'button',
  classNames: ['mdc-fab'],
  attributeBindings: ['aria-label', 'type', 'extended', 'style', ...events],
  classNameBindings: ['mini:mdc-fab--mini', 'extended:mdc-fab--extended', 'mdcClassNames'],
  //endregion

  //region Properties
  ripple: true,
  //endregion
});

import { createSelector } from 'reselect';

/**
 * Direct selector to the detail state domain
 */
const selectDetailDomain = (state) => state.get('detail');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Detail
 */

const makeSelectDetail = () => createSelector(
  selectDetailDomain,
  (substate) => substate.toJS()
);

export default makeSelectDetail;
export {
  selectDetailDomain,
};

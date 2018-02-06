
import { fromJS } from 'immutable';
import detailReducer from '../reducer';

describe('detailReducer', () => {
  it('returns the initial state', () => {
    expect(detailReducer(undefined, {})).toEqual(fromJS({}));
  });
});

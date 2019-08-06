import * as ActionTypes from '../actions/ActionTypes';

export const Taxies = (
  state = { isLoading: true, errMess: null, taxies: [], count: 5 },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_TAXIES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        taxies: action.payload.taxies,
        count: action.payload.count,
      };

    case ActionTypes.TAXIES_LOADING:
      return { ...state, isLoading: true, errMess: null, taxies: [] };

    case ActionTypes.TAXIES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};

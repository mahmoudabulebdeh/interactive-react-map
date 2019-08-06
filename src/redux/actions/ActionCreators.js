import axios from 'axios';
import * as ActionTypes from './ActionTypes';
import { API_URL, LATITUDE, LONGITUDE, TAXIES_COUNT } from './ApiConfig';

export const fetchTaxies = (count = TAXIES_COUNT) => dispatch => {
  dispatch(taxiesLoading(true));
  axios
    .get(API_URL, {
      params: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        count: count,
      },
    })
    .then(response => {
      return response.data;
    })
    .then(data => {
      const playload = { ...data, count: count };
      console.log(playload);
      dispatch({
        type: ActionTypes.ADD_TAXIES,
        payload: { taxies: { ...data }, count: count },
      });
    })
    .catch(function(error) {
      console.log(error);
    })
    .then(function() {});
};

export const taxiesLoading = () => ({
  type: ActionTypes.TAXIES_LOADING,
});

export const taxiesFailed = errmess => ({
  type: ActionTypes.TAXIES_FAILED,
  payload: errmess,
});

export const addTaxies = taxies => ({
  type: ActionTypes.ADD_TAXIES,
  payload: taxies,
});

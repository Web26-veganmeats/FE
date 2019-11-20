import { axiosWithAuth } from '../utils/axiosWithAuth';

// Action Types 
export const FETCH_REST_LOADING = 'FETCH_REST_LOADING';
export const FETCH_REST_SUCCESS = 'FETCH_REST_SUCCESS';
export const FETCH_REST_FAILURE = 'FETCH_REST_FAILURE';

export const CREATE_REST_START = 'CREATE_REST_START'
export const CREATE_REST_SUCCESS = 'CREATE_REST_SUCCESS'
export const CREATE_REST_FAILURE = 'CREATE_REST_FAILURE'

// Async action creators

export const fetchRest = () => dispatch => {
    dispatch({ type: FETCH_REST_LOADING })
    axiosWithAuth()
        .get("https://veganmeets-buildweek.herokuapp.com/api/restaurants")
        .then(response => dispatch({ type: FETCH_REST_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: FETCH_REST_FAILURE, payload: error }))
}


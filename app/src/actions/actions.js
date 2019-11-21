import { axiosWithAuth } from '../utils/axiosWithAuth';

// Action Types 
export const FETCH_REST_LOADING = 'FETCH_REST_LOADING';
export const FETCH_REST_SUCCESS = 'FETCH_REST_SUCCESS';
export const FETCH_REST_FAILURE = 'FETCH_REST_FAILURE';

export const CREATE_REST_START = 'CREATE_REST_START'
export const CREATE_REST_SUCCESS = 'CREATE_REST_SUCCESS'
export const CREATE_REST_FAILURE = 'CREATE_REST_FAILURE'

export const DELETE_REST_START = 'DELETE_REST_START'
export const DELETE_REST_SUCCESS = 'DELETE_REST_SUCCESS'
export const DELETE_REST_FAILURE = 'DELETE_REST_FAILURE'

export const UPDATE_REST_START = 'UPDATE_REST_START'
export const UPDATE_REST_SUCCESS = 'UPDATE_REST_SUCCESS'
export const UPDATE_REST_FAILURE = 'UPDATE_REST_FAILURE'

// Async action creators

export const fetchRest = () => dispatch => {
    dispatch({ type: FETCH_REST_LOADING })
    axiosWithAuth()
        .get("https://veganmeets-buildweek.herokuapp.com/api/restaurants")
        .then(response => dispatch({ type: FETCH_REST_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: FETCH_REST_FAILURE, payload: error }))
}

export const createRest = (newRest) => dispatch => {
    dispatch({ type: CREATE_REST_START })
    axiosWithAuth()
        .post(`https://veganmeets-buildweek.herokuapp.com/api/restaurants/new`, newRest)
        .then(response => {
            console.log('Response from POST: ', response)
            dispatch({ type: CREATE_REST_SUCCESS, payload: response.data })
        })
        .catch(error => dispatch({ type: CREATE_REST_FAILURE, payload: error }))
}

export const deleteRest = id => dispatch => {
    console.log('deleteRest passed ID: ', id)
    dispatch({ type: DELETE_REST_START })
    axiosWithAuth()
        .delete(`https://veganmeets-buildweek.herokuapp.com/api/restaurants/delete/${id}`)
        .then(response => {
            console.log('Delete Restaurant Response: ', response)
            dispatch({ type: DELETE_REST_SUCCESS, payload: response })
        })
        .catch(error => dispatch({ type: DELETE_REST_FAILURE, payload: error }))
}

export const updateRest = editedRest => dispatch => {
    console.log('editedRest getting passed in: ', editedRest)
    dispatch({ type: UPDATE_REST_START })
    axiosWithAuth()
        .put(`https://veganmeets-buildweek.herokuapp.com/api/restaurants/update/${editedRest.id}`, editedRest)
        .then(response => {
            console.log('updateRest response: ', response)
            dispatch({ type: UPDATE_REST_SUCCESS, payload: response.data })
        })
        .catch(error => dispatch({ type: UPDATE_REST_FAILURE, payload: error }))
}

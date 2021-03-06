import requestsReducer from '../../reducers/requestsReducer';
import { GET_REQUESTS_SUCCESS, GET_REQUESTS_FAIL, SINGLE_REQUEST_SUCCESS, SINGLE_REQUEST_FAIL } from '../../actions/types';

describe('Requests Reducer Test Suite', () => {
  it('Should return default state', () => {
    const newState = requestsReducer(undefined, {});
    expect(newState).toEqual({
      "data": null,
      "dataError": null,
      "singleData":null,
    });
  });

  it('Should return GET_REQUESTS_SUCCESS', () => {
    const action = {
      type: GET_REQUESTS_SUCCESS,
      payload: {
        status: 200,
        data: {
          message: 'Got Requests...'
        }
      }
    }
    const returnedSate = requestsReducer(undefined, action);
    expect(returnedSate).toEqual({
      "dataError": null,
      "data": action.payload,
      "singleData": null,
    })
  });

  it('Should return GET_REQUESTS_FAIL', () => {
    const action = {
      type: GET_REQUESTS_FAIL,
      payload: {
        status: 400,
        data: {
          message: 'No Requests!!!'
        }
      }
    }
    const returnedSate = requestsReducer(undefined, action);
    expect(returnedSate).toEqual({
      "data": null,
      "dataError": action.payload,
      "singleData": null,
    });
  });

  it('Should return SINGLE_REQUEST_SUCCESS', () => {
    const action = {
      type: SINGLE_REQUEST_SUCCESS,
      payload: {
        status: 200,
        data: {
          message: 'Got single Request...'
        }
      }
    }
    const returnedSate = requestsReducer(undefined, action);
    expect(returnedSate).toEqual({
      "dataError": null,
      "data": null,
      "singleData": action.payload,
    })
  });

  it('Should return SINGLE_REQUEST_FAIL', () => {
    const action = {
      type: SINGLE_REQUEST_FAIL,
      payload: {
        status: 400,
        data: {
          message: 'No Requests!!!'
        }
      }
    }
    const returnedSate = requestsReducer(undefined, action);
    expect(returnedSate).toEqual({
      "data": null,
      "dataError": action.payload,
      "singleData": null,
    });
  });

});
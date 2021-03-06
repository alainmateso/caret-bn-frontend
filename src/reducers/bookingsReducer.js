import {
  GET_BOOKINGS, GET_BOOKINGS_ERROR, BOOK_SUCCESS, BOOK_FAILURE,
} from '../actions/types';

const initialState = {
  data: null,
  dataError: null,
  booked: null,
  bookedError: null,
  status: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKINGS:
      return {
        ...state,
        data: action.payload,
        status: 'success',
      };
    case GET_BOOKINGS_ERROR:
      return {
        ...state,
        dataError: action.payload,
        status: 'error',
      };
    case BOOK_SUCCESS:
      return {
        ...state,
        booked: action.payload,
        bookedError: null,
        status: 'success',
      };
    case BOOK_FAILURE:
      return {
        ...state,
        booked: null,
        bookedError: action.payload,
        status: 'error',
      };
    default:
      return {
        ...state,
      };
  }
};

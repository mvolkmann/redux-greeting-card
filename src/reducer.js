// Action type constants
const SET_MESSAGE = 'SET_MESSAGE';
const SET_NAME = 'SET_NAME';
const SET_OCCASION = 'SET_OCCASION';
const SET_SHOW = 'SET_SHOW';
const SHOUT = 'SHOUT';

const initialState = {
  occasion: 'Birthday',
  name: '',
  message: '',
  show: 'form'
};

// Action creator functions

export const setMessage = event => ({
  type: SET_MESSAGE,
  payload: event.target.value
});

export const setName = event => ({
  type: SET_NAME,
  payload: event.target.value
});

export const setOccasion = event => ({
  type: SET_OCCASION,
  payload: event.target.value
});

export const setShow = show => ({
  type: SET_SHOW,
  payload: show
});

export const shout = () => ({
  type: SHOUT
});

export function reducer(state = initialState, action) {
  const {payload, type} = action;
  switch (type) {
    case SET_MESSAGE:
      return {...state, message: payload};
    case SET_NAME:
      return {...state, name: payload};
    case SET_OCCASION:
      return {...state, occasion: payload};
    case SET_SHOW:
      return {...state, show: payload};
    case SHOUT:
      return {...state, message: state.message.toUpperCase()};
    default:
      return state;
  }
}

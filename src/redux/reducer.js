import {combineReducers} from 'redux';

const registerState = {
  name: 'Register Page',
  form: {
    fullName: '',
    email: '',
    password: '',
  },
};

const RegisterReducer = (state = registerState, action) => {
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }

  if (action.type === 'SET_FORM_NULL') {
    return {
      ...state,
      form: {
        ...state.form,
        fullName: '',
        email: '',
        password: '',
      },
    };
  }
  return state;
};

const loginState = {
  name: 'Login Page',
};

const LoginReducer = (state = loginState, action) => {
  return state;
};

const reducer = combineReducers({
  RegisterReducer,
  LoginReducer,
});

export default reducer;

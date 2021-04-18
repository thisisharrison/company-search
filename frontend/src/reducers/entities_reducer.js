export const RECEIVE_ALL_COMPANIES = "RECEIVE_ALL_COMPANIES";

const initialState = {
  all: {},
};

const entitiesReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_COMPANIES:
      newState.all = action.companies;
      return newState;

    default:
      return state;
  }
};

export default entitiesReducer;

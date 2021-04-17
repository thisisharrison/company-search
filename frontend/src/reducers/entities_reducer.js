export const RECEIVE_ALL_COMPANIES = "RECEIVE_ALL_COMPANIES";

// mock data
const initialState = {
  all: {
    1: {
      id: 1,
      name: "Company One",
      address: "First Ave",
      employee_size: 1,
      email: "one@one.com",
      phone_number: "11111111",
      website: "www.one.com",
      favorite: true,
    },
    2: {
      id: 2,
      name: "Company Two",
      address: "Second Ave",
      employee_size: 2,
      email: "two@two.com",
      phone_number: "22222222",
      website: "www.two.com",
      favorite: false,
    },
    3: {
      id: 3,
      name: "Company Three",
      address: "Third Ave",
      employee_size: 3,
      email: "3@three.com",
      phone_number: "333",
      website: "www.three.com",
      favorite: true,
    },
    4: {
      id: 4,
      name: "Company Four",
      address: "Fourth Ave",
      employee_size: 4,
      email: "4@fourth.com",
      phone_number: "44444444",
      website: "www.four.com",
      favorite: false,
    },
  },
};

const entitiesReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.key) {
    case RECEIVE_ALL_COMPANIES:
      newState.all = action.companies;
      return newState;

    default:
      return state;
  }
};

export default entitiesReducer;

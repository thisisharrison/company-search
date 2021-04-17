import * as API from "../util/company_api_util";

export const RECEIVE_ALL_COMPANIES = "RECEIVE_ALL_COMPANIES";

export const receiveAllCompanies = (companies) => ({
  type: RECEIVE_ALL_COMPANIES,
  companies,
});

export const fetchCompanies = () => (dispatch) =>
  API.fetchAllCompanies()
    .then((res) => {
      let companies = res.data.reduce((acc, cur) => {
        return { ...acc, [cur.id]: cur };
      }, {});
      dispatch(receiveAllCompanies(companies));
    })
    .catch((err) => console.error(err.detail));

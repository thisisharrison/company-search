import axios from 'axios';

export const fetchAllCompanies = () => (
  axios.get('/api/companies/')
);

export const fetchSingleCompany = id => (
  axios.get(`/api/companies/${id}`)
);

export const createCompany = data => (
  axios.get('/api/companies/', data)
);

export const editCompany = (id, data) => (
  axios.patch(`/api/companies/${id}`, data)
);

export const deleteCompany = id => (
  axios.delete(`/api/companies/${id}`)
)
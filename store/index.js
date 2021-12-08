export const state = () => ({
  formData: {
    firstName: "",
    middleName: "",
    lastName: "",
    myselect: null,
    title: null,
    countryselect: null,
    addressOne: null,
    addressTwo: null,
    city: null,
    zipcode: null,
    phone: null,
    userEmail: null,
    email: null,
  },
});
export const mutations = {
  updateFirstName(state, data) {
    state.formData.firstName = data;
  },
  updateLastName(state, data) {
    state.formData.lastName = data;
  },
};

export const actions = {
  getFirstName({ commit }, data) {
    commit("updateFirstName", data);
  },
  getLastName({ commit }, data) {
    commit("updateLastName", data);
  },
};

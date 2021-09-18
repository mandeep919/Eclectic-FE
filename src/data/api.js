import { makeRequest } from "./request";

const apiURL = "https://student-verse.herokuapp.com";
// const apiURL = "http://localhost:5000";
const siteURI = `${window.location.origin}`;

export const URL_CONFIG = {
  siteUrl: `${siteURI}`,
};

export function login(loginData) {
  const request = {
    method: "post",
    url: `${apiURL}/login`,
    body: {
      username: loginData.username,
      password: loginData.password,
    },
  };

  return makeRequest(request);
}

export function signup(signupData) {
  const request = {
    method: "post",
    url: `${apiURL}/signup`,
    body: {
      fname: signupData.fname,
      lname: signupData.lname,
      email: signupData.email,
      mobile: signupData.mobile,
      password: signupData.password,
      address: signupData.address,
    },
  };

  return makeRequest(request);
}

export function getProfile(token) {
  const request = {
    method: "get",
    url: `${apiURL}/profile`,
    headerParams: {
      authorization: `Bearer ${token}`,
    },
  };

  return makeRequest(request);
}

export function updateProfile(uProfile, token) {
  const request = {
    method: "put",
    url: `${apiURL}/profile/update`,
    body: {
      fname: uProfile.fname,
      lname: uProfile.lname,
      email: uProfile.email,
      mobile: uProfile.mobile,
      password: uProfile.password,
      newPassword: uProfile.newPassword,
      address: uProfile.address,
    },
    headerParams: {
      authorization: `Bearer ${token}`,
    },
  };

  return makeRequest(request);
}

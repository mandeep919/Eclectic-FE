import { makeRequest } from "./request";

const apiURL = "http://localhost:4000/api/v1";
const siteURI = `${window.location.origin}`;

export const URL_CONFIG = {
  siteUrl: `${siteURI}`,
};

export function login(loginData) {
  const request = {
    method: "post",
    url: `${apiURL}/login`,
    body: {
      userName: loginData.userNameL,
      password: loginData.passwordL,
    },
  };

  return makeRequest(request);
}

export function signup(signupData) {
  const request = {
    method: "post",
    url: `${apiURL}/signup`,
    body: {
      userName: signupData.userNameS,
      firstName: signupData.firstNameS,
      lastName: signupData.lastNameS,
      email: signupData.emailS,
      password: signupData.passwordS,
    },
  };
  return makeRequest(request);
}

export function getProfile(token) {
  const request = {
    method: "get",
    url: `${apiURL}/profile`,
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

export function updatePassword(updPass, token) {
  const request = {
    method: "put",
    url: `${apiURL}/profile/updatePassword`,
    body: {
      password: updPass.upCurrentpassword,
      newPassword: updPass.newPassword,
    },
    headerParams: {
      authorization: `Bearer ${token}`,
    },
  };

  return makeRequest(request);
}

export function updatePP(picture, token) {
  const request = {
    method: "put",
    url: `${apiURL}/picture/update`,
    body: picture,

    headerParams: {
      authorization: `Bearer ${token}`,
    },
  };

  return makeRequest(request);
}

export function getTopPosts() {
  const request = {
    method: "get",
    url: `${apiURL}/posts`,
  };

  return makeRequest(request);
}

export function getAllUsers() {
  const request = {
    method: "get",
    url: `${apiURL}/allUsers`,
  };

  return makeRequest(request);
}

export function getMessages() {
  const request = {
    method: "get",
    url: `${apiURL}/messages`,
  };

  return makeRequest(request);
}

export function getNotif() {
  const request = {
    method: "get",
    url: `${apiURL}/notification`,
  };

  return makeRequest(request);
}

export function fetchSearchUsers(name) {
  console.log("api hit", name);
  const request = {
    method: "get",
    url: `${apiURL}/searchUser?name=${name}`,
  };

  return makeRequest(request);
}

export function fetchSearchPosts(searchText) {
  const request = {
    method: "get",
    url: `${apiURL}/searchPosts?searchText=${searchText}`,
  };

  return makeRequest(request);
}

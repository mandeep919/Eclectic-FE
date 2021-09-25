import { makeRequest } from "./request";

// const apiURL = "https://herokuapp.com";
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
      userName: signupData.userName,
      firstName: signupData.firstName,
      lastName: signupData.lastName,
      email: signupData.email,
      password: signupData.password,
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

export function addComment(commentD, token) {
  const request = {
    method: "post",
    url: `${apiURL}/addComment`,
    body: {
      question: commentD.questionID,
      text: commentD.textC,
      answer: commentD.id,
    },
    headerParams: {
      authorization: `Bearer ${token}`,
    },
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

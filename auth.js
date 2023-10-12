const userName = "test";
const passWord = "test";

function authenticateUser(user, password) {
  const token = user + ":" + password;

  // Should i be encoding this value????? does it matter???
  // Base64 Encoding -> btoa
  const hash = btoa(token);

  return "Basic " + hash;
}

function CallWebAPI() {
  // New XMLHTTPRequest
  const request = new XMLHttpRequest();
  request.open("POST", "https://assignments-test.vercel.app/auth/token", false);
  request.setRequestHeader(
    "Authorization",
    authenticateUser(userName, passWord)
  );
  request.send();
  // view request status
  alert(request.status);
  response.innerHTML = request.responseText;
}

window.open(CallWebAPI());

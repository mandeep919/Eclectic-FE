const { expect } = require("chai");
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
const { delay } = require("../utils/delay");

//Sprint 1
Given("Test signup functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/signup");
  await driver.findElement(By.id("firstnamesignup")).sendKeys("test2");
  await driver.findElement(By.id("lastnamesignup")).sendKeys("test2");
  await driver.findElement(By.id("passwordsignup")).sendKeys("test2");
  await driver.findElement(By.id("emailsignup")).sendKeys("test2@gmail.com");
  await driver.findElement(By.id("addresssignup")).sendKeys("kathmandu");
  await driver.findElement(By.id("mobilesignup")).sendKeys("1234567");
  await driver.sleep(delay);
  await driver.findElement(By.id("signupBtn")).click();
  await driver.quit();
});

Given("Test login functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/login");
  await driver.findElement(By.id("usernamelogin")).sendKeys("test2");
  await driver.findElement(By.id("passwordlogin")).sendKeys("test2");
  await driver.sleep(delay);
  await driver.findElement(By.id("loginBtn")).click();
  await driver.quit();
});
Given("Test profile functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/profile-update");
  await driver.findElement(By.id("updateFnmae")).sendKeys("test1");
  await driver.findElement(By.id("updateLname")).sendKeys("test1");
  await driver.findElement(By.id("update-email")).sendKeys("test1@gmail.com");
  await driver.findElement(By.id("update-address")).sendKeys("test10");
  await driver.findElement(By.id("update-mobile")).sendKeys("22222222");
  await driver.findElement(By.id("update-curentpasword")).sendKeys("test1");
  await driver.sleep(delay);
  await driver.findElement(By.id("upProfileBtn")).click();
  await driver.quit();
});

//Sprint 4
Given("Test Comment functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/post/60f681de79b0dd4808c76433");
  await driver
    .findElement(By.id("exampleFormControlTextarea1"))
    .sendKeys("wwww");
  await driver.sleep(delay);
  await driver.findElement(By.id("addCommentTest")).click();
  await driver.quit();
});
Given("Test Posts functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/post-search");
  await driver.findElement(By.id("tag")).sendKeys("science");
  await driver.sleep(delay);
  await driver.findElement(By.id("tag-button")).click();
  await driver.quit();
});
Given("Test users functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/user-search");
  await driver.findElement(By.id("profile-search")).sendKeys("test2");
  await driver.sleep(delay);
  await driver.findElement(By.id("button-search")).click();
  await driver.quit();
});

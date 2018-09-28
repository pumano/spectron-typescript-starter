import { expect } from "chai";
import { Application } from "spectron";

import { PageFactory, Pages } from "../helpers/PageFactory";
import { TestUtils } from "../helpers/TestUtils";

describe("Initial test suite", () => {

  let pages: Pages;
  let utils;
  let app: Application;

  before(async () => {
    // set app instance
    utils = new TestUtils();
    app = await utils.setUp();
    if (app && app.isRunning()) {
      // components (page objects) init
      pages = new PageFactory().initPages(app);
      return await app.client.windowByIndex(utils.windowByIndex()); // select window by Id
    } else {
      console.log("Application not runned");
    }
  });

  before(async () => {

   // you can it for preconditions aka login here if needed

  });

  after(() => {
    // close browser
    utils.tearDown();
  });

  it("h1 should be Hello World!", async () => {

    // act

    // await pages.initialPages.clickSomeButton();
    // await pages.secondPage.doingSome();

    // assert

    const actualHeader = await pages.initialPage.getHeader();

    expect(actualHeader).to.equals("Hello World!");

  });

  it("some other your test", async () => {

    // act

    // await pages.initialPages.clickSomeButton();
    // await pages.secondPage.doingSome();

    // assert

    // const actualHeader = await pages.initialPage.getHeader();

    // expect(actualHeader).to.equals("Hello World!");

  });

});

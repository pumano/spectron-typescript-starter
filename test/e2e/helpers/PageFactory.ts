import { Application } from "spectron";

import { InitialPage } from "../po/initial.po";

export interface Pages {
  initialPage: InitialPage;
  // your pages here
  // secondPage: SecondPage;
}


export class PageFactory implements Pages {

  public initialPage: InitialPage;
  // public secondPage: SecondPage;

  public initPages(app: Application) {
    return {
     initialPage: new InitialPage(app),
     // secondPage: new SecondPage(app),
    };
  }
}

import log from "../helpers/LoggerDecorator";
import { Helpers } from "./../helpers/Helpers";

export class InitialPage extends Helpers {

  // locators
  private headerTextLocator = "h1";

  // methods

  @log
  public async getHeader() {
    return await this.getText(this.headerTextLocator);
  }

}


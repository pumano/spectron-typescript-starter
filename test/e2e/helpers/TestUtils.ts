import * as electron from "electron";
import { Application } from "spectron";

export class TestUtils {
  public app: Application;
  public windowsCount = 2;

  public windowByIndex() { return this.windowsCount - 1; }

  public setUp() {
    // start application
    this.app = new Application({
      // path to electron app
      args: ["./dist/main.js"],
      path: "" + electron,
      startTimeout: 30000,
      waitTimeout: 30000,
    });
    return this.app.start();
  }

  public tearDown() {
    // close browser
    const windows = this.app.client.windowHandles() as any;
    this.app.client.close(windows.sessionId);
  }
}

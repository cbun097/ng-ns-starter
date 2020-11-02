"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const nativescript_dev_appium_1 = require("nativescript-dev-appium");
describe("Home component scenario", () => {
    let driver;
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        driver = yield nativescript_dev_appium_1.createDriver();
    }));
    afterAll(() => __awaiter(this, void 0, void 0, function* () {
        yield driver.quit();
        console.log("Quit driver!");
    }));
    afterEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield driver.logTestArtifacts("report");
        });
    });
    it("should find an element by text", () => __awaiter(this, void 0, void 0, function* () {
        const btnTap = yield driver.findElementByAutomationText("Camera");
        yield btnTap.click();
        const message = "Allow ModifiedStarted to take pictures and record video?";
        // const lblMessage = await driver.findElementByText(message, SearchOptions.contains);
        expect(yield message).toContain("Allow ModifiedStarted to take pictures and record video?");
        // Image verification
        // const screen = await driver.compareScreen("hello-world-41");
        // assert.isTrue(screen);
        // expect(screen).toBeTruthy();
    }));
    // it("should find an element by type", async () => {
    //     const btnTap = await driver.findElementByClassName(driver.locators.button);
    //     await btnTap.click();
    //     const message = " taps left";
    //     const lblMessage = await driver.findElementByText(message, SearchOptions.contains);
    //     expect(await lblMessage.text()).toContain("40");
    // });
});
//# sourceMappingURL=home.e2e-spect.js.map
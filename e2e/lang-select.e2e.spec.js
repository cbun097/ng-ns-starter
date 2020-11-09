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
const lang_select_1 = require("./page-objects/lang-select");
describe("Lang select component scenario", () => {
    let driver;
    let langSelect;
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        driver = yield nativescript_dev_appium_1.createDriver();
        langSelect = new lang_select_1.LangSelect(driver);
    }));
    // afterAll(async ()=> {
    //     await driver.quit();
    //     console.log("Quit driver!");
    // });
    // afterEach(async function () {
    //     await driver.logTestArtifacts("report");
    // });
    it('check lang text', () => __awaiter(this, void 0, void 0, function* () {
        langSelect.loadedText();
    }));
    it('check lang button click', () => __awaiter(this, void 0, void 0, function* () {
        langSelect.checkBtn();
    }));
});
//# sourceMappingURL=lang-select.e2e.spec.js.map
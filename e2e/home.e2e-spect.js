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
const home_1 = require("./page-objects/home");
describe("Home component scenario", () => {
    let driver;
    let home;
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        driver = yield nativescript_dev_appium_1.createDriver();
        home = new home_1.Home(driver);
    }));
    it('check text', () => __awaiter(this, void 0, void 0, function* () {
        home.loadedText();
    }));
    // work on it - need to check special permission
    it('check btn camera click', () => __awaiter(this, void 0, void 0, function* () {
        //home.buttonText();
    }));
    it('check lang btn text', () => __awaiter(this, void 0, void 0, function* () {
        home.langChange();
    }));
    it('check navigate to', () => __awaiter(this, void 0, void 0, function* () {
        home.navigateTo();
    }));
});
//# sourceMappingURL=home.e2e-spect.js.map
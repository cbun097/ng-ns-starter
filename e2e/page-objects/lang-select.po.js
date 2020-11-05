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
class LangSelect {
    constructor(driver) {
        this.driver = driver;
        this.loadedText = () => __awaiter(this, void 0, void 0, function* () {
            const title = yield this.driver.findElementByText("Language selection page", nativescript_dev_appium_1.SearchOptions.exact);
            return yield title.exists();
        });
    }
}
exports.LangSelect = LangSelect;
//# sourceMappingURL=lang-select.po.js.map
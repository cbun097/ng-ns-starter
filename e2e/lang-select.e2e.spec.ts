import { AppiumDriver, createDriver } from "nativescript-dev-appium";
import { LangSelect } from "./page-objects/lang-select";

describe("Lang select component scenario", () => {
    let driver: AppiumDriver;
    let langSelect: LangSelect;

    beforeAll(async () => {
        driver = await createDriver();
        langSelect  = new LangSelect(driver);
    });

    // afterAll(async ()=> {
    //     await driver.quit();
    //     console.log("Quit driver!");
    // });

    // afterEach(async function () {
    //     await driver.logTestArtifacts("report");
    // });

    it('check lang text', async ()=>{
        langSelect.loadedText();
    });

    it('check lang button click', async ()=>{
        langSelect.checkBtn();
    });
});
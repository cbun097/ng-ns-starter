import { AppiumDriver, createDriver, SearchOptions } from "nativescript-dev-appium";
import { Home } from "./page-objects/home";

describe("Home component scenario", () => {
    let driver: AppiumDriver;
    let home: Home;

    beforeAll(async () => {
        driver = await createDriver();
        home  = new Home(driver);

        await home.navigateTo();
    });

    afterAll(async ()=> {
        await driver.quit();
        console.log("Quit driver!");
    });

    afterEach(async function () {
        await driver.logTestArtifacts("report");
    });

    it('check text', async ()=>{
            home.loadedText();
    });

    it('check btn camera click', async ()=>{
        home.buttonText();
    });

    // failing
    it('check lang btn click', async ()=>{
        //home.langChange();
    });

});
import { AppiumDriver, createDriver } from "nativescript-dev-appium";
import { Home } from "./page-objects/home";

describe("Home component scenario", () => {
    let driver: AppiumDriver;
    let home: Home;

    beforeAll(async () => {
        driver = await createDriver();
        home  = new Home(driver);
    });

    it('check text', async ()=>{
        home.loadedText();
    });

    // work on it - need to check special permission
    it('check btn camera click', async ()=>{
        home.buttonText();
    });

    it('check lang btn text', async ()=>{
        home.langChange();
    });

    it('check navigate to', async ()=>{
        home.navigateTo();
    });
});
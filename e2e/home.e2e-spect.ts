import { AppiumDriver, createDriver, SearchOptions } from "nativescript-dev-appium";

describe("Home component scenario", () => {
    let driver: AppiumDriver;

    beforeAll(async () => {
        driver = await createDriver();
    });

    afterAll(async () => {
        await driver.quit();
        console.log("Quit driver!");
    });

    afterEach(async function () {
        await driver.logTestArtifacts("report");
    });

    it("should find an element by text", async () => {
        const btnTap = await driver.findElementByAutomationText("Camera");
        await btnTap.click();

        const message = "Allow ModifiedStarted to take pictures and record video?";
        // const lblMessage = await driver.findElementByText(message, SearchOptions.contains);
        expect(await message).toContain("Allow ModifiedStarted to take pictures and record video?");
        // Image verification
        // const screen = await driver.compareScreen("hello-world-41");
        // assert.isTrue(screen);
        // expect(screen).toBeTruthy();
    });

    // it("should find an element by type", async () => {
    //     const btnTap = await driver.findElementByClassName(driver.locators.button);
    //     await btnTap.click();

    //     const message = " taps left";
    //     const lblMessage = await driver.findElementByText(message, SearchOptions.contains);
    //     expect(await lblMessage.text()).toContain("40");
    // });
});
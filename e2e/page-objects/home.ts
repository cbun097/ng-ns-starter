import { AppiumDriver, SearchOptions } from "nativescript-dev-appium";

export class Home {

    constructor(private driver: AppiumDriver) {}

    buttonText = async() => {
        const btn = this.driver.findElementByAccessibilityId('cameraBtn');
        return (await btn).click();
    }

    loadedText= async () => {
        const title = await this.driver.findElementByText("Play with NativeScript!!!", SearchOptions.exact);
        return await title.exists()
    }

    langChange = async() => {
        const langChange = this.driver.findElementByAccessibilityId("langBtn");
        return (await langChange).click();
    }

    navigateTo = async() => {
        return this.driver.navBack();
    }
}
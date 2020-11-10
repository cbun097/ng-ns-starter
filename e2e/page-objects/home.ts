import { AppiumDriver, SearchOptions } from "nativescript-dev-appium";

export class Home {

    constructor(private driver: AppiumDriver) {}

    buttonText = async() => {
        const btn = this.driver.findElementByAccessibilityId('cameraBtn');
        (await btn).click();
        (await this.driver.findElementByText("While using the app")).click();
        return (await this.driver.findElementByText("Allow")).click();
    }

    loadedText= async () => {
        const title = await this.driver.findElementByText("Play with NativeScript!!!", SearchOptions.exact);
        return await title.exists();
    }

    langChange = async() => {
        const langChange = await this.driver.findElementByText("Language select", SearchOptions.exact);
        return await langChange.exists() ;
    }

    navigateTo = async() => {
        return this.driver.navBack();
    }
}
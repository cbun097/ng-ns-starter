import { AppiumDriver, SearchOptions } from "nativescript-dev-appium";

export class LangSelect {
    constructor(private driver: AppiumDriver) {}

    loadedText=async () => {
        const title = await this.driver.findElementByText("Language selection page", SearchOptions.exact)
        return await title.exists();
    }

    checkBtn = async () => {
        const btn = await (await this.driver.findElementByAccessibilityId("button")).click();
        return btn;
    }
}
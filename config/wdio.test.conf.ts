import { config as baseConfig } from "../wdio.conf"

export const config = Object.assign(baseConfig,{

    environment: "Test",
    sauceDemoURL: "https://www.saucedemo.com"

})
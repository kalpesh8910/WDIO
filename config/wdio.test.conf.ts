import { config as baseConfig } from "../wdio.conf"

export const config = Object.assign(baseConfig,{

    // All test env specific key val pairs is defined.
    // We merging the test confifguration to base configuration

    environment: "TEST",
    sauceDemoURL: "https://www.saucedemo.com",
    reqresBaseURL: "https://reqres.in",
    GoogleURL: "https://www.google.com/",
    filechannelURL: "https://www.filechannels.net/login"

})
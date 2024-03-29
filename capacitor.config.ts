/** @format */

import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
	appId: "com.example.app",
	appName: "starter-next",
	webDir: "pages/static",
	android: {
		path: "mobile/android/",
	},
	ios: {
		path: "mobile/ios/",
	},
	bundledWebRuntime: false,
	server: {
		url: "http://localhost:3000",
		cleartext: true,
	},
};

export default config;

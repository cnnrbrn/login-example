import * as listeners from "./listeners/index.js";
import buildMenu from "./ui/common/buildMenu.js";
import { redirectBasedOnLogin } from "./helpers/auth.js";

export default function router() {
	const pathname = window.location.pathname;
	console.log(pathname);
	redirectBasedOnLogin(pathname);
	buildMenu(pathname);

	switch (pathname) {
		case "/":
		case "/index.html":
			break;
		case "/auth/login.html":
			listeners.loginListener();
			break;
	}
}

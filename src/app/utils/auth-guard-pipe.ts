import { redirectUnauthorizedTo } from "@angular/fire/compat/auth-guard";

export const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["login"]);

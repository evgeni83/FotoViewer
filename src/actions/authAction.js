import { redirectToAuthPage } from "../apis/unsplashAPI";

export const authorize = () => () => redirectToAuthPage();
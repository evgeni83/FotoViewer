import Unsplash, { toJson } from "unsplash-js";
import { getNewListOfPhotos } from "../actions/action";

export const unsplash = new Unsplash({
  accessKey: "69a71056cc02e30857197cc9b6512542d933bc3b17e30eb385b6aba920bf5734",
  secret: "351731b0a6ee01c5e04b2c865b630042e52bd9ef4c261baeb752be5f717c8331",
  callbackUrl: "http://localhost:3000/main"
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "write_likes"
]);

if (window.location.pathname === "/") {
  window.location.assign(authenticationUrl);
}

// const code = window.location.search.split("code=")[1];

// console.log(code);

// if (code) {
//   unsplash.auth
//     .userAuthentication(code)
//     .then(res => res.json())
//     .then(json => {
//       // Сохраняем полученный токен
//       console.log(json);
//       unsplash.auth.setBearerToken(json.access_token);
//       // Теперь можно сделать что-то от имени пользователя
//       // Например, поставить лайк фотографии
//       console.log(unsplash._bearerToken);
//     });
// }

unsplash.photos
  .listPhotos(1, 10, "latest")
  .then(toJson)
  .then(json => {
    console.log(json);
    const n = getNewListOfPhotos(json);
    console.log(n);
  });

import Unsplash from "unsplash-js";

export const unsplash = new Unsplash({
         accessKey:
           "69a71056cc02e30857197cc9b6512542d933bc3b17e30eb385b6aba920bf5734",
         secret:
           "351731b0a6ee01c5e04b2c865b630042e52bd9ef4c261baeb752be5f717c8331",
        //  callbackUrl: "http://localhost:3000/main"
         // callbackUrl: "http://fotoviewer.danevgen.ru/main"
        //  callbackUrl: "http://photoviewer.qwe/main"
         callbackUrl: "https://evgeni83.github.io/FotoViewer/main"
       });

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "write_likes"
]);

export const redirectToAuthPage = () => {
  window.location.assign(authenticationUrl);
};

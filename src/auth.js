import Unsplash from "unsplash-js";
// Создаем экземпляр объекта для доступа к API
const unsplash = new Unsplash({
  accessKey:
    "69a71056cc02e30857197cc9b6512542d933bc3b17e30eb385b6aba920bf5734",
  secret: "351731b0a6ee01c5e04b2c865b630042e52bd9ef4c261baeb752be5f717c8331",
  callbackUrl: "http://localhost:3000/"
});
// Считываем GET-параметр code из URL
// www.example.com/auth?code=abcdef123456...
const code = window.location.search.split("code=")[1];
// Если код передан, отправляем запрос на получение токена
if (code) {
  unsplash.auth
    .userAuthentication(code)
    .then(res => res.json())
    .then(json => {
      // Сохраняем полученный токен
      unsplash.auth.setBearerToken(json.access_token);
      // Теперь можно сделать что-то от имени пользователя
      // Например, поставить лайк фотографии
    });
}


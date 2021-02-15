1. Task: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/rslang/english-for-kids.md
2. Screenshot:

![english-for-kids](https://user-images.githubusercontent.com/46966556/101706782-ebc71700-3a9a-11eb-84cc-eab002753a76.png)

3. Deploy: https://rolling-scopes-school.github.io/sonkn1ght-JS2020Q3/english-for-kids/
4. Из дополнительного функционала добавлено:
- роутинг с валидацией. сохраняет текущую страницу и режим приложения. не сохраняется текущая сессия игры.
  При введении некорректного адреса перебрасывает приложение на main page в режиме train.
- заглушка на случай попытки вызвать повторение сложных слов. Если нет накопленной статистики по ошибкам - то будет показано сообщение `Difficult words not found`. И пользователь будет перенаправлен на главную страницу приложения.
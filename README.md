# YaLondonDev

## Demo

**[Watch demo (Heroku)](https://yamariodev.herokuapp.com/)**

## Запуск проекта

Для запуска проекта необходимо установить зависимости

`npm install` или `yarn` , кому как удобно =)

Для запуска в режиме разработки кастуем `npm run start:dev`  
Для запуска eslint: `npm run start:lint`  
Для сборки продакшена: `npm run build`

## Аудит проекта

Во время аудита утечки памяти обнаружено не было

## Локальная проверка авторизации пользователя на SSR

Чтобы эта фича заработала локально нужно:

Сгенирировать ssl сертификат, для этого выполняем следующие команды:
`openssl genrsa -out secure/key.pem`
`openssl req -new -key secure/key.pem -out secure/csr.pem`
`openssl x509 -req -days 9999 -in secure/csr.pem -signkey secure/key.pem -out secure/cert.pem`
`rm secure/csr.pem`

После данных действий в папке secure будет расположен сертификат,
Chrome этот серт принимать не станет, я все тестил через firefox.

Далее нужно редактировать файл `hosts`:
На винде: `C:\Windows\System32\drivers\etc\hosts`
Unix: `/etc/hosts`
Вставляем строку: `127.0.0.1       mario.ya-praktikum.tech`

Далее запускаем `yarn start:https` и заходим на `https://mario.ya-praktikum.tech:5000`
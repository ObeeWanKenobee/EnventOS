# InventOS
**InventOS** POS built on top of the [Laravel Angular Admin](http://silverbux.github.io/laravel-angular-admin/) project.

## Project Objective
To create a robust and easily deployable open-source solution for inventory and POS management software. It is aimed to be easy to maintain, easy to configure, secure and light-weight (hopefully).

## Screenshots
Coming soon

## Demo
Comming soon

## Installation
```
$ npm install
```

Open ```.env``` and enter necessary config for DB and Oauth Providers Settings.

```
$ npm run deploy
```

## Work Flow

**General Workflow**

Open a terminal
```
npm start
```

> Default Username/Password: admin@example.com / password


## Contributing

Thank you for contributing to this repository.

## Acknowledgments / Credits
This project wont be possible without the following, We acknowledge and are grateful to these developers for their contributions to open source. **All necessary credits are given**.
* [Laravel-Angular-Admin](http://silverbux.github.io/laravel-angular-admin/)
* [Laravel-Angular (Material)](https://laravel-angular.readme.io)
* [AdminLTE](https://github.com/almasaeed2010/AdminLTE)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Todo
- Post screenshots
- Deploy an online demo
- add  safe delete option to all `CRUD` features.
- complete the permission based API access.
- complete the permission based routing in angular.
- sales and receiving edit should not delete its items and inventory records when updating, it should delete only if the certain item is removed from the transaction or else, just update the item's information `(quantity, price etc)` as needed.
- add `notification` function?
- Sales receipt via email?
- On sales, inventory should be dealt individually when the purchased item is an item-kit.

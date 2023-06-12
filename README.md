
# Documentation

- Install a required modules: `npm install`, 
- Run a dev server: `ng serve`, open in your browser [http://localhost:4200](http://localhost:4200)
- Run tests with `ng test`


## Initial state

to change initial state change devices.json in `src/app/utils`


## Project structure by modules:

`src/app/models` - shared interfaces, typesmodels and enums
`src/app/modules` - application modules
	- `devices` - module for devices entity, all related components/pages/sub-modules
	- `home` - placeholder for home module
	- `support` - placeholder for support module
`src/app/shared` - shared items across application: pipes/components/directives which are reused in different modules

## Technologies

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4

List:
Angular: 13.0.4.
TypeScript 4.4.3
...


# Documentation

- Install a required modules: `npm install`, 
- Run a dev server: `ng serve`, open in your browser [http://localhost:4200](http://localhost:4200)
- Run tests with `ng test`


## Technologies

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

List:
- Angular: 13.0.4.
- TypeScript 4.4.3
...


## Initial state

to change initial state change devices.json in `src/app/utils`


## Project structure by modules:

- `src/app/models` - shared interfaces, types, models and enums
- `src/app/modules` - application modules
	- `devices` - module for devices entity, all related components/pages/sub-modules
	- `home` - placeholder for home module
	- `navigation` - navigation module with aside menu and place where we can configure access & role based navigation 
	- `support` - placeholder for support module
- `src/app/shared` - shared items across the application modules: pipes/components/directives which are reused in different modules

## Module architecture

- Each application module should be defined as seperate instance and accesible by lazy loading to optimize intial loading
- Entry point of module should be index component and contain some shared UI layout for that module


### Routing module structure:
- `all`      / get all items, for example as table
- `add`      / add item
- `:id`      / work with seperate instance
  - `view`    / get by id and view it
  - `update`  / update item by id
  - `delete`? / delete item by id if seperate page is needed

Please note that `add` and `update` can be route to the same form component.

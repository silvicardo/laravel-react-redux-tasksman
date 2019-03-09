# laravel-react-redux-tasksman

The focus of this exercise is to integrate Redux in an existing API + React Project.

Objectives:
-> do not change existing Api Structure
-> create smaller components without changing React logic
-> implement Redux

Starter Laravel+React Project: https://github.com/ammezie/tasksman

## Getting Started

Clone the project repository by running the command below if you use SSH

```bash
git clone git@github.com:ammezie/tasksman.git
```

If you use https, use this instead

```bash
git clone https://github.com/ammezie/tasksman.git
```

After cloning, run:

```bash
composer install
```

```bash
npm install
```

Duplicate `.env.example` and rename it `.env`

Then run:

```bash
php artisan key:generate
```

### Prerequisites

Be sure to fill in your database details in your `.env` file before running the migrations:

```bash
php artisan migrate
```

And finally, start the application:

```bash
php artisan serve
```

and visit [http://localhost:8000](http://localhost:8000) to see the application in action.

## Built With

* [Laravel](https://laravel.com) - The PHP Framework For Web Artisans
* [React](https://reactjs.org) - A JavaScript library for building user interfaces

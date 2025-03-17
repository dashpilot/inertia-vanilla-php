<?php

require_once __DIR__ . '/../vendor/autoload.php';

use App\Inertia;
use Bramus\Router\Router;

$router = new Router();

// Home route
$router->get('/', function() {
    echo Inertia::render('Home', [
        'message' => 'Hello from the server!'
    ]);
});

// About route
$router->get('/about', function() {
    echo Inertia::render('About');
});

// Contact route
$router->get('/contact', function() {
    echo Inertia::render('Contact');
});

// Run the router
$router->run();
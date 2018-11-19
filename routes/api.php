<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', 'AuthController@login');
Route::post('/refresh', 'AuthController@refresh');
Route::post('/register', 'AuthController@register');

Route::group(['middleware' => 'jwt.auth'], function () {
    Route::get('/index', 'ApiController@index');
    Route::post('/store', 'ApiController@store');
    Route::delete('/delete/{id}', 'ApiController@delete');
});
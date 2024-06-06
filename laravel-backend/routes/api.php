<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('users', [UserController::class,'index']);
Route::get('users/{id}', [UserController::class,'show']);
Route::post('addnew',[UserController::class,'store']);
Route::put('usersupdate/{id}',[UserController::class,'update']);

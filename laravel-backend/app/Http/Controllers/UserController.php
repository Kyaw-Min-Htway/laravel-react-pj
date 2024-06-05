<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index(){
        $users = User::all();

        //return json response
        return response()->json([
            'results' => $users
        ],200);
    }

    public function show($id){
        //user detail
        $users = User::find($id);
        if(!$users){
            return response()->json([
                'message' => 'User not found!'
            ],404);
        }

        return response()->json([
            'users' => $users
        ],200);
    }

    public function store(){
        
    }
}

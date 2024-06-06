<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\UserStoreRequest;

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

    public function store(UserStoreRequest $request){
        try{
            //create user
            User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => $request->password
            ]);

            return response()->json([
                'message' => 'User successfully created.'
            ]);
        }catch(\Exception $e){
            //return json response
            return response()->json([
                'message' => 'Something went really wrong!'
            ],500);
        }
    }

    public function update(UserStoreRequest $request, $id){
        try{
            //find User
            $users = User::find($id);
            if(!$users){
                return $users()->json([
                    'message' => 'User not found.'
                ],404);
            }
            $users->name = $request->name;
            $users->email = $request->email;
            $users->password = $request->password;

            //update user
            $users->save();

            //return json response
            return response()->json([
                'message' => "User successfully updated."
            ],200);
            
        }catch(\Exception $e){
            //return json response
            return response()->json([
                'message' => "Something went really wrong!"
            ],500);
        }
    }
}

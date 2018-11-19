<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterFormRequest;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    /**
     * @param RegisterFormRequest $request
     * @param User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(RegisterFormRequest $request, User $user)
    {
        try {
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->save();
            return ['data' => $user];
        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }

    }

    /**
     * @param Request $request
     * @return array|\Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return ['status' => 'success', 'token' => $token];
    }

    /**
     * @return array
     */
    public function refresh()
    {
        try {
            $newToken = JWTAuth::refresh(JWTAuth::getToken());
            return ['status'=> 'success', 'token' => $newToken];
        } catch (JWTException $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

    }
}

<?php

namespace App\Http\Controllers;

use App\Api;
use Illuminate\Http\Request;

class ApiController extends Controller
{

    public function index(Api $api)
    {
       return $api->latest()->get();
    }

    public function store(Api $api, Request $request)
    {
        $image = $request->file('image');
        if ($image) {
            $pathToSaveImage = 'image/posts/';
            $filename = $image->getClientOriginalName();
            $image->move($pathToSaveImage, $filename);
        }

        $api->name = $request->name;
        $api->image = $filename;
        $api->description = $request->description;

        return ['succes' => $api->save()];
    }

    public function delete(Api $api, $id)
    {
        $data = $api->findOrFail($id);
        $data->delete();
    }

}

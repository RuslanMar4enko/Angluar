<?php

namespace App\Http\Controllers;

use App\Api;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;

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
            $pathToSaveImage = '/app/public/';
            $filename = str_random(6) . $image->getClientOriginalName();
            $image->move(storage_path($pathToSaveImage . 'upload'), $filename);
        }
        $api->name = $request->name;
        $api->image = URL::to('/') . '/storage/upload/' . $filename;
        $api->description = $request->description;

        return ['succes' => $api->save()];
    }

    public function delete(Api $api, $id)
    {
        $data = $api->findOrFail($id);
        $data->delete();
        $arryImage = explode('/', $data->image);
        $nameImage = array_pop($arryImage);
        unlink(storage_path('app/public/upload/'.$nameImage));
    }

}

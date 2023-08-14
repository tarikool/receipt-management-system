<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReceiptRequest;
use App\Models\Receipt;
use App\Services\ReportService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

class ReceiptController extends Controller
{

    public function __construct()
    {
    }


    public function create(Request $request): Response
    {
        return Inertia::render('Receipt/Create');
    }


    public function store(ReceiptRequest $request, Receipt $receipt)
    {
        $receipt->amount = $request->amount;
        $receipt->buyer = $request->buyer;
        $receipt->receipt_id = $request->receipt_id;
        $receipt->items = implode(',', $request->items);
        $receipt->buyer_email = $request->buyer_email;
        $receipt->buyer_ip = $request->buyer_ip;
        $receipt->note = $request->note;
        $receipt->city = $request->city;
        $receipt->phone = $request->phone;

        $receipt->buyer_ip = $request->ip();
        $receipt->hash_key = Crypt::encryptString($request->receipt_id . hash('sha512',  $request->phone));
        $receipt->entry_by = auth()->id();
        $receipt->save();

    }



}

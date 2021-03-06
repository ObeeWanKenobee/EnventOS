<?php

use Illuminate\Database\Seeder;
use App\Models\Product;
class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->create([
            'product_code' => '13aset2swwer24',
            'product_name' => 'Lenovo ideapad 310',
            'size' => '11x8',
            'description' => 'Some description',
            'cost_price' => 25000.00,
            'selling_price' => 27000.00,
        ]);
        $this->create([
            'product_code' => 'jert63ert3ewsfsa',
            'product_name' => 'Lenovo thinkpad G30',
            'size' => '11x8',
            'description' => 'Some description',
            'cost_price' => 35000.00,
            'selling_price' => 38500.00,
        ]);
        $this->create([
            'product_code' => 'fksjhwiywr29sd',
            'product_name' => 'Acer aspire 211',
            'size' => '12x8.5',
            'description' => 'Some description',
            'cost_price' => 65000.00,
            'selling_price' => 73000.00,
        ]);
        $this->create([
            'product_code' => '13aset2swwer24',
            'product_name' => 'Lenovo L series GX9',
            'size' => '11x8',
            'description' => 'Some description',
            'cost_price' => 90000.00,
            'selling_price' => 107000.00,
        ]);
        $this->create([
            'product_code' => '533543534523424',
            'product_name' => 'Beat 49',
            'size' => '2x2',
            'description' => 'Some description',
            'cost_price' => 955.00,
            'selling_price' => 1050.99,
        ]);
        $this->create([
            'product_code' => '4564534645634536',
            'product_name' => 'Lenovo Black leather bag',
            'size' => '11x9',
            'description' => 'Leather water resistant bag for Lenovo',
            'cost_price' => 450.00,
            'selling_price' => 599.99,
        ]);
    }

    public function create($arg)
    {
        $product = new Product;
        $product->product_code = $arg['product_code'];
        $product->product_name = $arg['product_name'];
        $product->size = $arg['size'];
        $product->description = $arg['description'];
        $product->cost_price = $arg['cost_price'];
        $product->selling_price = $arg['selling_price'];

        return $product->save();
    }
}

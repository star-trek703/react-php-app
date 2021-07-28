<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include "../common/library.php";

$categories = $obj->select("*", "categories", "1");

if(is_array($categories))
{
    $category_array = array();

    foreach ($categories as $c_key => $category)
    {
        array_push($category_array, array(
            'ID' => $category[0],
            'name' => $category[1]
        ));
    }

    $data['response'] = 'y';
    $data['error'] = false;
    $data['categories'] = $category_array;
    echo json_encode($data);
}
else {
    $data['response'] = 'n';
    $data['error'] = true;
    echo json_encode($data);
}

?>
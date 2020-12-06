<?php
include_once '../bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

// Recepción de los datos enviados mediante POST desde el JS   

$CompanyName = (isset($_POST['CompanyName'])) ? $_POST['CompanyName'] : '';
$ContactName = (isset($_POST['ContactName'])) ? $_POST['ContactName'] : '';
$ContactTitle = (isset($_POST['ContactTitle'])) ? $_POST['ContactTitle'] : '';
$Address = (isset($_POST['Address'])) ? $_POST['Address'] : '';
$City = (isset($_POST['City'])) ? $_POST['City'] : '';
$Region = (isset($_POST['Region'])) ? $_POST['Region'] : '';
$PostalCode = (isset($_POST['PostalCode'])) ? $_POST['PostalCode'] : '';
$Country = (isset($_POST['Country'])) ? $_POST['Country'] : '';
$Phone = (isset($_POST['Phone'])) ? $_POST['Phone'] : '';





$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$CustomerID= (isset($_POST['CustomerID'])) ? $_POST['CustomerID'] : '';

switch($opcion){
    case 1: //alta
        $consulta = "INSERT INTO customers (CompanyName, ContactName, ContactTitle, Address, City, Region, PostalCode, Country, Phone) VALUES('$CompanyName', '$ContactName', '$ContactTitle', '$Address', '$City', '$Region', '$PostalCode', '$Country', '$Phone' ) ";			
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); 

        $consulta = "SELECT CustomerID, CompanyName, ContactName, ContactTitle, Address, City, Region, PostalCode, Country, Phone FROM customers";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 2: //modificación
        $consulta = "UPDATE customers SET CompanyName='$CompanyName', ContactName='$ContactName' ContactTitle='$ContactTitle', Address='$Address', City='$City', Region='$Region', PostalCode='$PostalCode', Country='$Country', Phone='$Phone'  WHERE CustomerID='$CustomerID' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        
        $consulta = "SELECT CustomerID, CompanyName, ContactName, ContactTitle, Address, City, Region, PostalCode, Country, Phone  FROM customers WHERE CustomerID='$CustomerID' ";       
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;        
    case 3://baja
        $consulta = "DELETE FROM customers WHERE CustomerID='$CustomerID' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                           
        break;        
}

print json_encode($data, JSON_UNESCAPED_UNICODE); //enviar el array final en formato json a JS
$conexion = NULL;

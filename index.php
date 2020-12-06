<?php
include_once '/bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$consulta = "SELECT CustomerID, CompanyName, ContactName, ContactTitle, Address, City, Region, PostalCode, Country, Phone FROM customers";
$resultado = $conexion->prepare($consulta);
$resultado->execute();
$data=$resultado->fetchAll(PDO::FETCH_ASSOC);
?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="shortcut icon" href="#" />  
    <title>Tutorial DataTables</title>
      
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <!-- CSS personalizado --> 
    <link rel="stylesheet" href="main.css">  
      
      
    <!--datables CSS básico-->
    <link rel="stylesheet" type="text/css" href="datatables/datatables.min.css"/>
    <!--datables estilo bootstrap 4 CSS-->  
    <link rel="stylesheet"  type="text/css" href="datatables/DataTables-1.10.18/css/dataTables.bootstrap4.min.css">       
  </head>
    
  <body> 
     <header>
<!--         <h3 class="text-center text-light">Tutorial</h3>-->
         <h4 class="text-center text-light">CRUD con <span class="badge badge-danger">DATATABLES</span></h4> 
     </header>    
      
    <div class="container">
        <div class="row">
            <div class="col-lg-12">            
            <button id="btnNuevo" type="button" class="btn btn-success" data-toggle="modal">Nuevo</button>    
            </div>    
        </div>    
    </div>    
    <br>  
    <div class="container">
        <div class="row">
                <div class="col-lg-12">
                    <div class="table-responsive">        
                        <table id="tablaPersonas" class="table table-striped table-bordered table-condensed" style="width:100%">
                        <thead class="text-center">
                            <tr>
                                <th>Id</th>
                                <th>Company</th>
                                <th>Contact</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Region</th>
                                <th>PostalCode</th>
                                <th>Country</th> 
                                <th>Phone</th>                                
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php                            
                            foreach($data as $dat) {                                                        
                            ?>
                            <tr>
                                <td><?php echo $dat['CompanyName'] ?></td>
                                <td><?php echo $dat['ContactName'] ?></td>
                                <td><?php echo $dat['ContactTitle'] ?></td>
                                <td><?php echo $dat['Address'] ?></td> 
                                <td><?php echo $dat['City'] ?></td>
                                <td><?php echo $dat['Region'] ?></td>
                                <td><?php echo $dat['PostalCode'] ?></td>
                                <td><?php echo $dat['Country'] ?></td>
                                <td><?php echo $dat['Phone'] ?></td>      
                                <td></td>
                            </tr>
                            <?php
                                }
                            ?>                                
                        </tbody>        
                       </table>                    
                    </div>
                </div>
        </div>  
    </div>    
      
<!--Modal para CRUD-->
<div class="modal fade" id="modalCRUD" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
            </div>
        <form id="formPersonas">    
            <div class="modal-body">
                <div class="form-group">
                <label for="CompanyName" class="col-form-label">Company:</label>
                <input type="text" class="form-control" id="CompanyName">
                </div>

                <div class="form-group">
                <label for="ContactName" class="col-form-label">Contact:</label>
                <input type="text" class="form-control" id="ContactName">
                </div> 

                <div class="form-group">
                <label for="ContactTitle" class="col-form-label"> Title:</label>
                <input type="text" class="form-control" id="ContactTitle">
                </div> 

                <div class="form-group">
                <label for="Address" class="col-form-label">Adress:</label>
                <input type="text" class="form-control" id="Address">
                </div>

                <div class="form-group">
                <label for="City" class="col-form-label">City:</label>
                <input type="text" class="form-control" id="City">
                </div>

                <div class="form-group">
                <label for="Region" class="col-form-label">Region:</label>
                <input type="text" class="form-control" id="Region">
                </div>   

                <div class="form-group">
                <label for="PostalCode" class="col-form-label">Code::</label>
                <input type="text" class="form-control" id="PostalCode">
                </div> 

                <div class="form-group">
                <label for="Country" class="col-form-label">Country:</label>
                <input type="text" class="form-control" id="Country">
                </div> 

                <div class="form-group">
                <label for="Phone" class="col-form-label">Phone:</label>
                <input type="text" class="form-control" id="Phone">
                </div> 

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-dismiss="modal">Cancelar</button>
                <button type="submit" id="btnGuardar" class="btn btn-dark">Guardar</button>
            </div>
        </form>    
        </div>
    </div>
</div>  
      
    <!-- jQuery, Popper.js, Bootstrap JS -->
    <script src="jquery/jquery-3.3.1.min.js"></script>
    <script src="popper/popper.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
      
    <!-- datatables JS -->
    <script type="text/javascript" src="datatables/datatables.min.js"></script>    
     
    <script type="text/javascript" src="main.js"></script>  
    
    
  </body>
</html>

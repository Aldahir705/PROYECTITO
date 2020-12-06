$(document).ready(function(){
    tablaPersonas = $("#tablaPersonas").DataTable({
       "columnDefs":[{
        "targets": -1,
        "data":null,
        "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btnEditar'>Editar</button><button class='btn btn-danger btnBorrar'>Borrar</button></div></div>"  
       }],
        
        //Para cambiar el lenguaje a español
    "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast":"Último",
                "sNext":"Siguiente",
                "sPrevious": "Anterior"
             },
             "sProcessing":"Procesando...",
        }
    });
    
$("#btnNuevo").click(function(){
    $("#formPersonas").trigger("reset");
    $(".modal-header").css("background-color", "#28a745");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("Nueva Cliente");            
    $("#modalCRUD").modal("show");        
    CustomerID=null;
    opcion = 1; //alta
});    
    
var fila; //capturar la fila para editar o borrar el registro
    
//botón EDITAR    
$(document).on("click", ".btnEditar", function(){
    fila = $(this).closest("tr");
    CustomerID = fila.find('td:eq(0)').text();
    CompanyName = fila.find('td:eq(1)').text();
    ContactName = fila.find('td:eq(2)').text();
    ContactTitle = fila.find('td:eq(3)').text();
    Address = fila.find('td:eq(4)').text();
    City = fila.find('td:eq(5)').text();
    Region = fila.find('td:eq(6)').text();
    PostalCode = fila.find('td:eq(7)').text();
    Country = fila.find('td:eq(8)').text();
    Phone = fila.find('td:eq(9)').text();

    
    $("#CompanyName").val(CompanyName);
    $("#ContactName").val(ContactName);
    $("#ContactTitle").val(ContactTitle);
    $("#Address").val(Address);
    $("#City").val(City);
    $("#Region").val(Region);
    $("#PostalCode").val(PostalCode);
    $("#Country").val(Country);
    $("#Phone").val(Phone);
    opcion = 2; //editar
    
    $(".modal-header").css("background-color", "#007bff");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("Editar Cliente");            
    $("#modalCRUD").modal("show");  
    
});

//botón BORRAR
$(document).on("click", ".btnBorrar", function(){    
    fila = $(this);
    CustomerID = $(this).closest("tr").find('td:eq(0)').text();
    opcion = 3 //borrar
    var respuesta = confirm("¿Está seguro de eliminar el registro: "+CustomerID+"?");
    if(respuesta){
        $.ajax({
            url: "bd/crud.php",
            type: "POST",
            dataType: "json",
            data: {opcion:opcion, CustomerID:CustomerID},
            success: function(){
                tablaPersonas.row(fila.parents('tr')).remove().draw();
            }
        });
    }   
});
    
$("#formPersonas").submit(function(e){
    e.preventDefault();    
    CompanyName = $.trim($("#CompanyName").val());
    ContactName = $.trim($("#ContactName").val());
    ContactTitle= $.trim($("#ContactTitle").val());
    Address= $.trim($("#Address").val());
    City= $.trim($("#City").val());
    Region= $.trim($("#Region").val());
    PostalCode= $.trim($("#PostalCode").val());
    Country= $.trim($("#Country").val()); 
    Phone= $.trim($("#Phone").val());                         
    $.ajax({
        url: "bd/crud.php",
        type: "POST",
        dataType: "json",
        data: {CompanyName:CompanyName, ContactName:ContactName, ContactTitle:ContactTitle, Address:Address, City:City, Region:Region, PostalCode:PostalCode, Country:Country, Phone:Phone, CustomerID:CustomerID, opcion:opcion},
        success: function(data){  
            console.log(data);
            CustomerID = data[0].CustomerID;            
            CompanyName = data[0].CompanyName;
            ContactName = data[0].ContactName;
            ContactTitle = data[0].ContactTitle;
            Address = data[0].Address;
            City = data[0].City;
            Region = data[0].Region;
            PostalCode = data[0].PostalCode;
            Country = data[0].Country;
            Phone = data[0].Phone;

            if(opcion == 1){tablaPersonas.row.add([CustomerID,CompanyName,ContactName,ContactTitle,Address,City,Region,PostalCode,Country,Phone]).draw();}
            else{tablaPersonas.row(fila).data([CustomerID,CompanyName,ContactName,ContactTitle,Address,City,Region,PostalCode,Country,Phone]).draw();}            
        }        
    });
    $("#modalCRUD").modal("hide");    
    
});    
    
});
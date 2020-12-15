var url = 'Productos2.php';

var appMoviles = new Vue({
  el: '#appMoviles',
  data:{
    moviles:[],
     ProductID: "",
        ProductName: "",
        SupplierID: "",
        CategoryID: "",
        QuantityPerUnit: "",
        UnitPrice: "", 
        UnitsInStock: "",
        UnitsOnOrder: "",
        ReorderLevel: "",
        Discontinued: ""
  },
  methods:{
    //BOTONES
    btnAlta:async function(){  
            const {value: formValues} = await Swal.fire({
                title: 'NUEVO',
                html: '<div class = "row"><label class = "col-sm-3 col-form-label"> Product Name </label><div class = "col-sm-7"><input id = "ProductName" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Supplier ID </label><div class = "col-sm-7"><input id = "SupplierID" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Category ID </label><div class = "col-sm-7"><input id = "CategoryID" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Quantity PerUnit </label><div class = "col-sm-7"><input id = "QuantityPerUnit" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Unit Price </label><div class = "col-sm-7"><input id = "UnitPrice" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Units In Stock </label><div class = "col-sm-7"><input id = "UnitsInStock" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Units On Order </label><div class = "col-sm-7"><input id = "UnitsOnOrder" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Reorder Level </label><div class = "col-sm-7"><input id = "ReorderLevel" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Discontinued </label><div class = "col-sm-7"><input id = "Discontinued" type = "text" class = "form-control"></div></div>',
                focusConfirm: false,
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#1CC88A',
                showCancelButton: true,
                cancelButtonColor: '#3085D6',
                preConfirm: () => { 
                    return[
                        this.ProductName = document.getElementById('ProductName').value,
                        this.SupplierID = document.getElementById('SupplierID').value,
                        this.CategoryID = document.getElementById('CategoryID').value,
                        this.QuantityPerUnit = document.getElementById('QuantityPerUnit').value,
                        this.UnitPrice = document.getElementById('UnitPrice').value,
                        this.UnitsInStock = document.getElementById('UnitsInStock').value,
                        this.UnitsOnOrder = document.getElementById('UnitsOnOrder').value,
                        this.ReorderLevel = document.getElementById('ReorderLevel').value,
                        this.Discontinued = document.getElementById('Discontinued').value
                    ]
                }
            }) 
            if(this.ProductName == "" || this.SupplierID == "" || this.CategoryID == "" || this.QuantityPerUnit == "" || this.UnitPrice == "" || this.UnitsInStock == "" || this.UnitsOnOrder == "" || this.ReorderLevel == "" || this.Discontinued == "") {
                 Swal.fire({
                    icon: 'error',
                    type: 'info',
                    title: 'Datos incompletos',
                })
            } else {
                //Llamamos a la function para dar de alta al móvil y para mostrar que fue agregado exitosamente un producto.
                this.altaMovil(); 
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    icon: 'success',
                    type: 'success',
                    title: 'Nuevo Producto agregado con exito!!'
                })
            }



        },
    btnEditar:async function(ProductID, ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice, UnitsInStock, UnitsOnOrder, ReorderLevel, Discontinued){
             await Swal.fire({
                title: 'Editar Registro',
                html: '<div class = "row"><label class = "col-sm-3 col-form-label"> Product<br>Name </label><div class = "col-sm-7"><input id = "ProductName" value = "'+ProductName+'"  type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Supplier<br>ID </label><div class = "col-sm-7"><input id = "SupplierID"  value = "'+SupplierID+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Category<br>ID </label><div class = "col-sm-7"><input id = "CategoryID" value = "'+CategoryID+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Quantity<br>PerUnit </label><div class = "col-sm-7"><input id = "QuantityPerUnit" value = "'+QuantityPerUnit+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Unit<br>Price </label><div class = "col-sm-7"><input id = "UnitPrice" value = "'+UnitPrice+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Units<br>In Stock </label><div class = "col-sm-7"><input id = "UnitsInStock" value = "'+UnitsInStock+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Units On<br>Order </label><div class = "col-sm-7"><input id = "UnitsOnOrder" value = "'+UnitsOnOrder+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Reorder Level </label><div class = "col-sm-7"><input id = "ReorderLevel" value = "'+ReorderLevel+'" type = "text" class = "form-control"></div></div><div class = "row"><label class = "col-sm-3 col-form-label"> Discontinued </label><div class = "col-sm-7"><input id = "Discontinued" value = "'+Discontinued+'" type = "text" class = "form-control"></div></div>',
                focusConfirm: false,
                showCancelButton: true,
                confirmButtonText: 'Aceptar',
            }).then((result) => {
            if (result.value) {
                //Captura los nuevos datos si es que se modifican
                ProductName = document.getElementById('ProductName').value,
                SupplierID = document.getElementById('SupplierID').value,
                CategoryID = document.getElementById('CategoryID').value,
                QuantityPerUnit = document.getElementById('QuantityPerUnit').value,
                UnitPrice = document.getElementById('UnitPrice').value,
                UnitsInStock = document.getElementById('UnitsInStock').value,
                UnitsOnOrder = document.getElementById('UnitsOnOrder').value,
                ReorderLevel = document.getElementById('ReorderLevel').value,
                Discontinued = document.getElementById('Discontinued').value,
                this.editarMovil(ProductID, ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice, UnitsInStock, UnitsOnOrder, ReorderLevel, Discontinued);
                Swal.fire(
                        '¡Actualizado!',
                        'El registro ha sido actualizado.',
                        'success'
                    )
                }
            });
        },
    btnBorrar:function(ProductID){
            
            Swal.fire({
                title: '¿Esta seguro de borrar el registro con numero de ProductID ' +ProductID+" ?",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#D33',
                cancelButtonColor: '#3085D6',
                confirmButtonText: 'Borrar'
            }).then((result) => {
                if(result.value) {
                    this.borrarMovil(ProductID);
                    //Muestra un mensaje sobre la eliminación.
                    Swal.fire(
                        '¡Eliminado!',
                        'El registro ha sido borrado.',
                        'success'
                    )
                }
            })

        },
    //PROCEDIMIENTOS
    //Procedimiento Listar
    listarMoviles:function(){
      axios.post(url, {opcion:4}).then(response =>{
        this.moviles = response.data;
        //console.log(this.moviles);
      });
    },
    //Procedimiento CREAR
    altaMovil:function(){
      axios.post(url, {opcion:1, ProductName:this.ProductName, SupplierID:this.SupplierID, CategoryID:this.CategoryID, QuantityPerUnit:this.QuantityPerUnit, UnitPrice:this.UnitPrice, UnitsInStock:this.UnitsInStock, UnitsOnOrder:this.UnitsOnOrder, ReorderLevel:this.ReorderLevel, Discontinued:this.Discontinued}).then(response => {
                this.listarMoviles();
            });
            this.ProductName = "";
            this.SupplierID = "";
            this.CategoryID = "";
            this.QuantityPerUnit = "";
            this.UnitPrice = "";
            this.UnitsInStock = "";
            this.UnitsOnOrder = "";
            this.ReorderLevel = "";
            this.Discontinued = "";
        },

    //Procedimieto EDITAR
    editarMovil:function(ProductID, ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice, UnitsInStock, UnitsOnOrder, ReorderLevel, Discontinued ){
            axios.post(url, {opcion:2, ProductID:ProductID, ProductName:ProductName, SupplierID:SupplierID, CategoryID:CategoryID, QuantityPerUnit:QuantityPerUnit, UnitPrice:UnitPrice, UnitsInStock:UnitsInStock, UnitsOnOrder:UnitsOnOrder, ReorderLevel:ReorderLevel, Discontinued:Discontinued}).then(response => {
                this.listarMoviles();
            });
        },

    //Procedimiento BORRAR
    borrarMovil:function(ProductID) {
            axios.post(url, {opcion:3, ProductID:ProductID}).then(response =>{
                this.listarMoviles();
            });
        }
    },
  created: function(){
    this.listarMoviles();
  },
  
  computed:{
    
  }
}); 
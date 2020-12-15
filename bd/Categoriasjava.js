var url = 'Categorias2.php';

var appMoviles = new Vue({
  el: '#appMoviles',
  data:{
    moviles:[],
    CategoryID:"",
    CategoryName:"",
    Description:"",

  },
  methods:{
    //BOTONES
    btnAlta: async function(){
      const {value: formValues} = await Swal.fire({
        title: 'NUEVO',
        html:
      '<div class="row"><label class="col-sm-3 col-form-label">CategoryName</label><div class="col-sm-7"><input id="CategoryName" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Description</label><div class="col-sm-7"><input id="Description" type="text"  class="form-control"></div><div>',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#1cc88a',
        cancelButtonColor: '#3085d6',
        preConfirm: () => {
          return [
            this.CategoryName = document.getElementById('CategoryName').value,
            this.Description = document.getElementById('Description').value
          ]
        }
      })
      if(this.CategoryName == "" || this.Description == ""){
        Swal.fire({
          icon: 'error',
          type: 'info',
          title: 'Datos incompletos',
        })
      }else {
               
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
                    title: 'agregado!!'
                })
            }



        },
    btnEditar: async function(CategoryID, CategoryName, Description){

    await Swal.fire({
      title: 'EDITAR REGISTRO',
      html:
      '<div class="row"><label class="col-sm-3 col-form-label">CategoryName</label><div class="col-sm-7"><input id="CategoryName"  value="'+CategoryName+'" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Description</label><div class="col-sm-7"><input id="Description"  value="'+Description+'" type="text" class="form-control"></div></div>',
     
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Editar',
      }).then((result) => {
        if (result.value) {
          CategoryName = document.getElementById('CategoryName').value,
          Description = document.getElementById('Description').value,

          this.editarMovil(CategoryID,CategoryName,Description);
          Swal.fire(
            '¡Actualizado!',
            'El registro ha sido actualizado.',
            'success'
          )
        }
      });
    },
    btnBorrar: function(CategoryID){
      Swal.fire({
        title: '¿Está seguro de borrar el regitro: '+CategoryID+" ?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#D33',
        cancelButtonColor: '#3885D6',
        confirmButtonText: 'Borrar',
      }).then((result) => {
        if (result.value) {
          this.borrarMovil(CategoryID);
          Swal.fire(
            '¡Eliminado!',
            ' Ha sido borrado.',
            'success'
          )
        }
      })
    },
    // Listar
    listarMoviles:function(){
      axios.post(url, {opcion:4}).then(response =>{
        this.moviles = response.data;

      });
    },
    // CREAR
    altaMovil:function(){
      axios.post(url, {opcion:1, CategoryName:this.CategoryName, Description:this.Description}).then(response =>{
        this.listarMoviles();
      });
      this.CategoryName = "";
      this.Description = "";
    },

    // EDITAR
    editarMovil:function(CategoryID, CategoryName, Description){
      axios.post(url, {opcion:2, CategoryID:CategoryID, CategoryName:CategoryName, Description:Description}).then(response =>{
        this.listarMoviles();
      });
    },

    // BORRAR
    borrarMovil:function(CategoryID){
      axios.post(url, {opcion:3, CategoryID:CategoryID}).then(response =>{
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
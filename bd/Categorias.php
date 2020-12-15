
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<title>  </title>
		<!-- Bootstrap CSS -->
		<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
		<!-- FontAwesom CSS -->
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"> 
		<!-- Sweet Alert 2 -->
		<link rel="stylesheet" href="plugins/sweetalert2/sweetalert2.min.css">
	</head>
	<body>

		<div id="appMoviles">
			<div class="container">
				<div class="row">
					<div class="col">
						
					</div>
				</div>
				<div class="row nt-5">
					<div class="col-lg-12">
						<table class="table table-striped">
							<thead>
								<tr class="bg-warning text-dark">
									<th>Category ID</th>
									<th>Category Name</th>
									<th>Description</th>
									<th>Cambios</th>
								</tr>

							</thead>
							<tbody>
								
								<tr v-for="(movil,indice) of moviles">
									<td> {{movil.CategoryID}} </td>
									<td> {{movil.CategoryName}} </td>
									<td> {{movil.Description}} </td>
									<td>
										<div class="btn-group" role="group">
                      <button @click="btnAlta" class="btn btn-success" title="Nuevo">Agregar</button>
											<button class="btn btn-secondary" title="Editar" @click="btnEditar(movil.CategoryID, movil.CategoryName, movil.Description)"><i class="fas fa-pencil-alt"></i>
											</button>
											<button class="btn btn-danger" title="Eliminar" @click="btnBorrar(movil.CategoryID)"><i class="fas fa-trash-alt"></i>
											</button>
										</div>
									</td>	
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>

		<!-- jQuery, Popper, js, Bootstrap JS -->
		<script src="jquery/jquery-3.5.1.min.js"> </script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"> </script>
		<script src="bootstrap/js/bootstrap.min.js"> </script>

		<!-- Vue.JS -->
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"> </script>

		<!-- Axios -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.2/axios.js"> </script>

		<!-- Sweet Alert 2 -->
		<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"> </script>

		<!-- Código custom -->
		<script src="Categoriasjava.js"> </script>
	</body>
</html>
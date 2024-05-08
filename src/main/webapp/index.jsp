<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>
	<head>
		<meta charset="UTF-8">
		<meta name="author" content="estiven.mejia@unah.hn" />
		<meta name="version" content="0.1.1" />
		<meta name="date" content="2023/12/01" />
		<meta name="description" content="Proyecto final de Programación Orientada a Objetos (IS-410)" />
		<title>Sistema de Registro de Vídeos</title>	
		<link rel="stylesheet" href="assets/css/bootstrap.min.css" />
		<link rel="stylesheet" href="assets/css/style.css" />
</head>
	<body>
	
		<section class="container">
			<!-- header -->
			<section class="row my-4 shadow p-3 bg-body rounded" id="header">
				<div class="col-3 lead"><strong>Video Registry - Estiven Mejía</strong></div>
				
				<div class="dropdown col-1" id="formSection">
				
				  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
				    Inicio
				  </button>
				 
				  <ul class="dropdown-menu">
				    <li><button class="dropdown-item" id="generateFormModalButton" type="button">Agregar vídeo</button></li>
				    <li><hr class="dropdown-divider"></li>
				    <li><button class="dropdown-item" id="cleanDataModelButton" type="button">Limpiar Modelo de Datos</button></li>
				  </ul>  
				 
				  <!-- En esta sección se general un modal para luego ser ejecutado -->
				</div>
				
				<div class="dropdown col-1" id="descriptionSection">
				  <button class="btn dropdown-toggle" id="generateDescriptionModalButton" type="button" aria-expanded="false">
				    Acerca de
				  </button>
				  
				  <!-- En esta sección se general un modal para luego ser ejecutado -->
				</div>
			</section>
			
			<!-- cards -->
			<section class="row" id="cardsSection">
			
				<div class="card col mx-2" id="totalVideos">
				  <div class="card-body">
				    <h5 class="card-title text-center">Total de Videos</h5>
				    <div class="text-center m-4" id="nVideos">0</div>
				  </div>
				</div>
				
				<div class="card col mx-2" id="academicVideos">
				  <div class="card-body">
				    <h5 class="card-title text-center">Académico</h5>
				    
				    <div class="card my-3">
				  		<div class="card-body py-2">
				    		<h6 class="text-center blue-color-font" id="academicType" style="background-color: white;"></h6>
				  		</div>
					</div>
					
				    <div class="card my-3">
				  		<div class="card-body py-2">
				    		<h6 class="text-center blue-color-font" id="scientistType" style="background-color: white;"></h6>
				  		</div>
					</div>
				  </div>
				</div>
				
				<div class="card col mx-2" id="nonEducationalVideos">
				  <div class="card-body">
				    <h5 class="card-title text-center">No Educativo</h5>
				    
				    <div class="card my-3">
				  		<div class="card-body py-2">
				    		<h6 class="text-center" id="entertainmentType" style="background-color: white;"></h6>
				  		</div>
					</div>
					
				    <div class="card my-3">
				  		<div class="card-body py-2">
				    		<h6 class="text-center" id="otherType" style="background-color: white;"></h6>
				  		</div>
					</div>
				  </div>
				</div>	
			</section>
			
			<!-- Sección de videos registrados -->
			<section class="row mt-4 shadow p-3 bg-body rounded">
				<div class="lead border-bottom mb-2">Videos registrados:</div>
				<section id="videoSection"></section>
			</section>
		</section>

		<script src="assets/js/bootstrap.bundle.min.js"></script>
		<script src="assets/js/ModalStructure.js"></script>
		<script src="assets/js/Alert.js"></script>
		<script src="assets/js/SendPetitionAction.js"></script>
		<script src="assets/js/ModalAction.js"></script>
		<script src="assets/js/GeneralAction.js"></script>
		<script src="assets/js/main.js"></script>
		
	</body>
</html>
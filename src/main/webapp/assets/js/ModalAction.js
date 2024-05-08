/**
 * @author estiven.mejia@unah.hn
 * @version 0.1.5
 * @date 2023/12/03
 */

class ModalAction{
	
	/**
	 * @author estiven.mejia@unah.hn
	 * @version 0.1.1
	 * @date 2023/12/02
	 * 
	 * Método que crea una instancia de Modal y envía parámetros para poder generar una ventana modal con descripción del sistema.
	 */
	callDescriptionModal(mouseoverEvent){
		
		let generateDescriptionModalButton = this.querySelector("button#generateDescriptionModalButton");
		generateDescriptionModalButton.dataset.bsTarget = "#descriptionModal";
			
		let title = "Acerca de";
		
		let bodyContent = document.createElement("div");
		let description = "Estiven Josue Mejía Rodríguez</br>20201002454</br>estiven.mejia@unah.hn</br></br>IS-410 Programación Orientada a Objetos</br>Jose Manuel Inestroza Murillo</br>Miércoles 06 de diciembre del año 2023</br></br>Descripción de la funcionalidad del sistema (2~3 párrafos).";
		bodyContent.innerHTML = description;
		
		let closeButton = document.createElement("button");
		closeButton.type = "button";
		closeButton.id = "deleteDescriptionModal"
		closeButton.className = "btn btn-about deleteModalButton";
		closeButton.dataset.bsDismiss = "modal";		
		closeButton.innerText = "Ok";
		
		let modal = new ModalStructure(this, generateDescriptionModalButton, title ,bodyContent, closeButton);
		
		let modalSection = this.querySelector("div.descriptionModal");	
		
		if(modalSection == null){
		
			this.appendChild(modal.createModal());
		}
	}
		
	/**
	 * @author estiven.mejia@unah.hn
	 * @version 0.1.5
	 * @date 2023/12/02
	 * 
	 * Método que crea una instancia de Modal y envía parámetros para poder generar una ventana modal con un formulario.
	 * Al crear una ventana modal tomará el contenido existente de localStorage para agregarlo a los campos del formulario.
	 * Al presionar el botón de guardar formulario, enviará información a la URL mediante el llamado de otro método.
	 */
	loadFormModal(loadEvent){
			
		let generateFormModalButton = this.querySelector("button#generateFormModalButton");
		generateFormModalButton.dataset.bsTarget = "#formModal";
			
		let title = "Crear un nuevo registro de vídeo";
		let form = document.createElement("div");
		
		let paragraphsArray = [];
		let paragraphText = ["Ingrese la información para el registro del tipo de video.\n",
							 "\nResponsable de quien realiza este registro (email)",
							 "\nNombre del canal de YouTube",
							 "\nDescripción del video",
							 "\nCategoría del video",
							 "\niFrame del video a registrar"];
		
		for(let i=0; i<6; i++){
			
			paragraphsArray.push(document.createElement("p"));
			paragraphsArray[i].innerText = paragraphText[i];
		}
		
		let input1 = document.createElement("input");
		input1.placeholder = "nombre@institución.com";
		input1.className = "formElement";
		input1.name = "email";
		
		let input2 = document.createElement("input");
		input2.placeholder = "Nombre del canal de Youtube";
		input2.className = "formElement";
		input2.name = "youtubeChannel";

		let textarea1 = document.createElement("textarea");
		textarea1.placeholder = "Descripción del video";
		textarea1.className = "formElement";
		textarea1.name = "description";
		
		let select = document.createElement("select");
		select.className = "formElement";
		select.name = "videoType";
		let array = [];
		let names = ["educativo", "científico", "entretenimiento", "otro"];
		
		for(let i=0; i<4; i++){
			array.push(document.createElement("option"));
			array[i].innerText = names[i];
			select.appendChild(array[i]);
		}
		
		let input3 = document.createElement("input");
		input3.placeholder = "Código iFrame del video";
		input3.className = "formElement";
		input3.name = "iFrame";
			
		let formElementsArray = [input1, input2, textarea1, select, input3];
		form.appendChild(paragraphsArray[0]);
			
		for(let i=0; i<5; i++){
		
			form.appendChild(paragraphsArray[i+1]);
			form.appendChild(formElementsArray[i]);
			
		}
		
		let cancelButton = document.createElement("button");
		cancelButton.type = "button";
		cancelButton.className = "btn deleteModalButton me-1";
		cancelButton.id = "cancelFormButton";
		cancelButton.dataset.bsDismiss = "modal";
		cancelButton.innerText = "Cancelar";
		
		let saveButton = document.createElement("button");
		saveButton.type = "button";
		saveButton.className = "btn";
		saveButton.id = "saveFormButton";
		saveButton.dataset.bsDismiss = "modal";
		saveButton.innerText = "Guardar";
		
		let footerButtonsDiv = document.createElement("div");
		footerButtonsDiv.appendChild(cancelButton);
		footerButtonsDiv.appendChild(saveButton);
		
		let modal = new ModalStructure(this, generateFormModalButton, title, form, footerButtonsDiv);		
		
		if(this.querySelector("div.formModal") == null){
			
			this.appendChild(modal.createModal());
			
		}	
	
		//Toma los elementos del localStorage (existan o no) y los ingresa a los campos del formulario correspondientes.
		let formFields = this.querySelectorAll(".formElement");
		
		for(let i=0; i<formFields.length; i++){
			
			formFields[i].value = localStorage.getItem(`formContent${i}`);
		}
		
		let cardsSection = document.querySelector("section#cardsSection");
		let formSection = this;
		let videoSection = document.querySelector("section#videoSection");
		let sendPetition = new SendPetitionAction(cardsSection, formSection, videoSection);
		
		//El botón para cerrar el formulario tiene relacionana la acción de limpieza de los campos del formulario y localStorage.
		let cancelFormButton = document.querySelector("button#cancelFormButton");
		cancelFormButton.addEventListener("click", sendPetition.cleanFormModal.bind(sendPetition, formFields));
		
		//El botón de envío del formulario ejecuta la petición asíncrona, y envía los datos a la URL para ser tomados en el BackEnd.
		let saveFormButton = document.querySelector("button#saveFormButton");
		saveFormButton.addEventListener("click", sendPetition.send.bind(sendPetition, saveFormButton));
		
		//Este botón envía una pétición asíncrona que llega al BackEnd para eliminar el contenido del modelo de datos.
		let cleanDataModelButton =  this.querySelector("button#cleanDataModelButton");
		cleanDataModelButton.addEventListener("click", sendPetition.send.bind(sendPetition, cleanDataModelButton));
	}
		
	/**
	 * @author estiven.mejia@unah.hn
	 * @version 0.1.0
	 * @date 2023/12/02
	 * 
	 * Método que crea una instancia de Modal y envía parámetros para poder generar una ventana modal con un vídeo y su descripción.
	 */
	callVideoModal(formContent, mouseoverEvent){
		
		let form = formContent;
		
		let generateVideoModalButton = this.querySelector("button#generateVideoModalButton");
		//let generateDescriptionModalButton = this.querySelector("button.watchVideoButton");
		generateVideoModalButton.dataset.bsTarget = "#videoModal";
			
		//Header
		let title = `Video de tipo ${form[4]} #${form[0]}: ${form[1]}`;
		
		//Body
		let bodyContent = document.createElement("div");
		bodyContent.innerHTML += `<iframe width="560" height="315" src="${form[5]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
		
		//bodyContent.innerHTML += `${form[5]}<br>`;
		bodyContent.innerHTML += `${form[3]}`;
		
		//Botón de cierre en el footer
		let closeButton = document.createElement("button");
		closeButton.type = "button";
		closeButton.className = "btn btn-about deleteModalButton";
		closeButton.dataset.bsDismiss = "modal";		
		closeButton.innerText = "Ok";
		
		let modal = new ModalStructure(this, generateVideoModalButton, title ,bodyContent, closeButton);
		let modalSection = this.querySelector("div.videoModal");	
		
		if(modalSection == null){
		
			this.appendChild(modal.createModal());
		}		
	}
	
	/**
	 * @author estiven.mejia@unah.hn
	 * @version 0.1.0
	 * @date 2023/12/02
	 * 
	 * Método que envía datos el localStorage al refrescar la página.
	 */
	sendContentToLocalStorage(event){
		
		let bodyContentModal = this.querySelector("div.formModal").querySelectorAll(".formElement");
		
		for(let i=0; i<bodyContentModal.length; i++){
			
			localStorage.setItem(`formContent${i}`, bodyContentModal[i].value);
		}
	}
	
	
}

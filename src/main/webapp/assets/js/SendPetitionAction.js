/**
 * @author jose.inestroza@unah.edu.hn
 * @modifiedby estiven.mejia@unah.hn
 * @version 0.1.2
 * @date 2023/12/04
 */
class SendPetitionAction{
	
	/**
	 * @author estiven.mejia@unah.hn
	 * @version 0.1.1
	 * @date 2023/12/02
	 * 
	 * Recibe como parámetros la sección del formulario para abstraer contenido, y las secciones donde se ingresará contenido.
	 */
	constructor(cardsSection, formSection, videoSection){
		
		this.cardsSection = cardsSection;
		this.formSection = formSection;
		this.videoSection = videoSection;
		this.xhr1 = new XMLHttpRequest();
		this.xhr2 = new XMLHttpRequest();
		this.getDataModelContentResponse = this.getDataModelContentResponse.bind(this);
		this.cleanDataModelContentResponse = this.cleanDataModelContentResponse.bind(this);
	}
	
	/**
	 * @author jose.inestroza@unah.edu.hn
	 * @modifiedby estiven.mejia@unah.hn
	 * @version 0.1.2
	 * @date 2023/12/04
	 * 
	 * Toma los campos del formulario para abstraer su nombre y contenido, y retornarlo como un texto permitido por la URL.
	 */
	keyValueType(){
		
		let formElement = this.formSection.querySelectorAll(".formElement");
		let urlParams = [];
		
		for(let i=0; i<formElement.length; i++){
			
			if(formElement[i].value == ""){				
				return false;
			}
			else{
				
				urlParams.push(`${formElement[i].name}=${formElement[i].value}`);
			}
		}
		let url = urlParams.join("&");
		return url;	
	}
	
	/**
	 * @author estiven.mejia@unah.hn
	 * @version 0.1.1
	 * @date 2023/12/04
	 * 
	 * Método que recibe la respuesta el BackEnd, y añade contenido a las secciones correspondientes.
	 */
	getDataModelContentResponse(loadEvent){
		
		if(this.xhr1.readyState == XMLHttpRequest.DONE && this.xhr1.status == 200){
						
			let jsonString = this.xhr1.responseText;
			let json = JSON.parse(jsonString);
			let arrayOfForms = json.content;
			
			let nVideos = arrayOfForms.length;			
			let lastForm = arrayOfForms[nVideos-1];
					
			localStorage.setItem("nVideos", nVideos);
			document.querySelector("div#nVideos").innerHTML = nVideos;

			if(lastForm[4].match(/académico/)){
				let n = localStorage.getItem("academic");
				n++;
				localStorage.setItem("academic", n);
				document.querySelector("h6#academicType").innerHTML = `${n} videos de tipo <strong>académico</strong>`;
			}
			if(lastForm[4].match(/científico/)){
				let n = localStorage.getItem("scientist");
				n++;
				localStorage.setItem("scientist", n);
				document.querySelector("h6#scientistType").innerHTML = `${n} videos de tipo <strong>científico</strong>`;
			}
			if(lastForm[4].match(/entretenimiento/)){
				let n = localStorage.getItem("entertainment");
				n++;
				localStorage.setItem("entertainment", n);
				document.querySelector("h6#entertainmentType").innerHTML = `${n} videos de tipo <strong>entretenimiento</strong>`;
			}	
			if(lastForm[4].match(/otro/)){
				let n = localStorage.getItem("other");
				n++;
				localStorage.setItem("other", n);
				document.querySelector("h6#otherType").innerHTML = `${n} videos de tipo <strong>otro</strong>`;
			}
			
			GeneralAction.generateVideoCard(lastForm);
			}
	}
	
	/**
	 * @author estiven.mejia@unah.hn
	 * @version 0.1.0
	 * @date 2023/12/07
	 * 
	 * Método que hace limpieza de todo el contenido en el FrontEnd al haber limpiado el modelo de datos desde el BackEnd.
	 */
	cleanDataModelContentResponse(loadEvent){
		
		if(this.xhr2.readyState == XMLHttpRequest.DONE && this.xhr2.status == 200){
			
			//Reestablece a cero el contador de la cantidad de videos.
			let totalVideosCard = document.querySelector("div#nVideos");
			totalVideosCard.innerHTML = 0;
			localStorage.setItem("nVideos", 0);
			
			//Limpia la seccion donde se ingresan las tarjetas de video.
			let videoCardSection = document.querySelector("section#videoSection");
			videoCardSection.innerHTML = "";
			localStorage.setItem("videoCardSection", "");
			
			//Limpia los contadores de los tipos de video.
			localStorage.setItem("academic", 0);
			localStorage.setItem("scientist", 0);
			localStorage.setItem("entertainment", 0);
			localStorage.setItem("other", 0);
			
			//Reestablece el contador de los tipos de video.
			document.querySelector("h6#academicType").innerHTML = `${localStorage.getItem("academic")} videos de tipo <strong>académico</strong>`;
			document.querySelector("h6#scientistType").innerHTML = `${localStorage.getItem("scientist")} videos de tipo <strong>científico</strong>`;
			document.querySelector("h6#entertainmentType").innerHTML = `${localStorage.getItem("entertainment")} videos de tipo <strong>entretenimiento</strong>`;
			document.querySelector("h6#otherType").innerHTML = `${localStorage.getItem("other")} videos de tipo <strong>otro</strong>`;
			
		}
	}
	
	/**
	 * @author jose.inestroza@unah.edu.hn
	 * @modifiedby estiven.mejia@unah.hn
	 * @version 0.1.1
	 * @date 2023/12/04
	 * 
	 * 
	 * Método que hace una petición asícrona, ya sea envío de datos o limpieza de modelo de datos y envía datos a la URL.
	 */
	send(button ,clickEvent){
		
		//Si el botón es para guardar el formulario, entonces se envía una petición al BackEnd para guardar la información.
		if(button.id == "saveFormButton"){
			this.xhr1.open("POST", `SaveFormContentController`, true);	
			this.xhr1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			this.xhr1.addEventListener("readystatechange", this.getDataModelContentResponse);	

			if(this.keyValueType() == false){
				
				Alert.whiteFielsFormAlert();
			}else{
				
				this.xhr1.send(`${this.keyValueType()}`);	
			}

		//Si el botón es para limpiar el modelo de datos, entonces se hace una petición al BackEnd para limpiar los datos.
		}else{
			this.xhr2.open("POST", `CleanDataModelController`, true);
			this.xhr2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			this.xhr2.addEventListener("readystatechange", this.cleanDataModelContentResponse);		
			this.xhr2.send("");
		}
	}	
	
	/**
	 * @author estiven.mejia@unah.hn
	 * @version 0.1.0
	 * @date 2023/12/02
	 * 
	 * Método que limpia el contenido del localStorage y los campos del formulario al ser cerrado.
	 */
	cleanFormModal(bodyContentModal, clickEvent){
		
		for(let i=0; i<bodyContentModal.length; i++){
			
			bodyContentModal[i].value = "";
			localStorage.removeItem(`formContent${i}`);
		}		
	}
}
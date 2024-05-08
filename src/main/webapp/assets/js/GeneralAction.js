/**
 * @author estiven.mejia@unah.hn
 * @version 0.1.5
 * @date 2023/12/03
 */

class GeneralAction{
	
	/**
	 * @author estiven.mejia@unah.hn
	 * @version 0.1.0
	 * @date 2023/12/06
	 * 
	 * Método que crea un div con la información del video más reciente, y los ingresa a la sección de videos.
	 */
	static generateVideoCard(formContent){
		
		let nVideo = formContent[0];
		let account = formContent[1];
		let youtubeChannel = formContent[2];
		let description = formContent[3];
		let videoType = formContent[4];
		let iframe = formContent[5];
		
		let videoCard = document.createElement("div");
		videoCard.className = "videoCard";
		
		let title = document.createElement("h4");
		title.className = "mt-3";
		title.innerHTML = `<strong>${nVideo} - ${youtubeChannel} (${videoType})</strong>`;
		
		let videoCardBody = document.createElement("div");
		videoCardBody.className = "mb-2";
		videoCardBody.innerHTML += `Responsable: ${account}<br>`;
		videoCardBody.innerHTML += `${description}`;
		
		let watchVideoButton = document.createElement("button");
		watchVideoButton.className = "watchVideoButton btn btn-lg dropdown-item text-center rounded";
		watchVideoButton.id = "generateVideoModalButton";
		watchVideoButton.type = "button";
		watchVideoButton.innerText = "Ver video";
		
		videoCard.appendChild(title);
		videoCard.appendChild(videoCardBody);
		videoCard.appendChild(watchVideoButton);
		
		let videoSection = document.querySelector("section#videoSection");
		videoSection.appendChild(videoCard);
		
		let modalVideo = new ModalAction();		
		watchVideoButton.addEventListener("mouseover", modalVideo.callVideoModal.bind(videoSection, formContent));
	}
	
	/**
	 * @author estiven.mejia@unah.hn
	 * @version 0.1.1
	 * @date 2023/12/05
	 * 
	 * Mantiene la persistencia de todos los contadores del sistema al refrescar la página.
	 */
	static refreshCounterVideos(loadEvent){
		
		//Toma la sección de tarjetas de video almacenada en localStorage, y la agrega nuevamente a la sección.
		let videoCardSection = document.querySelector("section#videoSection");
		videoCardSection.innerHTML += localStorage.getItem("videoCardSection");
		
		//Mantiene la persistencia del contador que lleva la cuenta de la cantidad de videos ingresados en el sistema.
		if(localStorage.getItem("nVideos") == null){
			this.querySelector("div#nVideos").innerHTML = 0;
		}else{
			this.querySelector("div#nVideos").innerHTML = localStorage.getItem("nVideos");
		}
		
		//Mantiene la persistencia de los contadores de los tipos de videos ingresados en el sistema.
		let videoType = ["academic","scientist","entertainment","other"];
		let videoTypeId = ["academicType","scientistType","entertainmentType","otherType"];
		let videoTypeText = ["académico","científico","entretenimiento","otro"];
		
		for(let i=0; i<4; i++){
			
			if(localStorage.getItem(`${videoType[i]}`) == null){
				
				this.querySelector(`h6#${videoTypeId[i]}`).innerHTML = `0 videos de tipo <strong>${videoTypeText[i]}</strong>`;
			}else{
				
				let nVideos = localStorage.getItem(`${videoType[i]}`);
				
				this.querySelector(`h6#${videoTypeId[i]}`).innerHTML = 
				`${nVideos} videos de tipo <strong>${videoTypeText[i]}</strong>`;
			}
		}		
	}
}
	
	
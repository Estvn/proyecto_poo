/**
 * @author jose.inestroza@unah.edu.hn
 * @coauthor estiven.mejia@unah.hn
 * @version 0.1.4
 * @date 2023/12/02
 */

class ModalStructure{
	
	/**
	 * @author estiven.mejia@unah.hn
	 * @version 0.1.1
	 * @date 2023/12/02
	 * 
	 * Constructor
	 * Recibe como parámetros secciones, botones y contenidos dinámicos para poder generar la ventana modal según la petición.
	 */
	constructor(section, generateModalButton, headerContent ,bodyContent, footerContent){
		
		this.section = section;
		this.generateModalButton = generateModalButton;
		this.headerContent = headerContent;
		this.bodyContent = bodyContent;
		this.footerContent = footerContent;
	}
	
	/**
	 * @author estiven.mejia@unah.hn
	 * @version 0.1.4
	 * @date 2023/12/02
	 * 
	 * Método para generar la estructura de un modal de Bootstrap con campos e información según la ventana modal pedida.
	 */
	createModal(mouseoverEvent){
					
			let modalDiv = document.createElement("div");
			
			if(this.generateModalButton.id == "generateDescriptionModalButton"){
				modalDiv.id = "descriptionModal";

			}else if(this.generateModalButton.id == "generateFormModalButton"){
				modalDiv.id = "formModal";

			}else if(this.generateModalButton.id == "generateVideoModalButton"){
				modalDiv.id = "videoModal";
	
			}
			modalDiv.className = "modal fade formModal descriptionModal videoModal";
			modalDiv.tabIndex = "-1";
			modalDiv.setAttribute("aria-labelledby", "exampleModalLabel");
			modalDiv.setAttribute("aria-hidden", "true");
			
			let modalDialogDiv = document.createElement("div");
			modalDialogDiv.className = "modal-dialog";
			
			let modalContentDiv = document.createElement("div");
			modalContentDiv.className = "modal-content";
			
			let modalHeaderDiv = document.createElement("div");
			modalHeaderDiv.className = "modal-header";
			
			let modalTitle = document.createElement("div");
			modalTitle.className = "modal-title";
			modalTitle.id = "exampleModalLabel";
			modalTitle.innerText = this.headerContent;
			
			let modalBodyDiv = document.createElement("div");
			modalBodyDiv.className = "modal-body";
			modalBodyDiv.id = "modalBodyAbout";
			
			let modalFooterDiv = document.createElement("div");
			modalFooterDiv.className = "modal-footer";
			
			modalFooterDiv.appendChild(this.footerContent);
			modalBodyDiv.appendChild(this.bodyContent);
			modalHeaderDiv.appendChild(modalTitle);
			
			modalContentDiv.appendChild(modalHeaderDiv);
			modalContentDiv.appendChild(modalBodyDiv);
			modalContentDiv.appendChild(modalFooterDiv);
			
			modalDialogDiv.appendChild(modalContentDiv);
			modalDiv.appendChild(modalDialogDiv);
			
			this.generateModalButton.dataset.bsToggle = "modal";
			return modalDiv;
				
	}
	
}
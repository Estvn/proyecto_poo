/**
 * @author estiven.mejia@unah.hn
 * @version 0.1.0
 * @date 2023/12/03
 * 
 */

class Alert{
	
	/**
	 * @author estiven.mejia@unah.hn
	 * @version 0.1.0
	 * @date 2023/12/03
	 * 
	 * Método estático que lanza una alerta cuando el formulario se envía com campos vacíos.
	 */
	static whiteFielsFormAlert(){
		
		let div = document.createElement("div");
		div.className = "alert alert-warning alert-dismissible fade show";
		div.role = "alert";
		div.innerText = "Por favor, envíe el formulario con los campos completos.";
		let button = document.createElement("button");
		button.type = "button";
		button.className = "btn-close";
		button.dataset.bsDismiss = "alert";
		button.setAttribute("aria-label", "Close");
		div.appendChild(button);
		
		document.querySelector("section#header").appendChild(div);
	}
}


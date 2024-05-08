/**
 * @author estiven.mejia@unah.hn
 * @version 0.1.1
 * @date 2023/12/03
 * 
 * Clase que se encarga de agregar eventos a los elementos HTML, como botones o secciones.
 */

let formSection = document.querySelector("div#formSection");
let cardsSection = document.querySelector("section#cardsSection")
let generateFormModalButton = document.querySelector("button#generateFormModalButton");
let descriptionSection = document.querySelector("div#descriptionSection");
let generateDescriptionModalButton = document.querySelector("button#generateDescriptionModalButton");

let modalActions = new ModalAction();

generateDescriptionModalButton.addEventListener("mouseover", modalActions.callDescriptionModal.bind(descriptionSection));	
window.addEventListener("beforeunload", modalActions.sendContentToLocalStorage.bind(formSection));
window.addEventListener("load", modalActions.loadFormModal.bind(formSection));
window.addEventListener("load", GeneralAction.refreshCounterVideos.bind(cardsSection));

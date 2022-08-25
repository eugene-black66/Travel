let loginButton = document.getElementById('headerLoginBtn')
let loginPopup = document.getElementById('loginPopup')
let loginOverlay = document.getElementById('PopupOverlay')

let registerPopup = document.getElementById('registerPopup')
let registerString = document.getElementById('loginFooterRegister')
let loginString = document.getElementById('registerFooterLogin')


loginButton.onclick = function loginPopupOpen() {
    loginPopup.style.display = 'block';
    loginOverlay.style.display = 'block';
}

loginOverlay.onclick = function PopupClose() {
    loginPopup.style.display = 'none';
    loginOverlay.style.display = 'none';
    registerPopup.style.display = 'none'
}

registerString.onclick = function registerPopupOpenLoginPopupClose() {
    loginPopup.style.display = 'none';
    registerPopup.style.display = 'block';
}

loginString.onclick = function registerPopupCloseLoginPopupOpen() {
    registerPopup.style.display = 'none'
    loginPopup.style.display = 'block'
}
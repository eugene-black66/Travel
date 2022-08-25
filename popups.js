let loginButton = document.getElementById('headerLoginBtn')
let loginPopup = document.getElementById('loginPopup')
let loginOverlay = document.getElementById('loginPopupOverlay')

loginButton.onclick = function popupShow() {
    loginPopup.style.display = 'block';
    loginOverlay.style.display = 'block';
}

loginOverlay.onclick = function popupClose() {
    loginPopup.style.display = 'none'
    loginOverlay.style.display = 'none'
}
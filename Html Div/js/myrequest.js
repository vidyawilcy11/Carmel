function login() {
    document.getElementById('error-container').style.display = "block";
    document.getElementById('error-message').style.display = "block";
}
function continuebutton() {
    document.getElementById('forgot-password-error-message').style.display = "block";
    document.getElementById('forgot-password-popup').style.display = "block";
}
function forgot() {
    document.getElementById('forgot-password-popup').style.display = "none";
}
function browseupload() {
    document.getElementById('upload-container').style.display = "block";
    document.getElementById('uploaderror').style.display = "block";
}
function upload() {
    document.getElementById('uploadfile').style.display = "block";
    document.getElementById('upload-container').style.display = "none";
    document.getElementById('uploaderror').style.display = "none";
}
function addpeople() {
    document.getElementById('add-peoplepopup').style.display = "block";
}
function hidepeopplepopup() {
    document.getElementById('add-peoplepopup').style.display = "none";
}
function search() {
    document.getElementById('add-peoplepopup').style.display = "none";
    document.getElementById('no-result-found').style.display = "block";
}
function public() {
    document.getElementById('request-view').style.display = "none";
    document.getElementById('inbox-public').style.display = "block";
    document.getElementById('message').style.borderRight = "5px solid #E6AF2E";
    document.getElementById('home').style.borderRight = "0px";
}
function inboxmessage() {
    document.getElementById('request-view').style.display = "block";
    document.getElementById('inbox-public').style.display = "none";
    document.getElementById('message').style.borderRight = "0px";
    document.getElementById('home').style.borderRight = "5px solid #E6AF2E";
}
function filter() {
    document.getElementById('filter').style.display = "block";
}
function filteroption() {
    document.getElementById('filter').style.display = "none";
}
function addpeoplecontent(){
    document.getElementById('addpeopleimage').style.display = "none";
    document.getElementById('deletepeople').style.display = "block";
    document.getElementById('deletepeople').style.marginLeft = "40%";
    document.getElementById('selected').style.display = "none";
    document.getElementById('one-person-selected').style.display = "block";
}
function deletepeople(){
    document.getElementById('addpeopleimage').style.display = "block";
    document.getElementById('deletepeople').style.display = "none";
    document.getElementById('selected').style.display = "block";
    document.getElementById('one-person-selected').style.display = "none";
    document.getElementById('addpeopleimage').style.marginLeft = "40%";
}
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
function addpeople(){
    document.getElementById('add-peoplepopup').style.display = "block";
}
function hidepeopplepopup(){
    document.getElementById('add-peoplepopup').style.display = "none";
}
function search(){
    document.getElementById('add-peoplepopup').style.display = "none";
    document.getElementById('no-result-found').style.display = "block";
}
function savedraft(){
    document.getElementById('').style.display="block";
    document.getElementById('').style.display="none";
}
function next() {
            document.getElementById('requisition-items').style.display = "none"
            document.getElementById('browse-attachments').style.display = "block"
            document.getElementById('number-three').style.backgroundColor = "#32bDD2"
            document.getElementById('number-two').style.backgroundColor = "#FFFFFF"
            document.getElementById('two').style.color = "#000000"
            document.getElementById('three').style.color = "#FFFFFF"
        }




        

function login() {
    document.getElementById('error-container').style.display = "block";
    document.getElementById('error-message').style.display = "block";
    document.getElementById('login-error').style.display = "none";
    document.getElementById('login-without-error').style.display = "block";
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
function addpeoplecontent() {
    document.getElementById('addpeopleimage').style.display = "none";
    document.getElementById('deletepeople').style.display = "block";
    document.getElementById('deletepeople').style.marginLeft = "40%";
    document.getElementById('selected').style.display = "none";
    document.getElementById('one-person-selected').style.display = "block";
}

function additems() {
    document.getElementById('add-items-popup').style.display = "block";
    document.getElementById('body-content-container').style.display = "block";
}
function cancel() {
    document.getElementById('add-items-popup').style.display = "none"
}

function editdelete() {
    document.getElementById('edit-delete-content').style.display = "block"
}
function editdel(){
    document.getElementById('edit-delete-container').style.display = "block"
}
function editdelette(){
    document.getElementById('edit-delete-container').style.display = "none"
}
function edit() {
    document.getElementById('edit-delete-content').style.display = "none"
}
function savedraft() {
    document.getElementById('requisition-items').style.display = "none"
    document.getElementById('acknowledgement-container').style.display = "block"
    document.getElementById('button-container').style.display = "none"
    document.getElementById('number-six').style.background = "#32BDD2"
    document.getElementById('number-two').style.backgroundColor = "#FFFFFF"
    document.getElementById('two').style.color = "#000000"
    document.getElementById('six').style.color = "#FFFFFF"
}
function previouspage() {
    document.getElementById('note-request-typecontainer').style.display = "block"
    document.getElementById('requisition-items').style.display = "none"
    document.getElementById('button-container').style.display = "none"
    document.getElementById('number-one').style.backgroundColor = "#32BDD2"
    document.getElementById('one').style.color = "#FFFFFF"
    document.getElementById('number-two').style.backgroundColor = "#FFFFFF"
    document.getElementById('two').style.color = "#000000"
    document.getElementById('button-container').style.display = "none"
}

function acknowledgesavedraft() {
    document.getElementById('requisition-items').style.display = "none"
    document.getElementById('acknowledgement-container').style.display = "block"
    document.getElementById('number-six').style.background = "#32BDD2"
    document.getElementById('number-two').style.backgroundColor = "#FFFFFF"
    document.getElementById('two').style.color = "#000000"
    document.getElementById('six').style.color = "#FFFFFF"
    document.getElementById('note-container').style.display = "none"
    document.getElementById('requisition-items').style.display = "none"
    document.getElementById('acknowledgement-container').style.display = "block"
    document.getElementById('number-one').style.backgroundColor = "#FFFFFF"
    document.getElementById('one').style.color = "#000000"
}

function nextbutton() {
    document.getElementById('requisition-items').style.display = "block"
    document.getElementById('note-container').style.display = "none"
    document.getElementById('number-two').style.backgroundColor = "#32BDD2"
    document.getElementById('two').style.color = "#FFFFFF"
    document.getElementById('number-one').style.backgroundColor = "#FFFFFF"
    document.getElementById('one').style.color = "#000000"
    document.getElementById('button-container').style.display = "grid"
}
function readmore() {
    document.getElementById('half-text').style.display = "none"
    document.getElementById('full-text').style.display = "block"
    document.getElementById('readmore').style.display = "none"
    document.getElementById('readless').style.display = "block"
}
function readless() {
    document.getElementById('half-text').style.display = "block"
    document.getElementById('full-text').style.display = "none"
    document.getElementById('readmore').style.display = "block"
    document.getElementById('readless').style.display = "none"
}
function deletepeople() {
    document.getElementById('addpeopleimage').style.display = "block";
    document.getElementById('deletepeople').style.display = "none";
    document.getElementById('selected').style.display = "block";
    document.getElementById('one-person-selected').style.display = "none";
    document.getElementById('addpeopleimage').style.marginLeft = "40%";
}

function nextfile() {
    document.getElementById('requisition-items').style.display = "block";
    document.getElementById('note-request-typecontainer').style.display = "none";
    document.getElementById('button-container').style.display = "grid";
    document.getElementById('number-one').style.backgroundColor = "white";
    document.getElementById('one').style.color = "#000000";
    document.getElementById('number-two').style.backgroundColor = "#32bdd2";
    document.getElementById('two').style.color = "white";
}

function next() {
    document.getElementById('requisition-items').style.display = "none";
    document.getElementById('note-request-typecontainer').style.display = "none";
    document.getElementById('upload-data-container').style.display = "block";
    document.getElementById('button-container').style.display = "none"
    document.getElementById('number-one').style.backgroundColor = "white";
    document.getElementById('one').style.color = "#000000";
    document.getElementById('number-two').style.backgroundColor = "white";
    document.getElementById('two').style.color = "black";
    document.getElementById('number-three').style.backgroundColor = "#32bdd2";
    document.getElementById('three').style.color = "white";

}
function addapproverfile() {
    document.getElementById('requisition-items').style.display = "none";
    document.getElementById('note-request-typecontainer').style.display = "none";
    document.getElementById('upload-data-container').style.display = "none";
    document.getElementById('approver-container').style.display = "block";
    document.getElementById('number-one').style.backgroundColor = "white";
    document.getElementById('one').style.color = "#000000";
    document.getElementById('number-two').style.backgroundColor = "white";
    document.getElementById('two').style.color = "black";
    document.getElementById('number-three').style.backgroundColor = "white";
    document.getElementById('three').style.color = "black";
    document.getElementById('number-four').style.backgroundColor = "#32bdd2";
    document.getElementById('four').style.color = "white";
}
function backtoapprover() {
    document.getElementById('preview-container').style.display = "none";
    document.getElementById('approver-container').style.display = "block";
}
function requisitionitemspage() {
    document.getElementById('upload-data-container').style.display = "none";
    document.getElementById('requisition-items').style.display = "block";
    document.getElementById('button-container').style.display = "grid";
}
function previousuploadfile() {
    document.getElementById('approver-container').style.display = "none";
    document.getElementById('upload-data-container').style.display = "block";
}
function torequisitionitemspage() {
    document.getElementById('requisition-items').style.display = "block";
    document.getElementById('upload-data-container').style.display = "none";
    document.getElementById('button-container').style.display = "grid";
}
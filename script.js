var getInputs = document.getElementsByTagName("input");
var i = 0;
var id = localStorage.getItem('LastID');
while (getInputs[i].value !== id) {
   
    if (getInputs[i].type === 'checkbox') {
        
        if (i === 7) {
            localStorage.setItem('LastID', getInputs[i].value);
        } else {
            getInputs[i].checked = true;
        }
        
        if (i === 5) {
            getInputs[i].checked = false;
        }
    }
    i++;
}

console.log("Hello Js Connected");
function validation() {
    let na = document.getElementById("na").value;
    let em = document.getElementById("em").value;
    let ta = document.getElementById("tarea").value;

    let emailreg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    let namereg = /^[a-z A-Z]{2,20}$/;
    if (na == null || na == "") {
        document.getElementById("p-name").innerHTML = "*Name is empty";
        return false;
    } else if (!namereg.test(na)) {
        document.getElementById("p-name").innerHTML = "*Enter a valid name";
        return false;
    } else if (em == null || em == "") {
        document.getElementById("p-email").innerHTML = "*Email is empty";
        return false;
    } else if (!emailreg.test(em)) {
        document.getElementById("p-email").innerHTML = "*Enter valid mail";
        return false;
    } else if (ta == null || ta == "") {
        document.getElementById("p-text").innerHTML = "*Message is empty";
        return false;
    }
}

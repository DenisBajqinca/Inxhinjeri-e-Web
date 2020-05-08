function posto() {
            
    var div = document.createElement("div");
    var img = document.createElement("img");
    var h4 = document.createElement("h4");
    var p = document.createElement("p");
    var h6 = document.createElement("h6");

    var inputTitle = document.getElementById("titulli-new").value;
    var inputDescrition = document.getElementById("permbajtja-new").value;
    var title = document.createTextNode(inputTitle);
    var description = document.createTextNode(inputDescrition);
    var data = document.createTextNode("data");

    h4.appendChild(title);
    p.appendChild(description);
    h6.appendChild(data);

    div.appendChild(img);
    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(h6);

    div.style.position = "relative";
    div.style.height = "fit-content";
    div.style.width = "94%";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.flexWrap = "nowrap";
    div.style.marginTop = "10px";
    div.style.textAlign = "center";
    div.style.border = "1px solid #15337d";
    div.style.backgroundColor = "#15327d2c";
    div.style.padding = "10px";

    img.setAttribute("src", "UBT-LOGO.png");
    img.setAttribute("alt", "UBT-LOGO");
    img.style.margin = "0 auto";
    img.style.width = "70px";
    img.style.height = "70px";

    p.style.fontSize = "14px";
    p.style.marginTop = "-10px";

    h6.style.position = "absolute";
    h6.style.bottom = "1px";
    h6.style.margin = "0";
    h6.style.padding = "0";
    

    if (inputTitle === '' || inputDescrition === '') {
        alert("Plotesoni fushat");
    } 
    else {
        document.getElementById("right-side").appendChild(div);
    }
    
    document.getElementById("titulli-new").value = "";
    document.getElementById("permbajtja-new").value = "";

}

function cancel() {
    document.getElementById("titulli-new").value = "";
    document.getElementById("permbajtja-new").value = "";
}
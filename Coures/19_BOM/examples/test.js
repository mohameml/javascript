window.console.log("Test");
window.document.write("Test 2");
// window.alert("test window alert");

window.close();

window.open("https://www.google.com", "_blank");

let btn = document.getElementById("btn");

btn.onclick = () => {
    window.open("https://www.google.com", "_blank", "width=600,height=400");
    window.close();
};

window.document.title = "BOM 1";

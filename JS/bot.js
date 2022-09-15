document.getElementById("va1")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keycode === 13) {

            document.getElementById("mybtn").click();
        }
    })

function fun1() {
    para1 = null, text1 = null;

    var x = document.getElementById("va1").value;


    var para = document.createElement('div');
    var text = document.createTextNode(x);
    para.appendChild(text);
    para.value = text;
    para.setAttribute("class", "reply");

    document.getElementById("print").appendChild(para);

    document.getElementById("va1").value = "";
    if (para.textContent == "hello") {



        var para1 = document.createElement('div');
        var text1 = document.createTextNode("Welcome to Graphic Era Hill University");
        para1.appendChild(text1);
        para1.value = text1;
        para1.setAttribute("class", "querry");

        document.getElementById("print").appendChild(para1);
    } else if (para.textContent == "all courses") {

        var para1 = document.createElement('div');
        var text1 = document.createElement('iframe');
        text1.setAttribute('id', 'ifrm');
        text1.setAttribute('src', 'courses.html');
        text1.setAttribute('width', '1200px');
        text1.setAttribute('height', '400px');
        para1.appendChild(text1);
        para1.value = text1;

        document.getElementById("print").appendChild(para1);
    } else if (para.textContent == "Why I should join your university") {

        var node = document.createElement("LI");

        node.setAttribute('id', 'myList');
        var textnode = document.createTextNode("water");
        var textnode = document.createTextNode("love");
        node.appendChild(textnode);
        document.getElementById("print").appendChild(node)
    }


}
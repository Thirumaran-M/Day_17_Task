function label_create(l_id,l_text){
	var ele = document.createElement("label");
	ele.setAttribute("for",l_id);
	ele.innerHTML=l_text;
	return ele;
}

function input_create(in_type,in_text){
	var Input = document.createElement("input");
	Input.setAttribute("type",in_type);
	Input.setAttribute("id",in_text);
	return Input;
}


function submitFn(in_type,in_text){
    var fir = document.getElementById("fir").value;
    var mid = document.getElementById("mid").value;
    var las = document.getElementById("las").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    
    var span = document.createElement("span");
    span.innerHTML = `<br/><br/>Firstname: ${fir}<br/>Middlename: ${mid}<br/>Lastname: ${las}<br/>E-Mail: ${email}<br/>
    Password: ${pass}`;
//    console.log(fir);
    document.body.appendChild(span);
}


var f_lab = label_create("fir","FirstName");
var f_txt = input_create("text","fir");

var m_lab = label_create("mid","MiddleName");
var m_txt = input_create("text","mid");

var l_lab = label_create("las","LastName");
var l_txt = input_create("text","las");

var l_email = label_create("email","EMail");
var t_email = input_create("email","email");

var l_pass = label_create("pass","Password");
var t_pass = input_create("password","pass");

var s_submit = document.createElement("button");
s_submit.setAttribute("type","button");
s_submit.addEventListener("click",submitFn);
s_submit.innerHTML = "Click Me!";



var form = document.createElement("form");

form.append(f_lab,document.createElement("br"),f_txt,document.createElement("br"),m_lab,document.createElement("br"),m_txt,document.createElement("br"),l_lab,document.createElement("br"),l_txt,document.createElement("br"),l_email,document.createElement("br"),t_email,document.createElement("br"),l_pass,document.createElement("br"),t_pass,document.createElement("br"),document.createElement("br"),s_submit);

document.body.append(form);


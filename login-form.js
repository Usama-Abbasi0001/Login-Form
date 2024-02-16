let main = document.querySelector("body");
let first = document.createElement("div");
main.append(first);
first.style.border="1px solid white";
first.style.width="400px";
first.style.height="580px";
first.style.borderRadius="12px";
first.style.margin="auto";
first.style.marginTop="3rem";
main.style.background="#bdc3c7";
first.style.background="white";
first.style.fontFamily="Calibri";

let login = document.createElement("div");
first.append(login);
login.innerHTML= "Login";
login.style.textAlign="center";
login.style.marginTop="30px";
login.style.fontSize="40px";
login.style.fontWeight="bold";


let user = document.createElement("div");
first.append(user);
user.innerHTML="Username";
user.style.width="320px";
user.style.margin="auto";
user.style.marginTop="50px";

const input = document.createElement('input');
first.append(input);

input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Type Your Username...');
input.style.width="310px"
input.style.height="50px"
input.style.border="transparent"
input.style.borderBottom="2px solid #ecf0f1";
input.style.marginLeft="36px";
input.classList.add('my-input-class');


let pass = document.createElement("div");
first.append(pass);
pass.innerHTML="Password";
pass.style.width="320px";
pass.style.margin="auto";
pass.style.marginTop="30px";

const word = document.createElement('input');
first.append(word);

word.setAttribute('type', 'Number');
word.setAttribute('placeholder', 'Type Your Password...');
word.style.width="310px"
word.style.height="50px"
word.style.border="transparent"
word.style.borderBottom="2px solid #ecf0f1";
word.style.marginLeft="36px";
word.classList.add('my-input-class');


let confir = document.createElement("div");
first.append(confir);
confir.innerHTML="Forgot Password ?";
confir.style.width="320px";
confir.style.textAlign="end";
confir.style.paddingTop="10px";
confir.style.paddingRight="20px";
confir.style.margin="auto";

let but = document.createElement("div");
first.append(but);
but.innerHTML="Login";
but.style.margin="auto";
but.style.marginTop="3rem";
but.style.color="white";
but.style.background="#1abc9c";
but.style.borderRadius="100px";
but.style.padding="10px";
but.style.fontSize="20px";
but.style.width="300px";
but.style.textAlign="center";

let using = document.createElement("div");
first.append(using);
using.innerHTML="or sing up using";
using.style.width="320px";
using.style.textAlign="center";
using.style.color="#bdc3c7";
using.style.font="bold";
using.style.paddingTop="50px";
using.style.margin="auto";

var all = document.createElement("div");
first.append(all);
all.style.width="320px";
all.style.margin="auto";
all.style.marginTop="10px";
all.style.display="flex";
all.style.justifyContent="center";
all.style.gap="10px";

var fackbook = new Image();
fackbook.src = "twitter.png"; 
all.append(fackbook);

var link = new Image();
link.src = "linkedin.png"; 
all.append(link);

var twit = new Image();
twit.src = "twitter.png"; 
all.append(twit);



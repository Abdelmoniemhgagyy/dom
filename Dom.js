

// Header 


let divHeader=document.createElement("div");
let textH =document.createElement("h2")
let list =document.createElement("ul");
let elist=document.createElement("li");
let elist1=document.createElement("li");
let elist2=document.createElement("li");
let elist3=document.createElement("li");

// Write in html 

document.body.appendChild(divHeader);
divHeader.appendChild(textH);
divHeader.appendChild(list);
list.appendChild(elist);
list.appendChild(elist1);
list.appendChild(elist2);
list.appendChild(elist3);


textH.innerHTML="Hgagy"
elist.innerHTML="Home";
elist1.innerHTML="About";
elist2.innerHTML="Services";
elist3.innerHTML="Contact";
// css 

document.body.style.cssText="background-color:#ddd;padding:0;margin:0"
divHeader.style.cssText="position:relative;display:flex;justify-content:space-between;padding:0px 30px;background-color:#fff;";
textH.style.cssText="color:rgb(0 27 255);";
list.style.cssText="list-style:none;display:flex;padding:10px";
list.children[0].style.cssText="padding:0 10px";
list.children[1].style.cssText="padding:0 10px";
list.children[2].style.cssText="padding:0 10px";
list.children[3].style.cssText="padding:0 10px";



// ---------Content-----------

let divC=document.createElement("div");
document.body.appendChild(divC);

for(i=0;i<15;i++){
    let divB=document.createElement("div");
    let headB=document.createElement("h2");
    let pB=document.createElement("p");
    divC.appendChild(divB)

    divB.appendChild(headB)

    divB.appendChild(pB)
    headB.innerHTML=`${i+1}`;

    pB.innerHTML="Product";
    divB.className="a"
    divB.style.cssText="background-color:#fff;margin-top:20px;"
    headB.style.paddingBottom="1px"
    pB.style.color="#777"
}

divC.style.cssText="display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));gap:20px;background-color:#ddd;margin:25px 0 25px 0 ;text-align:center";



// ---------Footer-------------

let foot=document.createElement("div");
let textFoot =document.createElement("h3")

document.body.appendChild(foot);
foot.appendChild(textFoot);

// Write in html 

textFoot.innerHTML="Copyright 2023";
//css

foot.style.cssText="display:flex;align-items:center;justify-content:center;background-color:rgb(33 142 243 / 85%);height:40px;text-align:center;padding:30px 0;"
foot.children[0].style.cssText="color:white; font-size:22px;text-align:center"









 //********************** on click slider ********************** */

function myf(){
    document.getElementById("first").style.display = 'block';
    document.getElementById("sec").style.display = 'none';
    document.getElementById("thr").style.display = 'none';
    document.getElementById("four").style.display = 'none';
    
}

function myf2(){
    
    document.getElementById("first").style.display = 'none';
    document.getElementById("sec").style.display = 'block';
    document.getElementById("thr").style.display = 'none';
    document.getElementById("four").style.display = 'none';
    document.getElementById("fiv").style.display = 'none';
    
}
function myf3(){
    
    document.getElementById("first").style.display = 'none';
    document.getElementById("sec").style.display = 'none';
    document.getElementById("thr").style.display = 'block';
    document.getElementById("four").style.display = 'none';
    document.getElementById("fiv").style.display = 'none';
   
}
function myf4(){
    
    document.getElementById("first").style.display = 'none';
    document.getElementById("sec").style.display = 'none';
    document.getElementById("thr").style.display = 'none';
    document.getElementById("four").style.display = 'block';
    document.getElementById("fiv").style.display = 'none';
    
}
function myf5(){
    
    document.getElementById("first").style.display = 'none';
    document.getElementById("sec").style.display = 'none';
    document.getElementById("thr").style.display = 'none';
    document.getElementById("four").style.display = 'none';
    document.getElementById("fiv").style.display = 'block';
     
    
}
//****************************************imgs page1************************* */
function setNewImg1(){
    document.getElementById("img1").src ="love.gif";
}
function setOldImg1(){
    document.getElementById("img1").src ="love.png";
}
//************************ */
function setNewImg2(){
    document.getElementById("img2").src ="grad.gif";
}
function setOldImg2(){
    document.getElementById("img2").src ="grad.png";
}
//************************ */
function setNewImg3(){
    document.getElementById("img3").src ="mom.gif";
}
function setOldImg3(){
    document.getElementById("img3").src ="mom.png";
}
//*********************** */
function setNewImg4(){
    document.getElementById("img4").src ="sk.gif";
}
function setOldImg4(){
    document.getElementById("img4").src ="sk.png";
}
//********************** */
function setNewImg5(){
    document.getElementById("img5").src ="sorry.gif";
}
function setOldImg5(){
    document.getElementById("img5").src ="sorry.png";
}2
//*********************** */
function setNewImg6(){
    document.getElementById("img6").src ="widding.gif";
}
function setOldImg6(){
    document.getElementById("img6").src ="widding.png";
}
//*********************** */
function setNewImg7(){
    document.getElementById("img7").src ="home.gif";
}
function setOldImg7(){
    document.getElementById("img7").src ="home.png";
}
//*********************** */
function setNewImg8(){
    document.getElementById("img8").src ="farm.gif";
}
function setOldImg8(){
    document.getElementById("img8").src ="farm.png";
}
//************************ */
function setNewImg9(){
    document.getElementById("img9").src ="dec.gif";
}
function setOldImg9(){
    document.getElementById("img9").src ="dec.png";
}

// ********************************* toggle ***********************************
function toggle(){
   
    document.getElementById('tog').classList.toggle('activ');
    document.getElementById('popup').classList.toggle('activ');
    document.getElementById('allp').classList.toggle('activ');
} 
function sign_in(){
    document.getElementById('popup').style .transform="translate(220px)"  ;
    document.getElementById("sq").style.display = 'block';
    document.getElementById('sq').style .transform="translate(-480px)"  ;
    document.getElementById('sin').style .transform="translate(100px)"  ;
    
    
}

function regnow(){
    document.getElementById("sin").style.display = 'none';
    document.getElementById("sup").style.display = 'block';
    document.getElementById("words").innerHTML = 'sign up ';
}


function sinnow(){
    document.getElementById("sin").style.display = 'block';
    document.getElementById("sup").style.display = 'none';
    document.getElementById("words").innerHTML = 'sign in ';
}
function xx(){
    document.getElementById('popup').classList.toggle('activ');
    document.getElementById('allp').classList.toggle('activ');
    // document.getElementById("sq").style.display = 'block';

    document.getElementById('tog').classList.toggle('activ');

}
 function ps(){
    
 }
//  ******************* admin *************
function col1(){
    document.getElementById("li1").style.color = 'var(--pink)';
    document.getElementById("li2").style.color = 'black';
    document.getElementById("li3").style.color = 'black';
    document.getElementById("li4").style.color = 'black';
    
    document.getElementById("wel").style.display = 'none';
    document.getElementById("orders").style.display = 'block';
    document.getElementById("addp").style.display = 'none';
    document.getElementById("delp").style.display = 'none';
    document.getElementById("cont").style.display = 'none';
}
function col2(){
    document.getElementById("li1").style.color = 'black';
    document.getElementById("li2").style.color = 'var(--pink)';
    document.getElementById("li3").style.color = 'black';
    document.getElementById("li4").style.color = 'black';

    document.getElementById("wel").style.display = 'none';
    document.getElementById("orders").style.display = 'none';
    document.getElementById("addp").style.display = 'block';
    document.getElementById("delp").style.display = 'none';
    document.getElementById("cont").style.display = 'none';
}
function col3(){
    document.getElementById("li1").style.color = 'black';
    document.getElementById("li2").style.color = 'black';
    document.getElementById("li3").style.color = 'var(--pink)';
    document.getElementById("li4").style.color = 'black';

    document.getElementById("wel").style.display = 'none';
    document.getElementById("orders").style.display = 'none';
    document.getElementById("addp").style.display = 'none';
    document.getElementById("delp").style.display = 'block';
    document.getElementById("cont").style.display = 'none';
}
function col4(){
    document.getElementById("li1").style.color = 'black';
    document.getElementById("li2").style.color = 'black';
    document.getElementById("li3").style.color = 'black';
    document.getElementById("li4").style.color = 'var(--pink)';

    document.getElementById("wel").style.display = 'none';
    document.getElementById("orders").style.display = 'none';
    document.getElementById("addp").style.display = 'none';
    document.getElementById("delp").style.display = 'none';
    document.getElementById("cont").style.display = 'block';
}
function main(){
    document.getElementById("wel").style.display = 'block';
    document.getElementById("orders").style.display = 'none';
    document.getElementById("addp").style.display = 'none';
    document.getElementById("delp").style.display = 'none';
    document.getElementById("cont").style.display = 'none';
    document.getElementById("li1").style.color = 'black';
    document.getElementById("li2").style.color = 'black';
    document.getElementById("li3").style.color = 'black';
    document.getElementById("li4").style.color = 'black';
}
Modernizr.addTest('pointerevents', function(){
    var element = document.createElement('x'),
        documentElement = document.documentElement,
        getComputedStyle = window.getComputedStyle,
        supports;

    if(!('pointerEvents' in element.style)){
        return false;
    }

    element.style.pointerEvents = 'auto';
    element.style.pointerEvents = 'x';
    documentElement.appendChild(element);
    supports = getComputedStyle && getComputedStyle(element, '').pointerEvents === 'auto';
    documentElement.removeChild(element);
    return !!supports;
});
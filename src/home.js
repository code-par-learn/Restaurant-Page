import vanakkam from "./images/vanakkam.png";
export default function home(parent,child){
    let divH=document.createElement('section');
    divH.setAttribute('class',"overlay");
    divH.setAttribute('aria-hidden', 'false');
    
    let overlay=document.createElement('div');
    overlay.setAttribute('id','divH');

    let head=document.createElement('h3');
    head.setAttribute('id','head');
    head.textContent="HOME";
    let para=document.createElement('p');
    para.setAttribute('id','para');
    para.textContent="Indian cuisine consists of a variety of regional and traditional cuisines native to India. Given the diversity in soil, climate, culture, ethnic groups, and occupations, these cuisines vary substantially and use locally available spices, herbs, vegetables, and fruits.";
    const imgvk = new Image();
    imgvk.src = vanakkam;
    imgvk.setAttribute('id',"img");
    let para2=document.createElement('p');
    para2.textContent="To know about dishes and pricing go to the menu";
    para2.setAttribute('id','para2');
    overlay.appendChild(head);
    overlay.appendChild(para);
    overlay.appendChild(imgvk);
    overlay.appendChild(para2);
    divH.appendChild(overlay);
    divH.appendChild(child);
    parent.appendChild(divH);
}


import dosaimg from "./images/dosaimg.png";
import idli_img from "./images/idli_img.png";
import pongal_img from "./images/pongal_img.png";
import veg_img from "./images/veg_img.png";
import nveg_img from "./images/nveg_img.png";
import variety_img from "./images/variety_img.png";
export default function Menu(parent){
    let divM=document.createElement('section');
    divM.setAttribute('class','overlay');
    divM.setAttribute('aria-hidden', 'false');

    let overdiv=document.createElement('div');
    overdiv.setAttribute('id','divM');

    let headM=document.createElement('h3');
    headM.textContent="Menu";
    headM.setAttribute('id','head');

    let breakfast=document.createElement('div');
    breakfast.setAttribute('id','firstin');
    let divhead=document.createElement('h4');
    divhead.setAttribute('id','divhead');
    divhead.textContent="BreakFast";

    let dosa=document.createElement('div');
    dosa.setAttribute('class','inner');
    let dh=document.createElement('h4');
    dh.textContent="DOSA";
    let dindiv=document.createElement('div');
    dindiv.setAttribute('id','indiv');
    let dp=document.createElement('p');
    dp.textContent="A dosa is a thin savory pancake in South Indian cuisine made from a fermented batter of ground black lentils and rice.";
    const dimg = new Image();
    dimg.src = dosaimg;
    dimg.setAttribute('id',"img");
    dindiv.appendChild(dimg);
    dindiv.appendChild(dp);
    dosa.appendChild(dh);
    dosa.appendChild(dindiv);
    breakfast.appendChild(divhead);
    breakfast.appendChild(dosa);

    let idli=document.createElement('div');
    idli.setAttribute('class','inner');
    let ih=document.createElement('h4');
    ih.textContent="IDLI";
    let indiv=document.createElement('div');
    indiv.setAttribute('id','indiv');
    let ip=document.createElement('p');
    ip.textContent="Idli is one of the most healthiest and popular South Indian breakfast dish. These are soft, light, fluffy steamed round cakes made with a ground, fermented rice and lentil batter.";
    const iimg = new Image();
    iimg.src = idli_img;
    iimg.setAttribute('id',"img");
    indiv.appendChild(iimg);
    indiv.appendChild(ip);
    idli.appendChild(ih);
    idli.appendChild(indiv);
    breakfast.appendChild(idli);
    
    let pongal=document.createElement('div');
    pongal.setAttribute('class','inner');
    let ph=document.createElement('h4');
    ph.textContent="PONGAL";
    let pindiv=document.createElement('div');
    pindiv.setAttribute('id','indiv');
    let p=document.createElement('p');
    p.textContent="Ven Pongal is a traditional south Indian dish made with rice, split yellow mung dal ,ghee,cumin,ginger,pepper and curry leaves. ";
    const pimg = new Image();
    pimg.src = pongal_img;
    pimg.setAttribute('id',"img");
    pindiv.appendChild(pimg);
    pindiv.appendChild(p);
    pongal.appendChild(ph);
    pongal.appendChild(pindiv);
    breakfast.appendChild(pongal);

    let meals=document.createElement('div');
    meals.setAttribute('id','firstin');
    meals.setAttribute('class','meals');
    let mhead=document.createElement('h4');
    mhead.setAttribute('id','divhead');

    mhead.textContent="MEALS";

    let veg=document.createElement('div');
    veg.setAttribute('class','inner');
    let vh=document.createElement('h4');
    vh.textContent="VEG MEALS";
    let vindiv=document.createElement('div');
    vindiv.setAttribute('id','indiv');
    let vp=document.createElement('p');
    vp.textContent="In banana leaf Indian cuisine, you can typically find white rice (or parboiled rice) served on a banana leaf with an assortment of vegetables, pickles, appalam, and other regional condiments";
    const vimg = new Image();
    vimg.src = veg_img;
    vimg.setAttribute('id',"img");
    vindiv.appendChild(vimg);
    vindiv.appendChild(vp);
    veg.appendChild(vh);
    veg.appendChild(vindiv);
    meals.appendChild(mhead);
    meals.appendChild(veg);

    let nveg=document.createElement('div');
    nveg.setAttribute('class','inner');
    let nvh=document.createElement('h4');
    nvh.textContent="NON VEG MEALS";
    let nvindiv=document.createElement('div');
    nvindiv.setAttribute('id','indiv');
    let nvp=document.createElement('p');
    nvp.textContent="In this, you can typically find white rice (or parboiled rice) served on a banana leaf with an assortment of fish fry ,chicken gravy,mutton gravy, pickles, eggs, and other regional condiments";
    const nvimg = new Image();
    nvimg.src = nveg_img;
    nvimg.setAttribute('id',"img");
    nvindiv.appendChild(nvimg);
    nvindiv.appendChild(nvp);
    nveg.appendChild(nvh);
    nveg.appendChild(nvindiv);
    meals.appendChild(nveg);

    let variety=document.createElement('div');
    variety.setAttribute('class','inner');
    let vrh=document.createElement('h4');
    vrh.textContent="VARIETY RICE";
    let vrindiv=document.createElement('div');
    vrindiv.setAttribute('id','indiv');
    let vrp=document.createElement('p');
    vrp.textContent="A collection of South Indian Variety Rice Recipes like Sambar Rice, Sukku Malli Rice, Tomato Bath, Pudina (Mint) rice, Tamarind rice .";
    const vrimg = new Image();
    vrimg.src = variety_img;
    vrimg.setAttribute('id',"img");
    vrindiv.appendChild(vrimg);
    vrindiv.appendChild(vrp);
    variety.appendChild(vrh);
    variety.appendChild(vrindiv);
    meals.appendChild(variety);
    


    overdiv.appendChild(headM);
    overdiv.appendChild(breakfast);
    overdiv.appendChild(meals);
    divM.appendChild(overdiv);
    parent.appendChild(divM);
}
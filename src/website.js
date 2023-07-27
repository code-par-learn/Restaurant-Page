import home from "./home.js";
import menu from "./menu.js";
import contacts from "./contacts.js";
import bg_img from "./images/bg_img.png"
export default class website{
    constructor(){
        this.container=document.createElement('div');
        this.container.setAttribute('class','container');
        this.header=document.createElement('div');
        this.header.setAttribute('class','header');
        this.content=document.createElement('div');
        this.content.setAttribute('class','content');
        this.footer=document.createElement('div');
        this.footer.setAttribute('class','footer');
    }
 create_header(){
     let heading=document.createElement('div');
     heading.setAttribute('id','heading');
     let select=document.createElement('div');
     select.setAttribute('id','select');

     let p1=document.createElement('p');
     p1.textContent="The Indian Cuisine";

     let btndiv=document.createElement('div');
     btndiv.setAttribute('id','btndiv');

     let Hbtn=document.createElement('button');
     Hbtn.setAttribute('id','Hbtn');
     Hbtn.textContent="Home";
     Hbtn.addEventListener("click",()=>{
        this.clear_content(); 
        home(this.content);
    });

     let Mbtn=document.createElement('button');
     Mbtn.setAttribute('id','Cbtn');
     Mbtn.textContent="Menu";
     Mbtn.addEventListener("click",()=>{
        this.clear_content(); 
        menu(this.content)});

     let Cbtn=document.createElement('button');
     Cbtn.setAttribute('id','Fbtn');
     Cbtn.textContent="Contacts";
     Cbtn.addEventListener("click",()=>{
        this.clear_content(); 
        contacts(this.content)});

     heading.appendChild(p1);
     btndiv.appendChild(Hbtn);
     btndiv.appendChild(Mbtn);
     btndiv.appendChild(Cbtn);
     select.appendChild(btndiv)
     this.header.appendChild(heading);
    this.header.appendChild(select);
}
clear_content(){
    this.content.innerHTML="";
    const bg = new Image();
    bg.src = bg_img;
    bg.setAttribute('id',"bg_img");
    this.content.appendChild(bg);
}
create_content(){
    const bg = new Image();
    bg.src = bg_img;
    bg.setAttribute('id',"bg_img");
    this.content.appendChild(bg);
    home(this.content);
}
create_footer(){
    let cp=document.createElement('div');
    cp.setAttribute('id','cp')

    cp.innerHTML="<p>Copyright © <a href='https://github.com/code-par-learn'>code-par-learn</a></p>";
    this.footer.appendChild(cp);
}
create_website(){
    document.body.appendChild(this.header);
    document.body.appendChild(this.content);
    document.body.appendChild(this.footer);
    
}
call_all(){
    this.create_header();
    this.create_footer();
    this.create_content();
    this.create_website();
}
}
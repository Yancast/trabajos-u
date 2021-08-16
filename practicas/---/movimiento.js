
// vamos a crear las galerías 

var IMG1=('<img src="https://im-media.voltron.voanews.com/Drupal/02live-246/styles/sourced/s3/2020-02/F2A6F52D-E7FF-4172-8F36-BB8214B6F08E.jpg?itok=-fScJYdZ">');
var IMG2=('<img src="https://img.bekia.es/articulos/portada/86000/86184.jpg">');
var IMG3=('<img src="https://i.ytimg.com/vi/zQSIKiIn5qg/maxresdefault.jpg">');
var IMG4=('<img src="https://graziamagazine.com/mx/wp-content/uploads/sites/13/2020/08/Los-disen%CC%83adores-detra%CC%81s-de-todos-los-outfits-de-Lady-Gaga-en-los-VMAs-2020.jpg?fit=4000%2C2811">');
var IMG5=('<img src="https://img2.rtve.es/i/?w=1600&i=1627922746098.jpg">');

var lasimg=[IMG1,IMG2,IMG3,IMG4,IMG5];

/*for (i=0;i<=4;i++){
   document.write(lasimg[i])
{ */

var i=0;

function siguiente() {
    if (i<4){
        i++;
    }

    else{
        i = 4;
    }
    document.getElementById("cuadro").innerHTML=lasimg[i];
    document.getElementById("color").innerHTML=colores[i];

 }

 function antes(){
     if(i>0){
         i--;
     }

     else{
         i=0;
     }

     document.getElementById("cuadro").innerHTML=lasimg[i];
     document.getElementById("color").innerHTML=colores[i];

 }

 //vamos hacer que el fondo cambie de color con cada click

 //creamos la variable 

 var color1=('<img src="https://colorazul.top/wp-content/uploads/2021/06/azul-electrico-1024x769.jpg">');
 var color2=('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Kegich.svg/341px-Kegich.svg.png">'); 
 var color3=('<img src="https://i.ytimg.com/vi/VwVVKcXTgag/maxresdefault.jpg">');
 var color4=('<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQcAAADACAMAAAA+71YtAAAAA1BMVEXjABuGu5rPAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+BsYAAAF7hZJ0AAAAAElFTkSuQmCC">');
 var color5=('<img src="https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/Yellow%2520%2528s%2529.jpg">');

 //crearemos la super variavle 

 var colores=[color1,color2,color3,color4,color5];

 //crearemos 

/* for (i=0;i<4;i++){
     document.write(colores[i])
 */
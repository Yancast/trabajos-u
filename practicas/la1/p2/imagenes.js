
//crearemos las variables de las imagenes.

var ROS1 ='<img  src="https://i.pinimg.com/564x/df/f7/bc/dff7bc9ab5ab0b578e1f9e30fc7558a0.jpg" alt="">';
var ROS2='<img  src=https://media.vogue.mx/photos/5e84ba82ed5c030009d29957/master/w_2000,c_limit/rosal%C3%ADa-con-vestido-rojo.jpg alt="">';
var ROS3='<img src="https://files.lamega.com.co/assets/public/styles/d_img_480x870/public/media/image/image/2019-07/Rosalia.jpg?h=68ac3a8d&itok=QlptyUWk" alt="">';
var ROS4='<img  src="https://i.pinimg.com/originals/3d/3d/37/3d3d379a0a918aed953268d05d5990c4.jpg" alt="">';

// ahora creamos la galeria

var ROS=[ROS1,ROS2,ROS3,ROS4];




 /*for (i=0;i<=3;i++){
     document.write(ROS[i]);
 }
 */


var i=0

 function SIGUIENTE(){
     
    if (i<3){

        i++;

        document.getElementById("imagen").innerHTML = ROS[i];

    }



 }

 function ANTERIOR(){
    if (i>0){
        i--;

        document.getElementById("imagen").innerHTML= ROS[i];
    }

};





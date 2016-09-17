# Circle Colors
### Cambiar el color del borde de los circulos conforme hagamos click en los botenes CRI Y SUPERCRI 
![cri-cri](http://i66.tinypic.com/2n8y8fq.png)
### 1. BOTÓN CRI:
Al hacer click en el boton "Cri" hará que el primer circulo tenga un borde de cualquier color, con otro click hará que se pase la siguiente circulo y éste tenga el borde de otro color diferente.
Por lo cual se inicializa un evento que contiene un variable cont (contador), el cual servirá para llevar la cuenta de cuantos clicks hagamos en el botón CRI.
La acción del primer **IF** es de darle un color de borde al primer círculo (rojo) mediante el objeto **style** el cual estable la propiedad de estilo **bordeColor** y utilizamos el atributo **placeholder** para mostrar un texto (color del circulo con borde) en la entrada input, los dos círculos restante (que no deseamos que tengan un borde) tiene el valor de **transparent**, esto hará que estos dos elementos tengan bordes traslúcidos.
Lo mismo sucederá con los otros dos círculos, con la diferencia que el borde de cada uno será de un color distinto y la entrada input mostrara un texto diferente por cada uno.
![](http://i63.tinypic.com/sd2s0x.png)

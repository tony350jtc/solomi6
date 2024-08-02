/*modelo= plantilla que representa a un tipo de objeto, compartiendo
caracteristicas generales y similares 

instancias= copia de la clase o modelo del objeto,que tenia definido sus propias caracteristicas
ej: persona->trabajador, estudiante, veterinario. 
EJ: animal->perro,gato,caballo

interfaces= (concepto del lenguaje typescript)=
modelo/clase(concepto de programacion orientada a objetos)

*/

export interface Card {
    idcard:string;//alfanumerico, numerico, booleano
    titulo:string;
    descripcion:string;
    imagen:string;
    alt:string;
}

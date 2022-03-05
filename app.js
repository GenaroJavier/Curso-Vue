new Vue({
    el: '#app', 

    data () {
        return {
            ocupaciones: 'Ocupaciones',
            lugar: 'Col. Morelos',
            personas: [
                {nombre: "Genaro", apellido: "perez", edad: 21, puesto: "residente"},
                {nombre: "Maricela", apellido: "Jimenez", edad: 12, puesto: "alumno"},
                {nombre: "Jesus", apellido: "perez", edad: 30, puesto: "alumno"},
                {nombre: "Juan", apellido: "Pistolas", edad: 14, puesto: "comerciante"},
                {nombre: "Oliver", apellido: "camargo", edad: 21, puesto: "alumno"},
                {nombre: "Mahetsi", apellido: "Perez", edad: 21, puesto: "alumno"},
                {nombre: "Efrain", apellido: "Rosas", edad: 46, puesto: "comerciante"},
                {nombre: "Sergio", apellido: "Vega", edad: 12, puesto: "alumno"},
            ],
            mostrar_elementos: false,
            color: 'f4f4f4',
        }
    },
    computed: {
        titulo () {
            return `${this.ocupaciones} - ${this.lugar} ${this.mostrar_elementos==true ? '🙉' : '🙈'}`; 
        }, 
    },
    methods: {
        Mostrar_Precios () {
            this.mostrar_elementos = !this.mostrar_elementos;
            this.color = this.color.split('').reverse().join(''); 
        },
        Mensaje_persona (nombre, apellido, edad, puesto) {
            return ("Mi nombre es: " + nombre + " " + apellido + " tengo " + edad + " años y soy un " + puesto);
        },
    }, 
    watch: {
        //EL nombre de la función tiene que corresponder con el nombre de la data en cuestion. 
        mostrar_elementos (newVal, oldVal) {
            console.log(newVal, oldVal); 
        }
    },
})
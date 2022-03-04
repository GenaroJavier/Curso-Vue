new Vue({
    el: '#app', 

    data () {
        return {
            animales: ['burro', 'caballo', 'perro', 'gato', 'raton'],
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
    methods: {
        /**
         * Es curioso como funciona este metodo, por que en un inicio especificamos 
         * la variable encargada de mostrar y ocultar un elemento, 
         * por ello la inicalizamos en false, para que este metodo me cambie por completo
         * dicho valor, es decir cada vez que el evento click se dispare, se ejecuta
         * el metodo y la variable cambie su valor lo que nos permite ocultar y mostrar
         * el div contenedor.
         */
        Mostrar_Precios () {
            this.mostrar_elementos = !this.mostrar_elementos;
            this.color = this.color.split('').reverse().join(''); 
        }
    }
})
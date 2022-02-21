new Vue({
    el: '#app', 

    data () {
        return {
            animales: ['burro', 'caballo', 'perro', 'gato', 'raton'],
            personas: [
                {nombre: "Genaro", apellido: "perez", edad: 21, puesto: "residente"},
                {nombre: "Jesus", apellido: "perez", edad: 15, puesto: "alumno"},
                {nombre: "Oliver", apellido: "camargo", edad: 21, puesto: "alumno"},
                {nombre: "Mahetsi", apellido: "perez", edad: 21, puesto: "alumno"},
                {nombre: "Efrain", apellido: "Rosas", edad: 46, puesto: "comerciante"},
            ]
           
        }
    }
})
const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue jeje',
        frutas: [
        {nombre:'Manzana', cantidad:12},
        {nombre:'Pera', cantidad:5},
        {nombre:'Plantano', cantidad:0}],
        nuevaFruta: "",
        total: 0
    },
    methods:{
        agregarFruta(){
            this.frutas.push({
                nombre: this.nuevaFruta,
            });
            this.nuevaFruta = '';
        }
    },
    computed: {
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total += fruta.cantidad;
            }
            return this.total;
        }
    }
})
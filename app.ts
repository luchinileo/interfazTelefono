interface Telefono{
    prender: () => void 
    apagar: () => void
    llamar: (numero:string) =>void
}

class SmartPhone implements Telefono{
    private estaPrendido : boolean;

    constructor(estaPrendido: boolean){
        this.estaPrendido = estaPrendido;
    }

    prender() {
        this.estaPrendido = true;
    }

    apagar () {
        this.estaPrendido = false;
    }

    llamar(numero: string){
        console.log('llamando a ${numero}');
    }

    sacarFoto() {
        if(this.estaPrendido === true){
            console.log('sacando foto');

        }else{
            console.log('no se pudo sacar la foto el telefono esta a apagado');
        }

    }
}
function identificarInterruptores() {
    const lampadas = {
        1: { estado: 'desligada', sala: '1' }, 
        2: { estado: 'desligada', sala: '3' }, 
        3: { estado: 'desligada', sala: '2' }  
    };

    function ligarInterruptor(numero) {
        if (lampadas[numero]) {
            lampadas[numero].estado = 'ligada';
        } else {
            console.log(`Interruptor ${numero} não existe.`);
        }
    }

    function verificarLampadas() {
        const resultado = {
            'Lâmpada 1': lampadas[1],
            'Lâmpada 2': lampadas[2],
            'Lâmpada 3': lampadas[3]
        };
        return resultado;
    }
    return {
        ligarInterruptor,
        verificarLampadas
    };
}

const identificador = identificarInterruptores();
identificador.ligarInterruptor(1);
identificador.ligarInterruptor(3);

console.log(identificador.verificarLampadas());

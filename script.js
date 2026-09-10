

/* =====================================
   FUNÇÃO PARA TROCAR AS ABAS
===================================== */

function abrirAba(nomeAba) {

    const conteudos =
        document.querySelectorAll(".conteudo-aba");

    const abas =
        document.querySelectorAll(".tab");


    conteudos.forEach(conteudo => {

        conteudo.classList.remove("active");

    });


    abas.forEach(aba => {

        aba.classList.remove("active");

    });


    document
        .getElementById(nomeAba)
        .classList
        .add("active");


    event.target
        .classList
        .add("active");

}



/* =====================================
   TRIGONOMETRIA
===================================== */


function grausParaRadiano(graus) {

    return graus * Math.PI / 180;

}


function calcularSeno() {

    const angulo =
        Number(
            document.getElementById(
                "anguloSeno"
            ).value
        );


    const resultado =
        Math.sin(
            grausParaRadiano(angulo)
        );


    document.getElementById(
        "resultadoSeno"
    ).innerHTML =
        `sen(${angulo}°) = ${resultado.toFixed(4)}`;

}



function calcularCosseno() {

    const angulo =
        Number(
            document.getElementById(
                "anguloCosseno"
            ).value
        );


    const resultado =
        Math.cos(
            grausParaRadiano(angulo)
        );


    document.getElementById(
        "resultadoCosseno"
    ).innerHTML =
        `cos(${angulo}°) = ${resultado.toFixed(4)}`;

}



function calcularTangente() {

    const angulo =
        Number(
            document.getElementById(
                "anguloTangente"
            ).value
        );


    const resultado =
        Math.tan(
            grausParaRadiano(angulo)
        );


    document.getElementById(
        "resultadoTangente"
    ).innerHTML =
        `tan(${angulo}°) = ${resultado.toFixed(4)}`;

}



/* =====================================
   TRIÂNGULO RETÂNGULO
===================================== */


function calcularHipotenusa() {

    const cateto1 =
        Number(
            document.getElementById(
                "cateto1"
            ).value
        );


    const cateto2 =
        Number(
            document.getElementById(
                "cateto2"
            ).value
        );


    const hipotenusa =
        Math.sqrt(

            Math.pow(cateto1, 2)

            +

            Math.pow(cateto2, 2)

        );


    document.getElementById(
        "resultadoHipotenusa"
    ).innerHTML =
        `Hipotenusa = ${hipotenusa.toFixed(2)}`;

}



function calcularCateto() {

    const hipotenusa =
        Number(
            document.getElementById(
                "hipotenusa"
            ).value
        );


    const outroCateto =
        Number(
            document.getElementById(
                "outroCateto"
            ).value
        );


    const cateto =
        Math.sqrt(

            Math.pow(hipotenusa, 2)

            -

            Math.pow(outroCateto, 2)

        );


    document.getElementById(
        "resultadoCateto"
    ).innerHTML =
        `Cateto = ${cateto.toFixed(2)}`;

}



/* =====================================
   ÁREAS
===================================== */


function areaRetangulo() {

    const base =
        Number(
            document.getElementById(
                "baseRetangulo"
            ).value
        );


    const altura =
        Number(
            document.getElementById(
                "alturaRetangulo"
            ).value
        );


    const resultado =
        base * altura;


    document.getElementById(
        "resultadoRetangulo"
    ).innerHTML =
        `Área = ${resultado.toFixed(2)}`;

}



function areaTriangulo() {

    const base =
        Number(
            document.getElementById(
                "baseTriangulo"
            ).value
        );


    const altura =
        Number(
            document.getElementById(
                "alturaTriangulo"
            ).value
        );


    const resultado =
        (base * altura) / 2;


    document.getElementById(
        "resultadoAreaTriangulo"
    ).innerHTML =
        `Área = ${resultado.toFixed(2)}`;

}



function areaCirculo() {

    const raio =
        Number(
            document.getElementById(
                "raioCirculo"
            ).value
        );


    const resultado =
        Math.PI *
        Math.pow(raio, 2);


    document.getElementById(
        "resultadoCirculo"
    ).innerHTML =
        `Área = ${resultado.toFixed(2)}`;

}



/* =====================================
   PERÍMETROS
===================================== */


function perimetroQuadrado() {

    const lado =
        Number(
            document.getElementById(
                "ladoQuadrado"
            ).value
        );


    const resultado =
        lado * 4;


    document.getElementById(
        "resultadoQuadrado"
    ).innerHTML =
        `Perímetro = ${resultado.toFixed(2)}`;

}



function perimetroRetangulo() {

    const base =
        Number(
            document.getElementById(
                "basePerimetro"
            ).value
        );


    const altura =
        Number(
            document.getElementById(
                "alturaPerimetro"
            ).value
        );


    const resultado =
        2 * (base + altura);


    document.getElementById(
        "resultadoPerimetroRetangulo"
    ).innerHTML =
        `Perímetro = ${resultado.toFixed(2)}`;

}



function circunferencia() {

    const raio =
        Number(
            document.getElementById(
                "raioPerimetro"
            ).value
        );


    const resultado =
        2 *
        Math.PI *
        raio;


    document.getElementById(
        "resultadoCircunferencia"
    ).innerHTML =
        `Circunferência = ${resultado.toFixed(2)}`;

}



/* =====================================
   VOLUMES
===================================== */


function volumeCubo() {

    const lado =
        Number(
            document.getElementById(
                "ladoCubo"
            ).value
        );


    const resultado =
        Math.pow(lado, 3);


    document.getElementById(
        "resultadoCubo"
    ).innerHTML =
        `Volume = ${resultado.toFixed(2)}`;

}



function volumeParalelepipedo() {

    const comprimento =
        Number(
            document.getElementById(
                "comprimentoParalelepipedo"
            ).value
        );


    const largura =
        Number(
            document.getElementById(
                "larguraParalelepipedo"
            ).value
        );


    const altura =
        Number(
            document.getElementById(
                "alturaParalelepipedo"
            ).value
        );


    const resultado =
        comprimento *
        largura *
        altura;


    document.getElementById(
        "resultadoParalelepipedo"
    ).innerHTML =
        `Volume = ${resultado.toFixed(2)}`;

}



function volumeCilindro() {

    const raio =
        Number(
            document.getElementById(
                "raioCilindro"
            ).value
        );


    const altura =
        Number(
            document.getElementById(
                "alturaCilindro"
            ).value
        );


    const resultado =
        Math.PI *
        Math.pow(raio, 2) *
        altura;


    document.getElementById(
        "resultadoCilindro"
    ).innerHTML =
        `Volume = ${resultado.toFixed(2)}`;

}



function volumeCone() {

    const raio =
        Number(
            document.getElementById(
                "raioCone"
            ).value
        );


    const altura =
        Number(
            document.getElementById(
                "alturaCone"
            ).value
        );


    const resultado =
        (
            Math.PI *
            Math.pow(raio, 2) *
            altura
        ) / 3;


    document.getElementById(
        "resultadoCone"
    ).innerHTML =
        `Volume = ${resultado.toFixed(2)}`;

}



function volumeEsfera() {

    const raio =
        Number(
            document.getElementById(
                "raioEsfera"
            ).value
        );


    const resultado =
        (
            4 / 3
        ) *
        Math.PI *
        Math.pow(raio, 3);


    document.getElementById(
        "resultadoEsfera"
    ).innerHTML =
        `Volume = ${resultado.toFixed(2)}`;

}

(function() {
    const actualizarHora = () => {
        let fecha = new Date();
        let horas = fecha.getHours();
        let minutos = fecha.getMinutes();
        let segundos = fecha.getSeconds();
        let ampm = '';
        let diaSemana = fecha.getDay();
        let dia = fecha.getDate();
        let mes = fecha.getMonth();
        let anio = fecha.getFullYear();

        let pHoras = document.getElementById('horas'),
            pAMPM = document.getElementById('ampm'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDiaSemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pAnio = document.getElementById('anio');

        //Arma Fecha
        const arrDiasSemana = ['Domingo', 'Lunes', 'Martes','Miércoles','Jueves','Viernes','Sábado'];
        pDiaSemana.textContent = arrDiasSemana[diaSemana];

        pDia.textContent = dia;

        const arrMes = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        pMes.textContent = arrMes[mes];

        pAnio.textContent = anio;

        //Arma hora, minutos, segundos
        if(horas >= 12) {
            horas = horas - 12;
            ampm = 'PM';
        }
        else {
            ampm = 'AM';
        }
        if(horas == 0) {
            horas = 12;
        }
        if(horas < 10){horas = "0" + horas};
        pHoras.textContent = horas;
        pAMPM.textContent = ampm;
        if(minutos < 10){minutos = "0" + minutos};
        pMinutos.textContent = minutos;
        if(segundos < 10){segundos = "0" + segundos};
        pSegundos.textContent = segundos;
    };
    let hora = setInterval(actualizarHora,1000);
}());
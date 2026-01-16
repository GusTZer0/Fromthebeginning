// =========================================================
// !!! 🚨 ATENÇÃO: MUDAR ESTA DATA !!!
// Coloque a data do seu relacionamento no formato: 'Ano/Mês/Dia'
const START_DATE = new Date('2023/01/01'); 
// =========================================================

function updateCounter() {
    const now = new Date();
    const diff = now.getTime() - START_DATE.getTime(); // Diferença em milissegundos

    // Constantes para conversão de tempo
    const msInSecond = 1000;
    const msInMinute = 60 * msInSecond;
    const msInHour = 60 * msInMinute;
    const msInDay = 24 * msInHour;

    // --- CÁLCULO PERIÓDICO (Anos, Meses e Dias no Mês Atual) ---
    let years = now.getFullYear() - START_DATE.getFullYear();
    let months = now.getMonth() - START_DATE.getMonth();
    let days = now.getDate() - START_DATE.getDate(); // Dias restantes no MÊS ATUAL

    // Ajusta se o dia do mês atual for menor que o dia inicial
    if (days < 0) {
        months--;
        // Adiciona os dias do mês anterior
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    
    // Ajusta se o mês atual for menor que o mês inicial
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // --- CÁLCULO DAS UNIDADES RESTANTES (Horas, Minutos e Segundos) ---
    const totalDaysElapsed = Math.floor(diff / msInDay);
    const remainingTime = diff - (totalDaysElapsed * msInDay); // Milissegundos que sobraram do último dia
    
    // Calcula as unidades restantes de tempo no último dia
    const hours = Math.floor((remainingTime % msInDay) / msInHour);
    const minutes = Math.floor((remainingTime % msInHour) / msInMinute);
    const seconds = Math.floor((remainingTime % msInMinute) / msInSecond);

    // Formata o número para sempre ter dois dígitos (ex: 5 -> 05)
    const formatNumber = (num) => num < 10 ? '0' + num : num;

    // --- ATUALIZAÇÃO NO HTML ---
    document.getElementById('years').innerText = formatNumber(years);
    document.getElementById('months').innerText = formatNumber(months);
    document.getElementById('days').innerText = formatNumber(days); // Dias restantes no mês atual
    document.getElementById('hours').innerText = formatNumber(hours);
    document.getElementById('minutes').innerText = formatNumber(minutes);
    document.getElementById('seconds').innerText = formatNumber(seconds);
}

// Inicia a contagem na primeira carga
updateCounter();

// Atualiza a contagem a cada 1000 milissegundos (1 segundo)
setInterval(updateCounter, 1000);
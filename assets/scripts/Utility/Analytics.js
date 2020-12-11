console.log('Analitics...');

const intervalId = setInterval( () => {
    console.log('Sending analytics data...')
}, 2000);

document.getElementById('stop-analitics-btn').addEventListener('click', () => {
    console.log('Sending analytics data STOPED')
    clearInterval(intervalId) 
})
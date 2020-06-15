window.addEventListener('load', function (){
    const timer = this.document.querySelector('#timer');
    let count = 0;

    const interval = setInterval(() => {
        timer.textContent = ++count;

        if(count===20){
            this.clearInterval(interval);
        }

        if (count%5===0){
            setTimeout(() => {
                timer.textContent = count + ',5';
            }, 500);
        }
    }, 1000);
});

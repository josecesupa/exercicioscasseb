let counterValue = 0;

        function updateCounter(value) {
            counterValue += value;
            document.getElementById('counter').innerText = counterValue;
        }
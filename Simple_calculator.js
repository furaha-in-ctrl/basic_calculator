<!DOCTYPE html>
<html>
<head>
    <title>Simple Calculator</title>
</head>
<body>
    <h2>Simple Calculator</h2>
    <input type="text" id="display" disabled>
    <br>
    <button onclick="addToDisplay('1')">1</button>
    <button onclick="addToDisplay('2')">2</button>
    <button onclick="addToDisplay('3')">3</button>
    <button onclick="addToDisplay('+')">+</button>
    <br>
    <button onclick="addToDisplay('4')">4</button>
    <button onclick="addToDisplay('5')">5</button>
    <button onclick="addToDisplay('6')">6</button>
    <button onclick="addToDisplay('-')">-</button>
    <br>
    <button onclick="addToDisplay('7')">7</button>
    <button onclick="addToDisplay('8')">8</button>
    <button onclick="addToDisplay('9')">9</button>
    <button onclick="addToDisplay('*')">*</button>
    <br>
    <button onclick="addToDisplay('0')">0</button>
    <button onclick="clearDisplay()">C</button>
    <button onclick="calculateResult()">=</button>
    <button onclick="addToDisplay('/')">/</button>
    <br>

    <script>
        function addToDisplay(value) {
            document.getElementById('display').value += value;
        }

        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        function calculateResult() {
            const expression = document.getElementById('display').value;
            try {
                const result = eval(expression);
                document.getElementById('display').value = result;
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }
    </script>
</body>
</html>

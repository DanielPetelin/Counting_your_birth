document.getElementById('confirm').onclick = function() {
    var yourYears = document.getElementById('yourYears').value;
    var dataNow = 2020;
    var result = dataNow - yourYears;

    if (yourYears > dataNow) {
        var result2 = yourYears - dataNow;
        document.getElementById('out').innerHTML = 'Вы родились в ' + result2 + ' году до н.э';
    }  else if (yourYears == 0) {
        document.getElementById('out').innerHTML = 'Этого не может быть! Вы даже ещё не родились!'
    } else if (yourYears < 0) {
        document.getElementById('out').innerHTML = 'Может быть вы имели в виду: ' + -(yourYears);
    } else if (yourYears > 146) {
        document.getElementById('out').innerHTML = 'Вы меня обманываете? Этого не может быть!'
    } else {
        document.getElementById('out').innerHTML = 'Вы родились в ' + result;
    };
};
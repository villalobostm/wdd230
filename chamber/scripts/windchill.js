const input_temp = document.querySelector('#temperature');
const input_wind = document.querySelector('#wind-speed');

input_temp.addEventListener('change', () => {
    if (input_temp.value != '' && input_wind.value != '') {

        let oWindChill = ""

        if (input_temp.value <= 50 && input_wind.value >= 3) {

            oWindChill = 35.74 + 0.6215 * input_temp.value - 35.75 * input_wind.value ^ (0.16) + 0.4275 * input_temp.value * input_wind.value ^ (0.16);
            document.querySelector('#WindChill').innerHTML = oWindChill;

        } else {
            oWindChill = "N/A";
            document.querySelector('#WindChill').innerHTML = oWindChill;
        };

    } else if (input_temp.value == '') {
        input_temp.focus();

    } else if (input_wind.value == '') {
        input_wind.focus();
    };

});

input_wind.addEventListener('change', () => {
    if (input_temp.value != '' && input_wind.value != '') {

        let oWindChill = ""

        if (input_temp.value <= 50 && input_wind.value >= 3) {

            oWindChill = 35.74 + 0.6215 * input_temp.value - 35.75 * input_wind.value ^ (0.16) + 0.4275 * input_temp.value * input_wind.value ^ (0.16);
            document.querySelector('#WindChill').innerHTML = oWindChill;

        } else {
            oWindChill = "N/A";
            document.querySelector('#WindChill').innerHTML = oWindChill;
        };

    } else if (input_temp.value == '') {
        input_temp.focus();

    } else if (input_wind.value == '') {
        input_wind.focus();
    };

});

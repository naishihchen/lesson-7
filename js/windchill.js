  function getWindChill() {
                var temp = 54;
                var speed = 12;

                var wChill = 35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + (0.4275 * temp * (speed ** 0.16));

                var content = "Wind Chill: " + wChill.toPrecision(2) + "&#176;F";

                document.getElementById("windchill").innerHTML = content;
            }

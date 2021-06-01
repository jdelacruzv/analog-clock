/* Variables app reloj */ 
let gray_lines = document.getElementById("lines")
let hours = document.getElementById("hour")
let minutes = document.getElementById("minute")
let seconds = document.getElementById("second")
let about = document.getElementById("about")
const MAX_LINE = 60

/* Muestra ventana acerca de */ 
windowAbout = () => swal("José De La Cruz", "Desarrollador Web Frontend", "info")
about.addEventListener("click", windowAbout)

/* Crea 60 líneas grises dentro del reloj dando la forma de un circulo (360 grados) */
createWhiteLines = () => {
	for(let i=1; i<=MAX_LINE; i++) {
		// Crea un elemento del DOM con el espacio de nombres URI y el tipo de elemento, en este caso una línea
		let line = document.createElementNS("http://www.w3.org/2000/svg", "line")
		line.setAttribute("id", `white-line-${i}`)
		line.setAttribute("class", i % 5 === 0 ? "clock__lines--thick" : "clock__lines--thin")
		line.setAttribute("x1", "100")
		line.setAttribute("y1", "30")
		line.setAttribute("x2", "100")
		line.setAttribute("y2", i % 5 === 0 ? "40" : "35")

		// Tranforma la posición del contenido rotando la posición cada 6 grados
		line.setAttribute("transform", `rotate(${6*i}, 100, 100)`)

		// Agrega las líneas grises al reloj 
		gray_lines.append(line)
	}
}

/* Muestra la hora, minuto y segundos del reloj */
showTime = () => {
	// Crea una instancia de Date() para obtener horas, minutos y segundos
	let time = new Date()
	let hh = time.getHours() * 30		// 12hh * 30° = 360°
	let mm = time.getMinutes() * 6		// 60mm * 6° = 360° 
	let ss = time.getSeconds() * 6		// 60ss * 6° = 360°

	// Establece los atributos a las horas, minutos y segundos
	hours.setAttribute('transform', `rotate(${hh.toFixed(2)}, 100, 100)`)
	minutes.setAttribute('transform', `rotate(${mm.toFixed(2)}, 100, 100)`)
	seconds.setAttribute('transform', `rotate(${ss.toFixed(2)}, 100, 100)`)
}

/* Llama a las funciones para iniciar el reloj */
createWhiteLines()
// setInterval(showTime, 1000)
setInterval(showTime, 0)
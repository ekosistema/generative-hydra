// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// Loop Inferno
// by Marcos Martí 
// https://github.com/ekosistema

bpm = 30;
osc(Math.sin(2017.718), 0.008, 0.423)
	.modulate(o0, Math.sin(360) * 7.246)
	.mult(osc(Math.random() * 5, 0.1, 0.024))
	.color(Math.sin(527.047) * 5000, Math.sin(38.393) * 3335.029, Math.sin(360) * 500)
	.modulateKaleid(osc(Math.sin(360) * 9.056, 0.5, 0), 3)
	.modulate(o0, Math.random() * 2)
	.rotate(Math.sin(3600) * 22.674)
	.mult(osc(Math.sin(360) * 3, 0.0002, 0.159))
	.modulateRepeat(osc(Math.sin(279.041)), 3.0, 3.0, 0.655, 0.5)
	.modulate(o0, () => mouse.x * Math.random() * 4.967)
	.scale(30000)
	.mult(osc(Math.sin(1800) * 0.44, 0.5, 1))
	.mult(osc(Math.random() * 1, -0.1, 0.012)
		.rotate(Math.sin(360) * 1.831)
		.rotate(Math.sin(3600) * 10)
		.modulate(o0, () => mouse.y * Math.sin(36000) * 1)
		.mult(osc(Math.sin(360) * 0.889, 0.0002, 0.433)
			.rotate(Math.sin(360) * 1))
		.mult(osc(Math.sin(13.024) * 11, 0.1, 0.1)
			.rotate(Math.sin(3600) * 1)
			.scale(331.162)))
	.out(o0);
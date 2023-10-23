// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// Mikrowave
// by Marcos Martí 
// https://github.com/ekosistema

bpm = 15;
osc(10, -0.25, [0, 1.5])
	.rotate(Math.random() * 1000)
	.mult(osc(Math.random() * 5, 0.3, 0.1)
		.rotate(Math.random() * 120)
		.color(Math.sin(3600) * 1954.135, Math.sin(36000) * 3100, Math.sin(36500) * 500)
		.modulateKaleid(osc(Math.random() * 20.762, -0.5, 0), 5)
		.rotate(Math.sin(36000) * 2)
		.modulateScrollX(osc(10), 0.5, 0)
		.rotate(Math.random() * 5)
		.mult(osc(Math.random() * 1, -0.1, 0.012)
			.rotate(Math.sin(360) * 1.831)
			.rotate(Math.sin(3600) * 10)
			.modulate(o0, () => mouse.y * Math.sin(36000) * 1)
			.mult(osc(Math.sin(360) * 1, 0.0002, 0.433)
				.rotate(Math.sin(360) * 1))
			.mult(osc(Math.sin(274.276) * 11, 0.1, 0.1)
				.rotate(Math.sin(3600) * 1)
				.scale(50))))
	.out(o0);
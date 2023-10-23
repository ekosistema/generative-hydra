// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// Blue Monday
// by Marcos Martí 
// https://github.com/ekosistema

bpm = 120;
osc(Math.sin(360) * 2, 0.005, 0.269)
	.modulate(o0, Math.sin(360) * 7.246)
	.mult(osc(Math.random() * 5, 0.1, 0.1))
	.color(Math.sin(360) * 5000, Math.sin(80) * 3100, Math.sin(360) * 500)
	.modulateKaleid(osc(Math.sin(360) * 5, 0.5, 0), 3)
	.modulate(o0, Math.random() * 2)
	.rotate(Math.sin(3600)*23)
	.mult(osc(Math.sin(360) * 3, 0.0002, 1))
	.modulateRepeat(osc(Math.sin(360)), 3.0, 3.0, 0.5, 0.5)
	.modulate(o0, () => mouse.x * Math.random() * 4.967)
	.scale(Math.sin(120) * 30)
	.mult(osc(Math.sin(360) * 0.44, 0.5, 1))
	.out(o0);
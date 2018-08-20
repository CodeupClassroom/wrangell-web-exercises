var calculatePi = function() {
	var pi;

	// using Javascript Math Object
	pi = Math.PI;

	// Babylonian approximation
	// pi = 25 / 8;
	// close approximation (possibly Egyptian)
	// pi = 22 / 7;
	// Archimedes: between 223/71 and 22/7
	// Zu Chongzhi (5th C):
	// pi = 3927 / 1250;
	// Aryabhata(6th): 
	// pi = 62832 / 20000;

	// using Gregory-Leibniz series 
	// approaches pi
	// var manyIterations = 1000000;
	// pi = 4;
	// for (var i = 1;i<manyIterations;i++) {
	// 	if (i%2==0) { //even
	// 		pi += 4/(1+2*i);
	// 	} else { //odd
	// 		pi -= 4/(1+2*i)
	// 	}
	// }

	// Madhava–Leibniz series
	// approaches pi faster
	// var manyIterations = 100000;
	// pi = 1;
	// for (var i = 1;i<manyIterations;i++) {
	// 	if (i%2==0) { //even
	// 		pi += 1/((1+2*i)*Math.pow(3,i));
	// 	} else { //odd
	// 		pi -= 1/((1+2*i)*Math.pow(3,i));
	// 	}
	// }
	// pi *= Math.sqrt(12)

	// using Monte Carlo
	// does not approach pi
	// var manyIterations = 10000000;
	// var x, y, r;
	// var inside=0;
	// for (var i=0;i<manyIterations;i++) {
	// 	x = Math.random();
	// 	y = Math.random();
	// 	r = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
	// 	if (r<1) inside++;
	// }
	// pi = 4 * inside / manyIterations;

	// Used by NASA for calculations:
	// https://www.jpl.nasa.gov/edu/news/2016/3/16/how-many-decimals-of-pi-do-we-really-need/
	// pi = 3.141592653589793
	// Pneumonic: 3. I Wish I Could Calculate Pi
	//	pi = 3.141592

	return pi;
}


console.log(calculatePi());
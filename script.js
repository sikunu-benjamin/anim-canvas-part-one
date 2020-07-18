window.onload = () => {
	const canvas = document.getElementById('bouger-ball');
	let context = canvas.getContext('2d');

	const ballRadius = 20;
	const ballColor = '#fff';
	let ballX = 300;
	let ballY = 200;
	let changeX = 4;
	let changeY = 4;

	const animationLoop = () => {
		context.clearRect(0, 0, canvas.width, canvas.height);

		if(ballY + ballRadius > canvas.height){
	      changeY *= -1;
	    }

	    if(ballX + ballRadius > canvas.width){
	      changeX *= -1;
	    }

	    if(ballY - ballRadius < 0){
	      changeY *= -1;
	    }

	    if(ballX - ballRadius < 0){
	      changeX *= -1;
	    }

		ballX += changeX;
		ballY += changeY;

		drawBall(ballX, ballY, ballRadius, ballColor);

		window.requestAnimationFrame(animationLoop);
	}

	window.requestAnimationFrame(animationLoop);

	const drawBall = (x, y, radius, color) => {
		const radian = Math.PI / 180;
		context.beginPath();
	    context.strokeStyle = color;
	    context.fillStyle = color;
	    context.arc(x, y, radius, 0, 360 * radian, false);
	    context.stroke();
	    context.fill();
		}

}
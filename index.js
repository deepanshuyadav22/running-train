function blur_effect()
	{
		document.getElementsByClassName("bg")[0].style.filter="blur(40px)";
		setTimeout(bg,10000);

		document.getElementsByClassName("sun")[0].style.filter="blur(40px)";
		setTimeout(sun,10000);

		document.getElementsByClassName("hills_rear")[0].style.filter="blur(40px)";
		setTimeout(hills_rear,12000);

		document.getElementsByClassName("hills_front")[0].style.filter="blur(40px)";
		setTimeout(hills_front,12500);

		document.getElementsByClassName("track")[0].style.filter="blur(40px)";
		setTimeout(track,13000);

		document.getElementsByClassName("train")[0].style.filter="blur(40px)";
		setTimeout(train,13500);
	}

function bg()
	{
		document.getElementsByClassName("bg")[0].style.filter="blur(0px)";
	}

function sun()
	{
		document.getElementsByClassName("sun")[0].style.filter="blur(0px)";
	}

function hills_rear()
	{
		document.getElementsByClassName("hills_rear")[0].style.filter="blur(0px)";
	}

function hills_front()
	{
		document.getElementsByClassName("hills_front")[0].style.filter="blur(0px)";
	}

function track()
	{
		document.getElementsByClassName("track")[0].style.filter="blur(0px)";
	}

function train()
	{
		document.getElementsByClassName("train")[0].style.filter="blur(0px)";
	}

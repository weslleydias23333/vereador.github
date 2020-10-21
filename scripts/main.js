var modal = document.getElementById('myModal');
	var vid = document.getElementById("myVideo");

	function AbreVideo(){
		modal.style.display = "block";
		vid.play();
	}
	
	function FechaVideo()
	{
		vid.pause();
		modal.style.display = "none";
	
	}
/*
 *	PLACE HOLDER
 *	
 *	Temp Filename: jscript.js
 *
 */
 	
// ROSTER.HTML
function determineGenderTable(gender) {
	var boyTable = document.getElementById('boys');
	var girlTable = document.getElementById('girls');
	if (gender === "boys") {
		boyTable.style.display = 'block';
		girlTable.style.display = 'none';
	}
	if (gender === "girls") {
		girlTable.style.display = 'block';
		boyTable.style.display = 'none';
	}
}

// old code - kept if needed for now #Adam 09/20/17
/*function boys() {
    var x = document.getElementById('boys');
	var y = document.getElementById('girls');
    if (x.style.display === 'none') {
        x.style.display = 'block';
		y.style.display = 'none';
    } else {
       x.style.display = 'block';
		y.style.display = 'none';
    }
} 

function girls() {
    var x = document.getElementById('girls');
	var y = document.getElementById('boys');
    if (x.style.display === 'none') {
        x.style.display = 'block';
		y.style.display = 'none';
    } else {
        x.style.display = 'block';
		y.style.display = 'none';
    }
} */


// ALBUM.HTML

// array of images
var imageArray = 
	["images/IMG_1.jpg","images/IMG_2.jpg","images/IMG_3.jpg",
	"images/IMG_4.jpg","images/IMG_5.jpg"];

// function to change the larger image in album.html using a switch	
function changeImage(img) {
	switch (img) {
		case "img1":
			document.getElementById("largePicture").src = imageArray[0];
			break;
		case "img2":
			document.getElementById("largePicture").src = imageArray[1];
			break;
		case "img3":
			document.getElementById("largePicture").src = imageArray[2];
			break;
		case "img4":
			document.getElementById("largePicture").src = imageArray[3];
			break;
		case "img5":
			document.getElementById("largePicture").src = imageArray[4];
			break;
	}
}


/* 

   VGTV Video Commercial Skip Script
   Developed by Steffen Martinsen 
   For personal use only.

*/


$(document).ready(function() {
  
});
	
function getFileName() {
var url = document.location.href;
url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
url = url.substring(url.lastIndexOf("/") + 1, url.length);
return url;
}

if(getFileName() == "Index.aspx"){
	document.location = "http://nith.no/intranett/itsl";
}

else {
	// Ignore it.
}



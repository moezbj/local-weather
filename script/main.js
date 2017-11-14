 //**********************************recuperer les coordonnées********************************************************
 if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
             console.log(pos);
//************************************appel ajax*********************************************************************
$.get("https://fcc-weather-api.glitch.me/api/current?lat=36.806494&lon=10.18153160", function(res) {
        console.log(res);
  //*********************************select elements******************************************************************
        $('.location').text(res.name+" "+res.sys.country);
        $('.temp').text(Math.round(res.main.temp));
        $('.degre').text(" °C");
        $('.weather').text(res.weather[0].description);
        $('.icon').attr('');

//************************************conversition °c to F************************************************************
 $('.temperature').click(function(){
        var $tempt =$('.degre').text();
        console.log($tempt);
            if ($tempt==" °C") {     
                var $farh=Math.round((res.main.temp*1.8)+32);
                 $('.temp').text($farh);
                 $('.degre').text(" F");
             } 
             else {
        $('.temp').text(Math.round(res.main.temp));
        $('.degre').text(" °C");
        }
});
//***********************************weather icones********************************************************************
	var weather=$('.weather').text();
		console.log("fsfsfsf");
   switch (weather) {
       case 'few clouds':
           $('.icon').attr('src',"https://icons8.com/preloaders/preloaders/315/Partly%20cloudy.gif")
           break;
        case 'scattered clouds' :
       		$('.icon').attr('src',"images/315.gif")   
       		break;
       case 'light rain' :
       		$('.icon').attr('src',"images/rain.gif")   
       		break;
       	case 'sunny' :
       		$('.icon').attr('src',"https://icons8.com/preloaders/preloaders/314/Sunny.gif")   
       		break;
       	case 'snow' :
       		$('.icon').attr('src',"https://icons8.com/preloaders/preloaders/313/Snow.gif")   
       		break;
       	case 'windy' :
       		$('.icon').attr('src',"https://icons8.com/preloaders/preloaders/317/Windy.gif")   
       		break;
       	case 'snow with rain' :
       		$('.icon').attr('src',"https://icons8.com/preloaders/preloaders/312/Snow%20with%20rain.gif")   
       		break;
       	case 'thunderstorm' :
       		$('.icon').attr('src',"https://icons8.com/preloaders/preloaders/310/Storm.gif")   
       		break;
       	case 'lightning' :
       		$('.icon').attr('src',"https://icons8.com/preloaders/preloaders/309/Lightning.gif")   
       		break; 
   }
         });
});
}
//*******************************background image***********************************************************************
$('.body').css("background-image", "url('images/pexels.jpeg')");
// //********************************spinner code**************************************************************************
// $(window).on("load",function(){
//  $('#cover').fadeOut(6000);  
// });


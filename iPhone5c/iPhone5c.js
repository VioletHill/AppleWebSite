var indexImg=0;
var totImg=5;
var imageWidth=1250;
var isMove=false;
    
function setIndexImg(index)
{
    if (isMove==true) return ;
    isMove=true;
    indexImg=index;
    var wheelPosition=imageWidth*indexImg;
    $(".imageWheel").animate({left:-wheelPosition},function(){moveDone();});
    document.getElementById("page0").src="imagePage.png";
    document.getElementById("page1").src="imagePage.png";
    document.getElementById("page2").src="imagePage.png";
    document.getElementById("page3").src="imagePage.png";
    document.getElementById("page4").src="imagePage.png";
    switch (index)
    {
    case 0:
    	 document.getElementById("page0").src="imagePageSelectBlue.png";
    	 break;
    case 1:
   	 	document.getElementById("page1").src="imagePageSelectGreen.png";
   	 	break;
    case 2:
   	 	document.getElementById("page2").src="imagePageSelectPink.png";
   	 	break;
    case 3:
    	document.getElementById("page3").src="imagePageSelectWhite.png";
   	 	break;
    case 4:
   	 	document.getElementById("page4").src="imagePageSelectYellow.png";
   	 	break;
    }
    
  }
    
function nextImg()
{
 	if (isMove==true) return ;
    indexImg=(indexImg+1)%totImg;
    setIndexImg(indexImg); 	
}
    
function lastImg()
{
 	if (isMove==true) return ;
    indexImg=(indexImg+totImg-1)%totImg;
    setIndexImg(indexImg);
}
    
var timer;
function moveDone()
{
    clearTimeout(timer);
    timer=setTimeout(function(){nextImg();},2500);
   	isMove=false;
}
    
function init() 
{
	setIndexImg(0);
}
	
$(document).ready(function(){
	var div = document.getElementsByClassName('imageWheel')[0];		
	for (var i = 0; i != div.childNodes.length; i++)
	if (div.childNodes[i].nodeType == 3)
	{
		div.removeChild(div.childNodes[i]);
		i--;
	}
	init();
	});

function watchTheVideoForiPhone5c()
{
	window.location.href="../iPhone5c/watchTheVideoForiPhone5c.html"
}

function watchTheKeyNote()
{
	window.location.href="http://www.apple.com/apple-events/september-2013/";
}


var iPhoneColor="green";
var caseColor="none";
var colorIndex=['green','blue','yellow','pink','white','none'];
function setiPhone()
{
	var newColor="color-iPhone5c/color_"+iPhoneColor+'_'+caseColor+".jpg";
	document.getElementById("color_iPhone").src=newColor;
}


function changeiPhone(color,ele)
{
	for (var i=0; i<5; i++)
	{
		document.getElementById("iPhone"+i).src="color/"+colorIndex[i]+"Color.png";
	}
	$("#colorfulIntro").css("color",color);
	iPhoneColor=color;
	ele.src="color/"+color+"ColorSelect.png";
	setiPhone();
}

function changeCase(color,ele)
{
	for (var i=0; i<6; i++)
	{
		document.getElementById("case"+i).src="color/"+colorIndex[i]+"Color.png";
	}
	caseColor=color;
	ele.src="color/"+color+"ColorSelect.png";
	setiPhone();
}
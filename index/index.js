function startPlay(playNode,video)
{
	$("div.title").fadeOut("slow");
	$("div.playAdTitle").fadeOut("slow");
	$("div.playFeatureTitle").fadeOut("slow",function(){
		$("div.mainDiv").css("background","none");
		$(playNode).fadeIn("slow",function(){
			video=document.getElementById(video);
			video.load();
			video.play();
		});
	});
}

function endPlay(playNode,video)
{
	video=document.getElementById(video);
	video.pause();
	$(playNode).fadeOut("slow",function(){
			$("div.mainDiv").css("background-image","url(../index/homeBg.png)");
			$("div.title").fadeIn("slow");
			$("div.playAdTitle").fadeIn("slow");
			$("div.playFeatureTitle").fadeIn("slow");
	});
}


function adTvEnd()
{
	endPlay(".adTv","adTvVideo");
}

function featureTvEnd()
{
	endPlay(".featureTv","featureVideo");
}

function playFeature()
{
	startPlay(".featureTv","featureVideo");
}

function playAd()
{
	startPlay(".adTv","adTvVideo");
}


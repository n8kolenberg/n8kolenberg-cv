$(function(){
	

$('#fullpage').fullpage({
				sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
				menu: '#menu',
				scrollingSpeed: 1000,
				navigation: true,
				navigationPosition: 'right',
				navigationTooltips: ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide'],

				//Accessibility
				keyboardScrolling: true,
				animateAnchor: true,

				loopBottom: true,
				controlArrows: true,
				verticalCentered: true
			});





});//End ready
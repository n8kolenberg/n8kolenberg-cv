$(function(){
	

$('#fullpage').fullpage({
				sectionsColor: ['#E74C3C', '#3498DB', '#2ECC71', '#F9BF3B', '#ccddff'],
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
				menu: '#menu',
				scrollingSpeed: 1000,
				navigation: true,
				navigationPosition: 'right',
				navigationTooltips: ['Welcome', 'Skills', 'Experience', 'Get in touch'],

				//Accessibility
				keyboardScrolling: true,
				animateAnchor: true,


				loopBottom: true,
				controlArrows: true,
				verticalCentered: true
			});



});//End ready
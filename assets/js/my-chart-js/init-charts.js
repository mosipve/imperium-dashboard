/*
$(document).ready(function() {   }); 
$(function() {   });
jQuery(document).ready(function() {   });
jQuery(function() {   });
*/
/*
(function() {
   // your page initialization code here
   // the DOM will be available here
})();
*/
// $.noConflict();



/* ------------------------------------- */
$(function() {  
	// BAR Chart
	var ctx = document.getElementById("myBarChart");
	var myBarChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
			datasets: [{
				label: '# of Votes',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
				'rgba(255,99,132,1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});

});  // END :: $(function()
/* ------------------------------------- */
$(function() {  
	// LINE Chart
	var ctx = document.getElementById("myLineChart");
	var myLineChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["1985", "1990", "1995", "2000", "2005", "2010"],
			datasets: [{
				label: '#Visitor',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
				// 'rgba(255, 99, 132, 0.2)',
				// 'rgba(54, 162, 235, 0.2)',
				// 'rgba(255, 206, 86, 0.2)',
				// 'rgba(75, 192, 192, 0.2)',
				// 'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
				// 'rgba(255,99,132,1)',
				// 'rgba(54, 162, 235, 1)',
				// 'rgba(255, 206, 86, 1)',
				// 'rgba(75, 192, 192, 1)',
				// 'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)'
				],
				borderWidth: 2
			}]
		},
		options: {
			scales: {
				yAxes: [{
					stacked: true
				}]
			},
			elements: {
				line: {
                tension: 0.35, // 0 for disables bezier curves
            }
        }
    }
});

});  // END :: $(function()
/* ------------------------------------- */
$(function() { 
	// RADAR Chart 
	var ctx = document.getElementById("myRadarChart");
	var myRadarChart = new Chart(ctx, {
		type: 'radar',
		// data: data,
		// options: options
		data: {
			labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
			datasets: [{
				data: [20, 10, 4, 2]
			}]
		}
	});

});  // END :: $(function()
/* ------------------------------------- */

$(function() {  
	// PIE Chart
	var ctx = document.getElementById("myPieChart");
	var myPieChart = new Chart(ctx,{
		type: 'pie',
		// data: data,
		// options: options
		data: {
			datasets: [{
				data: [10, 20, 30],
				backgroundColor: ['#ff0000','#f1f100','#0000ff']
			}],
			labels: [
			'Red',
			'Yellow',
			'Blue'
			]
		},

	});

});  // END :: $(function()
/* ------------------------------------- */

$(function() {  
	// DOUGHNUT Chart
	var ctx = document.getElementById("myDoughnutChart");
	var myDoughnutChart  = new Chart(ctx,{
		type: 'doughnut',
		// data: data,
		// options: options
		data: {
			datasets: [{
				data: [10, 20, 30],
				backgroundColor: ['#ff0000','#f1f100','#0000ff']
			}],
			labels: [
			'Red',
			'Yellow',
			'Blue'
			]
		},

	});


});  // END :: $(function()
/* ------------------------------------- */

$(function() { 
	// POLAR Chart
	var ctx = document.getElementById("myPolarChart");
	var myPolarChart  = new Chart(ctx,{
		type: 'polarArea',
		// data: data,
		// options: options
		data: {
			datasets: [{
				data: [10, 20, 30],
				backgroundColor: ['#ff0000','#f1f100','#0000ff']
			}],
			labels: [
			'Red',
			'Yellow',
			'Blue'
			]
		},

	}); 


});  // END :: $(function()
/* ------------------------------------- */
$(function() { 
	// BUBBLE Chart
	var ctx = document.getElementById("myBubbleChart");
	var myBubbleChart = new Chart(ctx,{
		type: 'bubble',
		// data: data,
		// options: options
		data: {
			"datasets":[{
				"label":"Our Dataset",
				"data":[
				{"x":20,"y":30,"r":15},
				{"x":25,"y":35,"r":5},
				{"x":40,"y":10,"r":10}],
				"backgroundColor":"rgb(255, 99, 132)"
			}]

		}
	});

});  // END :: $(function()
/* ------------------------------------- */

// not work yet
$(function() { 
	// SCATTER Chart
	var ctx = document.getElementById("myScatterChart");
	var myScatterChart = new Chart(ctx, {
		type: 'scatter',
		data: {
			datasets: [{
				label: 'Scatter Dataset',
				data: [{
					x: -10,
					y: 0
				}, {
					x: 0,
					y: 10
				}, {
					x: 10,
					y: 5
				}]
			}]
		},
		options: {
			scales: {
				xAxes: [{
					type: 'linear',
					position: 'bottom'
				}]
			}
		}
	});



});  // END :: $(function()
/* ------------------------------------- */

$(function() { 
	// SCATTER Chart
	var ctx = document.getElementById("mixedChart");
	var mixedChart = new Chart(ctx, {
		type: 'bar',
		data: {
			datasets: [{
				label: '# of Votes',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
				'rgba(255,99,132,1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}],

          	// Changes this dataset to become a line
          	type: 'line',
          	data: {
          		labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          		datasets: [{
          			label: '# of Votes',
          			data: [12, 19, 3, 5, 2, 3],
          			backgroundColor: [
          			'rgba(255, 99, 132, 0.2)',
          			'rgba(54, 162, 235, 0.2)',
          			'rgba(255, 206, 86, 0.2)',
          			'rgba(75, 192, 192, 0.2)',
          			'rgba(153, 102, 255, 0.2)',
          			'rgba(255, 159, 64, 0.2)'
          			],
          			borderColor: [
          			'rgba(255,99,132,1)',
          			'rgba(54, 162, 235, 1)',
          			'rgba(255, 206, 86, 1)',
          			'rgba(75, 192, 192, 1)',
          			'rgba(153, 102, 255, 1)',
          			'rgba(255, 159, 64, 1)'
          			],
          			borderWidth: 1
          		}]
          	},
          	options: {
          		scales: {
          			yAxes: [{
          				stacked: true
          			}]
          		},
          		elements: {
          			line: {
                tension: 0, // disables bezier curves
            }
        }
    }
},
options: {
	scales: {
		yAxes: [{
			ticks: {
				beginAtZero:true
			}
		}]
	}
}
});


});  // END :: $(function()
/* ------------------------------------- */

/*

<div class="card-img chart-holder">
    <canvas id="myBarChart" width="500" height="100"></canvas>
</div>

<canvas id="myLineChart" width="500" height="100"></canvas>

<canvas id="myRadarChart" width="500" height="100"></canvas>

<canvas id="myPieChart" width="500" height="100"></canvas>

<canvas id="myDoughnutChart" width="500" height="100"></canvas>

<canvas id="myPolarChart" width="500" height="100"></canvas>

<canvas id="myBubbleChart" width="500" height="100"></canvas>


<h4 class="text-danger">Not Work Yet</h4>
          <canvas id="myScatterChart" width="500" height="100"></canvas>


<h4 class="text-danger">Not Work Yet</h4>
          <canvas id="mixedChart" width="500" height="100"></canvas>

*/
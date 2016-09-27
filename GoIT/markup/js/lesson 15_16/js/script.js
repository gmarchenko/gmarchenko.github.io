


function viewSearch(timer){
	var inputLength=$(".inputSearch").val().length;
	if ( inputLength>0 ) {
		clearInterval(timer);
		$(".logo").hide();
		$("#my").hide();
		$(".wrapform").css({
							'width': '100%',
					 		"margin": "20px 0 0 20px" 
						});
		$(".inputSearch").css({
							'width': '40%',
					 		"display": "inline-block" 
						});
		$(".wrapButton").css({
							'width': '',
					 		"display": "inline-block" 
						});

	} 
	
};

function sendReq(){ 
	var input=$(".inputSearch").val()
	if ( input.length>0 ) {
		input = input.replace(/\s+/g, '+');
		var link = "https://www.googleapis.com/customsearch/v1element";
		var key = "AIzaSyCVAXiUzRYsML1Pv6RwSG1gunmMikTzQqY";
		var cx= "011374175030617759205:fj2rfvzheqq";
		var url = link +"?key=" + key +'&num=10&language=ru&hl=ru&cx=' + cx + "&q="+ input;
		
		$.ajax({
           url: url,
           dataType: "jsonp",
           success: function (data) {
	           	$(".wrapResult").children().remove()
				var tmpl=$("#template").html();
				var html = _.template(tmpl)(data);
				$(".wrapResult").append (html);
			}
		});
	}
}
var timerId = setInterval("viewSearch(timerId)", 100)

$(function  () {
$(".inputSearch").val('');
$("#searchSubm").on("click keydown",function(){
	sendReq();
})

});

function human(){
	this.name = "the name of human - jon";
	this.age = 30;
	this.sex = "the sex of human - male";
	this.height = 180;
	this.weight = 90
};

Worker.prototype = new human();

function  Worker(){
	this.employment = "dok";
	this.wages = 111;
	this.working=function(){
		return "its working of worker"}
};


var newWorker1= new Worker();
var newWorker2= new Worker();
console.log("newWorker1.sex: ", newWorker1.sex); 
console.log("newWorker2.working: ", newWorker2.working()); 

function  Student(){
	this.study = "goit";
	this.grant = 80;
	this.lookTv=function(){
		return "i watch TV show"}
};

Student.prototype = new human();

var newStudent1= new Student();
var newStudent2= new Student();
console.log("newStudent1.name: ", newStudent1.name); 
console.log("newStudent2.lookTv: ", newStudent2.lookTv()); 

console.log("newWorker1: ", newWorker1);
console.log("newWorker2: ", newWorker2);
console.log("newStudent1: ", newStudent1);
console.log("newStudent2: ", newStudent2);
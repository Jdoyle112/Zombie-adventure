
var alive = true;
var supplies = 50;
var health = 100;

function dead(){
	if (supplies <= 0){
	alert("You ran out of supplies and starved to death :(");
	alive = false;
	} else if (health <= 0){
	alert("Your health ran too low and you died :(");
	alive = false;
	}else {
	alive = true;
	}
}

$(document).ready(function(){
	

function num1(){
var question1 = prompt("There is a man laying in the road who needs help. Would you like to help him?");
if (question1 == "yes" && alive){
	supplies = 1;
	health = 25;
	alert("You walk up to the man. He looks completely beaten and hopeless. He turns over and whispers RUN!. At that moment, a group of bandits jump out and capture you. They give you a beating and take your supplies\n\n" + "Supplies: " + supplies + "   " + "Health: " + health);
	dead();
} else if (question1 == "no" && alive){
	alert("Supplies: " + supplies + "   " + "Health: " + health)
	dead();
} else {
	alert("Please enter yes or no");
	num1();
}
}


function num2(){
var question2 = prompt("It is getting late and you need shelter. There is an abandoned shed in the distance or a small tunnel you could sleep in. Which would you like? (answer shed or tunnel)");
if (question2 == "shed" && alive){
	supplies = supplies + 20;
	health = health + 25;
	alert("You crawl through a window into the shed. To your delite, you find a first aid kit and a bit of food\n\n" + "Supplies: " + supplies + "   " + "Health: " + health);
	dead();
} else if (question2 == "tunnel" && alive){
	supplies = supplies + 10;
	alert("You enter the dark tunnel. Appears to be empty. You see a can of peaches and decide to eat it\n\n" + "Supplies: " + supplies + "   " + "Health: " + health);
	dead();
} else {
	alert("please enter shed or tunnel");
	num2();
}
}

function num3(){
if (alive){
var question3 = prompt("There is a grocery store up ahead. There could be supplies but also danger. Would you like to go in and look?");
} else {
	return
}
if (question3 == "yes" && alive){
	supplies = supplies + 50;
	alert("You walk into the store, Looks like no one is here, but the place has been looted. What was that?? You hear a noise from behind the employee door. You hesitantly decide to investigate. It's a rat trying to open cans of beans! You took the supplies and move on\n\n" + "Supplies: " + supplies + "   " + "Health: " + health);
	dead();
} else if (question3 == "no" && alive){
	supplies = supplies - 15;
	alert("Supplies: " + supplies + "   " + "Health: " + health)
	dead();
} else {
	alert("Please enter yes or no");
}
}

function num4(){
if (alive){
var question4 = prompt("News comes over the radio that there is a cure! You need to make it to ft. bragg which is 20 miles away to receive the vaxination. Would you like to take the highway or travel through the woods? (answer highway or woods)");
} else{
	return;
}
if (question4 == "highway" && alive){
	supplies = supplies + 10;
	health = health - 25;
	alert("You begin walking along the highway. It is a long walk and you are hungry. Fortunately there is a car full of food! You take the supplies but as you are leaving, you hear a pack of bandits in the distance coming your way. You start running, but trip and break your ankle! You hide under a car, and the bandits pass but your ankle needs medical attention\n\n" + "Supplies: " + supplies + "   " + "Health: " + health);
	dead();
} else if (question4 == "woods" && alive){
	supplies = supplies - 10;
	alert("You decide to take the longer but safer route in the woods. The path is safe, but you underestimate how long it is. Your supplies take a toll\n\n" + "Supplies: " + supplies + "   " + "Health: " + health);
	dead();
} else {
	alert("Please asnwer highway or woods")
}
}
function living(){
if (alive){
	alert("You made it to ft bragg alive. You are greated at the gate by soldiers. They give you a blanket and rush you inside to receive medical care and supplies. You recieve the cure! Looks like you are going to survive!");
} else {
	return;}}

	$('#start').click(function(){
		alert("Current Supplies and Health\n\n" + "Supplies: " + supplies + "   " + "Health: " + health);
		num1();
		num2();
		num3();
		num4();
		living();
	});
});














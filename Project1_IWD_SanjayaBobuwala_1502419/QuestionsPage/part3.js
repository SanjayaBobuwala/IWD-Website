// JavaScript Document

var firstname, lastname, email, number, count1, count2, comment, age, hut,tent, area, check,breakfast;




//super function 
function _(x){
	return document.getElementById(x);
}

//function to process stage one
function processStageOne(){
	firstname = _('firstname').value;
	lastname = _('lastname').value;
	age = _('age').value;
	email = _('email').value;
	number = _('number').value;
	
	
	//Hide stage one view
	_('stageOne').style.display = "none";
	_('stageTwo').style.display = "block";
	
}

function processStageTwo(){
	
	count1 = _('count1').value;
	count2 = _('count2').value;
	hut = _('hut').value;
	tent = _('tent').value;
	
	_('stageTwo').style.display = 'none';
	_('stageThree').style.display = 'block';
}

function processStageThree(){
	breakfast = _('breakfast').value;
	comment = _('comment').value;
	area = _('area').value;
	check = _('check').value;
	
	_('stageThree').style.display = 'none';
	_('stageFour').style.display = 'block';
	
	
	//load all user information
	_('viewFirstname').innerHTML = firstname;
	_('viewLastname').innerHTML = lastname;
	_('viewAge').innerHTML = age;
	_('viewEmail').innerHTML = email;
	_('viewNumber').innerHTML = number;
	_('viewCount1').innerHTML = count1;
	_('viewCount2').innerHTML = count2;
	_('viewHut').innerHTML = hut;
	_('viewBreakfast').innerHTML=breakfast;
	_('viewComment').innerHTML = comment;
	_('viewArea').innerHTML = area;
	_('viewCheck').innerHTML = check;
	
}


















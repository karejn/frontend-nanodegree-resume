var bio = {
	"name" : "Ekaterina Königstorfer",
	"role" : "Junior Java Developer",
	"contacts" : {
		"mobile" : "0664 9470903",
		"email" : "ek.koenigstorfer@gmail.com",
		"github" : "karejn",
		"twitter" : "@EKoenigstorfer",
		"location" : "Klagenfurt"

	},
	"welcomeMessage" : "Think linux!",
	"skills" : [
	  "Java", "Android", "Git", "JS", "HTML", "css", "JSON", "C", "sociability", "sense of humor",
	  "team-worker", "strong desire to work for result"
	],

	"bioPic" : "images/me.jpg"
};

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);


var education = {
 	"schools" : [
 	{
 		"name" : "Alpen-Adria University",
 		"city" : "Klagenfurt, Austria",
 		"degree" : "Bachelor of Science",
 		"majors" : [ "Software Engineering" ],
 		"dates" : "2015 - till now",
 		"url" : "https://www.aau.at/studien/bachelor-angewandte-informatik/"
 	},
 	{
		"name" : "Gubkin Russian State University of Oil and Gas",
 		"city" : "Moscow, Russia",
 		"degree" : "Master of Science",
 		"majors" : [ "Economics and management" ],
 		"dates" : "2005 - 2010",
 		"url" : "http://www.gubkin.ru//"
 	}
 	]
 	,
 	"onlineCourses" : [
	{
		"title" : "Android Basics Nanodegree",
		"school" : "Udacity",
		"dates" : 2017,
		"url" : "https://www.udacity.com/course/android-basics-nanodegree-by-google--nd803"

	},
	{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "Udacity",
		"dates" : 2017,
		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"

	}
 	]
 };
 

var work = {
	"jobs" : [
		{
			"employer": "KPMG",
			"title": "Senior Auditor",
			"dates": "01.2014 – 11.2015",
			"description": " - Participation in audits of Russian and international clients in tight deadlines <br>- Preparation of audit documentation in accordance with IFRS, US GAAP and RAP, reporting; <br>- Performance of analytical procedures/analyses to detect unusual financial statement relationships; <br>- Coaching of team members during work on the projects; <br>- Communication with clients, auditors and managers."		
		},
		{
			"employer": "Saturn High-Tech",
			"title": "Key Account Manager",
			"dates": "07.2012 – 12.2013",
			"description": "- Development productive relationships with clients; <br>- Negotiation about commercial terms; <br>- Conclusion new contracts, finding new clients; <br>- Planning and implementation of trade-marketing programs; <br>- Reporting and analysis."			
		},
		{
			"employer": "KPMG",
			"title": "Auditor",
			"dates": "11.2010 – 07.2012",
			"description": "- Preparation of audit documentation in accordance with IFRS and RAP; <br>- Creation of audit reports and presentations for management and clients; <br>- Communication with clients, other auditors and managers of the projects. "
		},
		{
			"employer": "Nokia (Nosimo)",
			"title": "Senior Commercial Officer",
			"dates": "09.2007 – 10.2010",
			"description": "- Customers' consultancy; <br>- Interns coaching; <br>- Analysis of mobile phones market; <br>- Selling and installation of specific software; <br>- Development of close, productive relationships with clients; <br>- Presentation of new products; <br>- Customers' consultancy."	
		}

	]
};

var projects = {
	"projects": [
	{
		"title": "Inventory",
		"dates": 2017,
		"description": "An app to track the inventory of a retail store, including current stock and supplier information.",
		"images": [
			"http://imgur.com/flnO4pP",
			"http://imgur.com/uyEfYSG",
			"http://imgur.com/lPVbyn7"
		]

	}

	]
};

   if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[8]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[9]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[10]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[11]);
	$("#skills").append(formattedSkill);
};
/*
var skills = bio.skills;
var formattedSkills = HTMLskills.replace("%data%", skills);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);
*/

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmoloyerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmoloyerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);

}

 


	




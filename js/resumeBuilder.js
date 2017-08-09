
var name = "Ekaterina Königstorfer";
var role = "Junior Web Developer";
var age = 29;
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : name,
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "0664 9470903",
		"email" : "ek.koenigstorfer@gmail.com",
		"github" : "karejn",
		"twitter" : "@k.koenigstorfer",
		"location" : "Klagenfurt"

	},
	"welcomeMessage" : "Think linux!",
	"skills" : [
	  "Java", "Android", "Git", "JS", "HTML", "css"
	],

	"bioPic" : "images/me.jpg"
};

var work = {};
work.position = "Student";
work.employer = "Alpen-Adria-University";
work.years = "2 years";
work.city = "Klagenfurt";

/*var education = {};
education["name"] = "Alpen-Adria-University";
education["years"] = "2015 - 2018";
education["city"] = "Klagenfurt";

$("#main").append(bio.name);

$("#main").append(work["position"]);

$("#main").append(education.name);
*/

 var education = {
 	"schools" : [
 	{
 		"name" : "AAU",
 		"city" : "Klagenfurt",
 		"majors" : [ "CompSci", "German"],
 		"minors" : [ "HCI"],
 		"years" : "2015 - 2018"
 	},
 	{
 		"name" : "MGU",
 		"city" : "Moscow",
 		"majors" : [ "Management", "Economics"],
 		"minors" : [ "Finance"],
 		"years" : "2005 - 2010"
 	}

 	]
 	,
 	"onlineCourses" : [
	{
		"title" : "JavaScript",
		"school" : "Udacity",
		"dates" : 2017,
		"url" : "https://classroom.udacity.com/me"

	}
 	]
 }


	




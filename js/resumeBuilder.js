/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Harvey Magana", 
	"role": "Front-end developer", 
	"contacts": {
		"email": "harvey.magana@gmail.com", 
		"mobile": "415-632-7997", 
		"github": "heyharv", 
		"location": "Vallejo"
	}, 
	"biopic": "images/mylinkedinimage.jpg", 
	"welcomeMessage": "Hi there! My name is Harvey, an enthusiastic front-end developer who wants to help you out!",
	"skills": ["HTML", "CSS", "JavaScript", "Responsive Design", "JavaScript and CSS Frameworks", "Version control", "Web Performance", "Browser developer tool testing", "Building and automation tools"], 
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email); 
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedFooterPhone = HTMLFootermobile.replace("%data%", bio.contacts.mobile);
		var formattedFooterEmail = HTMLFooteremail.replace("%data%", bio.contacts.email);
		var formattedFooterGithub = HTMLFootergithub.replace("%data%", bio.contacts.github);
		var formattedFooterLocation = HTMLFooterLocation.replace("%data%", bio.contacts.location);

		$("#header").prepend(formattedName + formattedRole);
		$("#topContacts").prepend(formattedMobile + formattedEmail + formattedGithub + formattedLocation);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcome);
		$("#footerContacts").append(formattedFooterPhone + formattedFooterEmail + formattedFooterGithub + formattedFooterLocation);

		if(bio.skills){
			$("#header").append(HTMLskillsStart);
			for(var e = 0; e < bio.skills.length; e++) {
				var formattedSkills = HTMLskills.replace("%data%", bio.skills[e]);
				$("#skills").append(formattedSkills);
			}
		}
	}
};

var work = {
	"jobs": [
		{
			"employer": "WalkMe, Inc.", 
			"title": "Software Support", 
			"location": "San Francisco, CA", 
			"dates": "Oct. 2018 - June 2019", 
			"description": "Support and troubleshoot Digital adoption platform"
		}, 
		{
			"employer": "Prezi, Inc.", 
			"title": "Software Support", 
			"location": "San Francisco, CA", 
			"dates": "Aug. 2016 - June 2018", 
			"description": "Support and troubleshoot Presentation software"
		}, 
		{
			"employer": "Duda, Inc.", 
			"title": "Software Support", 
			"location": "Palo Alto, CA", 
			"dates": "May 2014 - Jun 2016", 
			"description": "Troubleshoot and support users website building software"
		}, 
		{
			"employer": "Freelancer", 
			"title": "Web developer", 
			"location": "San Bruno, CA", 
			"dates": "2012 - 2014", 
			"description": "Creating websites for clients"
		}
	], 
	"display": function() {
		for(var e = 0; e < work.jobs.length; e++) {
			$("#workExperience").append(HTMLworkStart);
			var formattedWork = HTMLworkEmployer.replace("%data%", work.jobs[e].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[e].title);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[e].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[e].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[e].description);
			var formattedEmployer = formattedWork + formattedWorkTitle;
			$(".work-entry:last").append(formattedEmployer);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDescription);
		}	
	}
};

var education = {
	"schools": [
		{
			"name": "CSU Long Beach", 
			"dates": "Jan. 2005 - Dec. 2007", 
			"location": "Long Beach, CA", 
			"degree": "B.S Business Administration",
			"majors": ["International Business"]
		}, 
		{
			"name": "Bay Area Video Coalition", 
			"dates": "Jun. - Aug. 2012", 
			"location": "San Francisco, CA", 
			"degree": "Web Design certification",
			"majors": "Web Design"
		}, 
	], 
	"onlineCourses": [   
		{
			"title": "Front end nanodegree", 
			"school": "Udacity", 
			"dates": "Jan. 2018 - Oct. 2018", 
			"url": "http://www.udacity.com", 
		}
	],
	"display": function() {
	      for(var edu = 0; edu < education.schools.length; edu++) {
	      	$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
			var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;
			$(".education-entry:last").append(formattedNameDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolLocation);
	      }
	    $("#education").append(HTMLonlineClasses);
	    for(onlineCourse = 0; onlineCourse < education.onlineCourses.length; onlineCourse++) {
	      	$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
			var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
			$(".education-entry:last").prepend(formattedOnlineUrl);
			$(".education-entry:last").prepend(formattedOnlineDates);
			$(".education-entry:last").prepend(formattedOnlineSchool);
			$(".education-entry:last").prepend(formattedOnlineTitle);   	
	    }
	}
};

var projects = {
	"projects": [
		{
			"title": "React Book App", 
			"dates": "Jan - 2018", 
			"description": "Book sorting app that was built with React", 
			"images": ["images/blueSquare.png"],
			"url": "https://heyharv.github.io/booktracking-app/"
		}, 
		{
			"title": "second project", 
			"dates": "Jan - 2015", 
			"description": "Project that was the second one...", 
			"images": ["images/yellowSquare.png"],
			"url": "https://heyharv.github.io/booktracking-app/"
		}, 
		{
			"title": "third project", 
			"dates": "Jan - 2015", 
			"description": "Project that was the third one...", 
			"images": ["images/purpleSquare.png"],
			"url": "https://heyharv.github.io/booktracking-app/"
		}
	], 
	"display": function() {
		for(proj = 0; proj < projects.projects.length; proj++) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].url).replace("%data%", projects.projects[proj].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
			var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
			var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images);
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDesc);
			$(".project-entry:last").append(formattedProjectImage);			
		}	
	}
};

$("#mapDiv").append(googleMap);
bio.display();
work.display();
education.display();
projects.display();




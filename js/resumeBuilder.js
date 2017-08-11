
var bio = {
    "name": "Nikhil Wakade",
    "role": "Web Developer",
    "contacts": {
        "mobile": "8149769332",
        "email": "nkhlwakade@gmail.com",
        "github": "nkhlwakade",
        "twitter": "nkhlwakade",
        "location": "Mumbai"
    },
    "welcomeMessage": "Hey there, I am a Udacity Nanodegree student from Mumbai.",
    "skills": ["cool","awesomeness","creative","active"],
    "biopic": "images/nikhil.jpg",
    "display": function(){

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
        $("#header").append(formattedBioPic, formattedWelcome);

        if ( bio.skills.length > 0 ) {
            $("#header").append(HTMLskillsStart);

            bio.skills.forEach(function(skill){
                var formattedSkill = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkill);
            });
        }
    }
};

var work = {
    "jobs": [
        {
            "title": "Student",
            "employer": "NOT STATED",
            "dates": "2013 - 2017",
            "location": "Mumbai",
            "description": "Para 1 education is essential for Democracy of India. The number of grown up illiterates is great. All college and senior School students should come forward to visit villages in the summer vacation. Each one will teach one there. This will remove illiteracy and strengthen our democracy.I happened to see a one day cricket match between Pakistan and Australia at Wankhade Stadium, Mumbai. I went for a fun. But I witnessed a horrible sight. Two thousand ticketless cricket fans gate crashed. There was a stampede. Three persons died and twenty were injured. Administration was responsible for it."
        },
        {
            "title": "Student",
            "employer": "NOT STATED",
            "dates": "2013 - 2017",
            "location": "Mumbai",
            "description": "Para 2 education is essential for Democracy of India. The number of grown up illiterates is great. All college and senior School students should come forward to visit villages in the summer vacation. Each one will teach one there. This will remove illiteracy and strengthen our democracy.I happened to see a one day cricket match between Pakistan and Australia at Wankhade Stadium, Mumbai. I went for a fun. But I witnessed a horrible sight. Two thousand ticketless cricket fans gate crashed. There was a stampede. Three persons died and twenty were injured. Administration was responsible for it."
        }
    ],
    "display": function(){
        work.jobs.forEach(function(job){

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
        });
    }
};

var education = {
    "schools": [
        {
            "name": "New English School",
            "location": "Vasai West",
            "degree": "S.S.C.-H.S.C.",
            "majors": ["All basic subjects"],
            "dates": "2001 - 2013"
        },
        {
            "name": "Vidyavardhini's college of Engineering",
            "location": "Vasai West",
            "degree": "B.E.",
            "majors": ["Information Technology"],
            "dates": "2013 - 2017"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developement",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://www.udacity.com/"
        }
    ],
    "display": function(){
        education.schools.forEach(function(school){
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", school.name);
        $(".education-entry:last").append(formattedName);

        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedMajor);
    });

    education.onlineCourses.forEach(function(course){
        $(".education-entry:last").append(HTMLonlineClasses);

        var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
        $(".education-entry:last").append(formattedTitle);

        var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
        $(".education-entry:last").append(formattedSchool);

        var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
        $(".education-entry:last").append(formattedDates);

        var formattedURL = HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(formattedURL);
        });
    }
};

var projects = {
    "projects": [
        {
            "title": "online Resume",
            "dates": "July 2017",
            "description": "Android is a mobile operating system developed by Google, based on the Linux kernel and designed primarily for touchscreen mobile devices such as smartphones and tablets. Android's user interface is mainly based on direct manipulation, using touch gestures that loosely correspond to real-world actions, such as swiping, tapping and pinching, to manipulate on-screen objects, along with a virtual keyboard for text input",
            "images": ["images/project1.png"]
        },
        {
            "title": "online Resume",
            "dates": "July 2017",
            "description": "Android is a mobile operating system developed by Google, based on the Linux kernel and designed primarily for touchscreen mobile devices such as smartphones and tablets. Android's user interface is mainly based on direct manipulation, using touch gestures that loosely correspond to real-world actions, such as swiping, tapping and pinching, to manipulate on-screen objects, along with a virtual keyboard for text input",
            "images": ["images/project1.png"]
        }
    ],
    "display": function(){
        projects.projects.forEach(function(project){

        $("#projects").append(HTMLprojectStart);

        var formattedTitleP = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitleP);

        var formattedDatesP = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDatesP);

        var formattedDescriptionP = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescriptionP);

        if(project.images.length > 0 ){
            project.images.forEach(function(image){
                var formattedImageP = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImageP);
                });
            }
        });
    }
};

bio.display();

work.display();

projects.display();

education.display();

function inName(name){
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0]+" "+name[1];
}

$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);

$(".work-entry a").attr("href", "https://en.wikipedia.org/wiki/Student");
$(".project-entry a").attr("href", "https://developer.android.com/index.html");
$(".education-entry a").attr("href", "https://mu.ac.in");
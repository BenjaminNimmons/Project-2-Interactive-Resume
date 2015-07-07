var bio = {
    "name": "Ben Nimmons",
    "role": "Front-End Maven",
    "contacts": {
        "phone": "206.451.9096",
        "email": "ben@bennimmons.co",
        "github": "benjaminnimmons",
        "location": "United States"
    },
    "welcome": "Oh hi, I didn't see you there!",
    "skills": ["Interacting, Prototyping", "Killing (it)"],
    "bioPic": "images/headshot.jpg",
    "display": function() {
        // Declare variables with formatted data in place of placeholders
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.phone);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        var formattedwelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcome);

        // Write formatted data in the header
        $("#header").append(formattedName);
        $("#header").append(formattedRole);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMsg);

        // Write contact information in the header contacts list
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedLocation);

        // Write contact information in the header contacts list
        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedLocation);

        //Evaluate whether bio array has elements
        if (bio.skills.length > 0) {
            // If true, then append skills list
            $("#header").append(HTMLskillsStart);

            // Iterate through skills array and write formatted data on page
            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#header").append(formattedSkill);
            }
        }
    }
};

var education = {
    "schools": [{
        "name": "Carnegie Mellon University",
        "location": "Pittsburgh, PA",
        "degree": "Masters",
        "majors": ["Human-Computer Interaction, Prototyping, System Design"],
        "dates": "2011",
        "url": "https://www.hcii.cmu.edu/academics/mhci"
    }, {
        "name": "Santa Clara University",
        "location": "Santa Clara, CA",
        "degree": "Bachelors",
        "majors": ["Behavioral Science, Japanese"],
        "dates": "2008",
        "url": "https://www.santaclara.edu"
    }],
    "onlineCourses": [{
        "title": "JavaScript Syntax",
        "school": "Udacity",
        "dates": "2015",
        "url": "http://www.udacity.com/course/ud804"
    }, {
        "title": "Front-end Development",
        "school": "Team Treehouse",
        "dates": "2013 - October",
        "url": "www.teamtreehouse.com"
    }],

    "display": function() {
        // Iterate through schools array
        for (var i = 0; i < education.schools.length; i++) {
            //  Declare all variables with formatted data in place of placeholders
            var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

            // Write formatted data on page
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedName + formattedDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);
            // $(".education-entry:last").append(formattedMajor);

            // Iterate through majors array and write formatted data in place of placeholders
            for (var j = 0; j < education.schools[i].length; j++) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
                $(".education-entry:last").append(formattedMajor);
            }
        }
    }
};

var work = {
    "jobs": [
    {
        "employer": "Expedia",
        "title": "Interaction Designer",
        "location": "Bellevue, WA",
        "dates": "2013-2015",
        "description": "Service design, interaction design, visual design, prototyping"
    }, {
        "employer": "Microsoft",
        "title": "UX Architect",
        "location": "Redmond, WA",
        "dates": "2013-Contract",
        "description": "Information architecture, interaction design, visual design"
    }, {
        "employer": "Amazon",
        "title": "UX Designer",
        "location": "Seattle, WA",
        "dates": "2013-Contract",
        "description": "Web design, prototyping"
    }, {
        "employer": "Brocade",
        "title": "Network Solution Designer",
        "location": "San Jose, CA",
        "dates": "2008-2011",
        "description": "Network infrastructure design, network troubleshooting, customer sales"
    }],
    "display": function() {
        // Iterate through the jobs array
        for (var i = 0; i < work.jobs.length; i++) {
            // Declare all work variables with formatted data in place of placeholders
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            // Write formatted data on page
            $("#workExperience").append(HTMLworkStart);
            $('.work-entry:last').append(formattedEmployerTitle);
            $('.work-entry:last').append(formattedDates);
            $('.work-entry:last').append(formattedLocation);
            $('.work-entry:last').append(formattedDescription);
        }
    }
};

var projects = {
    "projects": [{
        "title": "Project 1",
        "dates": "2011-2012",
        "description": "HCI class",
        "images": ["http://placekitten.com/g/200/150", "http://placekitten.com/g/200/150", "http://placekitten.com/g/200/150"]
    }, {
        "title": "Project 2",
        "dates": "2012",
        "description": "Microsoft",
        "images": ["http://placekitten.com/g/200/150", "http://placekitten.com/g/200/150", "http://placekitten.com/g/200/150"]
    }, {
        "title": "Project 3",
        "dates": "2012",
        "description": "Expedia",
        "images": ["http://placekitten.com/g/200/150", "http://placekitten.com/g/200/150", "http://placekitten.com/g/200/150"]
    }],
    "display": function() {
        // Iterate through the projects array
        for (var i = 0; i < projects.projects.length; i++) {
            // Declare all variables with formatted text in place of placeholders
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            // Write the formatted data on page
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);

            // Iterate through images array and write formatted data in place of placeholders
            for (var j = 0; j < projects.projects[i].length; j++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
            }
        }
    }
};

// // Set up the function for displaying all above content
// $(document).ready(function() {
    // Call display function for bio
    bio.display();

    // Call display function for work
    work.display();

    // Call display function for education
    education.display();

    // Call display function for projects
    projects.display();
// });

    $("#mapDiv").append(googleMap);

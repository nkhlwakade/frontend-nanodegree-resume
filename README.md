# Project Details
This project is regarding creation of a resume in the form of website using javascript to make it more interactive.

## How do I complete this project?
Review the Online Resume [Project Rubric](https://review.udacity.com/?_ga=1.189245867.12280332.1465333852#!/projects/2962818615/rubric).

1. In this project I have store your resume data in four javaScript objects according to the schema given below. As is often the case when leveraging an API, the objects follow the schema exactly.
2. After the creation of javaScript objects, write the code needed to display all of the resume data contained within these objects in the resume.
3. All of the HTML code needed to build the resume is stored in **js/helper.js** variables. The variable names indicate their function.
4. You will get the [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key) here, and include it as the value of the `key` parameter when loading the Google Maps API in **index.html**:

### JavaScript Object format:
The resume has four distinct sections: work, education, projects and a header with biographical information. You’ll need to:

  * `bio` contains:

            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string
                  github: string
                  twitter: string (optional)
                  location: string
            welcomeMessage: string
            skills: array of strings
            biopic: string url
            display: function taking no parameters

  * `education` contains:

            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: string (works with a hyphen between them)
                 url: string
            onlineCourses: array of objects with
                 title: string
                 school: string
                 dates: string (works with a hyphen between them)
                 url: string
            display: function taking no parameters

  * `work` contains

            jobs: array of objects with
                 employer: string
                 title: string
                 location: string
                 dates: string (Can be 'in progress')
                 description: string
            display: function taking no parameters

  * `projects` contains:

            projects: array of objects with
                  title: string
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters

# How to run
Download or Clone the repository from [here](https://github.com/nkhlwakade/frontend-nanodegree-resume.git) and open the index.html file in any browser.
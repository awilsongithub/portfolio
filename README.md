# Welcome to My Portfolio site
This site is a full-stack Javascript app built with NodeJs, Express, MongoDB, AngularJS. Styling was done with help of the Materialize CSS library. Authentication was added using Passport. This enables an Administrator to login and update site content. I built this portfolio site as my final project in the General Assembly Web Development Immersive program. I've worked extensively with a CMS in the past and wanted to build my own. I also needed a portfolio site so I decided to "feed two birds with one biscuit" and build a CMS with templates suited to showing off work samples.

##Desired outcome
The outcome I hope to achieve with this project is to build something I love and want to share with others that also solidifies what I've learned in WDI. I would also like the site to be sustainable, scalable and provide a smooth user-experience.

##Screenshot(s) coming soon...

##Technologies used
MEAN Stack, MaterializeCSS, LESS.

##My Approach to This Project
At an instructors suggestion I considered using Rails for this project so I could create the backend quickly and focus on front end. I spent a few days coding up a basic Rails API but decided to build with the MEAN stack in order to focus on my Javascript. This project was executed in about 2.5 weeks. I used a systems development checklist to insure consideration of feasibility, user stories, data inputs and outputs, tool selection etc. I spent two weeks learning and building a very basic MEAN app using an online Microsoft tutorial. Then I set out to customize, completely restyle and deploy. I started this phase building my wireframes into static HTML pages to confirm my data models and validate the user experience. With my design in hand, I modified the database, routes, controllers and views. I learned Heroku and Mongolab and deployed the app. This was my first experience working with separate development and production environments. Once deployed, I updated my content, connected a personal domain and spent a few days on styling. I presented the site to classmates at the Immersive course graduation. This project showed me I could build a full stack Javascript app and deploy. I loved this challenge and look forward to getting much deeper into these topics in the coming months!


## Systems Development Checklist
I used a systems development checklist I created in college to plan this project. I created a table of data inputs and outputs and related database fields, A list of user stories, Reviewed a feasibility checklist and did a problem framing exercise to identify the root problem, audience, desired outcome, success metrics, strategy alignment and tools/methods of intervention. I completed a worksheet on other peoples or past solutions to this problem and what to learn from them.

##User Stories
1. Betty from HR: Takes a 10 second look at the site. It looks great and is easy to navigate. It has the content recommended for a junior front developer portfolio. She looks for skills that match needs of the company. She inquires about how I implemented these skills.
2. Jeff is a PM and developer for Columbia College: He found me through the GA graduate profiles link to this portfolio project. The visual design gets his attention. He wants to see skills I've used in the first 10 seconds. He wants to drill down to look at project work using those skills. He clicks through to github to look at my code. He clicks through to linkedin or to my resume to glance at my work history, education, recommendations and endorsements. He contacts me for a phone interview.
3. Adam Wilson, Site Admin: Adam wants a scalable, sustainable site of his own making that he can update with his latest work and use as a portfolio site. He's worked with content management systems for several years and wants to make one of his own.

##Wireframes
[See wireframes here.](https://drive.google.com/folderview?id=0BwevQAXPVAtfNl90VjF4eDNVQkk&usp=sharing)

##Hurdles Overcome
1. Tutorial Inconsistencies: I used a Microsoft Virtual Academy four hour tutorial to build out a very basic MEAN app. The video demos had great teaching content but the code they wrote in them several times didn't work and they swapped in pre-baked entire files instead of debugging. I therefore had to debug on my own which actually helped me understand the code.
2. Strategy for evolving the basic app  with only three input fields in the Post model into something with many fields and making those changes across the MongoDB collection, routes, controllers and views was a challenge. I first created static pages from my wireframes to clarify my data needs. Then I began integration work.
3. I spent about 2 hours reading Heroku online documentation with no luck running the app locally with "heroku local web". I kept getting the "ERROR: open Procfile: no such file or directory" despite repeatedly reading that no such file was needed with node for which Heroku can use package.json. I finally looked up Heroku deployment in the book Getting MEAN and was there instructed to create a Procfile and how to do it! I was up and running locally within minutes.  Takeaway: Try something one way for only so long without success before stepping back and reassessing approach.

##Unsolved Problems

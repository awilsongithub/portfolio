# Welcome to My Portfolio site
This site is a full-stack Javascript app built with NodeJs, Express, MongoDB and AngularJS. I will incorporate authentication allowing an admin to login and make updates to the site content so it serves as a CMS. I chose this as my project since our focus at the end of the program is on the job search. The portfolio site I'd previously built for myself was a static HTML, CSS site not suitable as an example of my latest abilities.

##Desired outcome
The outcome I hope to achieve with this project is to build something I love and want to share with others that also solidifies what I've learned in WDI. I would also like the site to be sustainable, scalable and provide a smooth user-experience.

##Screenshot(s) coming soon...

##Technologies used
MEAN Stack, MaterializeCSS, LESS.

##My Approach to This Project
I reviewed notes and the gitbook on full-stack Node apps and found several tutorials online specific to the MEAN stack. Jim recommended AngularJS for my project. I chose not to use Rails for the back-end as I want to focus on my Javascript, get more clarity on the Node apps we've already done and I wasn't feeling confident with my Ruby or Rails with so much "magic" going on. The tutorial I'm using builds a ver basic, generic MEAN app which I will then customize and build out with the features required.

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

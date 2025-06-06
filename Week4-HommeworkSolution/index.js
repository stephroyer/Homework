// index.js

// Header content
document.getElementById("site-header").innerHTML = `
  <h1>Stephanie Mitchely Jemina ROYER</h1>
  <p>Web Developer</p>
  <nav>
    <a href="#projects">Projects</a> |
    <a href="#contact">Contact</a>
  </nav>
`;

// About section content
document.getElementById("about").innerHTML = `
  <h2>Professional Summary</h2>
  <p>I’m a passionate developer focused on creating responsive, accessible websites.Results-driven and detail-oriented junior-level developer with a solid foundation in
JavaScript, HTML, and CSS. Eager to contribute technical skills and creativity to a
dynamic development team. Adept at collaborating with cross-functional teams to
analyze requirements, troubleshoot issues, and deliver high-quality solutions.
Proven ability to quickly adapt to new technologies and methodologies. Committed
to continuous learning and professional growth. Seeking an opportunity to
leverage my coding expertise and passion for problem-solving in a challenging and
collaborative environment .</p>
  <img src="stephimg.jpeg" alt="Portrait of Stephanie Mitchely Jemina ROYER">
`;

// Skills section content
document.getElementById("skills").innerHTML = `
  <h2>Technical Skills</h2>
  <p>JavaScript, HTML, CSS, Node, Express, MongoDB, Axios, Navigo, Visual Studio
Code, Markdown, Git, GitHub, UI/UX, Jira, Agile, SPA’s, Jasmine / BDD (Unit
Testing), Cypress End to End Testing, CRUD Operations, Open Source AI, AI API
frameworks such as Tensorflow.js, OpenAI API, Codium, use Thunder Client to test
Rest API Endpoints and deploying to Netlify and Render (cloud-based application
hosting).
Created a Node.js Express REST API server to manage long-term data storage via
MongoDB Atlas and test it with Thunder Client.  Integrated with a third-party
REST API to populate views including requesting and using the appropriate
authentication method</p>
`;

// Projects section content
document.getElementById("projects").innerHTML = `
  <h2>Capstone Project</h2>
  <ul>
    <li>Product Planning – Built a Single Page Application (SPA) from idea to deployment</li>
    <li>Created User Story Map using Mural.co and User Flow Chart</li>
    <li>Created wireframes for each page of my application</li>
    <li>Did extensive research to make sure my SPA was different and competitive to the user's needs</li>
    <li>Completed User Acceptance Testing (UAT) with end users to gain feedback on performance and functionality</li>
    <li>Completed SWOT analysis to determine strengths, weaknesses, opportunities, and threats for my application</li>
    <li>Determined color pallet, fonts, icons, and navigation for my application</li>
    <li>Utilized web technologies including Markdown, HTML, CSS to create and document a responsive website</li>
    <li>Built website infrastructure introducing interactivity with JavaScript using DOM manipulation and data handling</li>
    <li>Converted static web pages to a modern Single Page Application (SPA) with full routing, views and state management</li>
    <li>Implemented standardized testing and QA practices by utilizing Jasmine testing suites for automation of Unit Testing and Cypress for automation of Front End and End to End testing in a manner consistent with CICD pipelines</li>
    <li>Understand the role of AI in transforming Web Development through automated code generation and optimization with intelligent chatbots, and personalized user experiences</li>
    <li>Common AI tools such as Perplexity, ChatGPT, Claud Opus, Windows CoPilot, Gemini, Phind</li>
    <li>Frameworks and APIs for API integration such as OpenAI API and Codium</li>
    <li>AI augmented programming in addition to unit testing and learning responsible and ethical AI usage</li>
    <li>Created a Node.js Express REST API server to manage long-term data storage via MongoDB Atlas and testing it with Thunder Client</li>
    <li>Integrated with a third-party REST API to populate views including requesting and using the appropriate authentication method</li>
    <li>Deployed to Netlify for the front end and Render for the backend (cloud-based application hosting)</li>
  </ul>
`;

// Education section content
document.getElementById("Education").innerHTML = `
  <h2>Continuing Education</h2>
  <p>Savvy Coders Full Stack Web Development Boot Camp – 2025<br>
Agile Certification through ICAgile – 2025<br>
Savvy graduates receive an Agile Fundamentals Certification. They have
 demonstrated their understanding of the Agile/Scrum Methodology by working in
 a Scrum simulated technical environment and presenting a final Capstone
 Project that embodies the Agile methodology, product planning, development,
 and deployment to a cloud-based service.  The students work in Jira, create user
 story maps in Mural.co, create user stories with acceptance criteria, time
 estimation using progressive elaboration and assigning story points, manage
 tasks and contributions to sprints in Jira. They work in Agile teams to plan
 Sprints, hold daily Scrum meetings, conduct backlog grooming sessions, sprint
 reviews, sprint retrospectives and sprint planning. They work on selected user
 stories and keep communication flowing to ensure everyone is on the same page
 for the next increment of work.  All project tracking is done in Jira</p>
`;

// Contact section content
document.getElementById("Contact").innerHTML = `
  <h2>Contact</h2>
  <div class="contact-info">
    <p><img src="email-icon.png" alt="Email Icon">royerstephanie29@gmail.com</p>
    <p><img src="phone-icon.png" alt="Phone Icon">314-376-8259</p>
  </div>
`;

// Footer content
document.querySelector("footer").innerHTML = `
  <p>&copy; 2025 Stephanie Mitchely Jemina ROYER</p>
  <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank">LinkedIn</a> |
  <a href="https://github.com/stephroyer" target="_blank">GitHub</a>
`;

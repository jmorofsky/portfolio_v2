# portfolio_v2 - https://jasonmorofsky.com
 
My interactive portfolio. Here, you can learn more about me, my skillset, completed projects, work experience, and contact information. You can also download a copy of my resume.

The styling for my portfolio took inspiration from old CRT monitors. The interface itself is a mix between some modern and some retro elements. Overall, it creates an effect that looks and works great.

The site uses GitHub's API to provide statistics about my profile, which are updated automatically every day.

Lastly, a very basic form of BASH - entitled JMSH - lives inside the "OS" of the site, which itself is called jmL (short for jm-Linux). Using JMSH, you can navigate the site, echo text, create new files and directories, and more.

![image](https://github.com/jmorofsky/portfolio_v2/assets/80358703/a8d07dfd-9c82-4436-9bb5-98158cf53f9f)

### Development

The website was designed and developed entirely by me, Jason Morofsky. It was created using React, and is hosted through Google Domains using Google Cloud Platform's infrastructure to manage deployments and CI/CD.

Since React Router was not used for this project, all of the pages of the website are really one page, manipulated through state changes. Each "page" is just a component that is conditionally rendered based on state. When a user clicks a button or types a cd command using JMSH, the 'section' state is updated, and parts of the page render and unrender based on the section.

Even the loading screen and opening animation are displayed in this manner. A setTimeout function is used to allow their animations to play while they are rendered, and then the state changes again as soon as they have finished.

In addition to managing the deployment process, GCP also allows for the daily updating of the statistics provided by GitHub's API. Using GCP's cloud function technology, a Python script I wrote is run each day 01:00 which sends a request to the API, performs some calculations on the data, and then saves it to a GCP cloud storage bucket in an easily digestable JSON format. The data is then accessed by the website through another API request, after which it is finally rendered on the page. 

Gathering the statistics in this manner has two distinct advantages: firstly, no calculations need to be made on the data by the client after it is fetched from the server by the website. All of the necessary computations have already been done by the Python script running on the cloud function. This greatly reduces loading time for the user. Secondly, the data is only updated once per day, at exactly the same time. This means that we only need to send requests to GitHub's API once per day. In doing so, we can avoid any rate limiting put in place by GitHub.

JMSH uses an array of objects saved in state to manage the file tree. Each node in the tree contains a reference to its children. In this way, we can map each node in the tree to another, creating a data structure that can model our file tree. Using this structure, we can easily add new children to the tree, and prevent access to pages that are not children of the currently selected node. This also allows us to view the structure of the tree in a way similar to how you would in a Linux environment: through the command line!

When a user enters a cd command into jmL, the directory they entered is first checked to see if it is a child of the current node. If it is, then the current active directory is changed to that node. If a page is associated with that node, the 'section' state is also updated, rendering new content on the page.

### Installation

To create a working build on your local machine, first clone the repository to your device.

    git clone https://github.com/jmorofsky/portfolio_v2
  
Navigate to the repository.

    cd portfolio_v2

Install dependencies.

    npm i

Start the development server.

    npm start

By default, the dev server is located on port 3000. You can access this server by typing

    localhost:3000

into your desired web browser.

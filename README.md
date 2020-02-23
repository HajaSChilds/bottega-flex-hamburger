# Module 1 - Flexbox Capstone Project
### A flexbox capstone project. 
Responsive layout hamburger menu.
This is a multi-function project created to practice skills in using flexbox, incorporating fonts and using scss.
## Function #1  Create a responsive navigation menu using Flexbox
Used Flexbox to create the layout for the menu.  The html is divided into two segments- the stationary menu which contains the logo and hamburger button, and the menu links which are either displayed horizontally when the screen is computer- size and hidden in a dropdown when the screen is mobile sized.  I used a media query and changed the flex-direction of the links to column in the mobile size screen. There is also a short javascript file which opens the dropdown menu when the hamburger button is pressed.
## Function #2  Add custom fonts using Google Fonts
Used Google fonts and added a link tag to the head section of the html file which contained the font-families which would be referenced
## Function #3  Create a style guide using scss and incorporate into project
Created a style guide using scss and created variables for each of the colors used in the project.  A new scss file was added to the project with the variables copied to the top and the altered css file to the bottom.  The original css file was emptied out.  Sass was installed in the terminal via sudo npm -g install node-sass.  A script was called in the terminal to watch the scss file in the project - named styles.scss and output the info into the empty css file, named styles.css.  The script was as follows " sass --watch styles.scss: styles.css."  It will watch for changes in the scss file and generate output into the css file so the browser can interpret it in real time during live server from visual studio code. Used https://youtu.be/Oj2kxX1MxEs as a reference.

# Super Mario Arcade

## Introduction

Welcome to my second project, part of the Code Institute Full Stack Development Course. The purpose of this project is to build a responsive website using HTML and CSS while incorporating interactive features using JS.

Super Mario Arcade is an homage to one of the first games I played as a kid and therefore one of my first interactions with coding without being aware of it. Super Mario Arcade two interactive games and a home page that lists the rules for each game. The first one a game called of tic-tac-cross called "Tic-tac-yahoo" due Mario's iconic victory scream once you complete a level. This game is a two player game where one player plays as Mario and the second player plays as Bowser trying to stop Mario from conquering the mushroom kingdom and rescuing peach. Typicals crosses and circles have been replaced with images of mario and bowser to provide a more inmersive feel into the game. Once of the players achieves one of the winning combinations the screen will display a specific sentence and give you the chance to restart the game to continue playing. If neither player wins the game will end in a draw, and a restart button will pop giving the user the chance to start again.

The second game is a guessing game called "Mario Shadow Quest". This game tests the players knowledge on the miriad of characters that exist in the Mario Universe and gives a point for each correct guess. With each correct guess a new image is randomly selected, each image having a correct and incorrect answer. There is a timer which stops the player from continuing playing once the time is up. A restart button then appears to allow the player to play again if they wish.

Users will be able to navigate through the website using a functional navigation bar, allowing them to take them back to the home page if they need reminded of the rules of the game or would like to explore the other game.

Thank you for visiting Super Mario Arcade.

![alt text][responsive-readme]

[responsive-readme]:./assets/css/images/responsive-readme.png

https://aaronalonsotorrens.github.io/Project-1-Final/

## UX - User Experience Design

The 5 planes of UX are the following:

- The Strategy Plane
- The Scope Plane
- The Structure Plane
- The Skeleton Plane
- The Surface Plane

### The Strategy Plane

1. Creator Goals

- As a creator, I want a webpage to be easy to naviagte.

- As a creator, I want the webpage to be user-friendly, responsive and interactive.

- As a creator, I want to transmit the user a chilhood-like feeling by creating a space which evokes a nostalgic feeling thanks to the carefully curated CSS and available games for the user to enjoy and have fun with.

2. User stories

- As a user, I want to navigate easily through the different sections of the webpage.

- As a user, I want clear guidelines on how the game works, objectives, rules, etc.

- As a user, I want the games to performs well, having each button interactive and responding well and providing a overall nice experience.

- As a user, I want the game to perform well on all devices.

### The Scope Plane.

For the website there were key features I wanted to implements and others which unfortunately I was able to include due to time restraints.

**Features implemented upon webpage release**

- A functional navigation bar which allows the user to naviagte through the website with ease.

- A home page which includes the rules for each game. The rules for each game are hidding behind a button intented to avoid overwhelming the user when entering the website.

- A tic-tac-toe game with images of Mario and Bowser instead of circles and crosses to provide a more inmersive experience into the marioverse.

- A visual quiz game where the user tests their experience on the wide range of mario characters.

- Footer with links to social media.

### The Scope plane

**Colors**

The following are the list of colours used in this project.

![alt text][colors-readme]

[colors-readme]:./assets/css/images/colors-readme.png

- Color #2CB01A

Color of the background in the navigation bar

- Color #red

Color of the background in the footer

- Color #white

Color of the background and text within the navigation bar where each game is contained to provide a higher contrast

- Color #black

Color of the text

- Color #yellow

Color of the restart button in the tic-tac-yahoo game

**Fonts**

The fonts used in this project are from Google Fonts.

Font

- I used "Lilita One" as the main font, as it's a user friendly font. The "Lilita One" font is distinctive bold and highly legible. I believe the chunky and rounded letterforms convey a fun and frienly appearence ideal for a Super Mario Arcade game.

**Images**

Images downloaded for this project are from:

- Vecteezy

### The Skeleton Plane

The more I worked on the project the further some ideas developed while others were left behind.

Header wireframes
--------------------
- The navigation bar includes the logo of the website and navigation handles that will direct the user towards the game of interest to make the website more user-friendly.
- The colors of the navigation bar is the same color of green as the emblematic pipe in mario games.
- The navigation elements are hidden behing a toggle for easier visualization.



Home page
--------------------
- The index or "Home" page contains the rules for the different games available on the website.
- The "Home" page contains a description for each game and a list of rules on how to play and the objective for each game.
- Rules are hidden behind an interactive button which upon being clicked will reveal the rules content for each game. This was done for easier visualization and prevent overwhelming the user visiting the website.

Tic-tac-yahoo page
--------------------
- The tic-tac-yahoo page contains a 3x3 grid where the game will take place.
- Below the grid a sentence indicates which player goes first.
- Circles and cross have been replaced with images of Mario and Bowser to inmerse the player further into the game.
- Once either players wins the screen will display a specific sentence and give the user to restart the game. 
- If neither player wins the game will end in a draw. A restart button will appear allowing the player to play again.

Mario Shadow Quest page
--------------------
- The Mario Shadow Quest contains a box containing the silhouette of a Mario character image.
- The image will be random every time the user enters into the game or starts playing the game.
- Below the image there are two options with only one of the being the correct option.
- There is also a score section which records the number of correct and incorrect answers.

### The Surface Plane

#### Features present across the project

#### Naviagtion bar: 

- Navabar is present on every page.
- The navabar is fully responsive across all resolutions.
- Navbar is a toggle hamburger across all devices.

**Desktop**

![alt text][navabar-big-screen]

[navabar-big-screen]: ./assets/css/images/navabar-big-screen.png

**Mobile**

![alt text][navabar-small-screen]

[navabar-small-screen]: ./assets/css/images/navabar-small-screen.png

#### Footer :

- Footer is present on every page.
- Footer contains social media links that open in a new tab.

![alt text][footer-readme]

[footer-readme]: ./assets/css/images/footer-readme.png

#### Hero images :

- Chosen as it depicts one of Marios most known backgrounds.

![alt text][Hero-readme]

[Hero-readme]: ./assets/css/images/Hero-readme.png

#### Technologies Used

- HTML
- CSS
- Github
- Git
- FontAwesome
- Google Fonts
- ChatGPT

#### Testing

**Manual testing**

1. Naviagtion bar:
- Navigation bar is fully responsive on all screens.
- Hamburger menu on mobile devices.
- When clicking the element in takes the user to the corresponding section.
- The navigation bar works across all pages with exception of the submit form where a return to home is provided.

2. Footer:
- All social media links are working.
- Fully responsive across all screens.

3. Front image:
- Image resolution is successfully changing on all different devices.

4. Signup link:
- Signup link is working fine and takes you succesfully to the corresponding page.
- It is responsive across all devices.
- Submit button is working correctly.
- The form successfully redirects the user to the submit form/ thank you page.

5. Careers:
- In-line block display for careers is displayed correctly across all screens.

6. Links to other websites:
- Links to corresponding websites are linked and working properly.

7. Submit form/Thank you page:
- The page successfully appears to the user after filling up the form.
- The button taking the user back to the home page is working.

#### Chrome Dev Tools

Chrome Dev Tools was used throughout the project to test responsiveness across different devices. The devices most tested were the following:

- Iphone SE
- Iphone 12 Pro
- Iphone 14 Pro Max
- Samsung Galaxy S9+
- Ipad
- Ipad Pro

#### Browser Testing

During development, webpage was mainly tested on Google Chrome. However, other browsers have been used:

- Google Chrome
- Safari

#### Validation

**HTML validator**



**CSS validator**



**Lighthouse score**



#### Bugs and Fixes




### Unfixed bugs

No unfixed bugs.

### Deployment

The master branch of this repository is the most current version and has been used for the deployed version of the site.

- Open your project on github and go to settings.
- Proceed and click on pages and change branch to main.
- Once this has been done the project will have been deployed.



#### Credits

1. Code institute, Love running project:
- Inspiration for the header, footer and signup page.

2. Code institute, Coders-coffeehouse:
- Inspiration for the careers display section.

3. FontAwesome:
- Used for all icons across the website.

4. Images :
- Pexels
Image behind testimonials.
- Unsplash
 Front-image.
- Google images
Images for Proteintech, singular, UK research and innovation.
- Pixabay
Background image in signup and submit form.

5. ChatGPT:
- ChatGPT was used as a tool to troubleshoot some of the issues that remained challenging. Any suggestions provided by chatGPT were tested on Chrome Dev tools to further understand the suggested solution and understand where I was struggling.

6. To further understand what was needed in the README document my mentor provided the following project as an example:
-https://github.com/PatrycjaBlaszkowska/project-WizardsTower

### Thank you to everyone who read this documentation!
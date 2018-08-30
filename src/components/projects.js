import React from 'react'
import Link from 'gatsby-link'
import uphail_logo from "../images/uphail_logo.png"
import uphail from "../images/uphail.png"
import dockless_logo from "../images/dockless_logo.png"
import dockless from "../images/dockless.png"
import nearme_logo from "../images/nearme_logo.png"
import puzzle_box_logo from "../images/puzzle_box_logo.png"
import puzzle_box from "../images/puzzlebox.mp4"
import puzzle_box_1 from "../images/puzzle_box_1.jpg"
import puzzle_box_2 from "../images/puzzle_box_2.jpg"
import puzzle_box_schematic from "../images/puzzle_box_schematic.png"
import lolnetwork_logo from "../images/lolnetwork_logo.jpg"
import lolnetwork from "../images/lolnetwork.png"
import lolnetwork_stats from "../images/lolnetwork_stats.png"
import food_across_america_logo from "../images/food_across_america_logo.png"
import food_across_america from "../images/food_across_america.png"
import food_across_america_pizza from "../images/food_across_america_pizza.png"
import food_across_america_mexican from "../images/food_across_america_mexican.png"
import food_across_america_cloud from "../images/food_across_america_cloud.png"
import messenger_scraper_logo from "../images/messenger_scraper_logo.png"
import messenger_scraper from "../images/messenger_scraper.png"
import soccer_stars_logo from "../images/soccer_stars_logo.png"
import soccer_stars from "../images/soccer_stars.mp4"


function openUphailModal() {
  var modal = document.getElementById('uphail_modal')
  modal.style.display = "block"
  var body=document.getElementsByTagName('body')[0]
  body.style.overflow="hidden"
}

function closeUphailModal() {
  var modal = document.getElementById('uphail_modal')
  modal.style.display = "none"
  var body=document.getElementsByTagName('body')[0]
  body.style.overflow="auto"
}

function openDocklessModal() {
  var modal = document.getElementById('dockless_modal')
  modal.style.display = "block"
  var body=document.getElementsByTagName('body')[0]
  body.style.overflow="hidden"
}

function closeDocklessModal() {
  var modal = document.getElementById('dockless_modal')
  modal.style.display = "none"
  var body=document.getElementsByTagName('body')[0]
  body.style.overflow="auto"
}

function openNearmeModal() {
  var modal = document.getElementById('nearme_modal')
  modal.style.display = "block"
  var body=document.getElementsByTagName('body')[0]
  body.style.overflow="hidden"
}

function closeNearmeModal() {
  var modal = document.getElementById('nearme_modal')
  modal.style.display = "none"
  var body=document.getElementsByTagName('body')[0]
  body.style.overflow="auto"
}

function openPuzzleModal() {
  var modal = document.getElementById('puzzle_modal')
  modal.style.display = "block"
  var body=document.getElementsByTagName('body')[0]
  body.style.overflow="hidden"
}

function closePuzzleModal() {
  var modal = document.getElementById('puzzle_modal')
  modal.style.display = "none"
  var body=document.getElementsByTagName('body')[0]
  body.style.overflow="auto"
}

function openLolnetworkModal() {
  var modal = document.getElementById('lolnetwork_modal')
  modal.style.display = "block"
  var body=document.getElementsByTagName('body')[0]
  body.style.overflow="hidden"
}

function closeLolnetworkModal() {
  var modal = document.getElementById('lolnetwork_modal')
  modal.style.display = "none"
  var body=document.getElementsByTagName('body')[0]
  body.style.overflow="auto"
}

function openFoodModal() {
  var modal = document.getElementById('food_modal')
  modal.style.display = "block"
  var body=document.getElementsByTagName('body')[0]
  body.style.overflow="hidden"
}

function closeFoodModal() {
  var modal = document.getElementById('food_modal')
  modal.style.display = "none"
  var body=document.getElementsByTagName('body')[0]
  body.style.overflow="auto"
}

function openMessengerModal() {
  var modal = document.getElementById('messenger_modal')
  modal.style.display = "block"
  var body=document.getElementsByTagName('body')[0]
  body.style.overflow="hidden"
}

function closeMessengerModal() {
  var modal = document.getElementById('messenger_modal')
  modal.style.display = "none"
  var body=document.getElementsByTagName('body')[0]
  body.style.overflow="auto"
}

function openSoccerModal() {
  var modal = document.getElementById('soccer_stars_modal')
  modal.style.display = "block"
  var body=document.getElementsByTagName('body')[0]
  body.style.overflow="hidden"
}

function closeSoccerModal() {
  var modal = document.getElementById('soccer_stars_modal')
  modal.style.display = "none"
  var body=document.getElementsByTagName('body')[0]
  body.style.overflow="auto"
}

const Projects = () => (
  <section id="projects">
    <div className="projects">
      <h1>Some of my projects</h1>
      <div id="uphail_modal" className="project_modal">
        <div className = "project_modal-content">
          <span className="close" onClick={() => closeUphailModal()}>&times;</span>
          <h1>Uphail</h1>
          <img src={uphail}/>
          <h2>Description</h2>
          <div className="paragraph">
            <a href="https://uphail.com/">https://uphail.com/</a> compares fares of popular taxi services offered in your area (Uber, Lyft, your local cabs, etc.)
            and gives you a list of all the services provided along with price estimates. Useful for finding the lowest prices to reach your destination as well as discovering
            services such as finding vehicles that are wheelchair accessible. An app is also available in Apple App Store and Google Play Store.
          </div>
          <h2>My Role</h2>
          <div className="paragraph">
            Adding Uber and Lyft pricing data for 39395 cities in the United States. Pricing data is extracted straight from Uber/Lyft website using Selenium Webdriver and BeautifulSoup
            and stored in a MongoDB collection. There are 35107 United States cities with Lyft services and 30199 cities with Uber services, so the data is comprehensive and accurate.
          </div>
          <h2>Technologies Used</h2>
          <div className="modal-content">
            <ul>
              <li><p>Python</p></li>
              <li><p>HTML5</p></li>
              <li><p>CSS3</p></li>
              <li><p>Javascript</p></li>
              <li><p>NextJS</p></li>
              <li><p>Selenium Webdriver</p></li>
              <li><p>BeautifulSoup</p></li>
              <li><p>MongoDB</p></li>
              <li><p>AWS Cloud9</p></li>
              <li><p>AWS Lambda</p></li>
              <li><p>AWS EC2</p></li>
              <li><p>AWS Elastic Beanstalk</p></li>
            </ul>
          </div>
          <br/>
          <br/>
        </div>
      </div>
      <div id="dockless_modal" className="project_modal">
        <div className = "project_modal-content">
          <span className="close" onClick={() => closeDocklessModal()}>&times;</span>
          <h1>Dockless</h1>
          <img src={dockless}/>
          <h2>Description</h2>
          <div className="paragraph">
            <a href="https://dockless.net/">https://dockless.net/</a> compares fares of popular dockless scooter rental services offered in your area (Jump, Spin, Ofo, Lime, etc.)
            and displays on the map where availble scooters are currently located along with pricing data. This site is still under development.
          </div>
          <h2>My Role</h2>
          <div className="paragraph">
            Found landmarks using Google Maps API to provide users with nearby places they can visit with the estimated costs for each service. Landmark data was stored in AWS DynamoDB.
            Gathered vehicle data using BeautifulSoup like max speed and max range as well as rules and regulations users must follow, so they can be warned before renting a scooter.
          </div>
          <h2>Technologies Used</h2>
          <div className="modal-content">
            <ul>
              <li><p>Python</p></li>
              <li><p>HTML5</p></li>
              <li><p>CSS3</p></li>
              <li><p>Javascript</p></li>
              <li><p>NextJS</p></li>
              <li><p>BeautifulSoup</p></li>
              <li><p>AWS DynamoDB</p></li>
              <li><p>AWS S3</p></li>
              <li><p>AWS EC2</p></li>
              <li><p>Google Maps API</p></li>
            </ul>
          </div>
          <br/>
          <br/>
        </div>
      </div>
      <div id="nearme_modal" className="project_modal">
        <div className = "project_modal-content">
          <span className="close" onClick={() => closeNearmeModal()}>&times;</span>
          <h1>Nearme</h1>
          <h2>Description</h2>
          <div className="paragraph">
            Currently undergoing development.
          </div>
          <br/>
          <br/>
        </div>
      </div>
      <div id="puzzle_modal" className="project_modal">
        <div className = "project_modal-content">
          <span className="close" onClick={() => closePuzzleModal()}>&times;</span>
          <h1>Puzzle Box</h1>
          <video className="video" width="480" height="360" controls>
            <source src={puzzle_box} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <br/>
          <br/>
          <br/>
          <img src={puzzle_box_1}/>
          <br/>
          <br/>
          <br/>
          <img src={puzzle_box_2}/>
          <h2>Description</h2>
          <div className="paragraph">
            Puzzle Box is a device dedicated to an elder member, Philip Sidel, of the Pittsburgh community who loves Sudoku.
            The four faces of the cube contain a dial controlled by a potentiometer where each face represents a value ranging from 1-9. The Arduino inside of the box generates three random operations (+, -, or *)
            and outputs the Target Value on the LCD Display. The display also shows the Current Value, which is calculated by the four numbers inputted by the user along with the three operators chosen by the Arduino.
            So through guessing different combinations of numbers and looking at the Current Value, the user can eventually deduce what the three hidden operators are and match the Current Value with the Target Value.
            Philip has grandchildren, so we also added an Easy Mode where two of the operations are shown and a Medium Mode where one of the operations are shown to allow kids to play with it also. It is powered by a rechargable battery
            to allow for an easily accessible source of energy.
          </div>
          <h2>The Design</h2>
          <div className="paragraph">
            The electronics inside of the box are powered by an Arduino Uno. Each of the four dials are controlled by a potentiometer to determine the values from 1-9 according to the resistance. More details of the Circuits
            can be seen in the schematic below. The physical design of the box was created using AutoCAD and then laser cut.
            <br/>
            <br/>
            <img src={puzzle_box_schematic}/>
          </div>
          <h2>Technologies Used</h2>
          <div className="modal-content">
            <ul>
              <li><p>Arduino</p></li>
              <li><p>Circuits</p></li>
              <li><p>Laser Cutting</p></li>
              <li><p>AutoCAD</p></li>
            </ul>
          </div>
          <br/>
          <br/>
        </div>
      </div>
      <div id="lolnetwork_modal" className="project_modal">
        <div className = "project_modal-content">
          <span className="close" onClick={() => closeLolnetworkModal()}>&times;</span>
          <h1>LOL Network Search Engine Optimization</h1>
          <img src={lolnetwork}/>
          <h2>Description</h2>
          <div className="paragraph">
            Worked with the team behind Kevin Hart's new webpage <a href="https://laughoutloud.com/">https://laughoutloud.com/</a>, which hosts comedy videos and shows, to optimize their search engine results to bring in more traffic to their site.
          </div>
          <h2>My Role</h2>
          <div className="paragraph">
            Using their data from Google Search Console, I ran predictions of the clicks LOL Network's website would improve on if the page appeared in higher results for Google. For example, the site had an average of a Click Thorugh Rate (CTR) of 0.09% for queries with 'kevin hart' in it. The graph below
            shows predictions for CTR if these terms are in certain positions in Google search results.
            <br/>
            <br/>
            <img src={lolnetwork_stats}/>
            <br/>
            <br/>
            A large reason for a low amount of clicks on LOL Network's site was that Google was not recognizing their pages with just videos as a search result. Creating sitemaps with links of all pages on a site helps Google find pages that aren't automatically found 
            through their crawler. Also, I used Google Keyword Planner to find keywords with lots of search volume that LOL Network could add to their site in order to appear higher in search results.
          </div>
          <h2>Technologies Used</h2>
          <div className="modal-content">
            <ul>
              <li><p>SEO</p></li>
              <li><p>ASO</p></li>
              <li><p>Google Search Console</p></li>
              <li><p>Google Analytics</p></li>
              <li><p>Google Keyword Planner</p></li>
              <li><p>Lighthouse</p></li>
            </ul>
          </div>
          <br/>
          <br/>
        </div>
      </div>
      <div id="food_modal" className="project_modal">
        <div className = "project_modal-content">
          <span className="close" onClick={() => closeFoodModal()}>&times;</span>
          <h1>Food Across America</h1>
          <img src={food_across_america}/>
          <h2>Description</h2>
          <div className="paragraph">
            Food Across America finds which cuisines are popular in each state in the United States using restaurant data from Yelp API. For example, Mexican food is the most popular type of food in Texas and Pizza is the most popular type of food in Pennslyvania. All of the results are shown in the US map above.
            It also creates a heatmap for popular types of food (like Sandwiches, Fast Food, Mexican, Seafood, etc.) and shows how popular that category is in each state where Dark Red represents popular and white represent not popular. Here were the results for Pizza and Mexican. As you can see, Pizza was most popular in the North-East and Mexican was most popular near the Mexican border.
            It uses the GeoPY Library to visualize the results.
            <br/>
            <br/>
            <img src={food_across_america_pizza}/>
            <br/>
            <br/>
            <img src={food_across_america_mexican}/>
            <br/>
            <br/>
            It also analyzes word frequencies in the reviews for restaurants and creates a word cloud showing which food words come up most frequently. The reviews were parsed using BeautifulSoup and used Pandas to organize the organize the data. Here is an example of the word cloud for the state of Michigan.
            <br/>
            <br/>
            <img src={food_across_america_cloud}/>
            <br/>
            <br/>
            Lastly, it uses the word frequencies for the word cloud to see if we can classify the reviews using Support Vector Machine (SVM) to see if it can predict whether a review is from a coastal state.
            It uses the tfidf vectorizer from the scikit-learn library to create a sparse matrix of vectors, while also ignoring rare words to eliminate outliers, to learn a model for classification using this matrix. We then used the training data as the validation data because we did not
            have other data to test the accuracy with and we got our final accuracy to be 0.719.
          </div>
          <h2>Technologies Used</h2>
          <div className="modal-content">
            <ul>
              <li><p>Python</p></li>
              <li><p>Jupyter Notebook</p></li>
              <li><p>Yelp API</p></li>
              <li><p>Pandas</p></li>
              <li><p>GeoPY</p></li>
              <li><p>Machine Learning</p></li>
              <li><p>scikit-learn</p></li>
              <li><p>SVM</p></li>
            </ul>
          </div>
          <br/>
          <br/>
        </div>
      </div>
      <div id="messenger_modal" className="project_modal">
        <div className = "project_modal-content">
          <span className="close" onClick={() => closeMessengerModal()}>&times;</span>
          <h1>Facebook Messenger Scraper</h1>
          <img src={messenger_scraper}/>
          <h2>Description</h2>
          <div className="paragraph">
            Facebook Messenger Scraper analyzes your Facebook Messenger conversations and determines how much contribution you have versus the other person. It analyzes the average message length, number of messages sent, and 
            percentage of time each person initiates the conversation, which each contributes to the Overall Rating. An example of the output is shown above.
            It uses Selenium to login to your Facebook Account, click through each conversation, and scroll up to a certain date, and then it uses BeautifulSoup to extract the actual messages to be analyzed. <a href="http://nbviewer.jupyter.org/url/datasciencecourse.org/tutorial_final/187/Tutorial/MessengerScraper.ipynb">Click here</a> to 
            see the Jupyter Notebook code for this project.
          </div>
          <h2>Technologies Used</h2>
          <div className="modal-content">
            <ul>
              <li><p>Python</p></li>
              <li><p>Jupyter Notebook</p></li>
              <li><p>Selenium Webdriver</p></li>
              <li><p>BeautifulSoup</p></li>
            </ul>
          </div>
          <br/>
          <br/>
        </div>
      </div>
      <div id="soccer_stars_modal" className="project_modal">
        <div className = "project_modal-content">
          <span className="close" onClick={() => closeSoccerModal()}>&times;</span>
          <h1>Soccer Stars Game</h1>
          <video className="video" width="480" height="360" controls>
            <source src={soccer_stars} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <h2>Description</h2>
          <div className="paragraph">
            Soccer Stars is a two player game created using Pygame. Each player controls five players and the purpose is to score into the opponents goal.
            The first one to five points is the winner. There are also powerups you can pick up that increases your speed, decrease your size, or freeze the opponent.
            There are also powerdowns that decreases your speed, increases your size, or freeze yourself. These powerups were customized using Adobe Photoshop.
          </div>
          <h2>Technologies Used</h2>
          <div className="modal-content">
            <ul>
              <li><p>Python</p></li>
              <li><p>Pygame</p></li>
              <li><p>Adobe Photoshop</p></li>
            </ul>
          </div>
          <br/>
          <br/>
        </div>
      </div>
      <div className="img_cont">
        <span><img onClick={() => openUphailModal()} src={uphail_logo}/></span>
        <span><img onClick={() => openDocklessModal()} src={dockless_logo}/></span>
        <span><img onClick={() => openNearmeModal()} src={nearme_logo}/></span>
        <span><img onClick={() => openPuzzleModal()} src={puzzle_box_logo}/></span>
      </div>
      <div className="img_cont">
        <span><img onClick={() => openLolnetworkModal()} src={lolnetwork_logo}/></span>
        <span><img onClick={() => openFoodModal()} src={food_across_america_logo}/></span>
        <span><img onClick={() => openMessengerModal()} src={messenger_scraper_logo}/></span>
        <span><img onClick={() => openSoccerModal()} src={soccer_stars_logo}/></span>
      </div>
    </div>
  </section>
)

export default Projects

// import React from 'react'
// import Link from 'gatsby-link'
// import uphail_logo from "../images/uphail_logo.png"
// import dockless_logo from "../images/dockless_logo.png"
// import nearme_logo from "../images/nearme_logo.png"
// import puzzle_box_logo from "../images/puzzle_box_logo.png"
// import food_across_america_logo from "../images/food_across_america_logo.png"
// import messenger_scraper_logo from "../images/messenger_scraper_logo.png"
// import soccer_stars_logo from "../images/soccer_stars_logo.png"
// import malloc_logo from "../images/malloc_logo.png"

// const Projects = () => (
//   <section id="projects">
//     <div className="projects">
//       <h1>Some of my projects</h1>
//       <div className="img_cont">
//         <a href="#"><img src={uphail_logo}/></a>
//         <a href="#"><img src={dockless_logo}/></a>
//         <a href="#"><img src={nearme_logo}/></a>
//         <a href="#"><img src={puzzle_box_logo}/></a>
//       </div>
//       <div className="img_cont">
//         <a href="#"><img src={food_across_america_logo}/></a>
//         <a href="#"><img src={messenger_scraper_logo}/></a>
//         <a href="#"><img src={soccer_stars_logo}/></a>
//         <a href="#"><img src={malloc_logo}/></a>
//       </div>
//     </div>
//   </section>
// )

// export default Projects
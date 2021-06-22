import React from 'react';

const Main = () => {
  const joiningCriteria = [
    'People between the ages of 18 and 35 years.',
    'A demonstrated passion for coding and technology.',
    'The time and capacity to commit to a full coding bootcamp. Classes are three times per week in person at one of our learning hubs.',
    'An intermediate level of English comprehension.',
    'The aptitude to succeed in the selection process.',
  ];

  return (
    <section class="bootcamp">
      {/* Where should the following h2 tag be displayed? Center or right? and why? */}
      {/* center */}
      <h2 class="align-right" style={{ textAlign: 'center' }}>
        Re:Coded Front-End Web Development Bootcamp
      </h2>
      <h3>What is our bootcamp</h3>
      {/* Make every 'Front-End Web Development' sentence in the following article bold */}
      <p>
        Our Front-End Web Development Bootcamp is designed to kickstart your
        career as junior web developer or as an entrepreneur with a vision to
        build your own website, app or software solution.
      </p>
      <p>
        As a non-profit organization we have partnered with Flatiron School in
        New York, one of the leading coding schools in the world. That allows us
        to teach their Front-End Web Development course introducing you to HTML
        and CSS. We provide additional training on React, a library for building
        user interfaces maintained by Facebook and Instagram. And during our
        program, you will learn JavaScript, all of which will allow you to build
        amazing websites and accelerate your journey to becoming a working Web
        Developer!
      </p>
      <p>
        By the end of the program, you will have a portfolio of completed
        projects to highlight your achievements.
      </p>
      <p>
        The Front-End Web Development course will take approximately 3.5 months
        with 10 hours per week of in-person training and 15-25 hours per week of
        self-study.
      </p>
      <p>
        The last 1.5 month of the bootcamp will be dedicated to a final project
        to help you build your portfolio of work.
      </p>
      <p>Our programs are all in english.</p>
      <h3>Who can join</h3>
      {/* What are the differences between <ul> and <ol>? */}
      {/* ul uncondition list ol condetion list*/}
      <ol>
        {joiningCriteria.map(() => (<li>{e}</li>
        ))}
      </ol>
      <div class="buttons">
        {/* Using CSS, try to provide multiple methods to display these divs in a row like the attached pictures. Keep one of the methods, and comment out the rest */}
        </div>
        <div class="infoDiv">
          {/* When clicking "More Info" button, get the countries and bootcamps data from the JSON file and display them in the '#dataDisplay' div. */}
          <button id="infoBtn">More Info</button>
        </div>
        <div id="dataDisplay"></div>
        <div class="awesomeDiv">
          <button id="awesomeBtn">I'm Awesome</button>
          {/*  When clicking the "I'm Awesome" button, display the content of '#awesome' div. When clicking it again, hide the content of '#awesome' div. */}
          <div id="awesome">
            <p>
              <em>I'm awesome, I'm doing the js part</em>
            </p>
          </div>
        </div>
        <div class="searchDiv">
          <form id="search">
            <input
              type="text"
              name="searchBox"
              id="searchBox"
              placeholder="search bootcamps"
            />
            {/* When clicking the "search" button, search the camps in JSON file by country and display the search results in the '#searchResults' div. */}
            <input type="submit" id="searchBtn" value="search" />
          </form>
          <div id="searchResults"></div>
        </div>
    
      {/* ##Delete the wrong fact/facts in the comments below */}
      {/* 1. The same id can be used multiple times, but the same class can be used only once */}
      {/* 2. The same class can be used multiple times, but the same id can be used only once */}
      {/* 3. In CSS, '#' refers to id while '.' refers to class */}
      {/* 4. Classes are used more in javascript */}
    </section>
  )
}

export default Main;

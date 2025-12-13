# 🏡 AirBNC - Property Rental Site - Front-end  

AirBNC is a browser-based application. This is the Front-end, created with React. The AirBNC application allows users to browse property listings and make informed choices about where they want to stay on their next trip. 

**Link to hosted front-end**: https://airbnc-project.netlify.app/ 

**Link to the back-end repo**: https://github.com/AB45699/AirBNC 

**Link to hosted back-end**: https://airbnc-oijh.onrender.com/ (❗if the page is 'Loading...' too long, please click here to wake up the server)

# 🚀 How it is made

**Tech used**: JavaScript, HTML, CSS, React (Vite), Axios, React-Router (useSearchParams); hosted on Netlify 


# 🔧 How to use

Run `npm i` to install any dependencies. 

In the root folder, run `npm run dev` to start the development server. 

# 🏡 Features

Currently, the front-end shows a list of all available properties. The default order is 'most favourited'. 

The filter button can be clicked to set the price range and 'property type'. 

The 'sort' drop down allows ordering by most/least favourites, price per night, and popularity (i.e. average rating).

Further features include: 

* useSearchParams is used to store and update filter values. 

* Implemented Axios' params option to send the current filter values as query parameters. 

* Filter changes instantly update the displayed results, without needing to reload the page! 

# 🏗️ To do - work in progress!

**Status**: project in development.

* Further endpoints from the back-end are still to be implemented. Example: clicking on a property card takes users to a single property page view. 

* Users being able to post reviews. 

* Dark / light mode toggling. 
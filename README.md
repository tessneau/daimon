# 🌬 Daimon 🌬

A community driven habit-tracking app for honest professionals.

![app runthrough gif](https://giant.gfycat.com/RawTiredElk.gif)

## 👣 Installation

 #### 1. API Backend
1. Enter into the backend folder with `cd daimon-backend`
2. Run `bundle install` in order to install the necessary gems
3. Enter `rails db:migrate && rails db:seed` in order to set up the tables and seed the wirtten data
4. (optional) Check that the data seeded by entering `rails c`, then `User.all` once you've entered the console mode. If the results aren't nil then the data has succesfully seeded. If not, contact me.
5. Finally, enter `rails s` and copy the resulting url listed as `Listening on [url]` (often it will be localhost:3000) and paste the url into your browser. The available end paths are users, posts, habits, categories 

#### 2. Frontend
1. Make sure you are running a web server with the backend API (step 2) and open a new tab in the directory
2. From the home folder, enter into the frontend folder with `cd daimon-frontend`
3. Enter `npm start` and follow the steps given to run the server in your browser
      
      
## 🏹Usage

* A user can login or sign up
* A user can then browse through the web app with a navigation bar
* On the Habits page, a user can create new habits, delete habits, and interact with their created habits. 
* A user can click on a habit card, adding to the progress of that habit and recieve confirmation through an animated pie chart
* On the Community Page, a user can get motivation from others by reading through different forums, organized by category
* A user can create their own motivation post and share with others
* A user can give an olive branch(like) and pin other people's posts
* On the Profile page, a filter button is available to see the posts that the user has created and those they've pinned.
* A user can logout through the navigation bar
      
## 📦Built With

* [Victory](https://github.com/FormidableLabs/victory) - Interactive data visualizations 
* [ReactJS](https://github.com/facebook/react) - Frontend Framework
* [Redux](https://github.com/reduxjs/redux) - React state organizer
* [Redux-Thunk](https://github.com/reduxjs/redux-thunk) - Middleware for asynch logic
* [Ruby on Rails](https://github.com/rails/rails) - Backend API
* [ActiveModel Serializers](https://github.com/rails-api/active_model_serializers) - JSON:API Seralizers for Ruby Objects
* [JWT for Ruby](https://github.com/jwt/ruby-jwt) - JSON Web Token for Login/Signup encryption
* [Faker](https://github.com/faker-ruby/faker) - Fake Twin Peaks and Lorem Ipsum data
* [TinyGraphs](https://github.com/taironas/tinygraphs) - Avatar placeholders

## 🛒Future Tasks

- [x] Refactor Redux and Ruby files
- [ ] Add social media sharing features 
- [ ] Add a Victory graph to track consistent habit progress
- [ ] Replace AMS with [fastJSON](https://github.com/Netflix/fast_jsonapi) for speed

## 🦕Authors

[Tess Neau](https://github.com/tessneau) - tessneau@gmail.com

## 🙏Acknowledgements

* Flatiron School, [Mazen Al Swar](https://github.com/mazenswar), and [Leizl Samano](https://github.com/lsamano)
* FormidableLabs for having great documentation on Victory




# ⚡️ Daimon 

A community driven habit-tracking app for honest professionals.

![app runthrough gif](https://giant.gfycat.com/RawTiredElk.gif)

The backend is a Ruby on Rails API created using ActiveRecord. The frontend is built in ReactJS with a Redux implementation.

## How to Install Daimon
1. `git clone` the directory into your local directory

### 2. API Backend
a. From the home folder, enter into the backend folder with `cd daimon-backend`
b. Run `bundle install` in order to install the necessary gems
c. Enter `rails db:migrate && rails db:seed` in order to set up the tables and seed the wirtten data
d. (optional) Check that the data seeded by entering `rails c`, then `User.all` once you've entered the console mode. If the results aren't nil then the data has succesfully seeded. If not, contact me.
e. Finally, enter `rails s` and copy the resulting url listed as `Listening on [url]` (often it will be localhost:3000) and paxste the url into your browser. The main available end paths are: 
- /users
- /habits
- /categories
- /posts

### 3. Frontend
a. Make sure you are running a web server with the backend API (step 2) and open a new tab in the directory
b. From the home folder, enter into the frontend folder with `cd daimon-frontend`
c. Enter `npm start` and the app will run in the browser





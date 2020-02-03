# Welcome to Med Cabinet (Feb 3, 2020 - Lambda Build Week)!

## Team:
- UI: Stephen Gary
- React1:  Kennith Howe and Danika Thomson
- React2: K Parrish
- Backend: Lexie Jiang
- Data Engineer:  Mikio Harman, Jan Jaap de Jong, David Vollendroff and Nicole Williams
- Project Lead: Vinni Hoke

## Proposal:

App for new cannabis consumers (especially those trying to get off of pharmaceuticals) who want to use cannabis as a means to battle medical conditions and ailments. Help patients find the right strains, dosing, intake method and intake schedule! 
Use user data along with strain data to build ML models to guide recommendations.

- What problem does your app solve?  
    - Patients unable to find proper cannabis strain, dosage, intake method, and intake schedule.
    - Turning away from pharmaceuticals / finding healthy alternatives and providing customized care for each customer
    - Pitch: App for new cannabis consumers (especially those trying to get off of pharmaceuticals) who want to use cannabis as a means to battle medical conditions and ailments. Help patients find the right strains, dosing, intake method and intake schedule! Use user data along with strain data to build ML models to guide recommendations.

- Be as specific as possible; how does your app solve the problem?
    - Reduce polypharmacy by using the right strain and dose of cannabis. Overall this can simplify a patient’s treatment while increasing treatment success by reducing side effects due to polypharmacy.

- What is the mission statement?
    - Help patients find the right strains, dosing, intake method and intake schedule!


## Features:

- What features are required for your minimum viable product?
   - For DS
        - Source and analyze data to better understand the reported effects of different cannabis strains/types
        - Data Sources (need to be confirmed):
        https://www.kaggle.com/kingburrito666/cannabis-strains
        - Given this, create a model to predict which strains/types a user would enjoy based on their input (desired effects). Can use any techniques you wish.
        - Make the recommendations accessible to the rest of the team via a Flask API or equivalent.
    - For Web
        - User creation and login
        - Form to gather data from the user to submit to the DS API
        - User can save response from the DS API to the Web backend in the user's - profile
        - User can view saved responses and filter them in a useful way
        - User can edit/delete saved responses in the user's profile.

- What features may you wish to put in a future release?
    - Link user to dispensary that has product that fulfills their needs

- What do the top 3 similar apps do for their users?
    - Leafly
    - PotBot
    - WeedMaps
    - Massroots – https://www.massroots.com


## Frameworks - Libraries:

- What 3rd party frameworks/libraries are you considering using?
    - React Hook Form (form validation instead of Formik) https://react-hook-form.com – React I
    - Redux or Context? – React II
    - Express – Backend
    - Node – Backend
    - API for strains
        - https://rapidapi.com/raygorodskij/api/Strain
        - https://otreeba.com/ (needs key)
        - https://kushyapp.github.io/kushy-api-docs/public/
        - Kaggle Dataset (both versions)

- Do APIs require you to contact its maintainer to gain access?


- Are you required to pay to use the API?



## Target Audience:

- Who is your target audience? Be specific.
    - People who are currently taking many pharmaceuticals
    - Medical marijuana patients
    - All types of patients

- What feedback have you gotten from potential users?  
	- It's healthier than prescriptions 

- Have you validated the problem and your solution with your target audience? How?


## Research:

- Research thoroughly before writing a single line of code. Solidify the features of your app conceptually before implementation. Spend the weekend researching so you can hit the ground running on Monday.
Prototype Key Feature(s)

- This is the “bread and butter” of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you’ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed.


## Instructions

**Read these instructions carefully.**

This is a team assignment with individual assessments. All work must be your own but remember to collaborate with everyone on your team. Your challenge score is a measure of your ability to work independently using the material covered through this sprint and there is a score on overall teamwork. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.


## Commits

In case you ever need to return to old code. Remember your **ABC: Always Be Committing!**


## Project Set Up

Follow these steps to set up and work on your project:

- [ ]  Clone your OWN version of Repo.
- [ ]  Create a new Branch on the clone: `git checkout -b <firstName-lastName>`.
- [ ]  Implement the project on this branch, committing changes regularly.
- [ ]  Push commits: `git push origin <firstName-lastName>`.
- [ ]  **LOOK** at your project directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [ ]  **RUN** `yarn install` or `npm install` to retrieve the client-side dependencies.
- [ ]  **RUN** `yarn start` or `npm start` to fire up your React application.
- [ ] **RUN** `yarn add` or `npm i` to add frameworks and libraries needed for your project (i.e. redux, formik, yup, react-router-dom, etc.).


## Minimum Viable Product (MVP)

1. User creation and login
2. Strain recommender
3. Save recommendations

## Minimum Viable Product for Backend (Lexie)

Implement an User Authentication System. Hash user's passwords before saving them to the database. Use `JSON Web Tokens` or `Sessions and Cookies` to persist authentication across requests.

- [ ] Implement the `register` and `login` functionality. A `user` has `username` and `password`. Both properties are required.
- [ ] Implement the `authenticate` middleware.
- [ ] Implement endpoint for retrieving and accessing strains.
- [ ] Write a **minimum of 2 tests** per API endpoint. Write more tests if you have time.

### Node Rubric for Lexie (3's)

- [ ] Student incorporated service interfaces and appropriate repositories for code reuse and deployed the API to a hosting platform. The API is configured to dynamically load configuration and secrets using environment variables.
- [ ] Student migrated from SQLite3 to use a server RDBMS, like Postgres or MySQL and incorporated seeding scripts in their solution.
- [ ] Student added authorization and authentication services.
- [ ] The project has end to end tests using a test database.

## STRETCH GOALS 💪

1. Link user to dispensary that has product that fulfills their needs (web).

2. Improve model performance by sourcing additional data and/or tuning hyperparameters (ds).
## San Francisco Public Open Spaces (SFPOPOS)
> Recreating the SFPOPOS site using responsive design pratices and React.js

[![made-with-react](https://img.shields.io/badge/Made%20with-React-1f425f.svg)](https://www.react.dev)
![Issues](https://img.shields.io/github/issues/el634dev/sfpopos.svg)
[![Documentation Status](https://readthedocs.org/projects/ansicolortags/badge/?version=latest)](http://ansicolortags.readthedocs.io/?badge=latest)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://shields.io/)

> Web Application where users can search for different public spaces in San Francisco and see the details for each public space such as benches
>> Live demo [_here_](https://sfpopos-one.vercel.app/#/).

## Table of Contents
- [Built Using](#built-using)
- [Getting Started](#getting-started)
- [Screenshot](#screenshot)
- [Usage](#usage)
- [Project Status](#project-status)
- [Deployment](#deployment)
- [Author](#author)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
What things you need to install the software and how to install them
- First you need a code editor of your choice, I use [VSCode](https://code.visualstudio.com/) by Microsoft then you will need the current version of [Node](https://nodejs.org/en) to get your React app created and running on your local server.
- After you need to choose between Vite or Create React App if you are going to code from scratch, if not then just run `npm run dev` in your terminal to get your project showing after changing the directory to your project folder(should be the same name as the one you used to create the app) after running `npm install`.
  - a. If you choose Vite then this article can help with [getting started](https://www.makeuseof.com/set-up-react-app-with-vite/)
  - b. If you choose Create React App then this doc page can [help](https://create-react-app.dev/docs/getting-started/)
- The rest are dependencies and those require either `npm i` or `npm install`, this page can [help](https://www.npmjs.com/) and you can search the package you need

## Screenshot
<img width="1252" alt="Screenshot 2024-04-16 at 1 42 26 PM" src="https://github.com/el634dev/sfpopos/assets/84924260/85a65e1f-b7f3-449c-ad7f-a3f5f745cfd4">

## Usage
How does one go about using it?
>
`User can navigate to landing page and see a input bar to search for different public spaces`
>
`User can see a navbar with two buttons to sign up/see a random space and two links to navigate back to the home page/see an about page`
>
`User can see a property and the details associated with that public space such as a washroom`

## Project Status
Project is: _completed_

## Deployment
To deploy this project you could run `npm run build`, this creates a version of your project that is bundled and ready for production. However I used Vercel, a frontend deployment tool that is free to help deploy this project.

### Setup on Vercel
- To create an account sign up using a third-party account such as GitHub or you could do it using a differen username and password, if you use GitHub it will deploy your project straight from GitHub
- After signup you can login or skip step 1 and log in, go to your overview where you see a space for projects and on the right side click `Add New`
- After clicking on `Add New` choose what you are adding, this will be project
- Then aftering the last step, if you choose GitHub you can choose your repository and click on import
- You are all done!

## Built Using
> React - The framework used
> 
> BEM - Naming Convention
> 
> CSS - The styling used
>
> Vercel - Used to deploy the website

## Author
- Created by [@el634dev](https://github.com/el634dev)

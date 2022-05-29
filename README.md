# Tech_Blog_Back_end

Full-Stack development of a blog post web app. With the front-end capabilities of performing CRUD operations and the back-end capabilities of processing api requests and SQL database storage.

## Heroku Deployment: 
https://lit-badlands-69940.herokuapp.com/

## Description:

* This program is designed to perform CRUD (Create, Read, Update, Delete) operations from a relational databse on a front-end blog post website.
* Backend: The back-edn of this project was completed using Node.js, express server, mysql database, npm Sequelize and tested in a backend environment (Insomnia).
* Frontend: This front-end of this project was completed using npm handlebars, css, front-end javascript fetch requests.

## Built By:
* JavaScript
* Node.js
* express.js
* npm (mysql2)
* npm (sequelize)
* npm (dotenv)
* npm (express-handlebars)
* npm (express-session)
* Prettier

## Built-Logic:
1. Write out DB Models
2. Relations of DB models (Associations)
3. Work on USER routes (login/logout) on backend
4. Work on Post routes on backend
5. Handle Comment routes on backend
6. Once routes on backend are tested (insomnia), go to frontend JS files (public/javascript) and connect end points from backend 
7. Get data from backend to display on page.
8. Then get to styling (stylesheets).


## How to Install:
* Open Gitbash/terminal, navigate towards your project location from your root by using "cd ./ project location"
* Choose a clone option from the "Tech_Blog_BE" repository (either HTTPS or SSH should work)
* In Gitbash, type "git clone HTTPS or SSH"
* Once the clone is successful, navigate to the root directory of this repo.
* Enter `npm i` into the terminal to install all dependencies linked in the `package.json` file.

## How to initialize the database:
1. In your command window/gitbash shell, enter `mysql -u root -p` and then type your password of your sql account.
![image](https://user-images.githubusercontent.com/95199209/169615610-46de210e-2e5b-4b8b-8c59-6ee869850ec2.png)

2. type in `source db/schema.sql` to feed the relational tables into the database.
![image](https://user-images.githubusercontent.com/95199209/169615691-104af2c3-036e-46bc-9c4e-aca7b25d122d.png)

3. Create a `.env` file in your root directory, as the seeding the database requires connection to your database
![image](https://user-images.githubusercontent.com/95199209/169618317-6fc8da0c-3f44-417d-be33-a0fd645e5e57.png)

## How to Use:
1. Cloud: Open the deployed heroku link, the project is hosted on the cloud and ready to be used!
![image](https://user-images.githubusercontent.com/95199209/170844491-ad3d6f72-9186-4734-a54d-7e40100f6ceb.png)

2. Local Machine: type `node server` in your gitbash shell and navigate to `http://localhost:3001/` in your browser window.


---

### ©️2022 Kevin (Haoyu) Fang









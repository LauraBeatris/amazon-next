<h1 align="center">
  <img alt="Amazon Next" title="Amazon Next" src="./static/amazon.png" width="150px" style="border-radius:100px"/>
</h1>

<h3 align="center">
  E-Commerce Application made with NextJS (SSR Framework for ReactJS)
</h3>


<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/LauraBeatris/amazon-next?color=%232d3748">

  <a href="https://www.linkedin.com/in/laurabeatris/">
    <img alt="Made by Laura Beatris" src="https://img.shields.io/badge/made%20by-LauraBeatris-%232d3748">
  </a>

  <a href="https://github.com/LauraBeatris/amazon-next/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/LauraBeatris/amazon-next?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#runner-installation">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#construction-testing">Testing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licence">Licence</a>
</p>

<p align="center">
  <img align="center" src="https://imgur.com/a/zX14vmB" alt="Product List" border="0">
</p>
<br>


## :rocket: About the project
  The goal of this project was to learn the fundamentals of NextJS and integrate with external services like the database feature provided by Firebase. The page transitions are made Framer Motion that provides a great api support to Server Side Rendering.
Also, i choosed tailwind for styling the most part of the app because of the agility that utility classes are able provide.
## :runner: Installation 

```   
  // 1 - Git Clone
  
  // 2 - If you're going to use firebase to provide product data, be sure do create a env with the service data. 
        
  // 3 - Installing the dependencies
  yarn install
  
  // 4 - Run the application in the development mode 
  yarn dev
  
```

## Deploy 
[Zeit](https://zeit.co/) provides a easy way to deploy NextJS applications. You need to create a now.json file with the build configuration. 

```
{
    "build": {
        "env": {
            "SITE_URL": "@site_url",
            "FIREBASE_API_KEY": "@firebase_api_key",
            "FIREBASE_APP_KEY": "@firebase_app_id",
            "FIREBASE_MEASUREMENT_ID": "@firebase_measurement_id",
            "FIREBASE_MESSAGE_SENDER_ID": "@firebase_message_sender_id"
        }
    }
}

```

To map environment variables, you need to create secrets with the commands provided by the [Now CLI](https://zeit.co/download)

```
now secrets add <secret-name> <secret-value>
```

And then use them as the values of the env variables that you want to map inside of the build configuration.

## :memo: Licence

MIT Licence. See the file [LICENSE](LICENSE.md) for more details.

---

Made with ♥ by Laura :wave: [See my linkedin!](https://www.linkedin.com/in/laurabeatris/)

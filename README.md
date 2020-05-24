<p align="left">
   <img src="./static/amazon.png" width="150px"/>
</p>

# Amazon Next

> Mock and re-concept of Amazon

[![Author](https://img.shields.io/badge/author-LauraBeatris-e0a639?style=flat-square)](https://github.com/LauraBeatris)
[![Languages](https://img.shields.io/github/languages/count/LauraBeatris/amazon-next?color=%23e0a639&style=flat-square)](#)
[![Stars](https://img.shields.io/github/stars/LauraBeatris/amazon-next?color=e0a639&style=flat-square)](https://github.com/LauraBeatris/amazon-next/stargazers)
[![Forks](https://img.shields.io/github/forks/LauraBeatris/amazon-next?color=%23e0a639&style=flat-square)](https://github.com/LauraBeatris/amazon-next/network/members)
[![Contributors](https://img.shields.io/github/contributors/LauraBeatris/amazon-next?color=e0a639&style=flat-square)](https://github.com/LauraBeatris/amazon-next/graphs/contributors)

<br />
<p align="center">
  <img align="center" src="https://i.ibb.co/wccRhm9/product-screen.png" alt="Product List" border="0">
</p>
<p align="center">
  <img align="center" src="https://i.ibb.co/wSjGYgs/Ac3m-LCZ-Imgur.png" alt="Product List" border="0">
</p>

---

# :pushpin: Table of Contents

* [Features](#rocket-features)
* [Installation](#construction_worker-installation)
* [Getting Started](#runner-getting-started)
* [FAQ](#postbox-faq)
* [Found a bug? Missing a specific feature?](#bug-issues)
* [Contributing](#tada-contributing)
* [License](#closed_book-license)

# :rocket: Features

* 🛒 Add products to your cart.
* 💝 Add likes to your favorite products.
* 🎨 Amazing transitions with Framer Motion
* 💰 A re-concept of the cart interface from Amazon

# :construction_worker: Installation

**You need to install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) first, then in order to clone the project via HTTPS, run this command:**

```git clone https://github.com/LauraBeatris/amazon-next.git```

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you have a SSH key registered in your Github account, clone the project using this command:

```git clone git@github.com:LauraBeatris/amazon-next.git```

**Install dependencies**

```yarn install```

# :runner: Getting Started

Run the following command in order to start the application in a development environment:

```yarn dev```


# :postbox: Faq

**Question:** What are the tecnologies used in this project?

**Answer:** The tecnologies used in this project are [NextJS](https://nextjs.org/) and [Firebase](https://firebase.google.com/docs/database?hl=pt-br).

## :hammer: Deploy
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

# :bug: Issues

Feel free to **file a new issue** with a respective title and description on the the [Amazon Next](https://github.com/LauraBeatris/amazon-next/issues) repository. If you already found a solution to your problem, **i would love to review your pull request**! Have a look at our [contribution guidelines](https://github.com/LauraBeatris/amazon-next/blob/master/CONTRIBUTING.md) to find out about the coding standards.

# :tada: Contributing

Check out the [contributing](https://github.com/LauraBeatris/amazon-next/blob/master/CONTRIBUTING.md) page to see the best places to file issues, start discussions and begin contributing.

# :closed_book: License

Released in 2020.
This project is under the [MIT license](https://github.com/LauraBeatris/amazon-next/master/LICENSE).

Made with love by [Laura Beatris](https://github.com/LauraBeatris) 💜🚀

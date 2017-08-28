# Simple Todo ReactJs Application
The repository demonstrates the TO-DO application and its implementation. Feature application:
* Adding tasks
* Delete tasks

![todo_reactjs](https://user-images.githubusercontent.com/30631373/28835057-756068be-76e4-11e7-83b0-e7555a9c00f1.png)

## Getting started
### Clone the repo & install:
```
git clone https://github.com/kszymczycha/todo_reactjs.git
cd todo_reactjs
npm install
``` 
### Run application:
```
npm run dev
```
Once done, the application is ready for use: [localhost: 8080](http://localhost:8080/)
## Installed dependencies
This describes the process of installing the dependencies that were necessary to create the application.

*webpack webpack-dev-server*
```
npm i -D webpack webpack-dev-server 
```
*react react-dom*
```
npm i -D react react-dom
```
*babel*
```
npm i -D babel babel-preset-react babel-preset-es2015
```
After installation **babel-preset-react** and **babel-preset-es2015** enabled them in **.babelrc** configuration file [1, 2]:
```json
{
    "presets": ["es2015", "react"]
}
```
## Loaders

Loaders can transform files from a different language to JavaScript, or inline images as data URLs. Loaders even allow you to do things like require() CSS files right in your JavaScript! [3].
### Instalation

*babel-loader babel-core*
```
npm i -D babel-loader babel-core
```
*style-loader css-loader*
```
npm i -D babel-loader babel-core
```
### Configuration
Defined rules in webpack.config.js file to tests every JavaScript and CSS files to use the loaders:
```js
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader"
            },
            {
               test: /\.css$/,
               loader: 'style-loader!css-loader'
            }
        ]
    }
};
```
### License
MIT
### Source:
<br />
[1] https://facebook.github.io/react/docs/installation.html
<br />
[2] https://babeljs.io/docs/setup/#installation
<br />
[3] https://webpack.js.org/concepts/loaders/#components/sidebar/sidebar.jsx

# Paymo Timesheet Insights

Gain deeper insight into your Paymo timesheets.

## Development

This project uses **yarn**, **webpack** and **browsersync**.

* Dependancies and build scripts are managed in `package.json` (yarn)
* JS build processes are defined in `webpack.config.js` (webpack)
* Source files (raw files that must be compiled before being used with other systems) are located in `/src`.
* Compiled files (js, css -- files that are packaged and ready to be used with other systems) are output to `/dist` by **webpack** & **yarn** build processes (see below). *These files should not be modified directly, they will be overwritten on the next compile!*
* A boilerplate main.js, app.js, and index.html are also included.

### How it works

1. [Install Yarn](https://yarnpkg.com/en/docs/install) (requires [node](https://nodejs.org/en/download/))
2. Initilize project:

    ```bash
    yarn
    ```

3. Which will bring to your disposal these main build commands:

    1. **Dev**

        starts browsersync, compiles your js and scss, creates source maps and reloads on file changes (JS/CSS/HTML)

        ```bash
        yarn dev
        ```

    1. **Dev with PHP**

        starts PHP CLI built-in web server, browsersync as proxy, compiles your js and scss, creates source maps and reloads on file changes (JS/CSS/HTML/PHP)

        ```bash
        yarn dev-php
        ```

    2. **Dist**

        generates production files (minifies css and packs media queries), generates less detailed source maps

        ```bash
        yarn dist
        ```

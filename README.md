# System requirements

- macOS 10.9 and above (64-bit only)
- Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
- Windows 7 and above (64-bit only)

# Installation

## Cypress installation via npm:

``` 
cd /your/project/path
npm install cypress --save-dev
```

This will install Cypress locally as a dev dependency for your project.

## Cypress installation via yarn:

```
cd /your/project/path
yarn add cypress --dev
```

System proxy properties http_proxy, https_proxy and no_proxy are respected for the download of the Cypress binary.

If you're not using Node or npm or you want to try Cypress out quickly, you can always download it directly.

## Starting off Cypress:

If you used npm to install, Cypress has now been installed to your ./node_modules directory, with its binary executable accessible from ./node_modules/.bin. Now you can open Cypress from your project root one of the following ways:

The long way with the full path 
```
./node_modules/.bin/cypress open
```
Or with the shortcut using 
```
npm bin - $(npm bin)/cypress open
```
Or by using npx 
```
npx cypress open
```
Or by using yarn
```
yarn run cypress open
```

After a moment, the Cypress Test Runner will launch.

To run a script you need to execute the following command:
```
npm run {name of the script from package.json}

```

All useful information of Cypress is here (https://docs.cypress.io/)
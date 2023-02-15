# portfolio
single-page react portfolio. most up to date branch is "new-format"

# table of contents
- [portfolio](#ˏˋ-portfolio-ˎ)
- [table of contents](#table-of-contents)
  - [features](#features)
  - [tools](#tools)
  - [development](#development)
    - [project hierachy](#project-hierachy)
    - [dependencies](#dependencies)
    - [set up](#set-up)
    - [deploy changes](#deploy-changes)

## features
- slider
- responsiveness
- links buttons jump on hover
- fa awesome icons
- google fonts api

## tools
- react
- html/css
- javascript

## development
### project hierachy
general overview of project hierarchy
- 📁 portfolio 
  - README.md
  - 📁 my-app (react app)
    - 📁 node modules
    - 📁 public
    - 📁 src
      - App.js (single file that loads files in components)
      - 📁 components (seperate files for each div)
        - Intro.js (div 1)
        - About.js (div 2)
        - Projects (div 3)
        - Experience.js (div 4)
        - Footer.js (div 5)
        - ImageSlider.js
        - SliderData.js
        - Slideshow.js
      - 📁 images (contains images used on page)
      - 📁 styles (CSS files named after corresponsing js file)

### dependencies
dependencies required for development set up
- npm
- react
- fa awesome icons
  
### set up
```
git clone https://github.com/samsaid/portfolio.git
git checkout new-format
cd my-app
npm start
```

### deploy changes
```
git add .
git commit -m 'message'
git push
npm run deploy
```
--> custom url will break. visit repo page on github.com, locate github pages settings and readd custom url

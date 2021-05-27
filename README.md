# hackernews
Simple react app displaying Hacker News stories and their comments

<img width="1918" alt="Screen Shot 2021-05-27 at 11 44 59 AM" src="https://user-images.githubusercontent.com/5914403/119865267-1ee25300-bee1-11eb-8726-9dc64dc8b91f.png">

## React Application
> Displaying top 10 Hacker News Stories, and up to 20 comments for each story.
> Using functional components with the of React Hooks instead of React Class lifecycle methods.
> No local component state. All application state is resides in Redux.
> used styled-components to style the UI components

### Application Flow
> On page load top 10 stories are fetched and loaded into Redux.
> On request of comments for a story, comments are fetched and loaded into redux (once).

### For Local Development with Webpack Dev Server
 yarn install and yarn dev // Project is running at http://localhost:3030/

#### For Production Build, pls run
> yarn buld

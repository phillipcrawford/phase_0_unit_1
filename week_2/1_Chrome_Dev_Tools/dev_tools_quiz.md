#### Include an inline screenshot of your codeschool's points from the profile page:
      <img src="http://i.imgur.com/x6ymsuw.jpg" title="Phillip's Code School Points.com"/>
<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
      The Elements tab supports realtime editing. It doesn't save the file after we make modifications however, the sources tab does. The elements tab provides a preview of changes
  * Javascript Debugging
      The Sources tab provides javascript debugging
  * Performance Optimization 
      Two tabs: the timeline/waterfall (the words are used interchangeably) and pagespeed insights. The timeline allows us to see the loading time consequences of which order stylesheets, javascripts, and other files are loaded. PageSpeed insights allows all types of optimizations such as reducing memory used by files through merging and compression.
* What's the quick key for your OS to spawn the Dev Tools inspector?
      I'm using Windows 7. ctrl+shift+i 
* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
      background-color: #0b0f11 . It's close to black, but part blue.
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
      <img src="http://i.imgur.com/5TBZiGb.jpg" title="postmachina tweaked"/>
* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
      If we use dev tools to inspect this area, we will notice in the CSS that it's background is set to an image. There is no way to modify the text without changing that image.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website?
      A picture  of Times Square in NY, NY. 
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
      First open the dev tools inspector. Click on the network tab, reload while holding shift (to simulate loading first time site is visited). Organize by size in descending order. The first entry that is of type image/png is the largest image. It's url is http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png . It's size is 316KB. 
* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?
      Losslessly compressing images, beginning with http://www.ticketswizard.com/App_Themes/PXS_Demo/Images/sbx.png  could save 79.2KiB (65% reduction) 

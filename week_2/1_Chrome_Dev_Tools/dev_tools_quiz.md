#### Include an inline screenshot of your codeschool's points from the profile page:
<img src="http://i.imgur.com/x6ymsuw.jpg" title="Hosted by imgur.com"/>
<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

<p>##QUIZ</p>
<p>* Explain which tabs support the following actions and how.</p>
  <p>* Realtime editing of HTML and CSS</p>
      <p>The elements tab. Provides a preview of changes,to save we need to edit sources tab.</p>
  <p>* Javascript Debugging</p>
      <p>The Sources Tab</p>
  <p>* Performance Optimization</p>
      <p>PageSpeed Insights and the waterfall. Pagespeed insights provides many suggestions such as compressing and merging files to take up less space. The waterfall allows certain files to be loaded in different order. </p> 

<p>* What's the quick key for your OS to spawn the Dev Tools inspector?</p>
      <p>I'm using windows. crtl+shift+i</p>
<p>* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.</p>
  <p>* What is the current background color for the page?  (Surprisingly, it's not just black!)</p>
      <p>background-color: #0b0f11. It's a shade of blue</p>
  <p>* Tweak the background color to white.</p>
  <p>* Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.</p>
  <p>* Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.</p>
  <p>* Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/</p>
  <p>* Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)</p>
<img src="http://i.imgur.com/5TBZiGb.jpg" title="Hosted by imgur.com"/>
<p>* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.</p>
      <p>If we use inspect this part of website with dev tools, we will see the background is set to an image. The image itself must be changed to change the text.</p>
<p>* Go to www.ticketswizard.com and analyze the page. </p>
  <p>* What is the largest image on the website?</p>
      <p>Picture of Times Square.</p>
      <img src="http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png"/> 
  <p>* Explain how you would find out this information, and list the URL of offending image here and how big it is.</p>
      <p>Found by clicking network tab, sorting by size, finding first entry of type image/png. It is 316KB</p>
      <a href ="http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png">http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png</a>       

<p>* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?</p>
      <p>Losslessly compressing http://www.ticketswizard.com/App_Themes/PXS_Demo/Images/sbx.png could save 79.2KiB (65% reduction) </p>
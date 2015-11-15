## Feed Reader Testing project

Sixth project from the Front-End Web Developer Nanodegree in <a href="https://www.udacity.com" target="_blank">Udacity</a>:
<br>
wrote a number of tests against a pre-existing application with Jasmine, to test the underlying business logic of the application as well as the event handling and DOM manipulation.

### How to run the application

- 'RSS Feeds: have URL' loops through each feed and ensures it has a URL defined and that the URL is not empty.
- 'RSS Feeds: have name' loops through each feed and ensures it has a name defined and that the name is not empy.
- 'The menu: is hidden by default' ensures the menu element is hidden by default.
- 'The menu: changes visibility' ensures the menu changes visibility when the menu icon is clicked. The test also excepts the menu to display when clicked and to hide when clicked again.
- 'Initial Entries: ' ensures the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. 
- 'New Feed Selection: ' ensures when a new feed is loaded by the loadFeed function that the content actually changes. 


------------------------------------

### Udacity's instructions

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

---------------------

### License

The project is licensed under the [MIT license](license.txt).

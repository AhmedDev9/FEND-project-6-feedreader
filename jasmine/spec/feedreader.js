/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    
    /* Define some variables that will be used through the tests */
    var allFeedsLength = allFeeds.length;
    var $bodyMenuHidden = $('body').hasClass('menu-hidden');
    
    /* First test suite, about the RSS feeds definitions,
    * and the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        
        /* 'are defined' tests to make sure that the allFeeds
         * variable has been defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeedsLength).not.toBe(0);
        });

        /* 'have URL' tests to loop through each feed
         * in the allFeeds object and ensure it has a URL
         * defined and that the URL is not empty.
         */        
        it('have URL', function() {
            for (var i = 0; i < allFeedsLength; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }            
        });

        /* 'have name' tests to loop through each feed
         * in the allFeeds object and ensure it has a name
         * defined and that the name is not empty.
         */
        it('have name', function() {
            for (var i = 0; i < allFeedsLength; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }            
        });
    });

    /* Second test suite, about the sidebar menu */
    describe('The menu', function() {   

        /* 'is hidden by default' ensures the menu element is hidden
         * by default, looking if the body tag has the class 'menu-hidden'. 
         */
        it('is hidden by default', function() {
            expect($bodyMenuHidden).toEqual(true);
        });
        
         /* 'changes visibility' ensures that the menu changes visibility
          * when the menu icon is clicked: the menu is displayed when 
          * clicked the first time, and is hidden when clicked again. 
          */
         it('changes visibility', function() {
             $('.menu-icon-link').trigger('click');
             expect($bodyMenuHidden).toBe(false);
             
             $('.menu-icon-link').trigger('click');
             expect($bodyMenuHidden).toBe(true);
         });
    });
    
    /* Third test suite, about the initial entries */
    describe('Initial Entries', function() {        
    
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('', function() {
            
        });
        
    });
        
    /* Fourth test suite, about the new feeds loaded */
    describe('New Feed Selection', function() {
        
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('', function() {
            
        });
        
    });        
}());
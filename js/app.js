/**
 * Primary app class of the REST-CLient-Materialize
 * project.
 *
 * Requires the following:
 * <ol>
 *   <li>jquery</li>
 *   <li>assortedutil.js</li>
 * </ol>
 */
function App() {
}

/**
 * Sign-up value
 * @type {string}
 */

/**
 * Sign-in value
 * @type {string}
 */

/**
 * Login form ID
 * @type {string}
 */
App.LOGIN_FORM_ID = '#login-form';

/**
 * Document reference
 * @type {Document}
 */
App.doc = null;


/**
 * Initializes the application
 */
App.initialize = function(doc) {
  App.doc = doc;

  App.initializeEventHandlers();
}

/**
 * Initializes the event handling needed by the
 * application.
 */
App.initializeEventHandlers = function() {

  $(App.LOGIN_FORM_ID).submit(function (event) {
    // Prevent normal browser behavior which is to
    // change browser content based on form action
    event.preventDefault();

  });

  // Make submit buttons change the submit mode value accordingly
  $('button[type=submit]').click(function (event) {
    // Change submit value based on submit button' value
    App.submitMode = $(this).val();
  });

};

App.signUp = function() {
  alert('aa');
};

App.signIn = function() {
  alert('aa');
};

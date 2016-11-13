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
App.SIGN_UP_VALUE = 'sign-up';

/**
 * Sign-in value
 * @type {string}
 */
App.SIGN_IN_VALUE = 'sign-in';

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
 * The submit mode chosen by user.
 * @type {string}
 */
App.submitMode = null;

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

    // Invoke appropriate method based on submit mode
    switch (App.submitMode)
    {
      case App.SIGN_IN_VALUE: App.signIn(); break;
      case App.SIGN_UP_VALUE: App.signUp(); break;
    }
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

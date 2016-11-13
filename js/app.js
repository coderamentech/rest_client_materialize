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

//-- Login Layer Constants --/

/**
 * Login layer ID
 * @type {string}
 */
App.LOGIN_LAYER_ID = '#login-layer';

/**
 * Show Sign-up ID
 * @type {string}
 */
App.SHOW_SIGNUP_ID = '#show-signup';

/**
 * Login form ID
 * @type {string}
 */
App.LOGIN_FORM_ID = '#login-form';


//-- Sign Up Layer Constants --/

App.CANCEL_SIGNUP_ID = '#cancel-signup';

/**
 * Sign up layer ID
 * @type {string}
 */
App.SIGNUP_LAYER_ID = '#signup-layer';

//-- Static Properties --/

/**
 * Document reference
 * @type {Document}
 */
App.doc = null;


//-- Static Methods --/

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

  //-- Login Layer --//

  $(App.LOGIN_FORM_ID).submit(function (event) {
    // Prevent normal browser behavior which is to
    // change browser content based on form action
    event.preventDefault();

    App.signIn();
  });

  $(App.SHOW_SIGNUP_ID).click(function() {
    $(App.LOGIN_LAYER_ID).hide();
    $(App.SIGNUP_LAYER_ID).show();
  });


  //-- Signup Layer --//

  $(App.CANCEL_SIGNUP_ID).click(function() {
    $(App.SIGNUP_LAYER_ID).hide();
    $(App.LOGIN_LAYER_ID).show();
  });
};

App.signUp = function() {
  alert('aa');
};

App.signIn = function() {
  alert('aa');
};

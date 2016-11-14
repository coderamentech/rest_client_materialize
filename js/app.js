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


//-- User Listing Layer Constants --/

App.USER_LISTING_LAYER_ID = '#user-list-layer';

App.USER_LISTING_ID = '#user-list';

App.CANCEL_USER_LISTING_ID = '#cancel-user-listing';


//-- URL Constants --/

App.URL = 'http://10.11.15.93:8000/app.php';

App.URL_SESSIONS = App.URL + '/sessions';

App.URL_USERS = App.URL + '/users';


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


  //-- User Listing Layer --//

  $(App.CANCEL_USER_LISTING_ID).click(function() {
    $(App.USER_LISTING_LAYER_ID).hide();
    $(App.LOGIN_LAYER_ID).show();
  });
};

App.signUp = function() {
  alert('not implemented yet');
};

/**
 * Signs in to the server and on success, proceed to user listing
 * operation
 *
 * @see handleSignInSuccess_()
 */
App.signIn = function() {
  var form = $(App.LOGIN_FORM_ID);
  var email = form.find('input[name="email"]').val();
  var password = form.find('input[name="password"]').val();

  var data = {'email': email, 'password': password};
  AssortedUtil.transmit(App.URL_SESSIONS, 'POST', data,
    App.handleSignInSuccess_, App.handleSignInFailure_);
};

/**
 * Handles success scenario for signin operation. User listing
 * feature is invoked.
 *
 * @see fetchUsers();
 */
App.handleSignInSuccess_ = function(data, textStatus, xhr) {
  if (xhr.status >= 200 && xhr.status < 300) {
    $(App.LOGIN_LAYER_ID).hide();
    $(App.USER_LISTING_LAYER_ID).show();

    App.fetchUsers();
  }
};

App.handleSignInFailure_ = function() {
  alert('Login failed');
};

/**
 * Fetch user entries and on success, render them
 *
 * @see handlefetchUsersSuccess_()
 */
App.fetchUsers = function() {
  AssortedUtil.transmit(App.URL_USERS, 'GET', null,
    App.handlefetchUsersSuccess_, null);
};

/**
 * Handles Success scenario for fetchUsers(). User listing is populated
 * with data received.
 *
 * @param {string} data data from server
 * @param {string} textStatus ajax status
 * @param {Object} xhr ajax/XmlHttpRequest object
 */
App.handlefetchUsersSuccess_ = function(data, textStatus, xhr) {
  if (!(xhr.status >= 200 && xhr.status < 300)) {
    return;
  }

  if (!data || data.length == 0) {
    return;
  }

  try {
    data = eval(data);
  } catch (e) {
    return;
  }

  var entriesText = '';

  // Traverse user entries and create a row for each one
  for (index in data) {
    var entry = data[index];
    var email = entry['email'];
    var entryText = '' +
      '<li class="collection-item avatar">              ' +
      '  <i class="material-icons circle red">face</i>  ' +
      '  <span class="title">' + email + '</span>       ' +
      '  <a href="#!" class="secondary-content">        ' +
      '    <i class="material-icons">grade</i>          ' +
      '  </a>                                           ' +
      '</li>                                            ';

    entriesText += entryText;
  }

  // Render user listing entries
  $(App.USER_LISTING_ID).html(entriesText);
};


/*
Copyright (c) 2016, coderamen.tech
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

The views and conclusions contained in the software and documentation are those
of the authors and should not be interpreted as representing official policies,
either expressed or implied, of the FreeBSD Project.
*/

/**
 * Utility class
 *
 * Requires the following:
 * <ol>
 *   <li>jquery</li>
 * </ol>
 */
function AssortedUtil() {
}

/**
 * Performs AJAX transmission.
 * @param {string} url destination URL
 * @param {string} method HTTP verb
 * @param {string} data data to be submitted
 * @param {Function} successHandler callback function that accepts
 *     the followin parameters: data, textStatus, xhr
 * @param {Function} failHandler callback function that accepts
 *     the following parameters: xhr object, status request
 */
AssortedUtil.transmit = function(url, method, data, successHandler, failHandler) {

  AssortedUtil.transmitWithBasicAuth(url, method, data, null,
    null, successHandler, failHandler);
}

/**
 * Performs AJAX transmission.
 * @param {string} url destination URL
 * @param {string} method HTTP verb
 * @param {string} data data to be submitted
 * @param {string} username BASIC AUTH username
 * @param {string} password BASIC AUTH password
 * @param {Function} successHandler callback function that accepts
 *     the followin parameters: data, textStatus, xhr
 * @param {Function} failHandler callback function that accepts
 *     the following parameters: xhr object, status request
 */
AssortedUtil.transmitWithBasicAuth = function(url, method, data, username,
    password, successHandler, failHandler) {

  var request = $.ajax({
    url: url,
    method: method,
    data: data,
    username: username,
    password: password,
    crossDomain: true,
    dataType: "text",
  });

  if (username && password) {
    request.xhrFields = { withCredentials: true };

    request.beforeSend = function (xhr) {
        xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ':' + password));
    };
    request.headers = {'Authorization': 'Basic ' + btoa(username + ':' + password)};

    alert('request.headers.Authorization');
  }

  request.success(successHandler);
  request.fail(failHandler);
}

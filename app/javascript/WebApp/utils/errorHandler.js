import _ from 'lodash';

function errorHandler(error, title, message) {
  // if (!ErrorService.config.enabled) { return false; }
  //
  // if (!error || !_.has(error, 'http_status') ||
  //     error.http_status === 409 || error.http_status === 422) {
  //   return null;
  // }
  //
  // error.title = title;
  // error.message = message;
  // error.app_name = ErrorService.config.appName;
  //
  // return this.create('', error);
}

export default errorHandler;

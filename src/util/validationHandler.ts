import * as _ from 'lodash';

export default function (errorLog: any) {
  return _.find(errorLog.errors, 'message').message;
}

import * as _ from 'lodash';

export default function(errorLog: any) {
  return { message: _.find(errorLog.errors, 'message').message };
}

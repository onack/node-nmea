exports.TYPE = 'active-satellites';
exports.ID = 'GSA';

exports.decode = function(fields) {

  return {
    sentence: exports.ID,
    type: exports.TYPE,
    timezone: fields[1],
    day: fields[2],
    month: fields[3],
    year: fields[4],
    timezoneoffsethour: fields[5],
    timezoneoffsetminutes: fields[6]
  };
}

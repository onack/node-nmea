exports.TYPE = 'error-statistics';
exports.ID = 'GST';

exports.decode = function(fields) {

  /*  0	Message ID $GPGST
    1	UTC of position fix
    2	RMS value of the pseudorange residuals; includes carrier phase residuals during periods of RTK (float) and RTK (fixed) processing
    3	Error ellipse semi-major axis 1 sigma error, in meters
    4	Error ellipse semi-minor axis 1 sigma error, in meters
    5	Error ellipse orientation, degrees from true north
    6	Latitude 1 sigma error, in meters
    7	Longitude 1 sigma error, in meters
    8	Height 1 sigma error, in meters
    9	The checksum data, always begins with **/

  return {
    sentence: exports.ID,
    type: exports.TYPE,
    timestamp: fields[1],
    rms: fields[2],
    semiMajorError: fields[3],
    semiMinorError: fields[4],
    orientation: fields[5],
    latError: fields[6],
    lonError: fields[7],
    heightError: fields[8]
  };
}

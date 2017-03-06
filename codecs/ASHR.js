exports.TYPE = 'attitude';
exports.ID = 'ASHR';

exports.decode = function(fields) {


/*    $PASHR, Attitude Sensor, INS

    COLUMN	NAME	DESCRIPTION	EXAMPLE DATA
    1	Sentence Identifier	Attitude Sensor	$PASHR
    2	Time	Time (hhmmss.sss) UTC	134500.125
    3-4	Heading	Vessel Heading in degrees, true	270.34,T
    5	Roll	Vessel Roll in degrees, “+” = port up	0.12
    6	Pitch	Vessel Pitch in degrees, “+” = bow up	1.04
    7	Heave	Vessel Heave in meters	0.34
    8	Roll Accuracy	Roll angle accuracy estimate (stdev) in degrees	0.01
    9	Pitch Accuracy	Pitch angle accuracy estimate (stdev) in degrees	0.03
    10	Heading Accuracy	Heading angle accuracy estimate (stdev) in degrees	0.05/td>
    11	Aiding Status	Unknown	2
    12	IMU Status	Unknown	1
    13	Checksum	2-byte XOR sum of data to check for transmission errors	*7D*/

  return {
    sentence: exports.ID,
    type: exports.TYPE,
    timestamp: fields[1],
    heading1: fields[2],
    heading2: fields[3],
    roll: fields[4],
    pitch: fields[5],
    heave: fields[6],
    rollAcc: fields[7],
    pitchAcc: fields[8],
    headingAcc: fields[9],
    aidingStatus: fields[10],
    imuStatus: fields[11]
  };
};

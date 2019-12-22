const duplicateEncode = require('.');

test('din', () => expect(duplicateEncode('din')).toBe('((('));
test('recede', () => expect(duplicateEncode('recede')).toBe('()()()'));
test('Success', () => expect(duplicateEncode('Success')).toBe(')())())'));
test('(( @', () => expect(duplicateEncode('(( @')).toBe('))(('));
test('xyIxx(xmxxQ@zxx', () => expect(duplicateEncode('xyIxx(xmxxQ@zxx')).toBe(')(())()())((())'));
test('HbHH)HH@HHHHHyzJHH', () => expect(duplicateEncode('HbHH)HH@HHHHHyzJHH')).toBe(')())())()))))((())'));
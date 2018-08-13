const crypto = require('crypto');

const phrase = [
  'we',
  'hold',
  'these',
  'truths',
  'to',
  'be',
  'self-evident',
  'that'
];

const base_level = phrase.map(function(word) {
  let hash = crypto
    .createHash('sha256')
    .update(word)
    .digest('hex');
  return hash;
});

console.log(base_level[0] + base_level[0]);

const hash_one = crypto
  .createHash('sha256')
  .update(base_level[0] + base_level[1])
  .digest('hex');

const hash_two = crypto
  .createHash('sha256')
  .update(base_level[2] + base_level[3])
  .digest('hex');

const hash_three = crypto
  .createHash('sha256')
  .update(base_level[4] + base_level[5])
  .digest('hex');

const hash_four = crypto
  .createHash('sha256')
  .update(base_level[6] + base_level[7])
  .digest('hex');

const hash_five = crypto
  .createHash('sha256')
  .update(hash_one + hash_two)
  .digest('hex');

const hash_six = crypto
  .createHash('sha256')
  .update(hash_three + hash_four)
  .digest('hex');

const hash_seven = crypto
  .createHash('sha256')
  .update(hash_five + hash_six)
  .digest('hex');
//
// console.log(hash_seven);

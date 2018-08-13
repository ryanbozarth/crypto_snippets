const crypto = require('crypto');

const message = 'My first message';
var num_zeros = 4;
nonce = 'my first nonce';
count = 0;

function findNonce(message) {
  while (!isValid(nonce, message)) {
    isValid(nonce, message);
    nonce = String.fromCharCode(nonce.charCodeAt() + 1);
}
    count += 1;
  }
  return console.log(nonce, message);
}

function isValid(nonce, message) {
  const hash = crypto
    .createHash('sha256')
    .update(message)
    .digest('hex')
    .startsWith('0' * num_zeros);
  console.log(hash);
}

console.log(findNonce(nonce, message));

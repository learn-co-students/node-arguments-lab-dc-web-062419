const generatePassword = (len, charset) => {
  let length = len || 8,
    char = charset ||'abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    password = '';
  for (let i = 0, n = char.length; i < length; ++i) {
    password += char.charAt(Math.floor(Math.random() * n))
  }
  return password
}

let pwdLength = 10
let pwdCount = 1
let argv = process.argv 

if (!argv[2] || !argv[3]) {
  console.log('please provide an argument')
  process.exit(1)
}

if (argv[2]) {
  pwdLength = parseInt(argv[2], 10)
}

if (argv[3]) {
  pwdCount = parseInt(argv[3], 10)
}

for (let i = 1; i<=pwdCount; i++) {
  console.log(generatePassword(pwdLength))
}

process.exit(0)
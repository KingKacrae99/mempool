












console.log([Array(3)])
console.log(Math.floor(Math.random() * 1000000),)





let hexCharacters = [...Array(40)].map(()=> Math.floor(Math.random() * 16).toString(16)).join('')
let walletAddress = `0x${hexCharacters}`;
console.log(walletAddress);
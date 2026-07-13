const userList = [
  'Liam', 'Olivia', 'Noah', 'Emma', 'Oliver', 
  'Ava', 'Elijah', 'Charlotte', 'William', 'Sophia',
  'James', 'Amelia', 'Benjamin', 'Isabella', 'Lucas'
];

// create fake wallet address or ID
function createWalletAddress(){
    let hexCharacters = [...Array(40)].map(()=> Math.floor(Math.random()*16).toString(16)).join('');
    let walletAddress = `0x${hexCharacters}`;
    return walletAddress;
}

// retrieve names from the userList array
function getName(Names){
    let userName = Names[Math.floor(Math.random() * Names.length)];
    return userName;
}

// auto generate gas fee
function generateGasFee(){
    let gasFee = Math.floor(Math.random()*(50-10)+1)+10;
    return gasFee;
 }

// BlockChain transaction generator function
export function generateTransaction(counter){

    let gasFee;

    // Gas fee determinant
    if (counter !== 5){
        gasFee = generateGasFee();
    } else {
        // increase gas fee every 
        gasFee = generateGasFee() * counter;
    }

    // Transaction payload
    let transaction = {
            TxId: `tx-${Math.floor(Math.random() * 1000000)}`,
            userName: getName(userList),
            sender: createWalletAddress(),
            receiver: createWalletAddress(),
            gasfee: gasFee
        }

    return transaction;
}
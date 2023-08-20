# vanity-addy

A tool to create a vanity ethereum address like 0x999 or 0x420

This tool is used as a util set to generate prefixed address for a DAO I'm in. 

## Output Example
```javascript
getVanityWallet(500, '999', '', false, (wallet: any) => {
    console.log(wallet);
})


// Output
{ attempts: 500 }
{ attempts: 500 }
{ attempts: 500 }
{
  address: '0x99937031dc741678fF6Cd53E8a06AD8BDcae9f05',
  privKey: 'IREPLACEDTHISITNORMALLYWOULDBETHEPRIVATEKEY',
  attempts: 12
}
```


## Usage
```javascript
getVanityWallet(500, prefix, suffix, isChecksum, (wallet: any) => {
    console.log(wallet);
})
```

### privateToAddress
This function takes a private key as input and returns the corresponding Ethereum address.
### getRandomWallet
This function generates a new random Ethereum wallet and returns its private key and address.
### getVanityWallet
This function generates a new Ethereum wallet with a custom prefix and returns its private key and address.
### isValidVanityAddress
This function takes an Ethereum address and a custom prefix as input and returns true if the address starts with the prefix, and false otherwise.

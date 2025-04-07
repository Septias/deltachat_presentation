## Chatmail
- No passwords
- No private data
- performance?
- No tracking
- No rate limit (like normal providers)
- painless hosting (no matrix)
- 5min speedrun
- using pyinfra
- github.com/deltachat/chatmail
- Postfix, opendkim, acmetool, nginx
- Is a router/relay
- Register = Login; autocreate if account was lost
- No spam filter needed
  - addresses are random
- Outbound filter (no non-pgp goes out)

### Contact discovery
- Scan QR-code
- Can Respond if gmail sender usese autocrypt

### Autocrypt
- Exchange PGP keys

### Securejoin
- Protect against MITM
- Cryptoparty

### Constraints
- OpenPGP + Autocrypt
- DKIM + strict aDKIM
- TLS
- Not more than 2h a month to operate
- securejoin.delta.chat

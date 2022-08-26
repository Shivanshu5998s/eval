const express = require('express');
const app = express();

// const port = 3000;

app.post("/product/create", (req, res) => {
    res.send(req.body);
});

app.listen(7000, () => {
    const obj = { "websiteName": "masaischool.com" }
    var obje = DNS.parse(stringify(obj));

    console.log(obje);
})

var dns = require('dns');

var w3 = dns.lookup('w3schools.com', function (err, addresses, family) {
    console.log(addresses);
});

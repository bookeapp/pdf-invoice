# generate-pdf

### How to use:

```javascript
const sender = {
  businessName: 'Sender company s.r.o.',
  businessAddress: 'Czech Republic, Prague',
  businessId: '1234567890',
  vatId: 'CZ1234567890',
  bankAccount: '0123456789',
  bankCode: '1111',
};
const recipient = {
  businessName: 'Recipient company s r.o.',
  businessAddress: 'Czech Republic, Brno',
  businessId: '1029384756',
  vatId: 'CZ1029384756',
  bankAccount: '777666555333',
  bankCode: '2222',
};
const global = {
  issueDate: new Date('2018-09-10'),
  taxDate: new Date('2018-09-11'),
  vsValue: '100200300',
  ksValue: '1881',
  currency: 'CZK',
  description: 'Payment for goods or services...',
  amountVatRates: [
    {
      rate: 21,
      base: 21475.08,
      value: 4509.77
    },
    {
      rate: 15,
      base: 0,
      value: 0
    },
    {
      rate: 10,
      base: 1000,
      value: 100
    },
    {
      rate: 0,
      base: 974,
      value: 0
    }
  ]
};

(async() => {
  console.log("Creating invoices...");
  //Output file sellInvoiceCS.pdf
  await PdfGenerator.createSellInvoice({ sender, recipient, global, lang: 'cs', fileName: 'sellInvoiceCS.pdf' });
  //Output file buyInvoiceEN.pdf
  await PdfGenerator.createBuyInvoice({ sender, recipient, global, lang: 'en', fileName: 'buyInvoiceEN.pdf' });
  //Output to buffer
  await PdfGenerator.createBuyInvoice({ sender, recipient, global, lang: 'cs'});
  //Output to buffer
  await PdfGenerator.createSellInvoice({ sender, recipient, global, lang: 'en' });
})();
```

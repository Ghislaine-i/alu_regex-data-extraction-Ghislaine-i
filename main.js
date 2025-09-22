// ======================
// Regex Definitions
// ======================

// Email addresses: matches user@example.com, firstname.lastname@company.co.uk
const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z]{2,})+/gi;

// Phone numbers (various formats): (123) 456-7890, 123-456-7890, 123.456.7890
const phoneRegex = /(?:\(\d{3}\)\s\d{3}-\d{4}|\d{3}-\d{3}-\d{4}|\d{3}\.\d{3}\.\d{4})/g;

// Credit card numbers: 1234 5678 9012 3456 OR 1234-5678-9012-3456
const creditCardRegex = /\b(?:\d{4}(?: \d{4}){3}|\d{4}(?:-\d{4}){3})\b/g;

// Times: 24-hour (14:30) OR 12-hour (2:30 PM)
const timeRegex = /\b(?:(?:[01]\d|2[0-3]):[0-5]\d|(?:0?[1-9]|1[0-2]):[0-5]\d\s?(?:AM|PM))\b/gi;

// Currency amounts: $19.99 OR $1,234.56
const currencyRegex = /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})\b/g;

// ======================
// Test Data
// ======================
const text = `
  Emails: user@example.com, firstname.lastname@company.co.uk
  Phones: (123) 456-7890, 123-456-7890, 123.456.7890
  Credit Cards: 1234 5678 9012 3456, 1234-5678-9012-3456
  Times: 14:30, 2:30 PM
  Prices: $19.99, $1,234.56
`;

// ======================
// Run Tests
// ======================
console.log("Emails:", text.match(emailRegex));
console.log("Phones:", text.match(phoneRegex));
console.log("Credit Cards:", text.match(creditCardRegex));
console.log("Times:", text.match(timeRegex));
console.log("Currency:", text.match(currencyRegex));

Role: You are a senior frontend developer focused on data validation UX.

Intent:
Add strict validation rules to the existing admission form.

Constraints:
- Validate fields in real time
- Block submission on strict rule violations
- Show inline red error messages
- Show a global banner if Interview Status = Rejected

Strict Rules:
- Name: required, min 2 characters, no numbers
- Email: valid format
- Phone: 10 digits, starts with 6–9
- Highest Qualification: required
- Aadhaar: exactly 12 digits
- Offer Letter Sent: Yes only if Interview Status is Cleared or Waitlisted

Output:
Updated form with strict validation only.
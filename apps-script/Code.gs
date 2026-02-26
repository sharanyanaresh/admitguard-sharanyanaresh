function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('AdmitGuard')
    .addItem('Open Validation Panel', 'openSidebar')
    .addToUi();
}

function openSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('Sidebar')
    .setTitle('AdmitGuard');
  SpreadsheetApp.getUi().showSidebar(html);
}

function validateSelectedRow() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const range = sheet.getActiveRange();
  if (!range || range.getRow() === 1) {
    return { ok: false, errors: ['Please select a candidate row (not header).'] };
  }

  const row = range.getRow();
  const values = sheet.getRange(row, 1, 1, 11).getValues()[0];

  const [
    fullName, email, phone, dob, qualification,
    gradYear, score, interviewStatus, aadhaar, offerSent
  ] = values;

  const errors = [];

  // 1. Full Name
  if (!fullName || String(fullName).length < 2 || /\d/.test(fullName)) {
    errors.push('Full Name must be at least 2 characters and contain no numbers.');
  }

  // 2. Email
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    errors.push('Email must be a valid email address.');
  }

  // 3. Phone
  if (!/^[6-9]\d{9}$/.test(String(phone))) {
    errors.push('Phone must be a 10-digit Indian number starting with 6–9.');
  }

  // 4. Highest Qualification
  const allowedQuals = ['B.Tech','B.E.','B.Sc','BCA','M.Tech','M.Sc','MCA','MBA'];
  if (!allowedQuals.includes(String(qualification))) {
    errors.push('Highest Qualification must be one of the allowed values.');
  }

  // 5. Interview Status
  if (String(interviewStatus) === 'Rejected') {
    errors.push('Rejected candidates cannot be enrolled.');
  }

  // 6. Aadhaar
  if (!/^\d{12}$/.test(String(aadhaar))) {
    errors.push('Aadhaar must be exactly 12 digits.');
  }

  // 7. Offer Letter dependency
  if (String(offerSent) === 'Yes' &&
      !['Cleared','Waitlisted'].includes(String(interviewStatus))) {
    errors.push('Offer Letter can be Yes only if Interview Status is Cleared or Waitlisted.');
  }

  return errors.length ? { ok: false, errors } : { ok: true };
}
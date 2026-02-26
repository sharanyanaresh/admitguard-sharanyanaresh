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
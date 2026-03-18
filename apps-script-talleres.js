// ============================================================
// PASTE THIS INTO: Spreadsheet > Extensions > Apps Script
// Then: Deploy > New deployment > Web app
//   - Execute as: Me
//   - Who has access: Anyone
// Copy the deployment URL and paste it into both HTML files
// ============================================================

const SHEET_NAME = 'Inscripciones';

function doGet(e) {
  const params = e.parameter || {};
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

  // Write mode: ?action=enroll&student=...&w1=...&w2=...
  if (params.action === 'enroll') {
    const student = params.student;
    const w1 = params.w1 || '';
    const w2 = params.w2 || '';
    const timestamp = new Date().toISOString();

    // Find existing row for this student (overwrite)
    const data = sheet.getDataRange().getValues();
    let existingRow = -1;
    for (let i = 1; i < data.length; i++) {
      if (data[i][1] === student) {
        existingRow = i + 1; // 1-indexed
        break;
      }
    }

    const rowData = [timestamp, student, w1, w2];
    if (existingRow > 0) {
      sheet.getRange(existingRow, 1, 1, 4).setValues([rowData]);
    } else {
      sheet.appendRow(rowData);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok', student, workshops: [w1, w2].filter(Boolean) }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // Read mode (default): return all enrollments
  const data = sheet.getDataRange().getValues();
  const rows = data.slice(1);

  const enrollments = {};
  rows.forEach(row => {
    const student = row[1]; // Alumno
    const w1 = row[2];     // Taller 1
    const w2 = row[3];     // Taller 2
    if (student) {
      const workshops = [w1];
      if (w2) workshops.push(w2);
      enrollments[student] = workshops;
    }
  });

  return ContentService
    .createTextOutput(JSON.stringify(enrollments))
    .setMimeType(ContentService.MimeType.JSON);
}

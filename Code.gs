function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('CSV Importer')
      .addItem('Import CSV', 'showFileDialog')
      .addToUi();
}

function showFileDialog() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('FileUploadForm')
      .setWidth(400)
      .setHeight(200);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Upload CSV File');
}

function importCSVData(data) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var csvData = Utilities.parseCsv(data);
    var numRows = csvData.length;
    var numCols = csvData[0].length;
    
    // Assuming the first row contains headers
    var headers = csvData[0];
    
    // Let the user select columns to import
    var response = SpreadsheetApp.getUi().prompt('Select Columns', 'Enter the comma-separated column indices to import (e.g., 1, 3, 5)', SpreadsheetApp.getUi().ButtonSet.OK_CANCEL);
    
    if (response.getSelectedButton() === SpreadsheetApp.getUi().Button.OK) {
      var selectedColumns = response.getResponseText().split(',').map(function(item) {
        return parseInt(item.trim()) - 1;
      });
      
      // Import selected columns
      for (var row = 1; row < numRows; row++) {
        var rowData = [];
        for (var colIndex of selectedColumns) {
          rowData.push(csvData[row][colIndex]);
        }
        sheet.appendRow(rowData);
      }
      SpreadsheetApp.getUi().alert('CSV data imported successfully!');
    }
  } catch (e) {
    SpreadsheetApp.getUi().alert('Error importing CSV data: ' + e);
  }
}

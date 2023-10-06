# CSV Importer for Google Sheets ✨

Data analysts around the world handle massive amounts of data to derive meaningful insights for their organizations. Among the tools they use, Google Sheets stands out due to its ease of use, accessibility, and collaborative features. However, many analysts have identified a recurring pain point: the cumbersome process of importing CSV files into Google Sheets repeatedly.

This project aims to solve this problem by providing a simple and efficient solution for importing CSV files into Google Sheets. With this CSV Importer, users can drag and drop CSV files onto their Google Sheet, select which columns to import, and even filter the data before importing it. This saves time and makes the data analysis process much smoother.


## Project Status

- [x] My code's working just fine! 🥳
- [x] I have recorded a video showing it working and embedded it in the README ▶️ (You can watch it [here](https://drive.google.com/file/d/10IDf7gmlm_ymSf-0bm2k0B9gR0KG2NQI/view?usp=sharing))
- [x] I have tested all the normal working cases 😎
- [x]  I added my very planned-out approach to the problem at the end of this README 📜
      
# CSV Importer for Google Sheets

This is a simple Google Sheets script that allows you to import data from a CSV file into your Google Sheet. Follow the steps below to set it up:

## Installation

1. **Open Google Sheets**: Open the Google Sheets document where you want to implement the CSV importer.

2. **Enable Google Apps Script**:
   - Click on "Extensions" in the top menu, then select "Apps Script." This will open the Google Apps Script editor.

3. **Copy and Paste Code**:
   - Inside the Google Apps Script editor, delete any existing code and paste the code from the provided `code.gs` file. You should have two functions: `onOpen()` and `importCSVData(data)`.

4. **Save the Project**:
   - Click the floppy disk icon or press Ctrl + S (Windows) or Command + S (Mac) to save your project. You can give it a name when prompted.

5. **Create an HTML File**:
   - In the Google Apps Script editor, click on the "+" icon next to "Files" in the left sidebar, then select "HTML."
   - Name the HTML file as "FileUploadForm" and paste the HTML code from the provided `FileUploadForm.html` file into this file. Save it.

## Authorization

Before you can run the script, you need to authorize it:

1. **Authorize the Script**:
   - Click the "Run" button (triangle icon) to run the `onOpen()` function.
   - You will be prompted to review permissions and grant access to the script. Follow the prompts to authorize it.

## Usage

1. **Create Custom Menu**:
   - After authorization, you should see a new menu item called "CSV Importer" in your Google Sheets menu.
   - Click on it, and then select "Import CSV" to open the file upload dialog.
  
     ![image](https://github.com/StackItHQ/stackit-hiring-assignment-Jsujanchowdary/assets/91127394/a7a05917-97d4-4151-b3da-0a713f9333a0)


2. **Upload a CSV File**:
   - In the "Upload CSV File" dialog, click the "Choose File" button to select a CSV file from your computer.
   - After selecting the file, click the "Upload" button.
  
     ![image](https://github.com/StackItHQ/stackit-hiring-assignment-Jsujanchowdary/assets/91127394/46e2868e-9c31-4e95-829a-e2242c83aa1e)


3. **Map Columns**:
   - The script will prompt you to enter the comma-separated column indices you want to import (e.g., 1, 3, 5).
   - Enter the indices and click "OK."
  
     ![image](https://github.com/StackItHQ/stackit-hiring-assignment-Jsujanchowdary/assets/91127394/98e26064-2659-481b-9afd-862a6c02795c)


4. **Import Data**:
   - The script will import the selected columns from the CSV file into your Google Sheet.
   - You will receive a success message when the import is complete.
  
     ![image](https://github.com/StackItHQ/stackit-hiring-assignment-Jsujanchowdary/assets/91127394/06777877-e912-44ce-9ae3-19f8d91b630c)


## Additional Notes

- This is a simplified example for a basic CSV importer. For more advanced features, you may need to develop a more complex solution.
- Feel free to customize the code to suit your specific needs.

That's it! You have successfully set up and run a basic CSV importer in Google Sheets using this script.

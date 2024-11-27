Chapter-12
WEB SCRAPING
This repository contains several Python scripts that demonstrate various functionalities, including web scraping, file downloading, and web automation.

Table of Contents
Program 1: mapIt.py
Program 2: Downloading Files
Program 3: Web Scraping
Program 4: Selenium Web Automation
Program 1: mapIt.py
Description:
This script launches a web browser to display a Google Maps page for a given address. It can take an address from the command line or from the clipboard.

Command Line Usage:

python mapIt.py "870 Valencia St, San Francisco, CA 94110"
Code Snippet:

#! python3
# mapIt.py - Launches a map in the browser using an address from the command line or clipboard.
import webbrowser, sys, pyperclip

if len(sys.argv) > 1:
    # Get address from command line.
    address = ' '.join(sys.argv[1:])
else:
    # Get address from clipboard.
    address = pyperclip.paste()

webbrowser.open('https://www.google.com/maps/place/' + address)
Program 2: Downloading Files
Description:
This program demonstrates how to download files from the web using the requests module. It allows users to fetch and save content from a specified URL.

Command Line Usage:
First, ensure you have the requests module installed:

pip install requests
Then run the following code to download a file:

import requests

url = 'https://automatetheboringstuff.com/files/rj.txt'
res = requests.get(url)
res.raise_for_status()  # Check for request errors

with open('RomeoAndJuliet.txt', 'wb') as playFile:
    for chunk in res.iter_content(100000):
        playFile.write(chunk)
Program 3: Web Scraping
Description:
This section covers basic web scraping techniques using Python libraries such as requests and BeautifulSoup. It demonstrates how to extract data from web pages.

Command Line Usage:
Make sure you have the necessary libraries installed:

pip install requests beautifulsoup4
Example Code Snippet:

import requests
from bs4 import BeautifulSoup

url = 'http://example.com'
res = requests.get(url)
soup = BeautifulSoup(res.text, 'html.parser')

print(soup.title.text)  # Prints the title of the webpage
Program 4: Selenium Web Automation
Description:
This program demonstrates how to use Selenium to automate web browser actions such as filling out forms and clicking buttons.

Command Line Usage:
First, ensure you have the selenium module installed and download the appropriate WebDriver for your browser (e.g., ChromeDriver for Google Chrome):

pip install selenium
Then run the following code to open a webpage and perform actions:

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

# Set up the WebDriver (make sure to specify the correct path to your WebDriver)
driver = webdriver.Chrome(executable_path='/path/to/chromedriver')

# Open a webpage
driver.get("http://example.com")

# Find an element by name and send keys (e.g., filling out a search box)
search_box = driver.find_element_by_name("q")
search_box.send_keys("Hello World" + Keys.RETURN)

# Close the browser after some time
driver.implicitly_wait(5)  # Wait for elements to load (optional)
driver.quit()
Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Chapter-13
# WORKING WITH EXCEL SPREADSHEETS

This guide demonstrates how to automate tasks in Excel spreadsheets using Python and the openpyxl library. With this library, you can programmatically create, update, style, and manipulate Excel files to handle even large datasets efficiently.

## Features

### 1. Updating Spreadsheet Data
- *Objective*: Correct or update values in an Excel sheet.
- *Approach*: Use a dictionary to store the updates and loop through the rows of the sheet to apply changes.
  
#### Code Example:
python
import openpyxl

# Load workbook and sheet
wb = openpyxl.load_workbook('produceSales.xlsx')
sheet = wb
Getting cells from the sheets
>>> import openpyxl
>>> wb = openpyxl.load_workbook('example.xlsx')
>>> sheet = wb['Sheet1'] # Get a sheet from the workbook.
>>> sheet['A1'] # Get a cell from the sheet.
<Cell 'Sheet1'.A1>
>>> sheet['A1'].value # Get the value from the cell.
datetime.datetime(2015, 4, 5, 13, 34, 2)
>>> c = sheet['B1'] # Get another cell from the sheet.
>>> c.value
'Apples'
>>> # Get the row, column, and value from the cell.
>>> 'Row %s, Column %s is %s' % (c.row, c.column, c.value)
'Row 1, Column B is Apples'
>>> 'Cell %s is %s' % (c.coordinate, c.value)
'Cell B1 is Apples'
>>> sheet['C1'].value
2. Styling Cells
Objective: Apply custom styles like bold, italic, or specific fonts to cells.
Key Class: Font from openpyxl.styles.
Code Example:
from openpyxl import Workbook
from openpyxl.styles import Font

# Create a new workbook
wb = Workbook()
sheet = wb.active

# Apply custom styles
sheet['A1'].font = Font(name='Times New Roman', bold=True)
sheet['A1'] = 'Bold Times New Roman'

sheet['B3'].font = Font(size=24, italic=True)
sheet['B3'] = '24 pt Italic'

# Save the workbook
wb.save('styled.xlsx')
3. Adding Formulas
Objective: Use Excel formulas in cells to perform calculations dynamically.
Method: Assign formulas to cells as strings.
Code Example:
from openpyxl import Workbook

wb = Workbook()
sheet = wb.active

# Set values and formulas
sheet['A1'] = 200
sheet['A2'] = 300
sheet['A3'] = '=SUM(A1:A2)'  # Add a formula

# Save the workbook
wb.save('formulas.xlsx')
4. Adjusting Rows and Columns
Objective: Change the row height or column width for better formatting.
Attributes: Use row_dimensions and column_dimensions.
Code Example:
from openpyxl import Workbook

wb = Workbook()
sheet = wb.active

# Adjust dimensions
sheet['A1'] = 'Tall row'
sheet['B2'] = 'Wide column'
sheet.row_dimensions[1].height = 70  # Set row height
sheet.column_dimensions['B'].width = 20  # Set column width

# Save the workbook
wb.save('dimensions.xlsx')
5. Merging and Unmerging Cells
Objective: Combine or split cells for better organization or formatting.
Code Example:
from openpyxl import Workbook

wb = Workbook()
sheet = wb.active

# Merge cells
sheet.merge_cells('A1:D3')
sheet['A1'] = 'Merged Cells'

# Unmerge cells
sheet.unmerge_cells('A1:D3')

# Save the workbook
wb.save('merged.xlsx')
6. Freezing Panes
Objective: Freeze specific rows or columns for easy scrolling.
Method: Set the freeze_panes attribute.
Code Example:
from openpyxl import load_workbook

wb = load_workbook('produceSales.xlsx')
sheet = wb.active

# Freeze the first row
sheet.freeze_panes = 'A2'

# Save the workbook
wb.save('freezeExample.xlsx')
7. Creating Charts
Objective: Add charts (e.g., bar, line, pie) to visualize data in spreadsheets.
Classes: Use Reference, Series, and chart types like BarChart.
Code Example:
>>> import openpyxl
>>> wb = openpyxl.Workbook()
>>> sheet = wb.active
>>> for i in range(1, 11): # create some data in column A
...     sheet['A' + str(i)] = i
...
>>> refObj = openpyxl.chart.Reference(sheet, min_col=1, min_row=1, max_col=1,
max_row=10)
>>> seriesObj = openpyxl.chart.Series(refObj, title='First series')

>>> chartObj = openpyxl.chart.BarChart()
>>> chartObj.title = 'My Chart'
>>> chartObj.append(seriesObj)

>>> sheet.add_chart(chartObj, 'C5')
>>> wb.save('sampleChart.xlsx')
Applications
The openpyxl library can help with:

Automating data entry and processing.
Formatting large datasets programmatically.
Generating reports with consistent styling and analysis.
Visualizing data with embedded charts.
Installation
To install the openpyxl library, use pip:

pip install openpyxl
Chapter-14
# Working with Google Sheets

Google Sheets, the free, web-based spreadsheet application available to anyone with a Google account or Gmail address, has become a useful, feature-rich competitor to Excel. Google Sheets has its own API, but this API can be confusing to learn and use. This chapter covers the EZSheets third-party module, documented at [EZSheets Documentation](https://ezsheets.readthedocs.io/). While not as full-featured as the official Google Sheets API, EZSheets makes common spreadsheet tasks easy to perform.

## Installing and Setting Up EZSheets

You can install EZSheets by opening a new terminal window and running:
sh
pip install --user ezsheets
As part of this installation, EZSheets will also install the google-api-python-client, google-auth-httplib2, and google-auth-oauthlib modules. These modules allow your program to log in to Google’s servers and make API requests. EZSheets handles the interaction with these modules, so you don’t need to concern yourself with how they work.

Obtaining Credentials and Token Files
Before you can use EZSheets, you need to enable the Google Sheets and Google Drive APIs for your Google account. Visit the following web pages and click the Enable API buttons at the top of each:

Enable Google Sheets API
Enable Google Drive API
You’ll also need to obtain three files, which you should save in the same folder as your .py Python script that uses EZSheets:

A credentials file named credentials-sheets.json
A token for Google Sheets named token-sheets.pickle
A token for Google Drive named token-drive.pickle
The easiest way to obtain a credentials file:
Go to the Google Sheets Python Quickstart page
Click the blue Enable the Google Sheets API button
Follow the prompts to download a credentials.json file, rename it to credentials-sheets.json, and place it in the same folder as your Python scripts.
import ezsheets

# The first time you import the EZSheets module, it will open a new browser window for you to log in to your Google account.
Revoking the Credentials File
If you accidentally share the credential or token files with someone, they won’t be able to change your Google account password, but they will have access to your spreadsheets. You can revoke these files by going to the Google Cloud Platform developer’s console page at Google Cloud Platform Console.

Click the Credentials link on the sidebar.
Click the trash can icon next to the credentials file you’ve accidentally shared.
To generate a new credentials file, click the Create Credentials button and select OAuth client ID.
For Application Type, select Other and give the file any name you like.
Download and rename the file to credentials-sheets.json.
Spreadsheet Objects
In Google Sheets, a spreadsheet can contain multiple sheets (also called worksheets), and each sheet contains columns and rows of values.

Creating, Uploading, and Listing Spreadsheets
import ezsheets

# Make a Spreadsheet object from an existing Google Sheets spreadsheet
ss = ezsheets.Spreadsheet('your_spreadsheet_id')
print(ss.title)

# Create a new, blank spreadsheet
ss = ezsheets.createSpreadsheet('Title of My New Spreadsheet')

# Upload an existing spreadsheet
ss = ezsheets.upload('my_spreadsheet.xlsx')

# List the spreadsheets in your Google account
print(ezsheets.listSpreadsheets())
Spreadsheet Attributes
The Spreadsheet object has the following attributes for manipulating the spreadsheet itself: title, spreadsheetId, url, sheetTitles, and sheets.

print(ss.title)
ss.title = 'New Title'
print(ss.spreadsheetId)
print(ss.url)
print(ss.sheetTitles)
print(ss.sheets)
Downloading and Uploading Spreadsheets
# Download a Google Sheets spreadsheet in various formats
ss.downloadAsExcel('filename.xlsx')
ss.downloadAsODS('filename.ods')
ss.downloadAsCSV('filename.csv')
ss.downloadAsTSV('filename.tsv')
ss.downloadAsPDF('filename.pdf')
ss.downloadAsHTML('filename.zip')
Deleting Spreadsheets
# Delete a spreadsheet
ss.delete() 

# Permanently delete a spreadsheet
ss.delete(permanent=True)
Sheet Objects
A Spreadsheet object will have one or more Sheet objects.

import ezsheets

ss = ezsheets.Spreadsheet('your_spreadsheet_id')
sheets = ss.sheets

# Access Sheet objects
first_sheet = ss[0]
sheet_by_name = ss['Sheet Name']
Reading and Writing Data
You can read data from and write data to cells using the Sheet object’s methods.

import ezsheets

ss = ezsheets.createSpreadsheet('My Spreadsheet')
sheet = ss[0]  # Get the first sheet in this spreadsheet

# Write data to cells
sheet['A1'] = 'Name'
sheet['B1'] = 'Age'
sheet['C1'] = 'Favorite Movie'

# Read data from cells
print(sheet['A1'])
print(sheet['A2'])  # Empty cells return a blank string
print(sheet[2, 1])  # Column 2, Row 1 is the same address as B1

# Refresh the local data in the Sheet object
sheet.refresh()
Column and Row Addressing
Cell addressing works in Google Sheets just like in Excel. The only difference is that, unlike Python’s 0-based list indexes, Google Sheets have 1-based columns and rows. You can convert between string-style and tuple-style addresses using the convertAddress() function, and convert between column letters and numbers with getColumnLetterOf() and getColumnNumberOf().

import ezsheets

# Convert addresses
print(ezsheets.convertAddress('A2'))
print(ezsheets.convertAddress(1, 2))

# Convert column letters and numbers
print(ezsheets.getColumnLetterOf(2))
print(ezsheets.getColumnNumberOf('B'))
print(ezsheets.getColumnLetterOf(999))
print(ezsheets.getColumnNumberOf('ZZZ'))
Reading and Writing Entire Columns and Rows
Reading and writing data one cell at a time can be slow. Fortunately, EZSheets has methods for reading and writing entire columns and rows at once: getColumn(), getRow(), updateColumn(), and updateRow().

import ezsheets

ss = ezsheets.upload('produceSales.xlsx')
sheet = ss[0]

# Read entire rows and columns
print(sheet.getRow(1))
print(sheet.getColumn('A'))

# Update entire rows and columns
sheet.updateRow(3, ['Pumpkin', '11.50', '20', '230'])
columnOne = [value.upper() for value in sheet.getColumn(1)]
sheet.updateColumn(1, columnOne)

# Get and update all rows at once
rows = sheet.getRows()
rows[1][0] = 'PUMPKIN'
rows[10][2] = '400'
rows[10][3] = '904'
sheet.updateRows(rows)
You can read and modify the number of rows and columns in a sheet with the rowCount and columnCount attributes.

print(sheet.rowCount)
print(sheet.columnCount)

sheet.columnCount = 4
print(sheet.columnCount)
Creating and Deleting Sheets
All Google Sheets spreadsheets start with a single sheet named “Sheet1.” You can add additional sheets to the end of the list of sheets with the createSheet() method.

import ezsheets

ss = ezsheets.createSpreadsheet('Multiple Sheets')
print(ss.sheetTitles)

ss.createSheet('Spam')
ss.createSheet('Eggs')
ss.createSheet('Bacon', 0)

print(ss.sheetTitles)
The delete() method will delete the sheet from the spreadsheet, while the clear() method will clear all the cells.

print(ss.sheetTitles)

ss[0].delete()  # Delete the sheet at index 0
ss['Spam'].delete()  # Delete the sheet named "Spam"
sheet = ss['Eggs']
sheet.delete()  # Delete the sheet named "Eggs"
ss[0].clear()  # Clear the sheet

print(ss.sheetTitles)
Copying Sheets
To copy a Sheet object to another Spreadsheet object, call the copyTo() method.

import ezsheets

ss1 = ezsheets.createSpreadsheet('First Spreadsheet')
ss2 = ezsheets.createSpreadsheet('Second Spreadsheet')

ss1[0].updateRow(1, ['Some', 'data', 'in', 'the', 'first', 'row'])
ss1[0].copyTo(ss2)

print(ss2.sheetTitles)
Working with Google Sheets Quotas
Google Sheets has limits on the number of read and write operations you can perform. Exceeding this quota will raise a googleapiclient.errors.HttpError exception.

Chapter -15
Working with PDF and Word Documents
PDF Documents
Extracting Text from PDFs
To extract text from a PDF using PyPDF2:

import PyPDF2

# Open the PDF file in read-binary mode
pdfFileObj = open('meetingminutes.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)

# Get the number of pages in the PDF
print(pdfReader.numPages)

# Extract text from the first page
pageObj = pdfReader.getPage(0)
print(pageObj.extractText())

pdfFileObj.close()
Decrypting PDFs
To read an encrypted PDF:

import PyPDF2

pdfReader = PyPDF2.PdfFileReader(open('encrypted.pdf', 'rb'))

if pdfReader.isEncrypted:
    pdfReader.decrypt('rosebud')
    pageObj = pdfReader.getPage(0)
    print(pageObj.extractText())
Creating PDFs
Copying Pages
To combine pages from multiple PDFs:

import PyPDF2

pdf1File = open('meetingminutes.pdf', 'rb')
pdf2File = open('meetingminutes2.pdf', 'rb')
pdf1Reader = PyPDF2.PdfFileReader(pdf1File)
pdf2Reader = PyPDF2.PdfFileReader(pdf2File)
pdfWriter = PyPDF2.PdfFileWriter()

for pageNum in range(pdf1Reader.numPages):
    pageObj = pdf1Reader.getPage(pageNum)
    pdfWriter.addPage(pageObj)

for pageNum in range(pdf2Reader.numPages):
    pageObj = pdf2Reader.getPage(pageNum)
    pdfWriter.addPage(pageObj)

pdfOutputFile = open('combinedminutes.pdf', 'wb')
pdfWriter.write(pdfOutputFile)
pdfOutputFile.close()
pdf1File.close()
pdf2File.close()
Rotating Pages
To rotate a page in a PDF:

import PyPDF2

minutesFile = open('meetingminutes.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(minutesFile)
page = pdfReader.getPage(0)
page.rotateClockwise(90)

pdfWriter = PyPDF2.PdfFileWriter()
pdfWriter.addPage(page)

resultPdfFile = open('rotatedPage.pdf', 'wb')
pdfWriter.write(resultPdfFile)
resultPdfFile.close()
minutesFile.close()
Overlaying Pages
To overlay a watermark on a PDF:

import PyPDF2

minutesFile = open('meetingminutes.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(minutesFile)
minutesFirstPage = pdfReader.getPage(0)
pdfWatermarkReader = PyPDF2.PdfFileReader(open('watermark.pdf', 'rb'))
minutesFirstPage.mergePage(pdfWatermarkReader.getPage(0))
pdfWriter = PyPDF2.PdfFileWriter()
pdfWriter.addPage(minutesFirstPage)

for pageNum in range(1, pdfReader.numPages):
    pageObj = pdfReader.getPage(pageNum)
    pdfWriter.addPage(pageObj)

resultPdfFile = open('watermarkedCover.pdf', 'wb')
pdfWriter.write(resultPdfFile)
resultPdfFile.close()
minutesFile.close()
Encrypting PDFs
To encrypt a PDF:

import PyPDF2

pdfReader = PyPDF2.PdfFileReader(open('meetingminutes.pdf', 'rb'))
pdfWriter = PyPDF2.PdfFileWriter()

for pageNum in range(pdfReader.numPages):
    pdfWriter.addPage(pdfReader.getPage(pageNum))

pdfWriter.encrypt('swordfish')
resultPdf = open('encryptedminutes.pdf', 'wb')
pdfWriter.write(resultPdf)
resultPdf.close()
Combining Select Pages from Many PDFs
To combine specific pages from multiple PDFs:

import PyPDF2, os

pdfFiles = [filename for filename in os.listdir('.') if filename.endswith('.pdf')]
pdfFiles.sort(key=str.lower)
pdfWriter = PyPDF2.PdfFileWriter()

for filename in pdfFiles:
    pdfFileObj = open(filename, 'rb')
    pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
    for pageNum in range(1, pdfReader.numPages):
        pageObj = pdfReader.getPage(pageNum)
        pdfWriter.addPage(pageObj)

pdfOutput = open('allminutes.pdf', 'wb')
pdfWriter.write(pdfOutput)
pdfOutput.close()
Word Documents
Reading Word Documents
To read text from a .docx file:

import docx

doc = docx.Document('demo.docx')

for para in doc.paragraphs:
    print(para.text)
Getting the Full Text from a .docx File
To get all text from a .docx file:

import docx

def getText(filename):
    doc = docx.Document(filename)
    fullText = [para.text for para in doc.paragraphs]
    return '\n'.join(fullText)

print(getText('demo.docx'))
Writing Word Documents
To create and write to a .docx file:

import docx

doc = docx.Document()
doc.add_paragraph('Hello, world!')
doc.save('helloworld.docx')
To add multiple paragraphs and runs:

import docx

doc = docx.Document()
paraObj1 = doc.add_paragraph('This is a second paragraph.')
paraObj2 = doc.add_paragraph('This is a yet another paragraph.')
paraObj1.add_run(' This text is being added to the second paragraph.')
doc.save('multipleParagraphs.docx')
Adding Headings
To add headings:

import docx

doc = docx.Document()
doc.add_heading('Header 0', 0)
doc.add_heading('Header 1', 1)
doc.add_heading('Header 2', 2)
doc.add_heading('Header 3', 3)
doc.add_heading('Header 4', 4)
doc.save('headings.docx')
Adding Line and Page Breaks
To add line and page breaks:

import docx

doc = docx.Document()
doc.add_paragraph('This is on the first page!')
doc.paragraphs[0].runs[0].add_break(docx.enum.text.WD_BREAK.PAGE)
doc.add_paragraph('This is on the second page!')
doc.save('twoPage.docx')
Adding Pictures
To add pictures:

import docx

doc = docx.Document()
doc.add_picture('zophie.png', width=docx.shared.Inches(1), height=docx.shared.Cm(4))
doc.save('picture.docx')
Creating PDFs from Word Documents
To convert a Word document to PDF:

# This script runs on Windows only, and you must have Word installed.
import win32com.client # install with "pip install pywin32==224"
import docx

wordFilename = 'your_word_document.docx'
pdfFilename = 'your_pdf_filename.pdf'

doc = docx.Document()
# Code to create Word document goes here.
doc.save(wordFilename)

wdFormatPDF = 17 # Word's numeric code for PDFs.
wordObj = win32com.client.Dispatch('Word.Application')

docObj = wordObj.Documents.Open(wordFilename)
docObj.SaveAs(pdfFilename, FileFormat=wdFormatPDF)
docObj.Close()
wordObj.Quit()
Chapter -16
# Working with CSV Files and JSON Data

This guide covers how to work with CSV files and JSON data using Python, focusing on the following topics:
- Reading and writing CSV files
- Using JSON for data interchange
- Working with APIs to fetch data

## The CSV Module
### Reading Data from CSV Files
To read data from a CSV file, use the csv.reader object. Here’s an example:

python
import csv

exampleFile = open('example.csv')
exampleReader = csv.reader(exampleFile)
exampleData = list(exampleReader)
print(exampleData)
Reading Data from Reader Objects in a Loop
For large CSV files, iterate over rows using a for loop:

import csv

exampleFile = open('example.csv')
exampleReader = csv.reader(exampleFile)
for row in exampleReader:
    print('Row #' + str(exampleReader.line_num) + ' ' + str(row))
Writing Data to CSV Files
To write data to a CSV file, use the csv.writer object:

import csv

outputFile = open('output.csv', 'w', newline='')
outputWriter = csv.writer(outputFile)
outputWriter.writerow(['spam', 'eggs', 'bacon', 'ham'])
outputFile.close()
DictReader and DictWriter CSV Objects
Reading CSV Files with Header Rows
Use DictReader for CSV files that contain header rows:

import csv

exampleFile = open('exampleWithHeader.csv')
exampleDictReader = csv.DictReader(exampleFile)
for row in exampleDictReader:
    print(row['Timestamp'], row['Fruit'], row['Quantity'])
Writing CSV Files with Header Rows
Use DictWriter to write CSV files with header rows:

import csv

outputFile = open('output.csv', 'w', newline='')
outputDictWriter = csv.DictWriter(outputFile, ['Name', 'Pet', 'Phone'])
outputDictWriter.writeheader()
outputDictWriter.writerow({'Name': 'Alice', 'Pet': 'cat', 'Phone': '555-1234'})
outputFile.close()
JSON and APIs
Working with JSON Data
JSON is a format to store data that is easy for machines to parse and generate. Use the json module to handle JSON data:

import json

jsonData = '{"name": "Zophie", "isCat": true, "miceCaught": 0, "felineIQ": null}'
pythonValue = json.loads(jsonData)
print(pythonValue)
Writing JSON Data
Convert Python values to JSON-formatted strings:

import json

pythonValue = {'isCat': True, 'miceCaught': 0, 'name': 'Zophie', 'felineIQ': None}
jsonData = json.dumps(pythonValue)
print(jsonData)
Fetching Current Weather Data
Using APIs to fetch data from the web, such as weather information from OpenWeatherMap:

import json, requests, sys

APPID = 'YOUR_APPID_HERE'
if len(sys.argv) < 2:
    print('Usage: getOpenWeather.py city_name, 2-letter_country_code')
    sys.exit()

location = ' '.join(sys.argv[1:])
url = f'https://api.openweathermap.org/data/2.5/forecast/daily?q={location}&cnt=3&APPID={APPID}'
response = requests.get(url)
response.raise_for_status()
weatherData = json.loads(response.text)

w = weatherData['list']
print('Current weather in %s:' % (location))
print(w[0]['weather'][0]['main'], '-', w[0]['weather'][0]['description'])
Removing the Header from CSV Files
A sample script to remove headers from CSV files:

import csv, os

os.makedirs('headerRemoved', exist_ok=True)

for csvFilename in os.listdir('.'):
    if not csvFilename.endswith('.csv'):
        continue
    print('Removing header from ' + csvFilename + '...')
    csvRows = []
    csvFileObj = open(csvFilename)
    readerObj = csv.reader(csvFileObj)
    for row in readerObj:
        if readerObj.line_num == 1:
            continue
        csvRows.append(row)
    csvFileObj.close()

    csvFileObj = open(os.path.join('headerRemoved', csvFilename), 'w', newline='')
    csvWriter = csv.writer(csvFileObj)
    for row in csvRows:
        csvWriter.writerow(row)
    csvFileObj.close()
Summary
CSV and JSON are common formats for storing data, easy for both programs to parse and humans to read. Using Python's csv and json modules simplifies handling these file types.

Chapter -17
# KEEPING TIME, SCHEDULING TASKS, AND LAUNCHING PROGRAMS

## The time Module
Python’s built-in `time` module allows programs to read the system clock for the current time using functions like `time.time()` and `time.sleep()`.

**Example:**
python
import time
print(time.time())  # Returns the current time in seconds since the Unix epoch
The time.sleep() Function
The time.sleep() function pauses the program for a specified number of seconds.

Example:

import time
for i in range(3):
    print('Tick')
    time.sleep(1)
    print('Tock')
    time.sleep(1)
Project: Super Stopwatch
A simple Python stopwatch program to track elapsed time between presses of the ENTER key.

Example:

import time

print('Press ENTER to begin. Afterward, press ENTER to "click" the stopwatch. Press Ctrl-C to quit.')
input()  # Press Enter to begin
startTime = time.time()
lastTime = startTime
lapNum = 1

try:
    while True:
        input()
        lapTime = round(time.time() - lastTime, 2)
        totalTime = round(time.time() - startTime, 2)
        print(f'Lap #{lapNum}: {totalTime} ({lapTime})', end='')
        lapNum += 1
        lastTime = time.time()  # Reset the last lap time
except KeyboardInterrupt:
    print('\nDone.')
The datetime Module
The datetime module provides datetime objects to represent specific moments in time and timedelta objects for durations.

Example:

import datetime
dt = datetime.datetime.now()
print(dt)  # Current date and time
Converting Strings into datetime Objects
Use datetime.datetime.strptime() to convert strings into datetime objects.

Example:

import datetime
dt = datetime.datetime.strptime('October 21, 2019', '%B %d, %Y')
print(dt)
Multithreading
Python’s threading module allows running multiple threads (tasks) at once. This can be useful for running code in parallel.

Example:

import threading, time

def takeANap():
    time.sleep(5)
    print('Wake up!')

threadObj = threading.Thread(target=takeANap)
threadObj.start()
Project: Multithreaded XKCD Downloader
A multithreaded program to download XKCD comics more efficiently.

Example:

import requests, os, bs4, threading

os.makedirs('xkcd', exist_ok=True)

def downloadXkcd(startComic, endComic):
    for urlNumber in range(startComic, endComic):
        print(f'Downloading page https://xkcd.com/{urlNumber}...')
        res = requests.get(f'https://xkcd.com/{urlNumber}')
        res.raise_for_status()
        soup = bs4.BeautifulSoup(res.text, 'html.parser')
        comicElem = soup.select('#comic img')
        if comicElem == []:
            print('Could not find comic image.')
        else:
            comicUrl = 'https:' + comicElem[0].get('src')
            print(f'Downloading image {comicUrl}...')
            res = requests.get(comicUrl)
            res.raise_for_status()
            with open(os.path.join('xkcd', os.path.basename(comicUrl)), 'wb') as imageFile:
                for chunk in res.iter_content(100000):
                    imageFile.write(chunk)

downloadThreads = []
for i in range(0, 140, 10):
    start = i
    end = i + 9
    if start == 0:
        start = 1  # There is no comic 0, so set it to 1.
    downloadThread = threading.Thread(target=downloadXkcd, args=(start, end))
    downloadThreads.append(downloadThread)
    downloadThread.start()

for downloadThread in downloadThreads:
    downloadThread.join()
print('Done.')
Launching Other Programs from Python
The subprocess.Popen() function can start other programs from your Python script.

Example:

import subprocess
subprocess.Popen('C:\\Windows\\System32\\calc.exe')
You can also pass command line arguments to the Popen function:

subprocess.Popen(['C:\\Windows\\notepad.exe', 'C:\\Users\\Al\\hello.txt'])
Running Other Python Scripts
You can launch a Python script from Python just like any other application. Simply pass the python executable to subprocess.Popen() and the filename of the .py script you want to run.

Example:

import subprocess
subprocess.Popen(['C:\\Path\\To\\Python\\python.exe', 'hello.py'])
Opening Files with Default Applications
Python can also open files using the default application for that file type.

Example (Windows):

import subprocess
subprocess.Popen(['start', 'hello.txt'], shell=True)
Example (macOS):

import subprocess
subprocess.Popen(['open', '/Applications/Calculator.app/'])
Project: Simple Countdown Program
A simple countdown script that plays a sound when the countdown reaches zero.

Example:

import time, subprocess

timeLeft = 60
while timeLeft > 0:
    print(timeLeft, end='')
    time.sleep(1)
    timeLeft = timeLeft - 1

subprocess.Popen(['start', 'alarm.wav'], shell=True)
Summary
This README.md file provides a concise guide to managing time and scheduling tasks in Python, from basic sleep functions to multithreading and process launching.

Chapter -18
SENDING EMAIL AND TEXT MESSAGES
Introduction
Automate tasks such as sending form letters or notifications with programs that send and receive emails.

Sending and Receiving Email with the Gmail API
Installation
pip install --user --upgrade ezgmail
Enabling the Gmail API
Sign up for a Gmail account.
Enable the Gmail API at https://developers.google.com/gmail/api/quickstart/python/.
Download and save the credentials.json file in your project folder.
Sending Email
import ezgmail
ezgmail.init()
ezgmail.send('recipient@example.com', 'Subject line', 'Body of the email')
Reading Email
unreadThreads = ezgmail.unread()
ezgmail.summary(unreadThreads)
Using SMTP
Sending Email
import smtplib
smtpObj = smtplib.SMTP('smtp.example.com', 587)
smtpObj.ehlo()
smtpObj.starttls()
smtpObj.login('your_email@example.com', 'YOUR_PASSWORD')
smtpObj.sendmail('your_email@example.com', 'recipient@example.com', 'Subject: Your Subject\nYour email body')
smtpObj.quit()
Retrieving and Deleting Emails with IMAP
Installation
pip install --user -U imapclient==2.1.0 pyzmail36==1.0.4
Retrieving Emails
import imapclient
import pyzmail

imapObj = imapclient.IMAPClient('imap.example.com', ssl=True)
imapObj.login('your_email@example.com', 'YOUR_PASSWORD')
imapObj.select_folder('INBOX', readonly=True)
UIDs = imapObj.search(['SINCE 05-Jul-2019'])
rawMessages = imapObj.fetch(UIDs, ['BODY[]'])
message = pyzmail.PyzMessage.factory(rawMessages[UID][b'BODY[]'])

print(message.get_subject())
print(message.get_addresses('from'))
print(message.text_part.get_payload().decode(message.text_part.charset))
Deleting Emails
imapObj.delete_messages(UIDs)
imapObj.expunge()
imapObj.logout()
Sending Text Messages with SMS Email Gateways
Send text messages via email using SMS gateways provided by cell phone carriers.

SMS Email Gateways
Example for Verizon: send an email to 4155551234@vtext.com.

Popular providers:

AT&T: number@txt.att.net (SMS), number@mms.att.net (MMS)
Verizon: number@vtext.com (SMS), number@vzwpix.com (MMS)
T-Mobile: number@tmomail.net
Using EZGmail or smtplib
import ezgmail

# Using EZGmail
ezgmail.send('4155551234@vtext.com', '', 'Body of the text message')

# Using smtplib
import smtplib
smtpObj = smtplib.SMTP('smtp.example.com', 587)
smtpObj.ehlo()
smtpObj.starttls()
smtpObj.login('your_email@example.com', 'YOUR_PASSWORD')
smtpObj.sendmail('your_email@example.com', '4155551234@vtext.com', 'Body of the text message')
smtpObj.quit()
Sending Text Messages with Twilio
Installation
pip install --user --upgrade twilio
Signing Up for a Twilio Account
Go to https://twilio.com/ and sign up.
Verify a mobile phone number.
Obtain your Twilio phone number, account SID, and auth token.
Sending Text Messages with Twilio
from twilio.rest import Client

account_sid = 'your_account_sid'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

message = client.messages.create(
    body='Hello, this is a test message from Twilio!',
    from_='+1234567890',  # Your Twilio number
    to='+0987654321'  # The recipient's phone number
)

print(message.sid)
Project: Sending Member Dues Reminder Emails
Step 1: Open the Excel File
Ensure your spreadsheet is named duesRecords.xlsx with columns for member names, email addresses, and payment statuses.

import openpyxl

# Open the spreadsheet and get the latest dues status.
wb = openpyxl.load_workbook('duesRecords.xlsx')
sheet = wb['Sheet1']
lastCol = sheet.max_column
latestMonth = sheet.cell(row=1, column=lastCol).value
Step 2: Find All Unpaid Members
Loop through the rows to find members who haven't paid.

# Check each member's payment status.
unpaidMembers = {}
for r in range(2, sheet.max_row + 1):
    payment = sheet.cell(row=r, column=lastCol).value
    if payment != 'paid':
        name = sheet.cell(row=r, column=1).value
        email = sheet.cell(row=r, column=2).value
        unpaidMembers[name] = email
Step 3: Send Customized Email Reminders
Log in to your email account and send reminders to unpaid members.

import smtplib
import sys

# Log in to email account.
smtpObj = smtplib.SMTP('smtp.example.com', 587)
smtpObj.ehlo()
smtpObj.starttls()
smtpObj.login('my_email_address@example.com', sys.argv[1])

# Send out reminder emails.
for name, email in unpaidMembers.items():
    body = f"Subject: {latestMonth} dues unpaid.\nDear {name},\nRecords show that you have not paid dues for {latestMonth}. Please make this payment as soon as possible. Thank you!"
    print(f'Sending email to {email}...')
    sendmailStatus = smtpObj.sendmail('my_email_address@example.com', email, body)
    
    if sendmailStatus != {}:
        print(f'There was a problem sending email to {email}: {sendmailStatus}')

smtpObj.quit()
Project: "Just Text Me" Module
Create a simple Python program with a textmyself() function that sends a message passed to it as a string argument. Save it as textMyself.py.

#! python3
# textMyself.py - Defines the textmyself() function that texts a message
# passed to it as a string.

# Preset values:
accountSID = 'ACxxxxxxxxxxxxxxxxxxxxxxxxx'
authToken  = 'xxxxxxxxxxxxxxxxxxxxxxxx'
myNumber = '+15559998888'
twilioNumber = '+15552225678'
from twilio.rest import Client

def textmyself(message):
    twilioCli = Client(accountSID, authToken)
    twilioCli.messages.create(body=message, from_=twilioNumber, to=myNumber)
Use this function in your programs to send yourself notifications.

import textmyself
textmyself.textmyself('The boring task is finished.')
Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

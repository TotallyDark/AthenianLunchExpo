import PyPDF2
from datetime import datetime

dt = datetime.now()
weekday = dt.weekday()


count = 0

import PyPDF2

def remove_metadata(pdf_file):
    # Open the PDF file.
    with open(pdf_file, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        print("Metadata found in the PDF file.")
        # Create a new PDF file without metadata.
        writer = PyPDF2.PdfWriter()
        # Copy pages from the original PDF to the new PDF.
        for page_num in range(len(reader.pages)):
            page = reader.pages[page_num]
            writer.add_page(page)
        # Open a new file to write the PDF without metadata.
        new_pdf_file = f"{pdf_file.split('.')[0]}_no_metadata.pdf"
        with open(new_pdf_file, 'wb') as output_file:
            writer.write(output_file)
        print(f"PDF file without metadata saved as '{new_pdf_file}'.")

remove_metadata('C:/Users/willi/Desktop/Athenian Lunch Menu/file.pdf')


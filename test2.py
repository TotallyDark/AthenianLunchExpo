import fitz  # PyMuPDF, imported as fitz for backward compatibility reasons
import img2pdf
from pypdf import PdfReader, PdfWriter
from PIL import Image
import pytesseract
from pdf2image import convert_from_path
import glob


PDF_PATH = "C:/Users/willi/Desktop/AthenianLunchMenu/file.pdf"
NEW_PDF_PATH = "C:/Users/willi/AthenianLunchApp/page.pdf"

pdfs = glob.glob(PDF_PATH)

for pdf_path in pdfs:
    pages = convert_from_path(pdf_path, 500)

    for pageNum,imgBlob in enumerate(pages):
        text = pytesseract.image_to_string(imgBlob,lang='eng')

        with open(f'{pdf_path[:-4]}_page{pageNum}.txt', 'w') as the_file:
            the_file.write(text)

# https://stackoverflow.com/questions/69643954/converting-pdf-to-png-with-python-without-pdf2image
dpi = 300  # choose desired dpi here
zoom = dpi / 72  # zoom factor, standard: 72 dpi
magnify = fitz.Matrix(zoom, zoom)  # magnifies in x, resp. y direction
doc = fitz.open(PDF_PATH)  # open document
pix = doc[0].get_pixmap(matrix=magnify)  # render page to an image
pix.save(f"page-{doc[0].number}.png")
 
 #https://www.geeksforgeeks.org/python-convert-image-to-pdf-using-img2pdf-module/
image = Image.open("C:/Users/willi/AthenianLunchApp/page-0.png")
pdf_bytes = img2pdf.convert(image.filename)
file = open(NEW_PDF_PATH, "wb")
file.write(pdf_bytes)
image.close()
file.close()

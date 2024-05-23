from pypdf import PdfReader, PdfWriter
from datetime import date;
from PIL import Image;
pdfFile = 'C:/Users/willi/Desktop/AthenianLunchMenu/file.pdf'
newPdfFile = 'C:/Users/willi/Desktop/AthenianLunchMenu/fileImg.pdf'

pdf = PdfReader(pdfFile)
writer = PdfWriter()
page = pdf.pages[0]
y1 =0
y2 =0

weekday = date.today().weekday()

if weekday == 0:  # Monday
    y4 = 466  # top left
    y5 = 658  # bottom right

elif weekday == 1:  # Tuesday
    y4 = 723  # top left
    y5 = 908  # bottom right

elif weekday == 2:  # Wednesday
    y1 = 968  # top left
    y2 = 1182  # bottom right

elif weekday == 3:  # Thursday
    y4 = 1187  # top left
    y5 = 1486  # bottom right

elif weekday == 4:  # Friday
    y4 = 1460  # top left
    y5 = 1744  # bottom right

elif weekday == 5:  # Saturday
    y4 = 1730  # top left
    y5 = 1900  # bottom right

elif weekday == 6:  # Sunday
    y4 = 1890  # top left
    y5 = 2084  # bottom right


page.cropbox.upper_left = (612 * (1266) / (1700), (1 - y1 / 2200) * 792)
page.cropbox.lower_right = (612 * (1503) / (1700), (1 - y2 / 2200) * 792)
writer.add_page(page)
with open(newPdfFile, 'wb') as fp:
    writer.write(fp)

import fitz  # PyMuPDF, imported as fitz for backward compatibility reasons

# https://stackoverflow.com/questions/69643954/converting-pdf-to-png-with-python-without-pdf2image
dpi = 300  # choose desired dpi here
zoom = dpi / 72  # zoom factor, standard: 72 dpi
magnify = fitz.Matrix(zoom, zoom)  # magnifies in x, resp. y direction
doc = fitz.open(newPdfFile)  # open document
pix = doc[0].get_pixmap(matrix=magnify)  # render page to an image
pix.save(f"TodayImg.png")

image = Image.open('TodayImg.png')
image = image.convert('RGB')
image.save('TodayImg.webp', 'webp', optimize = True, quality = 10)


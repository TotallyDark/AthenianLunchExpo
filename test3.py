from convex import ConvexClient
import base64
import requests

client = ConvexClient('https://wary-lynx-98.convex.cloud')
with open('page-0.png', 'rb') as f:
    img = f.read()

    send_image_url = client.mutation("groups:generateUploadUrl")
    headers = {
        'Content-Type': 'image/png'
    }

    result = requests.post(send_image_url, data=img, headers=headers)

storage_id = result.json()['storageId']
client.action("groups:swapImage", dict( storageId=storage_id ))

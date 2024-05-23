from convex import ConvexClient
client = ConvexClient('https://wary-lynx-98.convex.cloud')

print(client.query("groups:list"))

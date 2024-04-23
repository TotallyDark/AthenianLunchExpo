from modal import App, Volume

app = App()  # Note: prior to April 2024, "app" was called "stub"

vol = Volume.from_name("my-test-volume")

@app.function(volumes={"/data": vol})
def run():
    with open("/data/file.pdf", "w") as f:
        f.write("hello")
    vol.commit()  # Needed to make sure all changes are persisted
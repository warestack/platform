from app import create_app

app = create_app()

if __name__ == "__main__":
    # Fetch the PORT environment variable, default to 5000 if it doesn't exist
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, port=port)

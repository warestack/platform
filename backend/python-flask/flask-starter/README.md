# flask-starter

This seed is a basic starter for building a Flask API that simply responds with "Hello, World!". Additionally, it
includes a `healthz` endpoint, essential for automated deployments on Warestack.

## Getting Started

- Navigate to the `flask-starter` directory.
- Configure environment variables as described in the [local development](#local-development) section.
- Run `pip install -r requirements.txt` to install the necessary dependencies.
- Use `python3 server.py` to start the server.
- Access the API at [localhost:5000](http://localhost:5000). You should receive a "Hello, World!" message.
- The healthz endpoint at [localhost:5000/healthz](http://localhost:5000/healthz) provides a health check response which
  is crucial for Warestack's deployment automation.

## Dependencies

This seed uses:

- [Flask](https://flask.palletsprojects.com/en/3.0.x/): Flask is a micro web framework written in Python.

## Local Development

This seed uses environment variables for configuration:

- Make sure to set up your `.env` file by using `.env.example` as a reference.
- Adjust the values in `.env` as necessary to match your setup.

## Warestack Deployments

To ensure compatibility with automated deployments on Warestack, all seeds must include a `healthz` endpoint. Warestack
relies on this endpoint to verify the correct operation of the service.

## Questions & Contributions

If you have any questions or wish to contribute, please open an issue or submit a pull request.

# flask-starter

This seed is a foundational starter for building a Flask API integrated with MongoDB using MongoEngine. It offers the
following features:

- A basic endpoint responding with "Hello, World!".
- A comprehensive suite of CRUD operations for the `users` resource, allowing interactions like listing, creating,
  fetching, updating, and deleting users based on their email.
- A `healthz` endpoint, indispensable for automated deployments on Warestack.

## Getting Started

- Navigate to the `flask-starter` directory.
- Configure environment variables as described in the [local development](#local-development) section.
- Run `pip install -r requirements.txt` to install the necessary dependencies.
- Use `python3 server.py` to start the server.
- Access the API at [localhost:5000](http://localhost:5000). You should receive a "Hello, World!" message.
- User operations are available at [localhost:5000/users](http://localhost:5000/users). For specific user operations,
  use their email, e.g., `localhost:5000/users/useremail@example.com`.
- The healthz endpoint at [localhost:5000/healthz](http://localhost:5000/healthz) provides a health check response which
  is crucial for Warestack's deployment automation.

## Dependencies

This seed uses:

- [Flask](https://flask.palletsprojects.com/en/3.0.x/): Flask is a micro web framework written in Python.
- [MongoEngine](http://mongoengine.org/): MongoEngine is an Object-Document Mapper (ODM) for Python that provides a
  high-level abstraction on top of PyMongo.

## Local Development

This seed uses environment variables for configuration:

- Make sure to set up your `.env` file by using `.env.example` as a reference.
- Adjust the values in `.env` as necessary to match your setup.

## Warestack Deployments

To ensure compatibility with automated deployments on Warestack, all seeds must include a `healthz` endpoint. Warestack
relies on this endpoint to verify the correct operation of the service.

## Questions & Contributions

If you have any questions or wish to contribute, please open an issue or submit a pull request.

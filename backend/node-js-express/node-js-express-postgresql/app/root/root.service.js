class RootService {
  info() {
    return 'Hello, World!';
  }
}

module.exports = new RootService(); // Exporting an instance of the service

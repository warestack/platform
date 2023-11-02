class HealthService {
  health() {
    return 'I am healthy!';
  }
}

module.exports = new HealthService(); // Exporting an instance of the service

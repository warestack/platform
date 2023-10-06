class GreetingService {
    hello() {
        return "Hello World!";
    }
}

module.exports = new GreetingService();  // Exporting an instance of the service

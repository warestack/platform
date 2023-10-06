class UserService {
    getUsers() {
        // Dummy greeting data in response
        const users = [
            {
                id: 1,
                name: 'John Doe',
                email: 'johndoe@example.com'
            },
            {
                id: 2,
                name: 'Jane Smith',
                email: 'janesmith@example.com'
            }];

        return users;
    }
}

module.exports = new UserService();  // Exporting an instance of the service

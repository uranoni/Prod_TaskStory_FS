mutation {
  createUser(
    input: { user: { id: 1, name: "Bilbo Baggins", username: "bilbo" } }
  ) {
    user {
      id
      name
      username
      createdAt
    }
  }
}
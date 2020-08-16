const authenticate = (username, password) => {
  if ((username == 'hina') && (password == 'password')){
    return 'Success'
  }
}

module.exports = { authenticate }

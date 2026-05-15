// BAD CODE FILE - Will trigger all 3 issues

// Issue 1: eval() - HIGH severity
function runUserCode(userInput) {
  eval(userInput)
}

// Issue 2: Async function with no await - MEDIUM severity
async function fetchData() {
  const data = getData()
  return data
}

// Issue 3: console.log left in - LOW severity
async function saveUser(user) {
  console.log("saving user", user)
  console.log("user data", user.password)
  const result = await db.save(user)
  return result
}

export default function isDuplicate(newUser, users) {
  const result = { email: false, phone: false };
  for (const user in users) {
    if (users[user].email === newUser.email) result.email = true;
    if (users[user].phone === newUser.phone) result.phone = true;
    if (users[user].email && user.phone) return result;
  }
  return result;
}

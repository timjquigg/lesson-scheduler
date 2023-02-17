export default function isDuplicate(newUser, users) {
  const result = { email: false, phone: false };
  for (const user in users) {
    if (users[user].id === newUser.id) continue;
    if (users[user].email === newUser.email) result.email = true;
    if (users[user].phone === newUser.phone) result.phone = true;
    if (result.email && result.phone) return result;
  }
  return result;
}

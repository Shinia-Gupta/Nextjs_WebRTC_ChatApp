
// SHA-256 hash with Web Crypto API
async function hashPassword(password: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}

// verify password
async function verifyPassword(password: string, storedHash: string) {
  const hash = await hashPassword(password);
  return hash === storedHash;
}

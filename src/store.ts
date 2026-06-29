export async function signInCustomer() {
  return Promise.resolve();
}

export function subscribeToAuth(callback: (user: any) => void) {
  setTimeout(() => callback({ id: 1, name: 'Guest' }), 100);
  return () => {};
}

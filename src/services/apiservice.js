
export const connectService = async (queryParams) => {
  return await fetch(`https://node-emailsender-soumikdhar5.onrender.com/api/send?${queryParams}`, { method: 'GET' });
}

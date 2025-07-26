export default async function UserFetch() {
  try {
    const response = await fetch("http://localhost:3001/user");

    if(!response.ok) {
      throw new Error("오류 발생")
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error)
  }
}

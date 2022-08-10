export async function getPosts(){
    const response = await fetch('http://someurl.com');
    return response.json();
}
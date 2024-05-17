export async function loadStores(){
    const categoriesResponse = fetch("https://api.escuelajs.co/api/v1/categories");

    const [categories] = await Promise.all([categoriesResponse]);

    const categoriesJson = categories.json();

    return categoriesJson;
}
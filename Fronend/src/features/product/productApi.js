export function fetchCount(amount = 1) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000");
    const data = await response.json();
    resolve(data);
  });
}

export function fetchProductsByFilters(pagination) {
  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}
  // pagination = {_page:1,_limit=10}

  let queryString = "";
  
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  

  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:3000/homepage?" + queryString
    );
    const data = await response.json();
    const totalItems = await response.headers.get("X-Total-Count");
    resolve({ data: { products: data, totalItems: +totalItems } });
  });
}

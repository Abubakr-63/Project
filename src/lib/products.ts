export type Product = { id: number; name: string; price: number };

export let products: Product[] = ([
  { id: 1, name: "Abubakr", price: 20 },
  { id: 2, name: "Umar", price: 40 },
]);


export function deleteUser(id){
    products = products.filter((elem) => elem.id !== id)
}

export function updateUser(id, obj){
    products = products.map((elem) => {
        if(elem.id == id){
            elem.name = obj.name;
            elem.price = obj.price
        }
        return elem
    })
}
export type Product = { id: number; name: string; price: number };

import { pool } from "./db";


export async function getProducts(): Promise<Product[]> {
  const { rows } = await pool.query(
    "SELECT id, name, price::float AS price FROM products ORDER BY id"
  );
  return rows;
}

export async function createProduct(name: string, price: number) {
  const { rows } = await pool.query(
    "INSERT INTO products (name, price) VALUES ($1, $2) RETURNING id, name, price::float AS price",
    [name, price]
  );
  return rows[0] as Product;
}

export async function updateProduct(id: number, name: string, price: number) {
  const { rows } = await pool.query(
    "UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING id, name, price::float AS price",
    [name, price, id]
  );
  return rows[0] as Product | undefined;
}

export async function deleteProduct(id: number) {
  await pool.query("DELETE FROM products WHERE id = $1", [id]);
}
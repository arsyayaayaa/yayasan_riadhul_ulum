import { useEffect, useState } from "react";

export default function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_API_BASE_URL + "/api/products"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const json = await res.json();
        setProducts(json.data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>All Products</h1>
      <ul className="grid gap-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

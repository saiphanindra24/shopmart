import { useEffect, useState } from "react";

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <section className="px-6 md:px-16 lg:px-24 my-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-sky-200 text-blue-900 text-center p-4 rounded-lg shadow hover:shadow-lg cursor-pointer capitalize"
          >
            {category}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;

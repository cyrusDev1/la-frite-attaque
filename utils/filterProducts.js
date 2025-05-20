export function filterProducts(products, filter) {
  const filteredProducts = [];
  for (const [category, productList] of Object.entries(products)) {
    const filtered = productList.filter(
      (product) => product.tag && product.tag.name === filter,
    );

    if (filtered.length > 0) {
      filteredProducts.push(filtered[0]);
    }
  }

  return filteredProducts;
}

function fetchProductIds(mode) {
  if (mode === "ids-failure") {
    return Promise.reject(new Error("ids unavailable"));
  }

  return Promise.resolve([1, 2, 3]);
}

function fetchProduct(id, mode) {
  if (mode === "product-failure" && id === 2) {
    return Promise.reject(new Error("product 2 unavailable"));
  }

  const products = {
    1: { id: 1, name: " Keyboard ", price: 5000, available: true },
    2: { id: 2, name: "Mouse", price: 3000, available: false },
    3: { id: 3, name: " Monitor ", price: 20000, available: true },
  };

  return Promise.resolve(products[id]);
}

/**
 * 商品IDを取得後、各商品を並行取得して販売中商品の概要を返す。
 *
 * @param {"success" | "ids-failure" | "product-failure"} mode
 * @param {string[]} logs
 * @returns {Promise<
 *   | { count: number, names: string[], total: number }
 *   | { count: number, names: string[], total: number, error: string }
 * >}
 */
export async function loadCatalog(mode, logs) {
  // async/await、Promise.all、try/catch/finallyで実装してください。
  try {
    const ids = await fetchProductIds(mode);
    logs.push("ids-loaded");
    const promises = ids.map((id) => {
      return fetchProduct(id, mode);
    })
    const products = await Promise.all(promises);
    logs.push("products-loaded");
    const availableProduct = products.filter((product) => {
      return product.available;
    })
    const count = availableProduct.length;
    const names = availableProduct.map((product) => {
      return product.name.trim();
    });
    const total = availableProduct.reduce((total, product) => {
      return product.price + total;
    }, 0)
    logs.push("summarized");

    return {
      count,
      names,
      total,
    };
  }catch(error){
    logs.push("error");
    return {
      count: 0,
      names: [],
      total: 0,
      error: error.message,
    };
  }finally {
    logs.push("end");
  }
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:

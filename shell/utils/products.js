/**
 * Utils for products, in particular keeping track of parent products and knowing when a product change
 * has really occurred
 * 
 * We assume that a change in the product's parent is not supported - doesn't really make sense, so
 * no need for this to be in a store, as no one needs to watch for that
 * 
 */

const parentProducts = {};

export function setParentProduct(product) {
  if (product.name && product.inExplorer) {
    parentProducts[product.name] = 'explorer';
  }
}

export function productDidChange(idA, idB) {
  const realIdA = parentProducts[idA] || idA;
  const realIdB = parentProducts[idB] || idB;

  return realIdA !== realIdB;
}

export function getParentProduct(id) {
  return parentProducts[id];
}

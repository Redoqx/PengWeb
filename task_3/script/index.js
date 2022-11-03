const button = document.querySelector('button');
const price = document.querySelector('[data-price]');
const product = document.querySelector('[nama-product]');
const priceValue = price.textContent
  .replace('Rp ', '')
  .replace(',-', '')
  .replace('.', '')
  .replace('.', '');
const productName = product.textContent;
console.log(productName);

button.addEventListener('click', () => {
  window.location.href = `/beli?price=${priceValue}&barang=${productName}`;
});

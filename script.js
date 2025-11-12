// Simple demo JS to handle “Add to Cart” button clicks
document.querySelectorAll('.product-card button').forEach(button => {
  button.addEventListener('click', () => {
    alert('Item added to cart!');
    // You’d update your cart logic here
  });
});

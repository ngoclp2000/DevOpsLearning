// Simple sample to make CI pass
export function add(a, b) {
  return a + b;
}

// Run 'npm start' to execute something basic
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("Hello DevOps, 2+3=", add(2,3));
}

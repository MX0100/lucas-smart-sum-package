const { magicSum } = require('./index');

function test(name, actual, expected) {
  if (actual === expected) {
    console.log(`✅ ${name}: ${actual}`);
    return true;
  } else {
    console.log(`❌ ${name}: expected ${expected}, got ${actual}`);
    return false;
  }
}

console.log('\n🧪 Running tests for magicSum...\n');

const results = [
  test('magicSum(2, 3)', magicSum(2, 3), 5),
  test('magicSum(-1, 1)', magicSum(-1, 1), 0),
  test('magicSum(0, 0)', magicSum(0, 0), 0),
  test('magicSum(100, 200)', magicSum(100, 200), 300),
  test('magicSum(-5, -10)', magicSum(-5, -10), -15),
];

const passed = results.filter(r => r).length;
const total = results.length;

console.log(`\n📊 Results: ${passed}/${total} tests passed\n`);

if (passed !== total) {
  process.exit(1);
}

console.log('🎉 All tests passed!\n');


const { generateText } = require('./util');

test('should outcome name and age', () => {
    const text = generateText('Max', 25);
    expect(text).toBe('Max (25 years old)');
});
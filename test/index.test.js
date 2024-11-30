const isOdd = require('../index');

describe('isOdd', () => {
    test('should return true for odd numbers', async () => {
        const result = await isOdd(3);
        expect(result).toBe(true);
    });

    test('should return false for even numbers', async () => {
        const result = await isOdd(2);
        expect(result).toBe(false);
    });

    test('should throw error for non-number inputs', async () => {
        await expect(isOdd('not a number')).rejects.toThrow('Input must be a number');
    });
}); 
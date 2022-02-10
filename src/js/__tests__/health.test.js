import getHealthStatus from '../app';

test('should be wounded', () => {
  const result = getHealthStatus({ name: 'Маг', health: 41 });
  expect(result).toEqual('wounded');
});

import getHealthStatus from '../app';

test('should return wounded', () => {
  const result = getHealthStatus({ name: 'Маг', health: 41 });
  expect(result).toEqual('wounded');
});

test('should return critical', () => {
  const result = getHealthStatus({ name: 'Маг', health: 12 });
  expect(result).toEqual('critical');
});

test('should return healthy', () => {
  const result = getHealthStatus({ name: 'Маг', health: 77 });
  expect(result).toEqual('healthy');
});

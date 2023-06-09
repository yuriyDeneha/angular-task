import { Device } from './device';

describe('Device', () => {
  it('should create an instance', () => {
    expect(new Device({
      name: 'name',
      description: 'description',
      tags: [],
      id: 999
    })).toBeTruthy();
  });
});

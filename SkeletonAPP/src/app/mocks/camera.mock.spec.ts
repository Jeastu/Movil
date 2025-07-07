import { Camera } from './camera.mock';

describe('Camera', () => {
  it('should create an instance', () => {
    expect(new Camera()).toBeTruthy();
  });
});
export class CameraMock {
  getPicture = jasmine.createSpy('getPicture').and.returnValue(Promise.resolve('data:image/jpeg;base64,mockImageData'));
}

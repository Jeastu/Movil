export class Camera {
}
export class CameraMock {
  getPicture = jasmine.createSpy('getPicture').and.returnValue(
    Promise.resolve('data:image/jpeg;base64,mockImageData')
  );
}

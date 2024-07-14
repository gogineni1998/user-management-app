import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CreateService } from './user.service';
import { User } from './user.model';

describe('UserService', () => {
  let service: CreateService;
  let httpMock: HttpTestingController;

  const api = 'http://localhost:8081';

  const mockUser: User = {
    id: '100',
    username: 'testuser',
    email: 'testuser@email.com',
    summary: 'This is a test user.'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CreateService]
    });
    service = TestBed.inject(CreateService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a user', () => {
    service.createUser(mockUser).subscribe((user) => {
      expect(user).toEqual(mockUser);
    });

    const req = httpMock.expectOne(`${api}/users`);
    expect(req.request.method).toBe('POST');
    req.flush(mockUser);
  });

  it('should get all users', () => {
    const mockUsers: User[] = [mockUser];

    service.getUsers().subscribe((users) => {
      expect(users.length).toBe(1);
      expect(users).toEqual(mockUsers);
    });

    const req = httpMock.expectOne(`${api}/users`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });

  it('should delete a user', () => {
    const userId = '1';

    service.deleteUser(userId).subscribe((res) => {
      expect(res).toBeNull();
    });

    const req = httpMock.expectOne(`${api}/users/${userId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });

  it('should get a user by id', () => {
    const userId = '1';

    service.getUser(userId).subscribe((user) => {
      expect(user).toEqual(mockUser);
    });

    const req = httpMock.expectOne(`${api}/users/${userId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUser);
  });

  it('should update a user', () => {
    service.updateUser(mockUser).subscribe((res) => {
      expect(res).toEqual({});
    });

    const req = httpMock.expectOne(`${api}/users`);
    expect(req.request.method).toBe('PUT');
    req.flush({});
  });
});

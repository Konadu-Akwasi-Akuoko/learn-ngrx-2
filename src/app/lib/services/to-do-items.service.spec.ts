import { TestBed } from '@angular/core/testing';

import { ToDoItemService } from './to-do-items.service';

describe('ToDoItemService', () => {
  let service: ToDoItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

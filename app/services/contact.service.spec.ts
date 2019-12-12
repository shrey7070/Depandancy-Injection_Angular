import { TestBed, fakeAsync } from '@angular/core/testing';

import { ContactService } from './contact.service';
import { Contacts } from '../models/contacts';

describe('ContactService', () => {
  let contactService: ContactService;
  let expectedContacts: Contacts;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactService]
    });

    contactService = TestBed.get(ContactService);
    expectedContacts = contactService.contacts;
  });

  // it('should be created', () => {
  //   expect(contactService).toBeTruthy();
  // });

  it('should return expectedContacts', fakeAsync(() => {
    contactService.getContacts()
                  .subscribe(data => {
                    expect(data).toBe(expectedContacts);
                  });
  }));
});

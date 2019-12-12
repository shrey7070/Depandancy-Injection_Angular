import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ContactListComponent } from './contact-list.component';
import { Contacts } from 'src/app/models/contacts';
import { ContactService } from 'src/app/services/contact.service';
import { of } from 'rxjs';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  let contactService;
  let getContactsSpy: jasmine.Spy;
  let testContatcts: Contacts;

  beforeEach(async(() => {
    contactService = jasmine.createSpyObj('ContactService', ['getContacts']);

    TestBed.configureTestingModule({
      declarations: [ ContactListComponent ],
      providers: [{ provide: ContactService, useValue: contactService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testContatcts = {
      'contactsList': [
          {'id': 1, 'name': 'Rajesh', 'city': 'bangalore'},
          {'id': 2, 'name': 'Aarjith', 'city': 'london'},
          {'id': 3, 'name': 'Anjan', 'city': 'california'},
          {'id': 4, 'name': 'David', 'city': 'delhi'}
      ]
    };
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    getContactsSpy = contactService.getContacts.and.returnValue( of(testContatcts) );

    fixture.detectChanges(); // calls ngOnInt()
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
  it('should get data from service', fakeAsync(() => {
    tick(100); // wait for observables to get flushed with data
    expect(component.contacts).toBe(testContatcts.contactsList);
  }));
  it('should call getContacts() method atleast once', () => {
    expect(getContactsSpy.calls.any()).toBe(true, 'getContacts() should be called');
    expect(getContactsSpy.calls.count()).toBe(1, 'getContacts() should be called once');
  });
});

import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Contacts } from '../models/contacts';

export class ContactService {

  contacts = {
    'contactsList': [
        {'id': 1, 'name': 'Rajesh', 'city': 'bangalore'},
        {'id': 2, 'name': 'Aarjith', 'city': 'london'},
        {'id': 3, 'name': 'Anjan', 'city': 'california'},
        {'id': 4, 'name': 'David', 'city': 'delhi'}
    ]
  };
  constructor(
  ) { }

  getContacts(): Observable<Contacts> {
    // send contacts to subscriber
    return of({} as Contacts);
  }
}

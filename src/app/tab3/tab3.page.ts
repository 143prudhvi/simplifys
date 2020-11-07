import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddContactAction, DeleteContactAction, LoadContactAction } from '../store/actions/root.actions';
import { rootInterfaceState } from '../store/models/app-state.model';
import { Contact } from '../store/models/board.model';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  newContact : Contact = { name:"", phone : null };
  Contact$: Observable<Array<Contact>>;
  Contacts:Array<Contact>

  constructor(private rootstore: Store<rootInterfaceState>) {
    this.Contact$=this.rootstore.select(rootstore => rootstore.contact.list);
    this.Contact$.subscribe(contacts => {
      this.Contacts = contacts;
    });
  }

  ngOnInit(){
    this.rootstore.dispatch(new LoadContactAction());
  }

  addContact(){
    this.rootstore.dispatch(new AddContactAction(this.newContact));
    this.newContact={ name:"", phone : null };
  }

  deleteContact(value: number){
    this.rootstore.dispatch(new DeleteContactAction(value));
  }

}

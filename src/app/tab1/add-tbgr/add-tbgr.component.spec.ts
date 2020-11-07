import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddTbgrComponent } from './add-tbgr.component';

describe('AddTbgrComponent', () => {
  let component: AddTbgrComponent;
  let fixture: ComponentFixture<AddTbgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTbgrComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTbgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

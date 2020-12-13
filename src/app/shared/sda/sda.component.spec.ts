import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdaComponent } from './sda.component';

describe('SdaComponent', () => {
  let component: SdaComponent;
  let fixture: ComponentFixture<SdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularMoralisComponent } from './angular-moralis.component';


describe('AngularMoralisComponent', () => {
  let component: AngularMoralisComponent;
  let fixture: ComponentFixture<AngularMoralisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMoralisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMoralisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

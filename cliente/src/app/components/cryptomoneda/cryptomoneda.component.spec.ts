import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptomonedaComponent } from './cryptomoneda.component';

describe('CryptomonedaComponent', () => {
  let component: CryptomonedaComponent;
  let fixture: ComponentFixture<CryptomonedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptomonedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptomonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HymnsPage } from './hymns.page';

describe('HymnsPage', () => {
  let component: HymnsPage;
  let fixture: ComponentFixture<HymnsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HymnsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

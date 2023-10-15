import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TadePage } from './tade.page';

describe('TadePage', () => {
  let component: TadePage;
  let fixture: ComponentFixture<TadePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

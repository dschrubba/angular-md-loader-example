import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkdownElement } from './markdown-element';

describe('MarkdownElement', () => {
  let component: MarkdownElement;
  let fixture: ComponentFixture<MarkdownElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkdownElement],
    }).compileComponents();

    fixture = TestBed.createComponent(MarkdownElement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

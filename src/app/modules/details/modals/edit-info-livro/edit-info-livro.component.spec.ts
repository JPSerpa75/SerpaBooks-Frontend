import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInfoLivroComponent } from './edit-info-livro.component';

describe('EditInfoLivroComponent', () => {
  let component: EditInfoLivroComponent;
  let fixture: ComponentFixture<EditInfoLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditInfoLivroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditInfoLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

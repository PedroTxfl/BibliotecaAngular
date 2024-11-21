import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardLivrosComponent } from './list-card-livros.component';

describe('ListCardLivrosComponent', () => {
  let component: ListCardLivrosComponent;
  let fixture: ComponentFixture<ListCardLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCardLivrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCardLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

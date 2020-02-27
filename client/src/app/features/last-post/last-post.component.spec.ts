import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { LastPostComponent } from './last-post.component';

describe('LastPostComponent', () => {
  let component: LastPostComponent;
  let fixture: ComponentFixture<LastPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastPostComponent ],
      imports: [
        HttpClientModule,
        MatCardModule,
        MatProgressBarModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

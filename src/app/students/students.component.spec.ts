/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { Http, HttpModule } from '@angular/http';

import { AppConfig } from '../app.config';
import { StudentsComponent } from './students.component';
import { UtilsService } from '../_services/index';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, AppConfig.LANG_PATH, AppConfig.LANG_EXT);
}

describe('Component: Students', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsComponent],
      imports: [TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [Http]
      })],
      providers: [UtilsService],
      schemas: []
    });
    TestBed.compileComponents();
  });

  it('should create an instance', () => {
    let fixture = TestBed.createComponent(StudentsComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});

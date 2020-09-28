import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LoginComponent } from './login.component';
import { SocialAuthService , SocialAuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, AmazonLoginProvider } from 'angularx-social-login';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from '../login.service';
import { ActivatedRoute } from '@angular/router';

describe('LoginComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ 
        LoginComponent,
      ],
      providers: [LoginService,SocialAuthService,
        {
          provide: ActivatedRoute,
          useValue: {snapshot: {params: {'id': 'R-100'}}}
        },
        {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider(
                'clientId'
              ),
            },
            {
              id: FacebookLoginProvider.PROVIDER_ID,
              provider: new FacebookLoginProvider('1030902997345402'),
            },
            {
              id: AmazonLoginProvider.PROVIDER_ID,
              provider: new AmazonLoginProvider(
                'clientId'
              ),
            }
          ],
        } as SocialAuthServiceConfig,
      }],
    })
    .compileComponents();
  }));

  it('should create', () => {
    let fixture = TestBed.createComponent(LoginComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
  it('Check if login button is present or not', () => {
    let fixture = TestBed.createComponent(LoginComponent);
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div')).toHaveClass('container')
  })
  it('Check if register button is present or not', () => {
    let fixture = TestBed.createComponent(LoginComponent);
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Login');
  })

});


import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { UpdateCustomerComponent } from './update-customer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login.service';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, AmazonLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';
import { ActivatedRoute } from '@angular/router';

describe('UpdateCustomerComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        UpdateCustomerComponent,
      ],
      providers: [LoginService, SocialAuthService,
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { 'id': 'R-100' } } }
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
    let fixture = TestBed.createComponent(UpdateCustomerComponent);
    let component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

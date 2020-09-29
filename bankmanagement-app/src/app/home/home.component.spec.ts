import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GoogleLoginProvider, FacebookLoginProvider, AmazonLoginProvider, SocialAuthServiceConfig, SocialAuthService } from 'angularx-social-login';
import { LoginService } from '../login.service';
import { Routes, ActivatedRoute } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ApplyloanComponent } from '../applyloan/applyloan.component';
import { ViewCustomerComponent } from '../view-customer/view-customer.component';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';
import { RegisterCustomerComponent } from '../register-customer/register-customer.component';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  
  const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home/:R-100', component: HomeComponent},
    { path: 'applyloan/:R-100', component: ApplyloanComponent},
    { path: 'view/:R-100', component: ViewCustomerComponent },
    { path: 'update/:R-100', component: UpdateCustomerComponent },
    { path: 'register', component: RegisterCustomerComponent }
    
    
  ];
  class ActivatedRouteStub {

  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule
      ],
      providers: [LoginService,SocialAuthService,
        {
          provide: ActivatedRoute,
          useValue: {snapshot: {params: {'id': '123'}}}
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
      declarations: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    let compiled = fixture.nativeElement;
    expect(compiled.querySelector('img')).toHaveClass('img');
  });
  it('Button should have class button_pos', () => {
    let compiled = fixture.nativeElement;
    expect(compiled.querySelector('button')).toHaveClass('button_pos');
  });
});

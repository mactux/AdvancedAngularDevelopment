import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material.module';
import { SkillsService } from '../model/skills/skills.service';
import { SharedModule } from '../shared/shared.module';
import { UxModule } from '../ux/ux.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';
import { StoreModule } from '@ngrx/store';
import { demosFeatureKey, DemosReducer } from './store/reducers/demos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DemosEffects } from './store/effects/demos.effects';
import { RoutingComponent } from './samples/routing/routing/routing.component';
import { RoutingTargetComponent } from './samples/routing/routing-target/routing-target.component';
import { AuthModule } from '../auth/auth.module';
import { LoginComponent } from '../auth/components/login/login.component';
import { RegisterComponent } from '../auth/components/register/register.component';
import { LogoutComponent } from '../auth/components/logout/logout.component';
import { LocServiceComponent } from './samples/loc-service/loc-service.component';
import { AppInitComponent } from './samples/app-init/app-init.component';
import { MultiGuardComponent } from './samples/multi-guard/multi-guard.component';
import { MultiInterceptorComponent } from './samples/multi-interceptor/multi-interceptor.component';
import { GlobalErrorsComponent } from './samples/global-errors/global-errors.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      {
        path: 'routing',
        component: RoutingComponent,
        children: [{ path: ':id', component: RoutingTargetComponent }],
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
      {
        path: 'locationsrv',
        component: LocServiceComponent,
      },
      {
        path: 'app-init',
        component: AppInitComponent,
      },
      {
        path: 'multi-guard',
        component: MultiGuardComponent,
      },
      {
        path: 'multi-interceptor',
        component: MultiInterceptorComponent,
      },
      {
        path: 'global-errors',
        component: GlobalErrorsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    MarkdownEditorComponent,
    RoutingComponent,
    RoutingTargetComponent,
    LocServiceComponent,
    AppInitComponent,
    MultiGuardComponent,
    MultiInterceptorComponent,
    GlobalErrorsComponent,
  ],
  imports: [
    CommonModule,
    UxModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    AuthModule,
    MaterialModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
    SharedModule,
    StoreModule.forFeature(demosFeatureKey, DemosReducer),
    EffectsModule.forFeature([DemosEffects]),
  ],
  providers: [SkillsService],
})
export class DemosModule {}

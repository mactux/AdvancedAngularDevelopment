import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material.module';
import { UxModule } from '../ux/ux.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';
import { ActionStreamsComponent } from './samples/action-streams/action-streams.component';
import { AsyncPipeComponent } from './samples/async-pipe/async-pipe.component';
import { CachingComponent } from './samples/caching/caching.component';
import { CombiningComponent } from './samples/combining/combining.component';
import { CreatingObservableComponent } from './samples/creating-observables/creating-observable.component';
import { CustomOperatorsComponent } from './samples/custom-operators/custom-operators.component';
import { ErrHandlingComponent } from './samples/err-handling/err-handling.component';
import { FlexLayoutApiComponent } from './samples/flex-layout-api/flex-layout-api.component';
import { MouseDomObservablesComponent } from './samples/mouse-dom-observables/mouse-dom-observables.component';
import { OperatorsComponent } from './samples/operators/operators.component';
import { SubjectsComponent } from './samples/subjects/subjects.component';
import { SubsinkComponent } from './samples/subsink/subsink.component';
import { UnsubscribingComponent } from './samples/unsubscribing/unsubscribing.component';
import { WatchRxJsComponent } from './samples/watchrxjs/watchrxjs.component';
import { SharedModule } from '../shared/shared.module';
import { LangFeaturesComponent } from './samples/lang-features/lang-features.component';
import { DebouncedSearchComponent } from './samples/debounced-search/debounced-search.component';
import { TransformationComponent } from './samples/transformation/transformation.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'langfeatures', component: LangFeaturesComponent },
      { path: 'subjects', component: SubjectsComponent },
      { path: 'creating', component: CreatingObservableComponent },
      { path: 'mousedomobs', component: MouseDomObservablesComponent },
      { path: 'operators', component: OperatorsComponent },
      { path: 'debounced', component: DebouncedSearchComponent },
      { path: 'flexlayoutapi', component: FlexLayoutApiComponent },
      { path: 'unsubscribe', component: UnsubscribingComponent },
      { path: 'subsink', component: SubsinkComponent },
      { path: 'asyncpipe', component: AsyncPipeComponent },
      { path: 'customops', component: CustomOperatorsComponent },
      { path: 'errhandling', component: ErrHandlingComponent },
      { path: 'combining', component: CombiningComponent },
      { path: 'watchrxjs', component: WatchRxJsComponent },
      { path: 'transformation', component: TransformationComponent },
      { path: 'caching', component: CachingComponent },
      { path: 'actionstreams', component: ActionStreamsComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    MarkdownEditorComponent,
    CreatingObservableComponent,
    MouseDomObservablesComponent,
    DebouncedSearchComponent,
    OperatorsComponent,
    FlexLayoutApiComponent,
    UnsubscribingComponent,
    SubsinkComponent,
    SubjectsComponent,
    CustomOperatorsComponent,
    AsyncPipeComponent,
    ErrHandlingComponent,
    CombiningComponent,
    WatchRxJsComponent,
    CachingComponent,
    ActionStreamsComponent,
    LangFeaturesComponent,
    TransformationComponent,
  ],
  imports: [
    CommonModule,
    UxModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
  ],
  providers: [],
})
export class DemosModule {}

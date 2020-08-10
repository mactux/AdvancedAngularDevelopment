import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { DemoService } from './demo.service';
import { StatefulComponent } from './samples/stateful/stateful.component';
import { SkillsService } from '../model/skills/skills.service';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';
import { CardComponent } from './samples/card/card.component';
import { ContentProjectionComponent } from './samples/content-projection/content-projection.component';
import { PopupContainerComponent } from './samples/popup-container/popup-container.component';
import { PopupComponent } from './samples/popup-container/popup/popup.component';
import { SplitSampleComponent } from './samples/content-projection/split-sample/split-sample.component';
import { UxModule } from '../ux/ux.module';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'stateful', component: StatefulComponent },
      { path: 'card', component: CardComponent },
      { path: 'projection', component: ContentProjectionComponent },
      { path: 'popup', component: PopupContainerComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    StatefulComponent,
    CardComponent,
    ContentProjectionComponent,
    PopupContainerComponent,
    PopupComponent,
    MarkdownEditorComponent,
    SplitSampleComponent,
  ],
  imports: [
    CommonModule,
    UxModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
  ],
  providers: [DemoService, SkillsService],
  entryComponents: [SplitSampleComponent, PopupComponent],
})
export class DemosModule {}

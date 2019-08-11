import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
    //   children :[{
    //     path: 'interviewquestions',
    //     component: InterviewQuestionsComponent 
    //   },
   // ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LayoutShellRouting { }
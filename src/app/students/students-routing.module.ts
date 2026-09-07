import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { StudentsComponent } from './students.component'
import { StudentDetailComponent } from './student-detail.component'

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'detail/:id', component: StudentDetailComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class StudentsRoutingModule {}
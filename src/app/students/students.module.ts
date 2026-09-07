import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { StudentsRoutingModule } from './students-routing.module'
import { StudentsComponent } from './students.component'
import { StudentDetailComponent } from './student-detail.component'

@NgModule({
  imports: [NativeScriptCommonModule, StudentsRoutingModule],
  declarations: [StudentsComponent, StudentDetailComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class StudentsModule {}
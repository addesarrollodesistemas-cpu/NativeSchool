import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'
import { Application, Device, isAndroid } from '@nativescript/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'

import { StudentService } from './student.service'
import { Student } from './student.model'

@Component({
  standalone: false,
  selector: 'Students',
  templateUrl: './students.component.html',
})
export class StudentsComponent implements OnInit {
  students: Student[] = []
  isAndroid = false
  platformInfo = ''

  private avatarColors = ['#1F6FEB', '#2E7D32', '#C62828', '#6A1B9A', '#EF6C00', '#00838F']

  constructor(
    private studentService: StudentService,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents()

    // Lógica TypeScript específica de Android (APIs actuales de NativeScript 9)
    this.isAndroid = isAndroid
    if (isAndroid) {
      const activity = Application.android.foregroundActivity || Application.android.startActivity
      if (activity) {
        android.widget.Toast.makeText(
          activity,
          'Lista de estudiantes cargada en Android',
          android.widget.Toast.LENGTH_SHORT
        ).show()
      }
      this.platformInfo = `Android · ${Device.manufacturer} ${Device.model} · API ${Device.sdkVersion}`
    } else {
      this.platformInfo = `iOS · versión ${Device.osVersion}`
    }
  }

  getInitials(student: Student): string {
    return `${student.nombre.charAt(0)}${student.apellido.charAt(0)}`.toUpperCase()
  }

  getAvatarColor(student: Student): string {
    return this.avatarColors[student.id % this.avatarColors.length]
  }

  onStudentTap(student: Student): void {
    this.routerExtensions.navigate(['/students/detail', student.id], {
      transition: { name: 'slide' },
    })
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
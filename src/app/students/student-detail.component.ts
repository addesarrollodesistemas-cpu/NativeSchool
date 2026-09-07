import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Device, isAndroid } from '@nativescript/core'

import { StudentService } from './student.service'
import { Student } from './student.model'

@Component({
  standalone: false,
  selector: 'StudentDetail',
  templateUrl: './student-detail.component.html',
})
export class StudentDetailComponent implements OnInit {
  student: Student | undefined
  isAndroid = false
  platformInfo = ''

  private avatarColors = ['#1F6FEB', '#2E7D32', '#C62828', '#6A1B9A', '#EF6C00', '#00838F']

  constructor(private route: ActivatedRoute, private studentService: StudentService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id'])
    this.student = this.studentService.getStudentById(id)

    // Lógica TypeScript específica de Android (APIs actuales de NativeScript 9)
    this.isAndroid = isAndroid
    if (isAndroid) {
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
}
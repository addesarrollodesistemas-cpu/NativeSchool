import { Injectable } from '@angular/core'

import { Student } from './student.model'

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [
    { id: 1, nombre: 'Carlos', apellido: 'Martínez', grado: '9°', seccion: 'A', email: 'carlos.martinez@example.com' },
    { id: 2, nombre: 'María', apellido: 'González', grado: '9°', seccion: 'A', email: 'maria.gonzalez@example.com' },
    { id: 3, nombre: 'Luis', apellido: 'Pérez', grado: '9°', seccion: 'B', email: 'luis.perez@example.com' },
    { id: 4, nombre: 'Ana', apellido: 'Rodríguez', grado: '10°', seccion: 'A', email: 'ana.rodriguez@example.com' },
    { id: 5, nombre: 'Pedro', apellido: 'López', grado: '10°', seccion: 'B', email: 'pedro.lopez@example.com' },
    { id: 6, nombre: 'Lucía', apellido: 'Fernández', grado: '11°', seccion: 'A', email: 'lucia.fernandez@example.com' },
  ]

  getStudents(): Student[] {
    return this.students
  }

  getStudentById(id: number): Student | undefined {
    return this.students.find((student) => student.id === id)
  }
}
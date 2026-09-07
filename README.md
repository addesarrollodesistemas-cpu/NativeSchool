# NativeSchool — Gestión Académica Mobile

Aplicación móvil multiplataforma desarrollada con **NativeScript, Angular y TypeScript**, orientada a la gestión y consulta de información académica.

El proyecto implementa una arquitectura modular de Angular y utiliza navegación mediante **Side Drawer**, incorporando un módulo específico para la gestión de estudiantes.

---

## 📱 Descripción del proyecto

**NativeSchool** es una aplicación móvil desarrollada como parte de un ejercicio académico de desarrollo de aplicaciones móviles multiplataforma.

La aplicación parte de la arquitectura de **Drawer Navigation** de NativeScript y amplía su funcionalidad mediante la incorporación de un módulo de estudiantes.

Entre sus principales características se encuentran:

- Navegación mediante Side Drawer.
- Arquitectura modular basada en Angular NgModules.
- Módulo independiente para estudiantes.
- Listado dinámico de estudiantes.
- Vista de detalle de cada estudiante.
- Servicio Angular para administrar los datos.
- Inyección de dependencias.
- Renderizado dinámico mediante `ngFor`.
- Estilos específicos para Android e iOS.
- Recurso gráfico personalizado para la aplicación.
- Lógica específica para la plataforma Android.
- Navegación mediante rutas principales y rutas secundarias.

---

## 🛠️ Tecnologías utilizadas

- **NativeScript**
- **Angular**
- **TypeScript**
- **JavaScript**
- **SCSS / CSS**
- **Android**
- **iOS**
- **Angular Router**
- **NativeScript Router**
- **NativeScript UI SideDrawer**

---

## 🧩 Arquitectura del proyecto

La aplicación utiliza una arquitectura modular en la que cada funcionalidad principal se organiza mediante componentes, módulos y archivos de routing independientes.

La estructura principal incluye:

```text
src/
└── app/
    ├── home/
    ├── search/
    ├── featured/
    ├── settings/
    ├── students/
    │   ├── student-detail.component.css
    │   ├── student-detail.component.html
    │   ├── student-detail.component.ts
    │   ├── student.model.ts
    │   ├── student.service.ts
    │   ├── students-routing.module.ts
    │   ├── students.component.android.css
    │   ├── students.component.css
    │   ├── students.component.html
    │   ├── students.component.ios.css
    │   ├── students.component.ts
    │   └── students.module.ts
    │
    ├── app-routing.module.ts
    ├── app.component.html
    ├── app.component.ts
    └── app.module.ts
│
└── fonts/

App_Resources/
├── Android/
└── iOS/
```

---

# 🎓 Módulo de estudiantes

La funcionalidad principal agregada al proyecto se encuentra en:

```text
src/app/students/
```

Este módulo encapsula la funcionalidad relacionada con los estudiantes y mantiene separadas sus vistas, lógica, navegación, estilos y acceso a datos.

### Componentes

El módulo incorpora dos componentes principales:

- `StudentsComponent`
- `StudentDetailComponent`

`StudentsComponent` presenta el listado de estudiantes, mientras que `StudentDetailComponent` muestra la información correspondiente al estudiante seleccionado.

---

## 🧱 StudentsModule

El módulo de estudiantes se encuentra definido en:

```text
students.module.ts
```

Este módulo declara los componentes relacionados con estudiantes y utiliza `NativeScriptCommonModule` junto con su módulo de navegación específico.

La separación mediante un módulo independiente permite mantener la funcionalidad organizada y facilita su mantenimiento y ampliación.

---

## 🛣️ StudentsRoutingModule

La navegación específica del módulo se encuentra en:

```text
students-routing.module.ts
```

Se utilizan rutas secundarias para separar el listado y el detalle:

```text
/students
/students/detail/:id
```

La ruta principal presenta el listado de estudiantes y la ruta parametrizada permite acceder al detalle de un estudiante determinado.

El módulo utiliza:

```typescript
NativeScriptRouterModule.forChild(routes)
```

para integrar estas rutas dentro de la arquitectura modular de la aplicación.

---

## 🧭 Integración con el Side Drawer

La funcionalidad de estudiantes se encuentra integrada en el menú lateral de navegación de la aplicación.

La opción:

```text
Estudiantes
```

permite acceder directamente a:

```text
/students
```

De esta forma, el nuevo módulo queda integrado con la navegación principal de la aplicación.

---

## 🔌 StudentService e inyección de dependencias

Los datos de los estudiantes son administrados mediante:

```text
student.service.ts
```

El servicio utiliza la inyección de dependencias de Angular mediante:

```typescript
@Injectable({
  providedIn: 'root'
})
```

Esto permite disponer de una instancia global del servicio dentro de la aplicación.

Entre sus responsabilidades se encuentran:

- Obtener el listado de estudiantes.
- Buscar un estudiante mediante su identificador.

La utilización de un servicio independiente mantiene separada la lógica de acceso a los datos respecto de la interfaz de usuario.

---

## 📋 Renderizado dinámico con ngFor

El listado de estudiantes se genera dinámicamente mediante la directiva Angular:

```html
*ngFor="let student of students"
```

Esto permite recorrer la colección proporcionada por `StudentService` y generar visualmente cada elemento del listado.

Cada estudiante puede seleccionarse para acceder a su correspondiente vista de detalle.

---

## 🎨 Estilos multiplataforma

El proyecto utiliza archivos de estilos específicos para cada plataforma.

### Estilos generales

```text
students.component.css
```

### Estilos específicos para Android

```text
students.component.android.css
```

### Estilos específicos para iOS

```text
students.component.ios.css
```

Esta separación permite adaptar la presentación de la interfaz a las características particulares de cada plataforma.

En Android se incorporan propiedades y ajustes específicos de la interfaz, mientras que iOS dispone de sus propias reglas de presentación.

---

## 🖼️ Recurso gráfico personalizado

La aplicación incorpora un recurso gráfico personalizado dentro de:

```text
App_Resources/Android/src/main/res/drawable/
```

Específicamente:

```text
ic_school.xml
```

Este recurso corresponde a un drawable vectorial utilizado dentro de la interfaz de estudiantes y relacionado con la temática académica de la aplicación.

También se encuentra integrado dentro de los recursos de Android utilizados por el proyecto.

---

## 🤖 Lógica específica para Android

El proyecto incorpora lógica específica que se ejecuta únicamente cuando la aplicación se encuentra funcionando sobre Android.

La detección de plataforma se realiza mediante NativeScript y permite ejecutar código exclusivo de Android.

Entre las funcionalidades implementadas se encuentra:

- Obtención de información del dispositivo.
- Identificación del fabricante y modelo.
- Obtención de la versión de API.
- Presentación de una notificación Toast específica de Android.

La lógica específica se encuentra implementada en el componente de estudiantes.

---

## 👨‍🎓 Información de estudiantes

Actualmente el proyecto utiliza un conjunto de datos de ejemplo para representar estudiantes.

Cada registro contiene información académica básica utilizada para demostrar:

- Listado de registros.
- Renderizado dinámico.
- Navegación.
- Consulta mediante identificador.
- Visualización del detalle.

La estructura de los datos se define mediante:

```text
student.model.ts
```

Esto permite trabajar con una estructura tipada mediante TypeScript.

---

## ▶️ Ejecución del proyecto

### Requisitos

Se requiere disponer de:

- Node.js
- npm
- NativeScript CLI
- JDK
- Android SDK para ejecutar sobre Android

### Instalación de dependencias

Desde la raíz del proyecto:

```bash
npm install
```

### Ejecutar en Android

Con un dispositivo Android conectado y configurado para depuración:

```bash
ns run android
```

También es posible utilizar un dispositivo virtual Android configurado mediante Android Studio.

---

## 📂 Estructura de archivos principales

| Archivo | Función |
|---|---|
| `students.module.ts` | Define el módulo de estudiantes |
| `students-routing.module.ts` | Define las rutas del módulo |
| `students.component.ts` | Lógica del listado |
| `students.component.html` | Interfaz del listado |
| `student-detail.component.ts` | Lógica del detalle |
| `student-detail.component.html` | Interfaz del detalle |
| `student.service.ts` | Gestión de los datos |
| `student.model.ts` | Modelo de datos |
| `students.component.css` | Estilos generales |
| `students.component.android.css` | Estilos específicos de Android |
| `students.component.ios.css` | Estilos específicos de iOS |
| `app-routing.module.ts` | Routing principal |
| `app.component.html` | Side Drawer principal |

---

## ✅ Elementos implementados

El proyecto incorpora los principales elementos solicitados para el ejercicio:

- [x] Proyecto basado en Drawer Navigation de NativeScript.
- [x] Side Drawer para navegación.
- [x] Componente `StudentsComponent`.
- [x] Componente `StudentDetailComponent`.
- [x] `StudentsModule`.
- [x] `StudentsRoutingModule`.
- [x] Integración de "Estudiantes" en el Side Drawer.
- [x] Servicio Angular `StudentService`.
- [x] Inyección de dependencias mediante `providedIn: 'root'`.
- [x] Renderizado mediante `ngFor`.
- [x] Estilos específicos para Android.
- [x] Estilos específicos para iOS.
- [x] Recurso gráfico personalizado dentro de `App_Resources`.
- [x] Lógica específica para Android.
- [x] Navegación entre listado y detalle de estudiantes.

---

## 🎯 Objetivo académico

El proyecto tiene como objetivo demostrar la aplicación práctica de conceptos relacionados con el desarrollo móvil multiplataforma utilizando NativeScript y Angular, especialmente:

- Componentización.
- Modularización.
- Routing.
- Inyección de dependencias.
- Servicios.
- Renderizado dinámico.
- Diseño multiplataforma.
- Integración con funcionalidades específicas del sistema operativo.

---

## 👤 Información académica

**Estudiante:** Carlos Armando Pacheco Durán

**Asignatura:** Desarrollo de Aplicaciones Móviles

**Proyecto:** NativeSchool — Gestión Académica Mobile

**Fecha:** 070926

---

## 📄 Licencia

Proyecto desarrollado con fines académicos.

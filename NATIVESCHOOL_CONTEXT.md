Actúa como un desarrollador senior especializado en NativeScript + Angular + TypeScript + Android.

Tu objetivo es COMPLETAR Y DEJAR FUNCIONAL el proyecto actual NativeSchool para una evaluación académica de Ingeniería en Sistemas.

IMPORTANTE:
No quiero que simplemente me expliques qué debo hacer.
Quiero que inspecciones el proyecto, realices los cambios necesarios directamente en los archivos y pruebes el resultado.



==================================================
0. DOCUMENTO MAESTRO DE CONTEXTO
==================================================

Antes de realizar cualquier modificación en el proyecto,
LEE COMPLETAMENTE el archivo:

NATIVESCHOOL_CONTEXT.md

ubicado en la raíz del workspace.

Este archivo contiene el contexto técnico, académico,
decisiones previas, problemas ya solucionados y requisitos
del proyecto.

Debe considerarse una fuente de contexto prioritaria para
continuar el trabajo.

NO ignores las decisiones documentadas allí.

Si el contenido del archivo contradice alguna decisión
técnica necesaria para que el proyecto funcione, analiza
la situación y explica la discrepancia antes de realizar
un cambio importante.

Después de completar cambios relevantes, actualiza
NATIVESCHOOL_CONTEXT.md para reflejar:

- cambios realizados
- archivos creados
- archivos modificados
- problemas encontrados
- soluciones aplicadas
- estado actual del proyecto
- pruebas realizadas
- requisitos académicos cumplidos

==================================================
1. PROYECTO
==================================================

Proyecto:
NativeSchool

Ubicación actual:
C:\Dev\NativeSchool

IMPORTANTE:
Esta es la copia de trabajo CORRECTA.
NO trabajes en:
C:\Windows\system32\NativeSchool

El proyecto originalmente fue creado desde:

@nativescript/template-drawer-navigation-ng

El objetivo académico es desarrollar una aplicación móvil multiplataforma para gestión académica utilizando NativeScript, Angular y TypeScript.

Nombre conceptual:
NativeSchool

Concepto:
Aplicación móvil de gestión académica.

==================================================
2. ENTORNO YA CONFIGURADO
==================================================

NO reinstales ni cambies estas herramientas salvo que exista una razón técnica demostrable y absolutamente necesaria.

Node:
24.15.0

npm:
11.12.1

NativeScript CLI:
9.1.1

Java:
Eclipse Temurin JDK 21.0.12

Android SDK:
C:\Android\Sdk

ANDROID_HOME:
C:\Android\Sdk

Android Build Tools:
36.0.0 instalado

Android Platform Tools:
37.0.1

Android Studio:
Quail 3 - 2026.1.3 Patch 1

El diagnóstico:
ns doctor android

ya fue ejecutado y devolvió:

No issues were detected

Dispositivo físico principal:
Samsung Galaxy A36

Android:
16

El dispositivo está conectado mediante USB y la depuración USB funciona.

El comando:

ns devices android

ya detectó correctamente el dispositivo.

==================================================
3. ESTADO ACTUAL IMPORTANTE
==================================================

La aplicación YA COMPILA y YA SE EJECUTA en el Samsung A36.

NO rompas esto.

Se realizó anteriormente:

ns build android

y terminó correctamente con:

Project successfully built.

El APK se generó correctamente.

También se instaló manualmente con:

adb install -r "$env:TEMP\NativeSchool.apk"

y devolvió:

Success

La aplicación se abrió correctamente mediante:

adb shell monkey -p org.nativescript.NativeSchool 1

La pantalla Home funciona.

El Side Drawer funciona.

Actualmente el Drawer muestra:

Home
Estudiantes
Search
Featured
Settings

"Browse" ya fue reemplazado visualmente por "Estudiantes".

La ruta del nuevo botón es:

/students

Pero TODAVÍA no existe completamente la sección Students.

==================================================
4. PROBLEMA QUE YA FUE RESUELTO
==================================================

El template fue creado originalmente para una arquitectura basada en NgModules.

Angular 22 interpreta componentes como standalone por defecto.

Eso provocó errores NG6008.

La solución ya aplicada fue agregar:

standalone: false,

a:

src/app/app.component.ts
src/app/home/home.component.ts
src/app/browse/browse.component.ts
src/app/search/search.component.ts
src/app/featured/featured.component.ts
src/app/settings/settings.component.ts

NO elimines estos standalone: false.

NO conviertas estos componentes a standalone.

La arquitectura académica de este proyecto debe continuar utilizando NgModules.

==================================================
5. ARQUITECTURA ACTUAL
==================================================

El proyecto utiliza:

Angular
NativeScript Angular
NgModules
NativeScriptRouterModule
lazy loading
RadSideDrawer
page-router-outlet

El archivo principal de navegación es:

src/app/app-routing.module.ts

Actualmente utiliza un patrón similar a:

{
  path: 'home',
  loadChildren: () =>
    import('~/app/home/home.module').then(m => m.HomeModule)
}

Las demás secciones siguen el mismo patrón.

DEBES respetar esta arquitectura.

==================================================
6. OBJETIVO ACADÉMICO
==================================================

La aplicación debe cumplir estos requisitos:

1. Utilizar el template Drawer Navigation de NativeScript Angular.

2. Tener navegación mediante Side Drawer.

3. Agregar una nueva opción en el Side Drawer llamada:

Estudiantes

4. Crear al menos DOS nuevos componentes relacionados con Estudiantes.

Se recomienda:

StudentsComponent
StudentDetailComponent

5. Crear un módulo:

StudentsModule

6. Crear un módulo específico de rutas:

StudentsRoutingModule

7. Integrar StudentsRoutingModule correctamente dentro de StudentsModule.

8. Registrar StudentsModule mediante lazy loading desde:

app-routing.module.ts

utilizando la ruta:

/students

9. Crear un servicio:

StudentService

10. Utilizar Dependency Injection correctamente.

Preferentemente:

@Injectable({
  providedIn: 'root'
})

11. El servicio debe proporcionar datos de estudiantes.

Puede utilizar datos locales/mock porque el ejercicio no requiere backend.

12. Utilizar *ngFor para mostrar una lista de estudiantes.

13. Crear navegación desde la lista hacia el detalle de un estudiante.

14. Crear estilos específicos para Android e iOS.

Por ejemplo:

students.component.android.css
students.component.ios.css

Si es necesario crear estilos comunes:

students.component.css

15. Implementar lógica TypeScript específica para Android.

Debe existir código que detecte correctamente Android usando APIs actuales de NativeScript.

NO inventes APIs antiguas.

Investiga la documentación actual de NativeScript si es necesario.

16. Incorporar un ícono personalizado dentro de:

App_Resources

17. Integrar ese recurso de forma correcta en Android.

18. La aplicación debe seguir siendo funcional en Android.

19. Mantener el código organizado y modular.

==================================================
7. FUNCIONALIDAD DE STUDENTS
==================================================

Implementa una sección visualmente profesional pero sencilla.

Título:

Estudiantes

Debe mostrar una lista mediante ngFor.

Cada estudiante puede tener:

id
nombre
apellido
grado
sección
email
foto o iniciales opcionales

Ejemplo:

[
  {
    id: 1,
    nombre: "Carlos",
    apellido: "Martínez",
    grado: "9°",
    seccion: "A",
    email: "carlos@example.com"
  },
  ...
]

Utiliza al menos 5 estudiantes mock.

La lista debe ser suficientemente clara para demostrar ngFor.

Al seleccionar un estudiante debe abrir:

StudentDetailComponent

La pantalla de detalle debe mostrar información del estudiante.

==================================================
8. STUDENTS MODULE
==================================================

Crear:

src/app/students/students.module.ts

Debe seguir la arquitectura NgModule utilizada por el resto del proyecto.

Debe importar:

NativeScriptCommonModule
StudentsRoutingModule

Y declarar:

StudentsComponent
StudentDetailComponent

Si Angular 22 requiere:

standalone: false

en estos componentes, debes utilizarlo.

==================================================
9. STUDENTS ROUTING
==================================================

Crear:

src/app/students/students-routing.module.ts

Debe utilizar:

NativeScriptRouterModule

Crear rutas para:

/students

y una ruta de detalle.

Por ejemplo:

{
  path: '',
  component: StudentsComponent
}

y:

{
  path: 'detail/:id',
  component: StudentDetailComponent
}

Utiliza navegación compatible con NativeScript Angular.

==================================================
10. APP ROUTING
==================================================

Modificar:

src/app/app-routing.module.ts

Agregar lazy loading:

{
  path: 'students',
  loadChildren: () =>
    import('~/app/students/students.module')
      .then(m => m.StudentsModule)
}

No rompas las rutas existentes.

==================================================
11. SIDE DRAWER
==================================================

Actualmente app.component.html ya tiene:

Estudiantes

con ruta:

/students

DEBES conservarlo.

No elimines:

Home
Search
Featured
Settings

Puedes dejar esos módulos intactos.

La navegación debe continuar funcionando mediante:

onNavItemTap('/students')

y:

isComponentSelected('/students')

==================================================
12. STUDENT SERVICE
==================================================

Crear:

src/app/students/student.service.ts

Utilizar:

@Injectable({
  providedIn: 'root'
})

El servicio debe contener la lista de estudiantes.

Debe proporcionar métodos razonables, por ejemplo:

getStudents()
getStudentById(id)

Utiliza TypeScript tipado.

Si consideras conveniente crear una interfaz:

Student

puedes hacerlo.

Preferentemente crear:

student.model.ts

para mantener separación de responsabilidades.

==================================================
13. NGFOR
==================================================

La lista DEBE demostrar explícitamente el uso de:

*ngFor

No sustituyas esto por una solución que oculte el requisito.

El evaluador debe poder identificar fácilmente el uso de ngFor.

==================================================
14. CSS PLATFORM-SPECIFIC
==================================================

Crear archivos reales específicos de plataforma:

students.component.android.css
students.component.ios.css

No simplemente comentarios diciendo:

/* Android */

Debe existir diferenciación real.

Por ejemplo:

Android puede tener tamaños/espaciados específicos.

iOS puede tener otros tamaños/espaciados.

También puedes crear:

students.component.css

para estilos comunes.

La aplicación debe seguir siendo visualmente coherente.

==================================================
15. ANDROID-ONLY TYPESCRIPT
==================================================

Implementar una pequeña característica demostrable que solamente se ejecute en Android.

Por ejemplo:

detectar Android y almacenar una variable:

isAndroid: boolean

o mostrar una información específica.

Pero la implementación debe utilizar APIs actuales de NativeScript.

NO utilices APIs obsoletas sin verificar.

Antes de implementar esto, consulta documentación oficial actual de NativeScript si existe cualquier duda.

==================================================
16. ICONO PERSONALIZADO
==================================================

La evaluación requiere demostrar utilización de un ícono personalizado en:

App_Resources

Inspecciona la estructura existente:

App_Resources/Android

y configura correctamente un recurso de ícono.

No reemplaces recursos importantes sin verificar.

Si es necesario generar o crear un recurso simple, hazlo de forma compatible con Android.

La integración debe ser real y funcional.

==================================================
17. COMPATIBILIDAD ANGULAR 22
==================================================

El proyecto utiliza Angular 22.

IMPORTANTE:

No conviertas el proyecto entero a standalone.

No elimines los NgModules.

No reemplaces bootstrapModule por bootstrapApplication.

Mantén:

runNativeScriptAngularApp({
  appModuleBootstrap: () =>
    platformNativeScript().bootstrapModule(AppModule)
})

si actualmente funciona.

Los componentes declarados dentro de NgModules deben utilizar:

standalone: false

cuando corresponda.

==================================================
18. NO HAGAS ESTO
==================================================

NO:

- reinstales Node
- cambies Node
- reinstales NativeScript
- cambies JDK
- cambies JAVA_HOME
- cambies Android SDK
- reinstales Android Studio
- actualices Angular arbitrariamente
- actualices NativeScript arbitrariamente
- cambies package.json sin necesidad
- borres package-lock.json
- borres node_modules
- borres platforms sin necesidad
- migres a standalone
- migres a Vite solamente porque esté disponible
- cambies Webpack
- reemplaces el template
- crees otro proyecto
- elimines funcionalidades existentes
- trabajes en C:\Windows\system32\NativeSchool

Si detectas un problema de dependencias, primero analiza las versiones existentes y busca documentación oficial actual.

==================================================
19. INVESTIGACIÓN WEB
==================================================

Si encuentras una incompatibilidad con:

Angular 22
NativeScript 9
NativeScript Angular
NativeScript Android
NativeScript routing
NativeScript CSS por plataforma
NativeScript Android APIs

DEBES investigar primero documentación oficial y repositorios oficiales actuales.

Prioridad:

1. docs.nativescript.org
2. github.com/NativeScript
3. angular.dev

No adoptes soluciones antiguas sin comprobar compatibilidad.

==================================================
20. BUILD Y VALIDACIÓN
==================================================

Después de implementar:

1. Ejecuta una compilación Android.

Preferentemente:

ns build android

2. Si hay errores reales de compilación, analízalos y corrígelos.

3. No confundas warnings con errores.

4. No detengas el trabajo solamente porque aparezcan warnings de Sass si el build termina correctamente.

5. Cuando el build sea exitoso, verifica que exista:

platforms/android/app/build/outputs/apk/debug/app-debug.apk

6. Si es posible y el dispositivo está conectado:

ns devices android

7. Instala/prueba el APK en el dispositivo Android conectado.

8. Verifica:

- aplicación inicia
- Home funciona
- Drawer abre
- Estudiantes aparece
- Estudiantes navega correctamente
- lista de estudiantes aparece
- ngFor funciona
- seleccionar estudiante funciona
- detalle funciona
- volver funciona
- no existen errores críticos en runtime

==================================================
21. WATCHPACK / SYSTEM32
==================================================

Anteriormente el proyecto estuvo ubicado en:

C:\Windows\system32\NativeSchool

Esto produjo problemas como:

Watchpack
EINVAL
lstat C:\pagefile.sys

La copia actual está en:

C:\Dev\NativeSchool

NO regreses a System32.

Si aparece nuevamente un error relacionado con pagefile.sys o archivos del sistema, analiza primero la causa antes de cambiar dependencias.

==================================================
22. FORMA DE TRABAJO
==================================================

Tienes autorización para editar directamente los archivos necesarios del workspace actual.

Trabaja de manera autónoma.

No me preguntes si puedes crear cada archivo.

No me preguntes si puedes modificar cada archivo.

Inspecciona primero la estructura existente.

Después implementa.

Sin embargo:

NO realices cambios destructivos.

Antes de sobrescribir un archivo existente, léelo.

Respeta el estilo del proyecto existente.

Reutiliza patrones existentes cuando sea posible.

==================================================
23. CHECKLIST FINAL OBLIGATORIO
==================================================

Antes de terminar, comprueba uno por uno:

[x] Template Drawer Navigation utilizado
[x] Side Drawer funcional
[x] Home funcional
[x] Estudiantes agregado al Drawer
[x] Ruta /students
[x] StudentsModule
[x] StudentsRoutingModule
[x] StudentsComponent
[x] StudentDetailComponent
[x] StudentService
[x] Dependency Injection
[x] ngFor
[x] lista de estudiantes
[x] detalle de estudiante
[x] navegación lista -> detalle
[x] CSS común si corresponde
[x] CSS Android específico
[x] CSS iOS específico
[x] lógica TypeScript específica para Android
[x] recurso/ícono personalizado en App_Resources
[x] Angular 22 compatible
[x] standalone: false donde corresponda
[x] build Android exitoso
[x] APK generado
[x] aplicación probada en Android si el dispositivo está disponible
[x] no existen errores críticos de runtime

==================================================
24. RESULTADO FINAL
==================================================

Al terminar NO quiero solamente una explicación.

Quiero que:

1. Los archivos estén creados/modificados.
2. El proyecto compile.
3. La aplicación funcione.
4. Los requisitos académicos estén implementados.
5. Me entregues un resumen final de:
   - archivos creados
   - archivos modificados
   - funcionalidades implementadas
   - pruebas realizadas
   - resultado del build
   - requisitos cumplidos
   - cualquier requisito que no haya podido verificarse

Si algo falla, no ocultes el problema.
Explica exactamente:
- qué falló
- por qué
- qué intentaste
- qué solución aplicaste
- qué falta

IMPORTANTE:
NO TE DETENGAS después de crear StudentsComponent.
Debes continuar hasta completar todo el checklist y validar el proyecto.

Comienza ahora inspeccionando el workspace actual:
C:\Dev\NativeSchool

y procede con la implementación.

==================================================
25. REGISTRO DE CAMBIOS — IMPLEMENTACIÓN DE STUDENTS
==================================================

Fecha de implementación:
7 de septiembre de 2026

La sección Students quedó COMPLETA y FUNCIONAL.

--------------------------------------------------
ARCHIVOS CREADOS
--------------------------------------------------

- src/app/students/student.model.ts
  Interfaz Student (id, nombre, apellido, grado, seccion, email).

- src/app/students/student.service.ts
  StudentService con @Injectable({ providedIn: 'root' }) (Dependency Injection).
  Contiene 6 estudiantes mock tipados y los métodos getStudents() y
  getStudentById(id).

- src/app/students/students.module.ts
  StudentsModule (arquitectura NgModule). Importa NativeScriptCommonModule y
  StudentsRoutingModule; declara StudentsComponent y StudentDetailComponent;
  usa NO_ERRORS_SCHEMA (mismo patrón que HomeModule/SettingsModule).

- src/app/students/students-routing.module.ts
  StudentsRoutingModule con NativeScriptRouterModule.forChild:
    { path: '', component: StudentsComponent }
    { path: 'detail/:id', component: StudentDetailComponent }
  (el archivo existía vacío; se completó).

- src/app/students/students.component.ts
  StudentsComponent con standalone: false. Inyecta StudentService vía
  constructor (Dependency Injection) y RouterExtensions para navegar.
  Expone students[] para *ngFor, getInitials(), getAvatarColor().

- src/app/students/students.component.html
  Lista con *ngFor explícito (GridLayout *ngFor="let student of students")
  sobre StackLayout dentro de ScrollView. Cada fila es tappable
  ((tap)="onStudentTap(student)") y muestra avatar de iniciales, nombre
  completo, grado · sección y chevron. Cabecera con ícono res://ic_school
  (visible solo en Android) y contador de estudiantes. Tarjeta de
  "Plataforma detectada" con platformInfo.

- src/app/students/students.component.css
  Estilos comunes (fondos, avatares, tarjetas, tipografía).

- src/app/students/students.component.android.css
  CSS REAL específico de Android: tamaños mayores (avatar 48, fuente 17-18),
  esquinas 14, padding mayor y android-elevation: 2 (propiedad nativa solo
  disponible en Android).

- src/app/students/students.component.ios.css
  CSS REAL específico de iOS: tamaños más compactos (avatar 40, fuente
  13-16), esquinas 10, sin elevación nativa.

- src/app/students/student-detail.component.ts
  StudentDetailComponent con standalone: false. Lee :id de
  ActivatedRoute, obtiene el estudiante con StudentService y arma
  platformInfo por plataforma.

- src/app/students/student-detail.component.html
  Pantalla de detalle: avatar de iniciales grande, nombre completo,
  grado · sección, filas con email, ID y grado/sección (íconos FontAwesome),
  y tarjeta "Lógica TypeScript por plataforma".

- src/app/students/student-detail.component.css
  Estilos comunes del detalle.

- App_Resources/Android/src/main/res/drawable/ic_school.xml
  Ícono personalizado (birrete de graduación) en formato vectorial Android:
  tabla azul #1F6FEB, base #1556C9 y borla amarilla #FFC107.

--------------------------------------------------
ARCHIVOS MODIFICADOS
--------------------------------------------------

- src/app/app-routing.module.ts
  Se agregó lazy loading de StudentsModule en la ruta /students
  (loadChildren). No se rompió ninguna ruta existente.

- App_Resources/Android/src/main/res/mipmap-anydpi-v26/ic_launcher.xml
  El foreground del ícono adaptativo del launcher ahora apunta a
  @drawable/ic_school (ícono personalizado funcional).

- NATIVESCHOOL_CONTEXT.md
  Este documento (checklist actualizado y registro de cambios).

--------------------------------------------------
LÓGICA TYPESCRIPT ESPECÍFICA DE ANDROID
--------------------------------------------------

Se usan SOLO APIs actuales de NativeScript 9 (verificadas en
node_modules/@nativescript/core):

- import { Application, Device, isAndroid } from '@nativescript/core'
- isAndroid (booleano exportado desde '@nativescript/core')
- Application.android.foregroundActivity / startActivity
- android.widget.Toast (API nativa de Android): en StudentsComponent, al
  cargar en Android se muestra un Toast "Lista de estudiantes cargada en
  Android" (NO se ejecuta en iOS).
- Device.manufacturer / Device.model / Device.sdkVersion / Device.osVersion
  para mostrar "Android · samsung SM-A366E · API 36" en la tarjeta de
  plataforma (StudentsComponent y StudentDetailComponent).

El ícono res://ic_school solo se muestra en Android mediante
[visibility]="isAndroid ? 'visible' : 'collapse'".

--------------------------------------------------
PRUEBAS REALIZADAS
--------------------------------------------------

1. npx tsc --noEmit: sin errores.
2. ns build android: "Project successfully built." (Build time ~116 s).
   Solo warnings de deprecación de Sass (no son errores).
3. APK generado:
   platforms/android/app/build/outputs/apk/debug/app-debug.apk
4. Instalado en Samsung Galaxy A36 (RFCY918LYEL) con:
   adb install -r ... -> Success
5. Verificación en dispositivo (vía adb + uiautomator):
   - App inicia sin errores (sin FATAL EXCEPTION ni JS ERROR en logcat).
   - Drawer abre y muestra Home / Estudiantes / Search / Featured / Settings.
   - Navegación drawer -> Home funciona.
   - Navegación drawer -> Estudiantes carga la lista.
   - Lista renderiza 6 estudiantes (ngFor) con iniciales, grado y sección.
   - Tarjeta de plataforma: "Android · samsung SM-A366E · API 36".
   - Tap en "Carlos Martínez" abre el detalle (nombre, email,
     ID de estudiante: 1, grado · sección, tarjeta de plataforma).
   - Botón Volver (hardware back) regresa a la lista.
   - Sin errores críticos de runtime.

--------------------------------------------------
REQUISITOS ACADÉMICOS CUMPLIDOS
--------------------------------------------------

[x] Template Drawer Navigation utilizado (sin cambios)
[x] Side Drawer funcional
[x] Home funcional
[x] Estudiantes en el Drawer
[x] Ruta /students con lazy loading
[x] StudentsModule
[x] StudentsRoutingModule
[x] StudentsComponent
[x] StudentDetailComponent
[x] StudentService (providedIn: 'root')
[x] Dependency Injection
[x] *ngFor explícito en la lista
[x] Lista de 6 estudiantes mock
[x] Detalle de estudiante
[x] Navegación lista -> detalle
[x] CSS común (students.component.css)
[x] CSS Android específico (students.component.android.css)
[x] CSS iOS específico (students.component.ios.css)
[x] Lógica TypeScript específica de Android (isAndroid + Toast + Device)
[x] Ícono personalizado en App_Resources (ic_school.xml)
[x] Integración del recurso en Android (launcher + res://ic_school en UI)
[x] Angular 22 compatible (sin migración a standalone)
[x] standalone: false en los componentes nuevos
[x] Build Android exitoso
[x] APK generado
[x] Aplicación probada en Android (Samsung Galaxy A36)
[x] Sin errores críticos de runtime

--------------------------------------------------
NO VERIFICADO

- Runtime en iOS: no hay Mac/entorno iOS disponible; los archivos
  .ios.css existen y el código usa ramas isAndroid/isIOS correctas, pero
  no se compiló ni ejecutó en iOS.

--------------------------------------------------
OBSERVACIONES

- No se reinstaló ni cambió ninguna herramienta del entorno.
- No se modificó package.json.
- No se tocó la arquitectura NgModule ni los standalone: false previos.
- El dispositivo quedó con la app instalada y los ajustes de pantalla
  restaurados tras las pruebas.
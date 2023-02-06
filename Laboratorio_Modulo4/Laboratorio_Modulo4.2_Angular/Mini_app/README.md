# Layout completo de mini-aplicación
En este ejercicio se practica:

- CLI para crear componentes y servicios.
- Añadir Angular Material al proyecto.
- Diseño del layout completo de una aplicación.
- Programación de un servicio para gestionar el estado de la aplicación.
- Inyección de servicios.
- Routing.
- Formulario.
Ejemplo modelo: https://carherco.es/curso-angular-ejercicio-final


- Crea un nuevo proyecto de Angular con routing y con estilos scss.

- Añade Angular Material: https://material.angular.io/guide/getting-started. (Este punto es mejor hacerlo nada más empezar que una vez terminada la mini-aplicación).

- Crea los componentes necesarios para crear el layout que se describe a continuación. Tendrás componentes de layout (cabecera pública, cabecera privada, pie, menú públic, menú privado…) y componentes enrutados (la página home, la página login, la página acerca de, la página galería…)

- Esta aplicación tendrá 2 menús. Un menú público que se mostrará cuando el usuario todavía no haya hecho login y un menú privado que se mostrará cuando el usuario haya hecho login.

Enlaces del menú público:

- Home => Te lleva a la página de bienvenida de la aplicación
- Login => Te lleva a un formulario de login
- Acerca de => Te lleva a la página “Acerca de”
Enlaces del menú privado:

- Dashboard
- Galería
- CRUD
- Profile
- Deberá aparecer un logo y el nombre de la web en la cabecera y algún contenido estático en el pie.

- Configura el routing para asingar una url a cada una de las 7 páginas de los menús. Puedes enseñar (de momentos) los dos menús simultáneamente en la pantalla para comprobar que funcionan.
- Los componentes todavía no tienen ningún contenido. No hay que programarlos. En este punto basta con que existan y se muestra su contenido por defecto: ‘xxxxxx works’

- Crea un formulario de login con 2 campos: username y password. Pon validaciones y mensajes de error. Al hacer submit del formulario, el componente invocará al método login() del servicio descrito en el siguiente punto.

- Crea un servicio Auth que gestione el estado relacionado con la autenticación del usuario. Este servicio debe ofrecer cuatro métodos:

login({username: string, password: string}): boolean
logout(): void
isLogged(): boolean
getUsername(): string
El método de login devolverá true para la combinación válida username = ‘master8@lemoncode.net’ y password: ‘12345678’. Para el resto de combinaciones devolverá false. (Un simple if es suficiente para esta simulación de login). Si la combinación válida que os sugiero no cumpliera las validaciones de vuestro formulario de login, podéis utilizar cualquier otra combinación válida que se adapte a vuestro caso.

- RETO. Añade persistencia al estado de autenticación guardando el estado en el localstorage.

- Modifica el componente de login para que si al invocar al servicio de login, éste último devuelve true, el componente redirija al usuario al dashboard.


- Haz que solamente se muestre el menú público si el usuario no está logueado y el menú privado si el usuario sí está logueado.

- Añade un botón de salir en la cabecera de la web que solamente se muestre si el usuario está logueado

- También en la cabecera, y solamente cuando el usuario esté logueado, muestra el username del usuario.

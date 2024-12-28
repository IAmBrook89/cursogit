//git init --incializa el repositorio en la carpeta donde estamos trabajando
//git add "nombre de archivo" --agrega ese archivo al repositorio local
//git add . --agrega todos los archivos al repositorio local
//git commit -m "mensaje" --Comitea los cambios al repo y el -m es para definir un mensaje
//git log --muestra el log de los commit realizados
// --al hacer cambios los archivos se veran con la M de modified, hay q volver a hacer un add para q remplace en el repo los archivos antes del commit.--
//node ./nombre de archivo el entorno node ejecutara el archivo en nuestro equipo
//git status te da la info de la rama donde estas trabajando y si hay cambios etc
//git remote -v busca en el repo local la direccion del repositorio remoto si es que existe
// -- para trabajar con el repo remoto siempre se usa la palabra remote--
//git remote add origin "Url del repo" --agrega el repo remoto correspondiente
//git push -u origin main --pushea el contenido al repo, git se va a fijar cada vez que haces un push va a pedir las credenciales de usuario, estando ya logueado y diciendo -u ya al estar logueado va a omitir el paso de las credenciales por q ya las tiene
//git push --intenta realizar el push, se pediran credenciales
//git branch --devuelve la ramas existentes, la rama donde estoy parado tendra un asterisco y aparecera en color verde
//git branch -M "nombre elegido" --permite renombrar la rama, tiene que ser antes de hacer push
//git push origin master(nombre de la rama) -- realiza el push al repo remoto
//npm init -- al igual que con git, inicializa un proyecto node en el folder actual, hay que completar los datos de la config
// --nombre --version declarada para el proyecto(en caso de tener ya una version anterior) -- una descripcion --el punto de entrada(el archivo de inicio, puede ser server.js o cualquier otro archivo) -- test command -- git repository, ahi podemos poner el repo(URL) del proyecto --keywords --autor del proyecto --licencia que usaras el repo si es que queremos --  tras una confirmacion creara el archivo


//npm install nombre de la libreria a instalar --el gestor de paquetes instalara lo que le pidamos
//npm start -- va a iniciar lo que tenga configurado
//Ctrl+c -- Corta le Ejecucion del servidor(la Consola queda inabilitada cuando el servidor esta activo)
//en git ignore podemos agregar lo que queremos que git ignore para subir al repo, se puede agregar el nombre del archivo, /carpetas a ignorar y tmb por extension, por ej *.txt - Ejemplo  index.js -- /node_modules -- (Asterisco) *.txt
//por defecto git ignora las carpetas vacias, creando en dichas carpetas un archivo llama .gitkeep hara que git ya realize el trackeo de esas carpetas
//
//
//git branch -l --lista las ramas que nosotros tenemos
//git branch "nombre de la rama" --asi se crea una rama nueva, se crea una copia exacta en este punto de la rama master
//git checkout "nombre de la rama" --cambia de la rama actual a la rama seleccionada
//
//
//
//


const GitIgnore = () => {
    return (
      <main>
        <nav>
          <a href="/">Inicio</a>
          <a href="/projects">Proyectos</a>
          <a href="/git-ignore" aria-current="page">Git Ignore</a>
        </nav>
        <div className="container">
          <div className="title">
            <h1>GIT IGNORE TUTORIAL HD</h1>
          </div>
          <div className="content">
            <p>
              Un archivo .gitignore es esencial en cualquier proyecto de Git porque te permite especificar qué archivos o directorios deseas que Git ignore, es decir, que no rastree ni incluya en los commits. Aquí hay un tutorial muy básico para empezar:
            </p>
            <h3>Paso 1: Crear un archivo .gitignore</h3>
          <p>1. Abre tu terminal (o línea de comandos).</p>
          <p>2. Navega al directorio de tu proyecto.</p>
          <p>3. Crea un archivo llamado .gitignore. Puedes hacerlo con el siguiente comando:</p>
          <div className="title"><p>touch .gitignore</p></div>
          <h3>Paso 2: Añadir reglas al archivo .gitignore</h3>
          <p>
            Dentro del archivo .gitignore, puedes especificar qué archivos o directorios quieres que Git ignore. Aquí algunos ejemplos básicos:
          </p>
          <h4>• Ignorar todos los archivos .log:</h4>
          <div className="title"><p>*.log</p></div>
          <h4>• Ignorar un directorio específico:</h4>
          <div className="title"><p>/nombre_directorio/</p></div>
          <h4>• Ignorar un archivo específico:</h4>
          <div className="title"><p>nombre_archivo.ext</p></div>
          <h4>• Ignorar todos los archivos en una carpeta específica:</h4>
          <div className="title"><p>carpeta/*</p></div>
          <h4>• Ignorar todos los archivos pero hacer una excepción:</h4>
          <div className="title">
            <p>*.log <br /> !importante.log</p>
          </div>
          <h3>Paso 3: Guardar y verificar</h3>
          <p>
            1. Guarda el archivo .gitignore después de agregar tus reglas.<br />
            2. Puedes verificar si los archivos están siendo ignorados correctamente utilizando:
          </p>
          <div className="title"><p>git status</p></div>
          <h3>Paso 4: Commit del archivo .gitignore</h3>
          <p>
            Si es la primera vez que agregas un archivo .gitignore, asegúrate de hacer commit de este archivo para que forme parte del control de versiones del proyecto:
          </p>
          <div className="title">
            <p>git add .gitignore<br /> git commit -m "Añadir archivo .gitignore"</p>
          </div>
          <h2>Ejemplo de archivo .gitignore</h2>
          <div className="title">
            <p>
              # Ignorar todos los archivos .log<br />
              *.log<br /><br />
              # Ignorar la carpeta de compilación<br />
              build/<br /><br />
              # Ignorar archivos de configuración de un IDE<br />
              .idea/<br />.vscode/<br /><br />
              # Ignorar archivos generados por el sistema operativo<br />
              .DS_Store<br />Thumbs.db<br /><br />
            </p>
          </div>
          <p>
            Este archivo asegura que Git no rastree los archivos de registro, la carpeta de compilación, archivos de configuración del IDE y archivos generados por el sistema operativo. ¡Y eso es todo! Con estos pasos básicos, ya sabes cómo usar un archivo .gitignore para gestionar qué archivos y carpetas incluir en tu repositorio Git.
          </p>
          </div>
        </div>
      </main>
    );
  };
  
  export default GitIgnore;
  
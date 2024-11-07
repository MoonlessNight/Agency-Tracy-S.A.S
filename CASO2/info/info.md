Instalar Node.js y npm:
Descargar e instalar node.js 
Probar desde PowerShell o CMD (Administrador)
# node -v
# npm -v

Instalar TypeScript:
Probar desde PowerShell o CMD (Administrador)
# npm install -g typescript
Verifiquen la instalación de TypeScript con
# tsc -v

Instalar Extension en VSCODE:
JavaScript and TypeScript Nightly (Microsoft)

Organizar los archivos:

AgenciaDeViajes/
├── src/
│   ├── index.html
│   ├── styles.css
│   ├── main.ts
│   └── assets/
│       └── bg.jpg
├─────────────────


Crear un archivo package.json:
En la terminal
# npm init

Inicializar el proyecto de TypeScript:
En la terminal
# tsc --init
Esto creará un archivo tsconfig.json, que permite configurar el compilador TypeScript.

Compilar TypeScript a JavaScript:
# tsc src/main.ts --outDir dist

Esto generará un archivo main.js dentro de una carpeta dist

AgenciaDeViajes/
├── dist/
│   └── main.js
├── src/
│   ├── index.html
│   ├── styles.css
│   ├── main.ts
│   └── assets/
│       └── bg.jpg
├── package.json
└── tsconfig.json



CAmbiar politica: 
"cannot be loaded because running scripts is disabled on this system"
Probar desde PowerShell o CMD (Administrador)
# Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
Cuando te pregunte si deseas realizar este cambio, escribe Y para confirmar.

Verificar la nueva política:
# Get-ExecutionPolicy -Scope CurrentUser



º EMPAQUETADO º

Instalación de Electron: 
# npm install electron --save-dev

Instalación de Electron Packager: 
# npm install -g electron-packager

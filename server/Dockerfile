# Usar la imagen base de Node.js
FROM node:18.17.1-alpine

# Crear un directorio en /usr/src/app
VOLUME /usr/src/app

# Copiar los archivos package.json y package-lock.json al directorio de trabajo
COPY package-lock.json .
COPY package.json .
# Instalar las dependencias
RUN npm install

# Copiar todo el directorio del proyecto al contenedor
COPY . .

# Exponer el puerto 4000
EXPOSE 4000

# Comando por defecto para ejecutar la aplicación
CMD ["node", "index.js"]
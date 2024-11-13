# Usar la imagen base de Nginx
FROM nginx:stable-alpine

# Eliminar el contenido de la carpeta por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar los archivos de la aplicación React ya construida (asumiendo que están en la carpeta 'build')
COPY front /usr/share/nginx/html/

# Copiar la configuración personalizada de Nginx (si la tienes)
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types

# Exponer el puerto 80
EXPOSE 80

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /app

COPY . /app/

# Copy your HTML and JS
RUN cp /app/react/index.html /usr/share/nginx/html/index.html
RUN cp /app//react/script.js /usr/share/nginx/html/script.js

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

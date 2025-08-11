FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the code to the container working directory
COPY . /app/

# Copy your HTML and JS
RUN cp /app/react/index.html /usr/share/nginx/html/index.html
RUN cp /app//react/script.js /usr/share/nginx/html/script.js

#Expose port 80 to the outside world
EXPOSE 80

# Use the default command to run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

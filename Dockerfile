#Parent Image
FROM nginx:latest

#Copy bundles
COPY dist/ /usr/share/nginx/html

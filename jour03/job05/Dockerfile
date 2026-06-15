FROM php:8.2-apache
COPY index.html /var/www/html/
COPY save.php /var/www/html/
RUN mkdir -p /var/www/html/data
COPY results.json /var/www/html/data/results.json
RUN chown -R www-data:www-data /var/www/html && chmod 666 /var/www/html/data/results.json
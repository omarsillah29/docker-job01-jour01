FROM php:8.2-apache
COPY index.html /var/www/html/
COPY save.php /var/www/html/
COPY results.json /var/www/html/
RUN chown -R www-data:www-data /var/www/html && chmod 666 /var/www/html/results.json
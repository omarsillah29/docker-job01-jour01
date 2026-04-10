# Utilise Node.js 16-alpine
FROM node:16-alpine

# Crée le répertoire de l'application
WORKDIR /usr/src/app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port 3000
EXPOSE 3000

# Lancer l'application
CMD ["node", "server.js"]

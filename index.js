const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Récupérer l'URL demandée par le client
  const requestUrl = req.url;

  // Définir le chemin du fichier demandé
  const filePath = path.join(__dirname, requestUrl === '/' ? 'index.html' : requestUrl);

  // Lire le contenu du fichier demandé
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      // Déterminer le type de contenu en fonction de l'extension du fichier
      const contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript'
      }[path.extname(filePath)] || 'text/plain';

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

const PORT = 9000;

server.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});

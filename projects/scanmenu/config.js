// Configuration - Les clés API doivent être définies via des variables d'environnement
// En développement local, utilisez un fichier .env (non commité)

const getApiKey = () => {
  // Priorité : variable d'environnement > fichier .env > erreur
  const key = 
    typeof process !== 'undefined' && process.env?.IMGBB_API_KEY ||
    window.IMGBB_API_KEY;
  
  if (!key) {
    console.error('⚠️  IMGBB_API_KEY non définie. Configurez la variable d\'environnement ou le fichier .env');
    return null;
  }
  return key;
};

window.IMGBB_API_KEY = getApiKey();

// Export pour les modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getApiKey };
}

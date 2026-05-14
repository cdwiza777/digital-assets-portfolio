// TEMPLATE - Copier ce fichier en config.js et remplacer par votre vraie clé API
// ⚠️ NE JAMAIS commiter les vraies clés API sur GitHub

const getApiKey = () => {
  const key = 
    typeof process !== 'undefined' && process.env?.IMGBB_API_KEY ||
    window.IMGBB_API_KEY;
  
  if (!key) {
    console.error('⚠️  IMGBB_API_KEY non définie');
    return null;
  }
  return key;
};

window.IMGBB_API_KEY = getApiKey();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getApiKey };
}

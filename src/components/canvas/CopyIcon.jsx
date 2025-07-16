import { useState } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa";

// Composant réutilisable qui permet de copier un texte passé en prop
const CopyIcon = ({ textToCopy }) => {
  // Etat pour savoir si le texte a été copié
  const [copied, setCopied] = useState(false);

  // Fonction qui copie le texte dans le presse-papiers
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true); // change l'icône pour montrer que c'est copié
    setTimeout(() => setCopied(false), 1500); 
  };

  return (
    <button
      onClick={handleCopy}
      className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
      title="Copier"
    >
      {/* Si le texte est copié, on affiche une icône de validation */}
      {copied ? <FaCheck className="text-green-500" /> : <FaRegCopy />}
    </button>
  );
};

export default CopyIcon;

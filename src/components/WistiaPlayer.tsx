// src/components/WistiaPlayer.tsx

import React, { useEffect } from 'react';

interface WistiaPlayerProps {
  mediaId: string;
  className?: string; // Para permitir estilos personalizados desde fuera
}

const WistiaPlayer: React.FC<WistiaPlayerProps> = ({ mediaId, className }) => {
  useEffect(() => {
    const embedScriptId = `wistia-embed-script-${mediaId}`;

    if (!document.querySelector('script[src="https://fast.wistia.com/player.js"]')) {
      const playerScript = document.createElement('script');
      playerScript.src = "https://fast.wistia.com/player.js";
      playerScript.async = true;
      document.body.appendChild(playerScript);
    }

    if (!document.getElementById(embedScriptId)) {
      const embedScript = document.createElement('script');
      embedScript.id = embedScriptId;
      embedScript.src = `https://fast.wistia.com/embed/${mediaId}.js`;
      embedScript.async = true;
      document.body.appendChild(embedScript);
    }

    return () => {
      const embedScript = document.getElementById(embedScriptId);
      if (embedScript) {
        embedScript.remove();
      }
    };
  }, [mediaId]);

  // === CAMBIO CLAVE ===
  // Aplicamos las clases directamente al reproductor de Wistia
  // en lugar de envolverlo en un div.
  return (
    <wistia-player
      media-id={mediaId}
      className={className}
    ></wistia-player>
  );
};

export default WistiaPlayer;
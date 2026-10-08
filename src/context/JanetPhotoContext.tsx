import React, { createContext, useContext, useState, useEffect } from 'react';

interface JanetPhotoContextType {
  photoUrl: string | null;
  setPhoto: (url: string) => void;
  uploadPhoto: (file: File) => void;
  removePhoto: () => void;
}

const JanetPhotoContext = createContext<JanetPhotoContextType>({
  photoUrl: null,
  setPhoto: () => {},
  uploadPhoto: () => {},
  removePhoto: () => {},
});

export const JanetPhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoUrl, setPhotoUrlState] = useState<string | null>(() => {
    try {
      return localStorage.getItem('mv_janet_photo_data');
    } catch {
      return null;
    }
  });

  useEffect(() => {
    // If not in localStorage, probe common static paths
    if (!photoUrl) {
      const candidates = [
        '/images/janet-lopez.png',
        '/Janet López.png',
        '/Janet%20L%C3%B3pez.png',
        '/janet-lopez.png',
      ];

      const checkNext = (idx: number) => {
        if (idx >= candidates.length) return;
        const img = new Image();
        img.onload = () => {
          setPhotoUrlState(candidates[idx]);
          try {
            localStorage.setItem('mv_janet_photo_data', candidates[idx]);
          } catch {}
        };
        img.onerror = () => checkNext(idx + 1);
        img.src = candidates[idx];
      };

      checkNext(0);
    }
  }, [photoUrl]);

  const setPhoto = (url: string) => {
    setPhotoUrlState(url);
    try {
      localStorage.setItem('mv_janet_photo_data', url);
    } catch {}
  };

  const uploadPhoto = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPhoto(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const removePhoto = () => {
    setPhotoUrlState(null);
    try {
      localStorage.removeItem('mv_janet_photo_data');
    } catch {}
  };

  return (
    <JanetPhotoContext.Provider value={{ photoUrl, setPhoto, uploadPhoto, removePhoto }}>
      {children}
    </JanetPhotoContext.Provider>
  );
};

export const useJanetPhoto = () => useContext(JanetPhotoContext);

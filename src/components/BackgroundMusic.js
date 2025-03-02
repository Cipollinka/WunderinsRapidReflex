import React, { useEffect, useState } from 'react';
import Sound from 'react-native-sound';
import { useSelector } from 'react-redux';

const BackgroundMusic = () => {
  const isMusicOn = useSelector((state) => state.settings.isMusicOn);
  const [backgroundMusic, setBackgroundMusic] = useState(null);

  useEffect(() => {
    if (isMusicOn) {
      const music = new Sound('gamebgmusic.wav', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('Ошибка загрузки звука:', error);
          return;
        }

        music.setNumberOfLoops(-1);
        music.setVolume(0.5);
        music.play((success) => {
          if (!success) {
            console.log('Ошибка воспроизведения');
          }
        });

        setBackgroundMusic(music);
      });
    } else {
      if (backgroundMusic) {
        backgroundMusic.stop(() => backgroundMusic.release());
        setBackgroundMusic(null);
      }
    }

    return () => {
      if (backgroundMusic) {
        backgroundMusic.stop(() => backgroundMusic.release());
        setBackgroundMusic(null);
      }
    };
  }, [isMusicOn]);

  return null;
};

export default BackgroundMusic;

import { useEffect, useState } from 'react'
import alertSoundFile from '../../alert-sound.wav';

const AfkAlert = ({ isUserActive, setIsUserActive }) => {
    const [alertSound] = useState(new Audio(alertSoundFile));

    useEffect(() => {
        let activityTimer = setTimeout(() => {
            setIsUserActive(false);
            playAlertSound();
        }, 300000);

        const handleUserActivity = () => {
            setIsUserActive(true);
            clearTimeout(activityTimer);
            stopAlertSound(); 
            activityTimer = setTimeout(() => {
                setIsUserActive(false);
                playAlertSound();
            }, 300000);
        };

        const playAlertSound = () => {
            alertSound.currentTime = 0;
            alertSound.play();
        };

        const stopAlertSound = () => {
            alertSound.pause();
            alertSound.currentTime = 0;
        };

        window.addEventListener('mousemove', handleUserActivity);
        window.addEventListener('keydown', handleUserActivity);

        return () => {
            window.removeEventListener('mousemove', handleUserActivity);
            window.removeEventListener('keydown', handleUserActivity);
            clearTimeout(activityTimer);
            stopAlertSound();
        };
    }, [alertSound, setIsUserActive]);

    return null;
};

export default AfkAlert;

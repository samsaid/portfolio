import { useState, useEffect } from 'react';
import '../styles/Footer.css'

const LAST_UPDATED = '09-30-25';

function Footer(){
    const [time, setTime] = useState('');
    const [emoji, setEmoji] = useState('');

    useEffect(() => {
        const update = () => {
            const now = new Date();
            const hour = parseInt(now.toLocaleString('en-US', {
                timeZone: 'America/Phoenix',
                hour: 'numeric',
                hour12: false,
            }));
            const formatted = now.toLocaleTimeString('en-US', {
                timeZone: 'America/Phoenix',
                hour: '2-digit',
                minute: '2-digit',
            });
            setTime(formatted);
            setEmoji(hour >= 19 || hour < 4 ? '⏾' : '☀︎');
        };
        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);

    return(
        <footer id='footer'>
            <div className="footer-row">
                <span className="footer-location">{emoji} {time}, Phoenix</span>
            </div>
            <div className="footer-row">
                <a className="changelog" href="https://github.com/samsaid/portfolio" target="_blank" rel="noopener noreferrer">last updated {LAST_UPDATED}</a>
            </div>
        </footer>
    );
}

export default Footer;

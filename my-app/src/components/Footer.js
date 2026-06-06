import { useState, useEffect } from 'react';
import '../styles/Footer.css'

function Footer(){
    const [time, setTime] = useState('');
    const [emoji, setEmoji] = useState('');
    const [lastUpdated, setLastUpdated] = useState('');

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

    useEffect(() => {
        fetch('https://api.github.com/repos/samsaid/portfolio/commits/new-format')
            .then(res => res.json())
            .then(data => {
                const date = new Date(data.commit.committer.date);
                const formatted = date.toLocaleDateString('en-US', {
                    month: '2-digit',
                    day: '2-digit',
                    year: '2-digit',
                }).replace(/\//g, '-');
                setLastUpdated(formatted);
            })
            .catch(() => setLastUpdated(''));
    }, []);

    return(
        <footer id='footer'>
            <div className="footer-row">
                <span className="footer-location">{emoji} {time}, Phoenix</span>
            </div>
            <div className="footer-row">
                <a className="changelog" href="https://github.com/samsaid/portfolio" target="_blank" rel="noopener noreferrer">last updated {lastUpdated}</a>
            </div>
        </footer>
    );
}

export default Footer;

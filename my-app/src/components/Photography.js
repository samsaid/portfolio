import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Photography.css';

// Auto-loads every image dropped into src/images/photography/ — no manual
// wiring needed, just add files to that folder and rebuild.
const photoContext = require.context(
    '../images/photography',
    false,
    /\.(png|jpe?g|gif|webp)$/i
);

// Add a caption for any photo by matching its filename below. Photos
// without an entry here just render without a caption.
const captions = {
    './100_1147.jpeg': 'golden hour, somewhere off the beaten path',
    './100_1164.jpeg': 'chamonix, france - shot on 35mm film',
    './100_1221.JPG': 'a quiet afternoon',
    './grand-canyon.jpeg': 'grand canyon "ooh ahh" overlook',
    './psg-stadium.jpeg': 'Parc des Princes, Paris Saint-Germain',
};

const photos = photoContext.keys().map((key) => ({
    key,
    src: photoContext(key),
    caption: captions[key] || '',
}));

function Photography() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const selected = selectedIndex !== null ? photos[selectedIndex] : null;

    const showNext = useCallback(() => {
        setSelectedIndex((i) => (i + 1) % photos.length);
    }, []);

    const showPrev = useCallback(() => {
        setSelectedIndex((i) => (i - 1 + photos.length) % photos.length);
    }, []);

    useEffect(() => {
        if (selectedIndex === null) return;
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') showNext();
            else if (e.key === 'ArrowLeft') showPrev();
            else if (e.key === 'Escape') setSelectedIndex(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, showNext, showPrev]);

    return (
        <div className="container photography-container" id="photography">
            <div className="row">
                <div className="column">
                    <Link to="/" className="footerlink back-link">&larr; Back</Link>
                    <div className="desc">
                    </div>

                    {photos.length === 0 ? (
                        <p className="desc photography-empty">
                            No photos yet — check back soon.
                        </p>
                    ) : (
                        <div className="photo-grid">
                            {photos.map((photo, index) => (
                                <figure className="photo-item" key={photo.key}>
                                    <button
                                        type="button"
                                        className="photo-thumb"
                                        onClick={() => setSelectedIndex(index)}
                                    >
                                        <img src={photo.src} alt="Film photography by Samira Said" loading="lazy" />
                                    </button>
                                    {photo.caption && (
                                        <figcaption className="photo-caption">{photo.caption}</figcaption>
                                    )}
                                </figure>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {selected && (
                <div className="photo-lightbox" onClick={() => setSelectedIndex(null)}>
                    {photos.length > 1 && (
                        <button
                            type="button"
                            className="photo-lightbox-nav photo-lightbox-prev"
                            aria-label="Previous photo"
                            onClick={(e) => { e.stopPropagation(); showPrev(); }}
                        >
                            &#8249;
                        </button>
                    )}
                    <figure className="photo-lightbox-figure" onClick={(e) => e.stopPropagation()}>
                        <img src={selected.src} alt="Enlarged film photography by Samira Said" />
                        {selected.caption && (
                            <figcaption className="photo-lightbox-caption">{selected.caption}</figcaption>
                        )}
                    </figure>
                    {photos.length > 1 && (
                        <button
                            type="button"
                            className="photo-lightbox-nav photo-lightbox-next"
                            aria-label="Next photo"
                            onClick={(e) => { e.stopPropagation(); showNext(); }}
                        >
                            &#8250;
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}

export default Photography;

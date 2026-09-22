import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Photography.css';

// Auto-loads every image dropped into src/images/photography/ — no manual
// wiring needed, just add files to that folder and rebuild.
const photoContext = require.context(
    '../images/photography',
    false,
    /\.(png|jpe?g|gif|webp)$/i
);

const photos = photoContext.keys().map((key) => ({
    key,
    src: photoContext(key),
}));

function Photography() {
    const [selected, setSelected] = useState(null);

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
                            {photos.map((photo) => (
                                <button
                                    type="button"
                                    key={photo.key}
                                    className="photo-thumb"
                                    onClick={() => setSelected(photo.src)}
                                >
                                    <img src={photo.src} alt="Film photography by Samira Said" loading="lazy" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {selected && (
                <div className="photo-lightbox" onClick={() => setSelected(null)}>
                    <img src={selected} alt="Enlarged film photography by Samira Said" />
                </div>
            )}
        </div>
    );
}

export default Photography;

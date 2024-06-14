import React, { useState } from 'react';

const Description = ({ media }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const getDescriptionPreview = () => {
        if (showFullDescription) {
            return media.description;
        }

        const words = media.description.split(' ');
        const previewWords = words.slice(0, 50).join(' ');

        return words.length > 50 ? previewWords : previewWords;
    };

    return (
        <div id='descriptionContainer' className="row">
            <div className='col-md-8'>
                <dl className='container'>
                    <dt id='info' className='list-inline-item'>
                        Description:
                    </dt>
                    <dd>
                        {getDescriptionPreview()}
                        {media.description.split(' ').length > 50 && (
                            <div>
                                <button className="btn text-white p-0" onClick={toggleDescription}>
                                    {showFullDescription ? 'Read Less' : 'Read More...'}
                                </button>
                            </div>
                        )}
                    </dd>
                </dl>
            </div>
        </div>
    );
};

export default Description;

import React, { useState } from 'react';

const Description = ({ media }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const formattedDescription = media.description.replace(/([.!?])/g, '$1 ');

    const words = formattedDescription.split(/[\s.!?]+/);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const getDescriptionPreview = () => {
        const previewWords = words.slice(0, 50).join(' ');

        return showFullDescription ? formattedDescription : previewWords;
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
                        {words.length > 30 && (
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

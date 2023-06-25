import React, { useState } from "react";


const data = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        text:
            'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        text:
            'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
]

const Reviews = () => {

    let [author, setAuthor] = useState(data[0]);

    function onPrev(id){
        setAuthor((id==1)?data[data.length-1]:data[id-2]);
    }

    function onNext(id){
        setAuthor((id==data.length)?data[0]:data[id]);
    }

    function surprise(){
        let random = Math.floor(Math.random()*data.length);
        setAuthor(data[random]);
    }

    function generate(){
        return `author-${author.id}`;
    }

    return (
        <div className="review">
            <h1 id='review-heading'>Our Reviews</h1>
            <div id={generate()}>
                <img className="person-img" src={author.image} alt={author.name} width='220px' />
                <p className="author">{author.name}</p>
                <p className="job">{author.job}</p>
                <p className="info">{author.text}</p>
                <button className="prev-btn" onClick={()=>{onPrev(author.id)}}>Previous</button>
                <button className="next-btn" onClick={()=>{onNext(author.id)}}>Next</button>
                <button className="random-btn" onClick={surprise}>surprise me</button>
            </div>
        </div>
    )
}

export default Reviews;
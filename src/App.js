import React, {useEffect, useState} from 'react'
import './App.css';
import {Card, CardBody, CardImgTop} from "skp-react-basics";
import "skp-react-basics/dist/index.css";
import {Heading} from "./components/Heading";

function App() {
    const reviewData = [
        {
            id: 1,
            name: "Susan Smith",
            jobTitle: "web developer",
            bio: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
            picture: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
        },
        {
            id: 2,
            name: "Anna Johnson",
            jobTitle: "web designer",
            bio: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
            picture: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg"
        },
        {
            id: 3,
            name: "Peter Jones",
            jobTitle: "Intern",
            bio: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
            picture: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
        },
        {
            id: 4,
            name: "Bill Anderson",
            jobTitle: "The Boss",
            bio: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
            picture: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
        }
    ]
    const [currentId, setCurrentId] = useState(1)
    const [data, setData] = useState(reviewData.filter((r) => r.id === currentId)[0])

    const
        countUp = () => currentId < reviewData.length ? setCurrentId(currentId + 1) : setCurrentId(1),
        countDown = () => currentId > 1 ? setCurrentId(currentId - 1) : setCurrentId(4),
        random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


    useEffect(() => {
        console.log("?");
        setData(reviewData.filter((r) => r.id === currentId)[0])
    }, [currentId])

    return (
        <main style={{marginTop: "100px"}}>
            <Heading title={"Our Reviews"} tag={"h1"} styles={{textAlign: "center"}}/>
            <section style={{width: "80%", maxWidth:"500px", margin: "40px auto 0 auto"}}>
                <Card>
                    <CardBody>

                        <div key={data.id} style={ {textAlign:"center"}}>
                            <CardImgTop src={data.picture} alt={data.name} style={{height:"200px", width:"200px", objectFit:"cover", objectPosition:"center", borderRadius:"50%"}}/>
                            <h3>{data.name} {data.id}</h3>
                            <h4><a href="#">{data.jobTitle}</a></h4>
                            <p style={{maxWidth:"80%", minHeight:"150px", margin:"auto", textAlign:"justify"}}>{data.bio}</p>
                            <div style={ {marginTop:"20px"}}>
                                <button style={{padding:"5px 10px", margin: "0 10px"}} onClick={() => countDown()}>&lt;</button>
                                <button style={{padding:"5px 10px", margin: "0 10px"}} onClick={() => countUp()}>&gt;</button>
                            </div>
                            <button style={{padding:"5px 10px", marginTop: "10px"}} onClick={() => setCurrentId(random(1, reviewData.length - 1))}>Surprise Me</button>
                        </div>


                    </CardBody>
                </Card>
            </section>
        </main>
    );
}

export default App;

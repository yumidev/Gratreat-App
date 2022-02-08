import coffee from "../images/Treats-Item1-Coffee.png";
import macaroons from "../images/Treats-Item2-Macaroons.png";
import yoga from "../images/Treats-Item4-Yoga.png";
import meditation from "../images/Treats-Item5-Meditation.png";
import insurance from "../images/Treats-Item7-insurance.png";
import therapy from "../images/Treats-Item8-Theraphy.png";

const TreatsList = [{
    id:101,
    name: 'coffee',
    description: 'Free Coffee and Cookies',
    points: 200,
    img: coffee, 
    },
    {
        id:102,
        name: 'macaroons',
        description:'Free Macaroons 1 set (5 pc)' ,
        points: 250,
        img: macaroons
    },
    {
        id:103,
        name: 'yoga',
        description: '1-hour Studio Yoga class',
        points: 300,
        img: yoga
    },
    {
        id:104,
        name: 'meditation',
        description:' 25% Off Meditation Class' ,
        points: 400,
        img: meditation
    },
    {
        id:105,
        name: 'insurance',
        description: '15% Off Mental Health Insurance' ,
        points: 500,
        img: insurance
    },
    {
        id:106,
        name: 'therapy',
        description:'3 times therapy sessions' ,
        points: 650,
        img: therapy
    }
]

export default TreatsList;

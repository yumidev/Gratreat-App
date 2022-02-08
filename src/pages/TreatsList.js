import coffee from "../images/Treats-Item1-Coffee.png";
import macaroons from "../images/Treats-Item2-Macaroons.png";
import yoga from "../images/Treats-Item4-Yoga.png";
import meditation from "../images/Treats-Item5-Meditation.png";
import insurance from "../images/Treats-Item7-insurance.png";
import therapy from "../images/Treats-Item8-Theraphy.png";
import barCode from "../images/Haagen-Daz_barcode.jpeg";

const TreatsList = [{
    id:101,
    name: 'Coffee',
    description: 'Free Coffee and Cookies',
    points: 200,
    img: coffee, 
    code: barCode,
    promo: 'GRATICOFF22'
    },
    {
        id:102,
        name: 'Macaroons',
        description:'Free Macaroons 1 set (5 pc)' ,
        points: 250,
        img: macaroons,
        barCode: barCode,
        promo: 'GRATIMACA22'

    },
    {
        id:103,
        name: 'Yoga',
        description: '1-hour Studio Yoga class',
        points: 300,
        img: yoga,
        barCode: barCode,
        promo: 'GRATIYOGA22'
    },
    {
        id:104,
        name: 'Meditation',
        description:' 25% Off Meditation Class' ,
        points: 400,
        img: meditation,
        barCode: barCode,
        promo: 'GRATIMED22'
    },
    {
        id:105,
        name: 'Insurance',
        description: '15% Off Mental Health Insurance' ,
        points: 500,
        img: insurance,
        barCode: barCode,
        promo: 'GRATINSURM22'
    },
    {
        id:106,
        name: 'Therapy',
        description:'3 times therapy sessions' ,
        points: 650,
        img: therapy,
        barCode: barCode,
        promo: 'GRATITHER22'
    }
]

export default TreatsList;

// Articles /posts images
import redDevils from '../assets/articles/redDevils.jpg';
import picture2 from '../assets/articles/picture2.webp';
import nistelrooy from '../assets/articles/nistelrooy.webp';
import amori from '../assets/articles/coach-amori.jpg';
// Videos
import video1 from '../assets/videos/video1.jpg';
import video2 from '../assets/videos/pochettino-sou-eve-1213-article.webp';
import video3 from '../assets/videos/andre-onana.webp';
import video4 from '../assets/videos/edersons.webp';
import video5 from '../assets/videos/Caicedo-Talking-Tactics.webp';
// Football Club Badges
import Asernal from "../assets/clubs/t3.png";
import AstonVilla from "../assets/clubs/t7.png";
import AfcBournemouth from "../assets/clubs/t91.png";
import Brentford from "../assets/clubs/t94.png";
import Brightonandhove from "../assets/clubs/t36.png";
import Chelsea from "../assets/clubs/t8.png";
import ChrystalPalace from "../assets/clubs/t31.png";
import Everton from "../assets/clubs/t11.png";
import Fulham from "../assets/clubs/t54.png";
import IpswichTown from "../assets/clubs/t40.png";
import LeicesterCity from "../assets/clubs/t13.png";
import Liverpool from "../assets/clubs/t14.png";
import ManchesterCity from "../assets/clubs/t43.png";
import ManchesterUnited from "../assets/clubs/t1.png";
import NewcastleUnited from "../assets/clubs/t4.png";
import NottingHam from "../assets/clubs/t17.png";
import Southampton from "../assets/clubs/t20.png";
import Tottenham from "../assets/clubs/t6.png";
import WestHam from "../assets/clubs/t21.png";
import Wolves from "../assets/clubs/t39.png";



const data = {
    posts: [

        {
            image: `${redDevils}`,
            category: 'Club News',
            heading: 'The Scout on why low-owned Red Devils stars can profit from new manager bounce'
        },
        {
            image: `${picture2}`,
            category: 'Featured',
            heading: 'Arsenal winger creates club record as he brings up half-century of goals with opener...'
        },
        {
            image: `${nistelrooy}`,
            category: 'Announcement',
            heading: 'Van Nistelrooy: Who is Manchesters interim head coach?'
        },
        {
            image: `${amori}`,
            category: 'Club News',
            heading: 'Head coach linked with taking charge at Man Utd says update on his next move will become...'
        }
    ],
    videos: [
        {
            id: 1,
            category: 'Video',
            title: 'Flashback: Leicester 2-1 Man City',
            timestamp: '06:45',
            img: video1
        },
        {
            id: 2,
            category: 'Video',
            title: 'On this day - 18 Jan 2013: Southampton appoint Pochettino',
            timestamp: '01:45',
            img: video2
        },
        {
            id: 3,
            category: 'Video',
            title: 'Watch Onanas Castrol Save of the Month',
            timestamp: '02:45',
            img: video3
        },
        {
            id: 4,
            category: 'Video',
            title: 'Watch: Edersons INCREDIBLE ball skills',
            timestamp: '03:45',
            img: video4
        },
        {
            id: 4,
            category: 'Video',
            title: 'Shortlist for Octobers Barclays Manager of the Month',
            timestamp: '01:02',
            img: video5
        }
    ],

    otherNews: [
        {
            heading:
                "Luis Diaz hits hat-trick as Liverpool beat Bayer Leverkusen 4-0 in Champions League",
        },
        {
            heading:
                "No Room For Racism Icons show importance of diversity on and off the pitch",
        },
        {
            heading:
                "Ameobi helps Newcastle Academy players learn how to tackle discrimination",
        },
    ],
    clubBagdes: [
        {
            name: "Asernal",
            url: "https://www.arsenal.com/",
            image: Asernal,
        },
        {
            name: "Aston Villa",
            url: "https://www.avfc.co.uk/",
            image: AstonVilla,
        },
        {
            name: "AFC Bournemouth",
            url: "https://www.afcb.co.uk/",
            image: AfcBournemouth,
        },
        {
            name: "Brentford FC",
            url: "https://www.brentfordfc.com/",
            image: Brentford,
        },
        {
            name: "Brighton and Hove Albion",
            url: "https://www.brightonandhovealbion.com/",
            image: Brightonandhove,
        },
        {
            name: "Chelsea",
            url: "https://www.chelseafc.com/",
            image: Chelsea,
        },
        {
            name: "Chrystal Palace",
            url: "https://www.cpfc.co.uk/",
            image: ChrystalPalace,
        },
        {
            name: "Everton",
            url: "https://www.evertonfc.com/",
            image: Everton,
        },
        {
            name: "Fulham",
            url: "https://www.fulhamfc.com/",
            image: Fulham,
        },
        {
            name: "Ipswich Town",
            url: "https://www.itfc.co.uk/",
            image: IpswichTown
        },
        {
            name: "Leicester City",
            url: "https://www.lcfc.com/",
            image: LeicesterCity
        },
        {
            name: "Liverpool",
            url: "https://www.liverpoolfc.com/",
            image: Liverpool
        },
        {
            name: "Manchester City",
            url: "https://www.mancity.com/",
            image: ManchesterCity
        },
        {
            name: "Manchester United",
            url: "https://www.manutd.com/",
            image: ManchesterUnited
        },
        {
            name: "Newcastle United",
            url: "https://www.nufc.co.uk/",
            image: NewcastleUnited
        },
        {
            name: "Nottingham Forest",
            url: "https://www.nottinghamforest.co.uk/",
            image: NottingHam
        },
        {
            name: "Southampton",
            url: "https://www.southamptonfc.com/",
            image: Southampton
        },
        {
            name: "Tottenham Hotspur",
            url: "https://www.tottenhamhotspur.com/",
            image: Tottenham
        },
        {
            name: "West Ham United",
            url: "https://www.whufc.com/",
            image: WestHam
        },
        {
            name: "Wolverhampton Wanderers",
            url: "https://www.wolves.co.uk/",
            image: Wolves
        }
    ]
}

export default data;
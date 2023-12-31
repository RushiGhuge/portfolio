import ProjectCard from '../ProjectCard';
import './style.css'
import youtubeImg from '../../assets/project-img/youtube-clone.jpg'
import weather from '../../assets/project-img/weather.png'
import airbnb from '../../assets/project-img/airbnb.png'
import code from '../../assets/project-img/code.png'
import crypto from '../../assets/project-img/crypto.png'




const ProjectContainer = () => {

    const projects = [
        {
            img: crypto,
            heading: 'CryptoTracker 🪙',
            des: 'Developed a dynamic crypto tracker with real-time data, coin comparison, and local storage-based watchlist. Enhanced user experience includes chart analysis by price, total value, and market cap for comprehensive insights.',
            tech: ['React', 'CSS3'],
            CodeLink: 'https://github.com/RushiGhuge/CryptoTracker',
            LiveDemoLink: 'https://rushighuge.github.io/CryptoTracker/',
            id: 1,
        },
        {
            img: code,
            heading: 'Online Code Compiler 💻 ',
            des: "Crafted a lightning-fast React code compiler with multi-language support, dynamic themes, and responsive design. Elevating the coding experience with speed and versatility, it's a testament to my proficiency in React development.",
            tech: ['React', 'CSS3'],
            CodeLink: 'https://github.com/RushiGhuge/online-code-compiler',
            LiveDemoLink: 'https://rushighuge.github.io/online-code-compiler/',
            id: 2,
        },
        {
            img: youtubeImg,
            heading: 'YouTube Clone',
            des: 'One of my recent accomplishments is the creation of a dynamic YouTube integration function. This function seamlessly integrates with the YouTube API to enhance user experiences and deliver real-time content.',
            tech: ['HTML5', 'CSS3', 'Vanilla JS'],
            CodeLink: 'https://github.com/RushiGhuge/YouTube-Clone',
            LiveDemoLink: 'https://rushighuge.github.io/YouTube-Clone/',
            id: 3,
        },
        {
            img: airbnb,
            heading: 'Airbnb Clone 🏨',
            des:
                "Designed an immersive Airbnb clone offering a global hotel directory, an interactive map with prices, and detailed hotel pages encompassing comprehensive information and seamless booking functionality. A showcase of my skills in web development, mapping, and user-centric design.",
            tech: ['HTML5', 'CSS3', 'Vanilla JS'],
            CodeLink: 'https://github.com/RushiGhuge/Airbnb-clone',
            LiveDemoLink: 'https://rushighuge.github.io/Airbnb-clone/',
            id: 4,
        }
        ,
        {
            img: weather,
            heading: 'Weather App 🌞',
            des: "Developed a dynamic weather app powered by OpenWeather API, providing real-time data, global coverage, a 7-day forecast, and location-based tracking. Offering users a seamless experience for up-to-date weather insights worldwide, it highlights my expertise in API integration and user-friendly app design.",
            tech: ['HTML5', 'CSS3', 'Vanilla JS'],
            CodeLink: 'https://github.com/RushiGhuge/Major-Projects/tree/main/Weather',
            LiveDemoLink: 'https://rushighuge.github.io/Major-Projects/Weather/',
            id: 5,
        }
    ]

    return (
        <section name="Project" className="projects-container">
            <div className="project-head">
                <h3>PORTFOLIO</h3>
                <h1>Each project is a unique piece of development 🧩</h1>
            </div>

            {projects.map((project, ind) => <ProjectCard key={ind} project={project} />)}

        </section>
    );
}

export default ProjectContainer;

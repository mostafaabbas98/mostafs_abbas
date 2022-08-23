import ecommerceImage from '../public/ecommerce.png';
import articleImage from '../public/article-app.png';
import movieImage from '../public/movie-app.png';
import menuImage from '../public/menu-app.png';
import redditImage from '../public/reddit-time.png';
import story from '../public/story.png';

const projectData = [
  {
    image: ecommerceImage,
    head: 'Ecommerce Website',
    githubLink: 'https://github.com/mostafaabbas98/nextJs_ecommerce',
    websiteLink: 'https://next-js-ecommerce-blue.vercel.app/',
    desc: `Fully responsive Full Stack Ecommerce application with NextJs and Sanity.\nFile-based routing, Data fetching that allows server-side rendering and static generation by NextJs.\nState Management of the entire application using React Context API.\nManage the entire content of your app using CMS Sanity.`,
  },
  {
    image: story,
    head: 'Story',
    githubLink: 'https://github.com/mostafaabbas98/Story',
    websiteLink: 'https://story-57d03.web.app/',
    desc: `Story is website allow user to take photo as story and share that las 24 houres so other user can see it. \nFirebase Auth used to allow user authentication to application using email and password or google. \nreact-webcam used to allow user to capture image and upload to firebase using Firebase Storage. \nFirebase Firestore used to take image from Storage and save it with associated information. \nReact used Context API to manage auth and info through app and render all stories from firestore.
    `,
  },
  {
    image: movieImage,
    head: 'Movie Website',
    githubLink: 'https://github.com/mostafaabbas98/movie_app',
    websiteLink: 'https://movie-app-c00a8.web.app/',
    desc: `This is an application using React and allows the user to show the trending and top movies and tv shows and search for movies theywant to watch from the MovieDB API.\nA react movie app made with Redux Toolkit, Axios, and Swiperjs using The Movie Database API.`,
  },
  {
    image: articleImage,
    head: 'Article Website',
    githubLink: 'https://github.com/mostafaabbas98/article-app',
    websiteLink: 'https://article-app-ecaee.web.app/home',
    desc: `Website created byReact with Firebase to allow users to read articles and can also write articles if he is signed in.\nFirebase auth is used to handle authentication with react context hook.\nFirebase firestore is used as a backend database to upload and retrieve articles.`,
  },
  {
    image: menuImage,
    head: 'Menu Cart',
    githubLink: 'https://github.com/mostafaabbas98/meals-menu',
    websiteLink: 'https://distracted-yonath-dea003.netlify.app/',
    desc: `Shopping cart created with react and items render from the firebase database.\nReact context and reducer hooks are used to handle the state of the cart.`,
  },
  {
    image: redditImage,
    head: 'Reddit website',
    githubLink: 'https://github.com/mostafaabbas98/reddit-timer',
    websiteLink: 'https://reddit-time-host.web.app/',
    desc: `Reddit timer let users get the best time to post their content on Reddit on a particular subreddit.\nThis app takes data from Reddit API and displays it on Heatmap.\nreact-grid-heatmap package used to create the heatmap.`,
  },
];

export default projectData;


// Returns a random integer between 1 and 10
const y = Math.floor(Math.random() * 10) + 1;

const data = [

    { id: 1,
        image: "https://anuneuroandcardiac.com/uploads/2023/02/28/1677568460_6da94a1fcd6e81e832c1.png",
        title: "First Appointment for 50% off",
        path: "/all-AllDoctor"

    },
    { id: 2,
        image: "https://www.easyilaaz.in/assets/image/Blog/blog_image1679403272.png",
        title: "Online consult Videocall",
        path: `/chatbox`

    },
    { id: 3,
        image: "https://images.squarespace-cdn.com/content/v1/5c8686aaf8135a111aa0c741/1638985871008-OYY19EPTE81RNA2773GI/MYA+-++QTC+Case+Study+-+banner+and+SM.png",
        title: "Chat with Doctor",
        path: `/doctor-detail/${y}`

    },
]

 
export default data;
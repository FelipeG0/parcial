
import ciclaImage from '../Images/cicla.jpeg';
import runningImage from '../Images/running.jpeg';
import swimmingImage from '../Images/natacion.jpg';
import userProfileImage from '../Images/user.jpg';

export const getUserData = () => {
  return {
    name: "Camilo Escobar",
    profileImage: userProfileImage, 
    bestTimes: {
      cycling: "1:05",
      running: "1:05",
      swimming: "1:05",
    },
    sportsData: [
      {
        sport: "Cycling",
        length: "50 km",
        duration: "1:30 hrs",
        city: "Bogotá",
        imageUrl: ciclaImage
      },
      {
        sport: "Running",
        length: "10 km",
        duration: "1:05 hrs",
        city: "Medellín",
        imageUrl: runningImage 
      },
      {
        sport: "Swimming",
        length: "2 km",
        duration: "45 mins",
        city: "Cali",
        imageUrl: swimmingImage 
      }
    ]
  };
};

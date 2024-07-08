import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <h2
            className="text-center text-white display-5 fontweight-bold mb-4"
            style={{ fontFamily: "Montserrat" }}>
            What is PodVibe?
          </h2>
          <p
            className="justify-content-center text-white mb-4 fs-3"
            style={{ fontFamily: "Montserrat" }}
            data-aos="fade-up">
            Podvibe is a Free Podcast streaming platform where you can find
            podcasts of your choice. Our main motto is provide seamless podcasts
            of every genre. By signing up our users can: <br />
          </p>
          <ul
            className="text-white mb-4 fs-4"
            style={{ fontFamily: "Montserrat" }}
            data-aos="fade-up">
            <li data-aos="fade-up">Listen to podcasts of different genre.</li>
            <li data-aos="fade-up">Add your Podcasts to favorites.</li>
            <li data-aos="fade-up">Listen your favorite podcasts.</li>
            <li data-aos="fade-up">Delete any podcast from favorites.</li>
            <li data-aos="fade-up">And many more...</li>
          </ul>
          <div data-aos="fade-up">
            <p
              className="text-white mb-2 fs-4"
              style={{ fontFamily: "Montserrat" }}
              data-aos="fade-up">
              We're on a mission to make podcasting accessible, enjoyable, and
              enriching for everyone. Join us on this journey and let's explore
              the fascinating world of audio storytelling together!!&#129309;
            </p>
            <p
              className="text-white mb-4 fs-4"
              style={{ fontFamily: "Montserrat" }}>
              Empowering conversations are waitinig for you. Unleash your inner
              trailblazer and Ignite your soul & passion.
            </p>{" "}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <h2>About</h2>
      <div className={styles.aboutVideo}>
        <video>
          <source src=''/>
        </video>
      </div>
      <div className={styles.aboutText}>{/* Explainer video goes here */}
      <p>{/* About text goes here */}</p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis provident rem nam debitis neque. Unde, obcaecati quo repellendus eveniet, perferendis nesciunt iste harum pariatur distinctio nostrum maxime natus hic porro.

Nullam malesuada erat ut turpi. Suspendisse urna nibh, viverra non semper suscipit, posuere a, pede Donec nec justo eget felis facilisis fermentum. Aliquam pottitor mauris sit ament orci. Aenean dignissim pallentesque felis. Morbi in sem quis dui placerat ornare. Pallentesque odio nisi, euusmod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
      </div>
      
      
    </section>
  );
};

export default About;
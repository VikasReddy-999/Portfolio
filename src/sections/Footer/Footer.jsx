import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; Copyright &copy; 2024 All Rights reserved | This portfolio made
        by <span style={{color: "#0987f2"}} >Mansoor Pathikonda</span>. <br />
      </p>
    </section>
  );
}

export default Footer;

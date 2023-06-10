import { Row, Col, Container, Image } from "react-bootstrap";

const stylesOfficial = {
  fontSize: "24px",
  fontWeight: 500,
  lineHeight: '36px',
  marginTop: "24px"
}

const stylesStory = {
  fontSize: "20px",
  fontWeight: 400,
  lineHeight: '30px',
  marginTop: "10px"
}

export default function About() {
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <Image src="https://img.hhcdn.ru/photo/722071353.jpeg?t=1686466009&h=erX2uqSQBlKzKpu4VuUFWw"/>
        </Col>
        <Col>
          <h1>Александр Гудков</h1>
          <h3>Frontend-разработчик</h3>
          <p style={stylesOfficial}><a target="_blank" href="https://t.me/xAllgudx" rel="noreferrer">https://t.me/xAllgudx</a></p>
          <p style={stylesOfficial}>го. Люберцы, Московская область</p>
          <p style={stylesOfficial}>39 лет</p>
        </Col>
      </Row>
      <Row>
        <p style={stylesStory}>Увлекся веб-разработкой в конце 2020 года. </p>
        <p style={stylesStory}>Учился на курсе frontend-разработчик от KATA Academy. В рамках программы курса разрабатывал приложение на React с использованием классовых компонентов.</p>
        <p style={stylesStory}>Также проходил курс Web-разработчик на крупнейшей платформе онлайн-обучения SkyPro. Был одним из лучших студентов своей группы.
          Несколько месяцев являлся одним из менторов для студентов последующих потоков в рамках программы "студент-ментор"</p>
        <p style={stylesStory}>На текущий момент принимаю участие с группой товарищей в разработке приложения по поиску менторов.</p>  
        <p style={stylesStory}>На сегодняшний день основным стеком является связка Typescript + React + Redux Toolkit. Хорошо знаком с экосистемой React. Имею небольшой опыт разработки на Vue.</p> 
        <p style={stylesStory}>Знаком со сборщиками модулей Webpack, Vite.</p>
        <p style={stylesStory}>Работал c REST API</p>
        <p style={stylesStory}>Обладаю базовыми знаниями backend-разработки. Есть небольшой опыт разработки на Node.js с использованием Express.js</p>
        <p style={stylesStory}>Быстро обучаюсь, достаточно легко нахожу контакт с коллегами.</p>
      </Row>
    </Container>
  );
}

/*<p style={styles}></p> */
import React from "react";
import styles from "./Home.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { Link, Element, animateScroll } from "react-scroll";

const Home = (props) => {
  const [showRestOfPage, setShowRestOfPage] = React.useState(false);
  const [englishTurn, setEnglishTurn] = React.useState(true);
  const [englishSpeakerName, setEnglishSpeakerName] = React.useState(null);
  const [spanishSpeakerName, setSpanishSpeakerName] = React.useState(null);

  function getFixedTranslatedString(whichOne) {
    if (englishTurn) {
      switch (whichOne) {
        case "translation-window1":
          return englishSpeakerName + ", it's your turn.";
        case "translation-window2":
          return (
            "Enter the phrase below that you’d like to translate for " +
            spanishSpeakerName +
            "."
          );
        case "translation-window3":
          return "Translate";
        case "translation-results1":
          return spanishSpeakerName + ", aquí tienes tu traducción.";
        case "translation-results2":
          return englishSpeakerName + " dijo,";
        case "translation-results3":
          return "¿Entendiste la traducción de arriba?";
        case "translation-results4":
          return "Terminar conversación";
        case "translation-results5":
          return "Responde a " + englishSpeakerName;
        default:
          return "ERROR STRING NOT FOUND.";
      }
    } else {
      switch (whichOne) {
        case "translation-window1":
          return spanishSpeakerName + ", es tu turno.";
        case "translation-window2":
          return (
            "Ingrese la frase que quieres traducir por " +
            englishSpeakerName +
            " debajo."
          );
        case "translation-window3":
          return "Traducir";
        case "translation-results1":
          return englishSpeakerName + ", here is your translation.";
        case "translation-results2":
          return spanishSpeakerName + " said,";
        case "translation-results3":
          return "Did you understand the translation above?";
        case "translation-results4":
          return "Finish Conversation";
        case "translation-results5":
          return "Respond to " + spanishSpeakerName;
        default:
          return "ERROR STRING NOT FOUND.";
      }
    }
  }

  const SetUserNames = () => {
    console.log(englishSpeakerName);
    console.log(spanishSpeakerName);

    if (englishSpeakerName != null && spanishSpeakerName != null) {
      //yay we got the data we wanted! time to scroll down
      setShowRestOfPage(true);
    }
  };

  const RestOfThePage = () => (
    <div>
      <Element name="translation-window" className="element"></Element>
      <div id="translation-window1">
        <h2>{getFixedTranslatedString("translation-window1")}</h2>
        <div id="translation-form1">
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                {getFixedTranslatedString("translation-window2")}
              </Form.Label>
              <br></br>
              <br></br>
              <Form.Control as="textarea" rows={15} />
            </Form.Group>
          </Form>
          <br></br>
          <br></br>
          <Link
            activeClass="active"
            to="translation-results"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div id="white-button">
              <Button>{getFixedTranslatedString("translation-window3")}</Button>
            </div>
          </Link>
        </div>
      </div>
      <Element name="translation-results" className="element"></Element>
      <div id="translation-window2">
        <h2>{getFixedTranslatedString("translation-results1")}</h2>
        <h2>{getFixedTranslatedString("translation-results2")}</h2>
        <br></br>
        <div id="translation-results">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
            nunc ac nunc condimentum malesuada. Integer in purus congue,
            fringilla neque quis, euismod dolor. Phasellus fermentum
            pellentesque rutrum. Nunc commodo vehicula dui, non blandit dolor
            feugiat ut. Nunc maximus, est non iaculis vestibulum, elit dui
            bibendum diam, et convallis velit sem in metus. Aliquam nec leo quis
            erat tempor molestie eu non nulla. Proin placerat elit ac nisi
            mollis, sed mattis ante venenatis. Ut purus tortor, egestas non
            maximus vel, volutpat nec lacus. Donec rutrum in eros eget pharetra.
            Cras urna ipsum, vehicula vitae lectus a, semper vestibulum orci.
            Donec condimentum eros nec velit feugiat, nec luctus nulla
            consequat. Morbi lobortis auctor libero et vehicula. Etiam in
            pharetra lorem, quis mattis arcu. Donec quam nulla, suscipit quis
            libero in, feugiat sollicitudin mauris. Sed risus nunc, vulputate
            sed dolor eu, tincidunt molestie elit. Maecenas molestie, purus
            congue fringilla ornare, ex sapien pretium dui, non fermentum massa
            diam eget justo. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Cras pellentesque eu orci
            at fringilla. Nam interdum nisl eget purus accumsan, sit amet
            accumsan neque rhoncus. Phasellus fringilla dui lorem. Integer vel
            diam nulla. Ut vel lorem vulputate, consectetur ante interdum,
            porttitor lectus. Nunc eleifend orci arcu. Vestibulum tortor libero,
            porta vel erat vitae, pharetra venenatis est. Vivamus ut interdum
            dui, et molestie nulla. Maecenas tellus justo, feugiat id tortor
            vitae, imperdiet iaculis mauris. Ut maximus interdum risus, eu
            aliquet sapien placerat a. Vivamus convallis sem dui, quis commodo
            augue posuere non. Fusce tempus eu tortor sed porta. In vel erat
            vitae augue vestibulum maximus. Vivamus id massa ac turpis interdum
            fermentum non sit amet ante. Nullam consectetur tortor arcu, nec
            convallis massa scelerisque nec. Nullam rhoncus dolor arcu, eget
            convallis tortor malesuada in. In euismod malesuada risus. Duis eu
            mattis tortor. Nulla lobortis eu turpis sit amet euismod. Duis felis
            metus, tempor accumsan magna sit amet, venenatis faucibus erat. Nunc
            at vestibulum diam. Sed et est a purus consectetur rutrum quis
            laoreet urna. Curabitur eget elementum lorem, non hendrerit magna.
            Etiam sapien tortor, ultrices ac euismod eget, elementum et mi.
            Morbi sed elementum metus. Nam sodales massa at purus maximus rutrum
            in vel nisi. Praesent ut pulvinar est. In malesuada hendrerit
            mollis. Vivamus eros nunc, sagittis eu pulvinar eget, volutpat sed
            sem. Quisque dignissim magna posuere, fermentum risus ut, mattis
            velit. Cras nisi dui, varius sed euismod id, varius malesuada ex.
            Aliquam hendrerit tincidunt ex eu pulvinar. Fusce ut ultricies
            purus, eu vulputate dolor. Donec laoreet velit sed eros molestie
            auctor. Sed nec justo lobortis, volutpat neque eu, consequat ex.
            Etiam faucibus vehicula tellus, et ullamcorper neque interdum sit
            amet. Vivamus ornare enim at ligula efficitur imperdiet. Praesent et
            porta sapien. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Cras molestie, nulla eget consequat laoreet, felis libero
            tristique enim, nec congue libero nunc ac massa. Mauris tempus magna
            mollis ipsum maximus, vel mattis urna aliquet. Suspendisse id
            imperdiet nulla, id ullamcorper quam. Etiam ac feugiat nisi, dictum
            efficitur massa. Praesent accumsan dignissim leo ut commodo.
            Maecenas at sollicitudin ex, nec varius quam. Sed bibendum interdum
            odio, eget tempor enim iaculis a. Suspendisse potenti. Ut eu risus
            quis velit gravida consequat. Proin viverra sollicitudin magna,
            vestibulum laoreet elit efficitur sed.
          </p>
          <br></br>
          <br></br>
        </div>
        <br></br>
        <div id="feedback-row">
          <div id="feedback-text">
            <h2>{getFixedTranslatedString("translation-results3")}</h2>
          </div>
          <div id="feedback-buttons">
            <div id="green-button">
              <Button>
                <FiThumbsUp />
              </Button>
              <Button>
                <FiThumbsDown />
              </Button>
            </div>
          </div>
        </div>
        <br></br>
        <Link
          activeClass="active"
          to="conversation-summary"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Button
            style={{
              color: "black",
              backgroundColor: "#d6e5e3",
              borderColor: "#d6e5e3",
            }}
          >
            {getFixedTranslatedString("translation-results4")}
          </Button>{" "}
        </Link>
        <Link
          activeClass="active"
          to="translation-window"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Button
            style={{
              color: "black",
              backgroundColor: "#d6e5e3",
              borderColor: "#d6e5e3",
            }}
          >
            {getFixedTranslatedString("translation-results5")}
          </Button>
        </Link>
      </div>
      <div id="conversation-history">
        <Element name="conversation-summary" className="element"></Element>
        <h2>Conversation Summary</h2>
        <br></br>
        <p>
          Thank you for using GatorCom! To view your conversation history choose
          either English or Spanish below.
        </p>
        <br></br>
        <div id="summary-card">
          <Card>
            <Card.Header>
              <Tabs defaultActiveKey="english">
                <Tab eventKey="english" title="English">
                  <br></br>
                  <Card.Body>
                    <Card.Text>
                      Your conversation is complete! Below you can find the
                      conversation history in English.
                    </Card.Text>
                    <Card.Text>
                      After reviewing your conversation, please click the button
                      below to complete a Qualtrics survey about your
                      experience.
                    </Card.Text>
                    <Card.Title>Conversation History</Card.Title>
                    <Card.Text>Amaya: Hello, Kamil!</Card.Text>
                    <div id="green-button">
                      <Button>Answer the Survey</Button>
                    </div>
                  </Card.Body>
                </Tab>
                <Tab eventKey="spanish" title="Español">
                  <br></br>
                  <Card.Body>
                    <Card.Text>
                      ¡Tu conversación está completa! A continuación puede
                      encontrar el historial de conversaciones en español.
                    </Card.Text>
                    <Card.Text>
                      Después de revisar su conversación, haga clic en el botón
                      a continuación para completar una encuesta de Qualtrics
                      sobre su experiencia.
                    </Card.Text>
                    <Card.Title>Historial de conversación</Card.Title>
                    <Card.Text>Amaya: ¡Hola, Kamil!</Card.Text>
                    <div id="green-button">
                      <Button> Responde La Encuesta</Button>
                    </div>
                  </Card.Body>
                </Tab>
              </Tabs>
            </Card.Header>
          </Card>
          <br></br>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div id="home">
        <div id="welcome">
          <h1>GatorCom</h1>
          <div id="welcome-description">
            <p>
              GatorCom provides an easy interface for you to communicate with
              your Spanish speaking friends.
            </p>
          </div>
        </div>
        <div id="user-info">
          <h2>User Information</h2>
          <div id="user-form">
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>
                  What's the name of the English speaking user?
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="English speaker's name"
                  onChange={(e) => setEnglishSpeakerName(e.target.value)}
                />
              </Form.Group>
              <br></br>
              <br></br>
              <Form.Group controlId="formBasicName">
                <Form.Label>
                  What's the name of the Spanish speaking user?
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Spanish speaker's name"
                  onChange={(e) => setSpanishSpeakerName(e.target.value)}
                />
              </Form.Group>
            </Form>
            <br></br>
            <Link
              activeClass="active"
              to="translation-window"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <div id="green-button">
                <Button onClick={SetUserNames}>Let's Start Translating</Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Element name="translation-window" className="element"></Element>
      <div>{showRestOfPage ? <RestOfThePage /> : null}</div>
    </div>
  );
};

export default Home;

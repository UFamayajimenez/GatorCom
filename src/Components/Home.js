import React from "react";
import styles from "./Home.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { Link, Element } from "react-scroll";
import { setCORS } from "google-translate-api-browser";

const Home = (props) => {
  const [showRestOfPage, setShowRestOfPage] = React.useState(false);
  const [englishTurn, setEnglishTurn] = React.useState(true);
  const [englishSpeakerName, setEnglishSpeakerName] = React.useState(null);
  const [spanishSpeakerName, setSpanishSpeakerName] = React.useState(null);
  const [textToTranslate, setTextToTranslate] = React.useState(null);
  const [translatedText, setTranslatedText] = React.useState(null);
  const [understoodEnglishCount, setUnderstoodEnglishCount] = React.useState(0);
  const [totalEnglishCount, setTotalEnglishCount] = React.useState(0);
  const [understoodSpanishCount, setUnderstoodSpanishCount] = React.useState(0);
  const [totalSpanishCount, setTotalSpanishCount] = React.useState(0);
  const [convoInEnglish2, setConvoInEnglish2] = React.useState([]);
  const [convoInSpanish2, setConvoInSpanish2] = React.useState([]);
  const [theText, setTheText] = React.useState(null);
  const [understood, setUnderstood] = React.useState(null);

  const translate = setCORS("http://cors-anywhere.herokuapp.com/");

  function getFixedTranslatedString(whichOne) {
    if (englishTurn) {
      switch (whichOne) {
        case "translation-window1":
          return englishSpeakerName + ", it's your turn.";
        case "understood":
          return spanishSpeakerName + " understood what you said.";
        case "not-understood":
          return spanishSpeakerName + " did not understand what you said.";
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
        case "understood":
          return englishSpeakerName + " entendió lo que dijiste.";
        case "not-understood":
          return englishSpeakerName + " no entendió lo que dijiste.";
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

  const SetTurn = () => {
    let opposite = !englishTurn;
    setEnglishTurn(opposite);
  };

  const onThumbsUp = () => {
    convoInEnglish2[convoInEnglish2.length - 1].understood = true;
    convoInSpanish2[convoInSpanish2.length - 1].understood = true;

    if (englishTurn) {
      let oldTotalCount = totalEnglishCount;
      oldTotalCount += 1;
      setTotalEnglishCount(oldTotalCount);

      let oldUnderstoodCount = understoodEnglishCount;
      oldUnderstoodCount += 1;
      setUnderstoodEnglishCount(oldUnderstoodCount);
    } else {
      let oldTotalCount = totalSpanishCount;
      oldTotalCount += 1;
      setTotalSpanishCount(oldTotalCount);

      let oldCount = understoodSpanishCount;
      oldCount += 1;
      setUnderstoodSpanishCount(oldCount);
    }
  };

  const onThumbsDown = () => {
    convoInEnglish2[convoInEnglish2.length - 1].understood = false;
    convoInSpanish2[convoInSpanish2.length - 1].understood = false;

    if (englishTurn) {
      let oldTotalCount = totalEnglishCount;
      oldTotalCount += 1;
      setTotalEnglishCount(oldTotalCount);
    } else {
      let oldTotalCount = totalSpanishCount;
      oldTotalCount += 1;
      setTotalSpanishCount(oldTotalCount);
    }
  };

  const translateText = async () => {
    setTheText("");
    console.log(textToTranslate);

    if (textToTranslate != null) {
      if (englishTurn) {
        let thisTranslation = {
          whatTheySaid: textToTranslate,
          understood: null,
        };

        convoInEnglish2.push(thisTranslation);
        console.log(convoInEnglish2);
        setUnderstood(null);

        //english to spanish
        translate(textToTranslate, { to: "es" })
          .then((res) => {
            console.log(res.text);

            let thisTranslation = {
              whatTheySaid: res.text,
              understood: null,
            };

            setTranslatedText(res.text);
            convoInSpanish2.push(thisTranslation);
            console.log(convoInSpanish2);
            setUnderstood(null);
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        let thisTranslation = {
          whatTheySaid: textToTranslate,
          understood: null,
        };

        convoInSpanish2.push(thisTranslation);
        console.log(convoInSpanish2);

        setUnderstood(null);

        //spanish to english
        translate(textToTranslate, { to: "en" })
          .then((res) => {
            console.log(res.text);
            setTranslatedText(res.text);

            let thisTranslation = {
              whatTheySaid: res.text,
              understood: null,
            };

            convoInEnglish2.push(thisTranslation);
            console.log(convoInEnglish2);

            setUnderstood(null);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  };

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
      <div>
        {showRestOfPage && (
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
                    <Form.Control
                      id="myForm"
                      className="form"
                      as="textarea"
                      rows={15}
                      value={theText}
                      onChange={(e) => {
                        setTheText(e.target.value);
                        setTextToTranslate(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Link
                    activeClass="active"
                    to="translation-results"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    <div id="white-button">
                      <Button type="reset" onClick={translateText}>
                        {getFixedTranslatedString("translation-window3")}
                      </Button>
                    </div>
                  </Link>
                </Form>
                <br></br>
                <br></br>
              </div>
            </div>
            <Element name="translation-results" className="element"></Element>
            <div id="translation-window2">
              <h2>{getFixedTranslatedString("translation-results1")}</h2>
              <h2>{getFixedTranslatedString("translation-results2")}</h2>
              <br></br>
              <div id="translation-results">
                <p>{translatedText}</p>
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
                    <Button onClick={onThumbsUp}>
                      <FiThumbsUp />
                    </Button>
                    <Button onClick={onThumbsDown}>
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
                  onClick={SetTurn}
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
              <Element
                name="conversation-summary"
                className="element"
              ></Element>
              <h2>Conversation Summary</h2>
              <br></br>
              <p>
                Thank you for using GatorCom! To view your conversation history
                choose either English or Spanish below.
              </p>
              <br></br>
              <div id="summary-card">
                <Card>
                  <Card.Header>
                    <Tabs defaultActiveKey="english">
                      <Tab eventKey="english" title="English">
                        <br></br>
                        <Card.Body>
                          {understoodEnglishCount == totalEnglishCount ? (
                            <Card.Text>
                              Your conversation is complete! Congrats!
                              Everything you said was understood by{" "}
                              {spanishSpeakerName}.
                            </Card.Text>
                          ) : (
                            <Card.Text>
                              Not everything you said was understood by{" "}
                              {spanishSpeakerName}.
                            </Card.Text>
                          )}
                          <Card.Text>
                            Below you can find the conversation history in
                            English.
                          </Card.Text>
                          <Card.Text>
                            After reviewing your conversation, please click the
                            button below to complete a Qualtrics survey about
                            your experience.
                          </Card.Text>
                          <div id="move-to-th-left">
                            <Card.Title>Conversation History</Card.Title>
                          </div>
                          <Container>
                            {convoInEnglish2.map((value, index) => {
                              if (value != null) {
                                if (value.understood != null) {
                                  if (value.understood && index % 2 == 0) {
                                    return (
                                      <Row>
                                        <Col>
                                          <FiThumbsUp />
                                        </Col>
                                        <Col xs={11}>
                                          {englishSpeakerName +
                                            ": " +
                                            value.whatTheySaid}
                                        </Col>
                                      </Row>
                                    );
                                  } else if (
                                    value.understood &&
                                    index % 2 != 0
                                  ) {
                                    return (
                                      <Row>
                                        <Col>
                                          <FiThumbsUp />
                                        </Col>
                                        <Col xs={11}>
                                          {spanishSpeakerName +
                                            ": " +
                                            value.whatTheySaid}
                                        </Col>
                                      </Row>
                                    );
                                  } else if (
                                    !value.understood &&
                                    index % 2 == 0
                                  ) {
                                    return (
                                      <Row>
                                        <Col>
                                          <FiThumbsDown />
                                        </Col>
                                        <Col xs={11}>
                                          {englishSpeakerName +
                                            ": " +
                                            value.whatTheySaid}
                                        </Col>
                                      </Row>
                                    );
                                  } else if (
                                    !value.understood &&
                                    index % 2 != 0
                                  ) {
                                    return (
                                      <Row>
                                        <Col>
                                          <FiThumbsDown />
                                        </Col>
                                        <Col xs={11}>
                                          {spanishSpeakerName +
                                            ": " +
                                            value.whatTheySaid}
                                        </Col>
                                      </Row>
                                    );
                                  }
                                } else {
                                  if (index % 2 == 0) {
                                    return (
                                      <Row>
                                        <Col></Col>
                                        <Col xs={11}>
                                          {englishSpeakerName +
                                            ": " +
                                            value.whatTheySaid}
                                        </Col>
                                      </Row>
                                    );
                                  } else {
                                    return (
                                      <Row>
                                        <Col></Col>
                                        <Col xs={11}>
                                          {spanishSpeakerName +
                                            ": " +
                                            value.whatTheySaid}
                                        </Col>
                                      </Row>
                                    );
                                  }
                                }
                              }
                            })}
                          </Container>
                          <br></br>
                          <div id="green-button">
                            <Button>Answer the Survey</Button>
                          </div>
                        </Card.Body>
                      </Tab>
                      <Tab eventKey="spanish" title="Español">
                        <br></br>
                        <Card.Body>
                          {understoodSpanishCount == totalSpanishCount ? (
                            <Card.Text>
                              ¡Tu conversación está completa! ¡Felicitaciones!
                              Todo lo que dijiste fue entendido por{" "}
                              {englishSpeakerName}.
                            </Card.Text>
                          ) : (
                            <Card.Text>
                              {englishSpeakerName} no entendió todo lo que
                              dijiste.
                            </Card.Text>
                          )}
                          <Card.Text>
                            A continuación puede encontrar el historial de
                            conversaciones en español.
                          </Card.Text>
                          <Card.Text>
                            Después de revisar su conversación, haga clic en el
                            botón a continuación para completar una encuesta de
                            Qualtrics sobre su experiencia.
                          </Card.Text>
                          <div id="move-to-th-left">
                            <Card.Title>Historial de Conversación</Card.Title>
                          </div>
                          <Container>
                            {convoInSpanish2.map((value, index) => {
                              if (value != null) {
                                if (value.understood != null) {
                                  if (value.understood && index % 2 == 0) {
                                    return (
                                      <Row>
                                        <Col>
                                          <FiThumbsUp />
                                        </Col>
                                        <Col xs={11}>
                                          {englishSpeakerName +
                                            ": " +
                                            value.whatTheySaid}
                                        </Col>
                                      </Row>
                                    );
                                  } else if (
                                    value.understood &&
                                    index % 2 != 0
                                  ) {
                                    return (
                                      <Row>
                                        <Col>
                                          <FiThumbsUp />
                                        </Col>
                                        <Col xs={11}>
                                          {spanishSpeakerName +
                                            ": " +
                                            value.whatTheySaid}
                                        </Col>
                                      </Row>
                                    );
                                  } else if (
                                    !value.understood &&
                                    index % 2 == 0
                                  ) {
                                    return (
                                      <Row>
                                        <Col>
                                          <FiThumbsDown />
                                        </Col>
                                        <Col xs={11}>
                                          {englishSpeakerName +
                                            ": " +
                                            value.whatTheySaid}
                                        </Col>
                                      </Row>
                                    );
                                  } else if (
                                    !value.understood &&
                                    index % 2 != 0
                                  ) {
                                    return (
                                      <Row>
                                        <Col>
                                          <FiThumbsDown />
                                        </Col>
                                        <Col xs={11}>
                                          {spanishSpeakerName +
                                            ": " +
                                            value.whatTheySaid}
                                        </Col>
                                      </Row>
                                    );
                                  }
                                } else {
                                  if (index % 2 == 0) {
                                    return (
                                      <Row>
                                        <Col></Col>
                                        <Col xs={11}>
                                          {englishSpeakerName +
                                            ": " +
                                            value.whatTheySaid}
                                        </Col>
                                      </Row>
                                    );
                                  } else {
                                    return (
                                      <Row>
                                        <Col></Col>
                                        <Col xs={11}>
                                          {spanishSpeakerName +
                                            ": " +
                                            value.whatTheySaid}
                                        </Col>
                                      </Row>
                                    );
                                  }
                                }
                              }
                            })}
                          </Container>
                          <br></br>
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
        )}
      </div>
    </div>
  );
};

export default Home;

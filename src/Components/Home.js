import React from "react";
import styles from "./Home.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

const Home = (props) => (
  <div id="home">
    <div id="welcome">
      <h1>GatorCom</h1>
      <div id="welcome-description">
        <p>
          GatorCom provides an easy interface for you to communicate with your
          Spanish speaking friends.
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
            <Form.Control type="text" placeholder="English speaker's name" />
          </Form.Group>
          <br></br>
          <br></br>
          <Form.Group controlId="formBasicName">
            <Form.Label>
              What's the name of the Spanish speaking user?
            </Form.Label>
            <Form.Control type="text" placeholder="Spanish speaker's name" />
          </Form.Group>
        </Form>
        <br></br>
        <Button>Let's Start Translating</Button>
      </div>
    </div>
    <div id="translation-window1">
      <h2>Amaya, it's your turn.</h2>
      <div id="translation-form1">
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              Enter the phrase below that you’d like to translate for Kamil.
            </Form.Label>
            <br></br>
            <br></br>
            <Form.Control as="textarea" rows={15} />
          </Form.Group>
        </Form>
        <br></br>
        <br></br>
        <Button>Translate</Button>
      </div>
    </div>
    <div id="translation-window2">
      <h2>Kamil, here is your translation.</h2>
      <h2>Amaya said,</h2>
      <br></br>
      <div id="translation-results">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at nunc
          ac nunc condimentum malesuada. Integer in purus congue, fringilla
          neque quis, euismod dolor. Phasellus fermentum pellentesque rutrum.
          Nunc commodo vehicula dui, non blandit dolor feugiat ut. Nunc maximus,
          est non iaculis vestibulum, elit dui bibendum diam, et convallis velit
          sem in metus. Aliquam nec leo quis erat tempor molestie eu non nulla.
          Proin placerat elit ac nisi mollis, sed mattis ante venenatis. Ut
          purus tortor, egestas non maximus vel, volutpat nec lacus. Donec
          rutrum in eros eget pharetra. Cras urna ipsum, vehicula vitae lectus
          a, semper vestibulum orci. Donec condimentum eros nec velit feugiat,
          nec luctus nulla consequat. Morbi lobortis auctor libero et vehicula.
          Etiam in pharetra lorem, quis mattis arcu. Donec quam nulla, suscipit
          quis libero in, feugiat sollicitudin mauris. Sed risus nunc, vulputate
          sed dolor eu, tincidunt molestie elit. Maecenas molestie, purus congue
          fringilla ornare, ex sapien pretium dui, non fermentum massa diam eget
          justo. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Cras pellentesque eu orci at fringilla. Nam
          interdum nisl eget purus accumsan, sit amet accumsan neque rhoncus.
          Phasellus fringilla dui lorem. Integer vel diam nulla. Ut vel lorem
          vulputate, consectetur ante interdum, porttitor lectus. Nunc eleifend
          orci arcu. Vestibulum tortor libero, porta vel erat vitae, pharetra
          venenatis est. Vivamus ut interdum dui, et molestie nulla. Maecenas
          tellus justo, feugiat id tortor vitae, imperdiet iaculis mauris. Ut
          maximus interdum risus, eu aliquet sapien placerat a. Vivamus
          convallis sem dui, quis commodo augue posuere non. Fusce tempus eu
          tortor sed porta. In vel erat vitae augue vestibulum maximus. Vivamus
          id massa ac turpis interdum fermentum non sit amet ante. Nullam
          consectetur tortor arcu, nec convallis massa scelerisque nec. Nullam
          rhoncus dolor arcu, eget convallis tortor malesuada in. In euismod
          malesuada risus. Duis eu mattis tortor. Nulla lobortis eu turpis sit
          amet euismod. Duis felis metus, tempor accumsan magna sit amet,
          venenatis faucibus erat. Nunc at vestibulum diam. Sed et est a purus
          consectetur rutrum quis laoreet urna. Curabitur eget elementum lorem,
          non hendrerit magna. Etiam sapien tortor, ultrices ac euismod eget,
          elementum et mi. Morbi sed elementum metus. Nam sodales massa at purus
          maximus rutrum in vel nisi. Praesent ut pulvinar est. In malesuada
          hendrerit mollis. Vivamus eros nunc, sagittis eu pulvinar eget,
          volutpat sed sem. Quisque dignissim magna posuere, fermentum risus ut,
          mattis velit. Cras nisi dui, varius sed euismod id, varius malesuada
          ex. Aliquam hendrerit tincidunt ex eu pulvinar. Fusce ut ultricies
          purus, eu vulputate dolor. Donec laoreet velit sed eros molestie
          auctor. Sed nec justo lobortis, volutpat neque eu, consequat ex. Etiam
          faucibus vehicula tellus, et ullamcorper neque interdum sit amet.
          Vivamus ornare enim at ligula efficitur imperdiet. Praesent et porta
          sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Cras molestie, nulla eget consequat laoreet, felis libero tristique
          enim, nec congue libero nunc ac massa. Mauris tempus magna mollis
          ipsum maximus, vel mattis urna aliquet. Suspendisse id imperdiet
          nulla, id ullamcorper quam. Etiam ac feugiat nisi, dictum efficitur
          massa. Praesent accumsan dignissim leo ut commodo. Maecenas at
          sollicitudin ex, nec varius quam. Sed bibendum interdum odio, eget
          tempor enim iaculis a. Suspendisse potenti. Ut eu risus quis velit
          gravida consequat. Proin viverra sollicitudin magna, vestibulum
          laoreet elit efficitur sed.
        </p>
        <br></br>
        <br></br>
      </div>
      <br></br>
      <div id="feedback-row">
        <div id="feedback-text">
          <h2>Did you understand the translation above? </h2>
        </div>
        <div id="feedback-buttons">
          <Button>
            <FiThumbsUp />
          </Button>{" "}
          <Button>
            <FiThumbsDown />
          </Button>
        </div>
      </div>
      <br></br>
      <Button>Finish Conversation</Button> <Button>Respond to Amaya</Button>
    </div>
    <div id="conversation-history">
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
                    below to complete a Qualtrics survey about your experience.
                  </Card.Text>
                  <Card.Title>Conversation History</Card.Title>
                  <Card.Text>Amaya: Hello, Kamil!</Card.Text>
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
                    Después de revisar su conversación, haga clic en el botón a
                    continuación para completar una encuesta de Qualtrics sobre
                    su experiencia.
                  </Card.Text>
                  <Card.Title>Historial de conversación</Card.Title>
                  <Card.Text>Amaya: ¡Hola, Kamil!</Card.Text>
                </Card.Body>
              </Tab>
            </Tabs>
          </Card.Header>
        </Card>
        <br></br>
      </div>
      <Button>Complete Survey</Button>
    </div>
  </div>
);

export default Home;

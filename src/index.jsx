import React from 'react';
import {render} from 'react-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';

import {Timeline, TimelineEvent} from 'react-event-timeline'


class App extends React.Component {
  render () {
    return (
      <Grid fluid>
        <Row>
          <Col xs={6} md={3}>
          <Timeline>
                      <TimelineEvent title="John Doe"
                                     icon={<i className="material-icons md-18">textsms</i>}
                      >
                      Ev1
                      </TimelineEvent>
                      <TimelineEvent
                          title="You sent an email to John Doe"
                          createdAt="2016-09-11 09:06 AM"
                          icon={<i className="material-icons md-18">email</i>}
                      >
                      Ev2
                      </TimelineEvent>
              </Timeline>
          </Col>
        </Row>
      </Grid>
    );
  }
}

render(<App/>, document.getElementById('app'));

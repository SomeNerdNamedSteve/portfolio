import React, { Component } from 'react';

//CSS
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class PageCard extends Component {
  render() {
    return (
        <div>
        <Card>
            <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle></CardSubtitle>
            <Button primary>Button</Button>
            </CardBody>
        </Card>
        </div>
    );
  }
}

export default PageCard;
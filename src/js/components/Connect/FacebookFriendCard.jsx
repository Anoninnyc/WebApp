import React, { Component, PropTypes } from "react";
import ImageHandler from "../../components/ImageHandler";

export default class FacebookFriendCard extends Component {
  static propTypes = {
    picture: PropTypes.object,
    name: PropTypes.string,
  };

  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return <div className="facebook-friend card-child card-child--not-followed">
        <div className="card-child__avatar">
          <ImageHandler sizeClassName="icon-lg " imageUrl={this.props.picture.data.url} />
        </div>
        <div className="card-child__media-object-content">
          <div className="card-child__content">
            { this.props.name ?
              <span>&nbsp;{this.props.name}&nbsp;&nbsp;</span> :
              null
            }
          </div>
        </div>
    </div>;
  }
}

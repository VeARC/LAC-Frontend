import React, { Component, Fragment } from "react";
import "../../components/common/Common.css";
import {
  withStyles,
  useMediaQuery,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { useStyles } from "../../components/common/useStyles";
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

const withMediaQuery =
  (...args) =>
    (Component) =>
      (props) => {
        const mediaQuery = useMediaQuery(...args);
        return <Component mediaQuery={mediaQuery} {...props} />;
      };

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    let loggedInUser = sessionStorage.getItem("loggedInUser");
    if (loggedInUser) {
    } else {
      const { history } = this.props;
      if (history) history.push("/Home");
    }
  }

  render() {
    return (
      <Fragment>
        {/* <PowerBIEmbed
          embedConfig={{
            type: 'report',
            id: '7fc8384a-13bc-477b-9e56-69eeb8ff4799',
            embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=7fc8384a-13bc-477b-9e56-69eeb8ff4799&groupId=1cc6c026-388a-49c2-8188-05d26e49174a&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtRy1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d',
            accessToken: 'eyJrIjoiZmZiYjVmM2YtODk0Yy00MmU1LThhODQtOTc2Zjk3MzJhNDA0IiwidCI6IjM2OWU5OWViLTM4ZjQtNGUwYS04Nzg2LTJiZjljYjgzNTk2MiIsImMiOjN9',
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: false
                }
              },
              background: models.BackgroundType.Transparent,
            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        /> */}

        <iframe
          title="Report Section"
          width="100%"
          height="650px"
          src="https://app.powerbi.com/view?r=eyJrIjoiZmZiYjVmM2YtODk0Yy00MmU1LThhODQtOTc2Zjk3MzJhNDA0IiwidCI6IjM2OWU5OWViLTM4ZjQtNGUwYS04Nzg2LTJiZjljYjgzNTk2MiIsImMiOjN9"
          frameborder="0"
          allowFullScreen="true">
        </iframe>
      </Fragment>
    );
  }
}

export default withRouter(
  withStyles(useStyles)(withMediaQuery("(min-width:600px)")(Dashboard))
);

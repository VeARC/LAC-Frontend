import React, { Component } from "react";
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
    const { classes, mediaQuery } = this.props;

    return (
      <div>
        <PowerBIEmbed
          embedConfig={{
            type: 'report',
            id: '7fc8384a-13bc-477b-9e56-69eeb8ff4799',
            embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=7fc8384a-13bc-477b-9e56-69eeb8ff4799&groupId=1cc6c026-388a-49c2-8188-05d26e49174a&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtRy1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d',
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMzY5ZTk5ZWItMzhmNC00ZTBhLTg3ODYtMmJmOWNiODM1OTYyLyIsImlhdCI6MTY3ODI3MzQ4MiwibmJmIjoxNjc4MjczNDgyLCJleHAiOjE2NzgyNzgzNzksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFEUHZKQ1RET3BMZUlkdjdYMTVEcHpScUFOV3daQTBtZlFwUG1yUWRXeUEyVDROMWJwVjBEQkxMa0VyR3NRb0NuIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImdpdmVuX25hbWUiOiJPdmF0aW8iLCJpcGFkZHIiOiIxNC4xNDMuMjA2LjIyOSIsIm5hbWUiOiJPdmF0aW8iLCJvaWQiOiJjNjg4NTY2Zi05MTUzLTQ1OWYtOGU1ZC04ZWJlNWIxZDVlZTciLCJwdWlkIjoiMTAwMzIwMDE5RDZBNDA4QiIsInJoIjoiMC5BUmNBNjVtZU52UTRDazZIaGl2NXk0TlpZZ2tBQUFBQUFBQUF3QUFBQUFBQUFBQVhBSm8uIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiX1l0NW91Zk9BMVlpb0pwY1I4RnUyMkhWYV9yMEFOVDBpTmM2dTNDX3NuayIsInRpZCI6IjM2OWU5OWViLTM4ZjQtNGUwYS04Nzg2LTJiZjljYjgzNTk2MiIsInVuaXF1ZV9uYW1lIjoiT3ZhdGlvQGxvbmdhcmMuY29tIiwidXBuIjoiT3ZhdGlvQGxvbmdhcmMuY29tIiwidXRpIjoiaEhUZ0lab3JyRUcyd3pDU3NsRVBBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiNzI5ODI3ZTMtOWMxNC00OWY3LWJiMWItOTYwOGYxNTZiYmI4IiwiZmU5MzBiZTctNWU2Mi00N2RiLTkxYWYtOThjM2E0OWEzOGIxIiwiNjJlOTAzOTQtNjlmNS00MjM3LTkxOTAtMDEyMTc3MTQ1ZTEwIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19wbCI6ImVuLVVTIn0.IW6WkIcDA1u38ssFdts9lntavnjp-iyhrsq70BnNmaT-LH51esdjnwiGyyT8d7BgohWYFYIORsqDqoBnoxCQje5zlYYQv6Nz8eRy2L-ZUILI9u2Qlm6-26d0i-X3lAcCyouRL5g-aHtc3hUxD1oMa6YMeEPKGRGH9p-SevnQ_YHVk7Ax1x8E2wcTyb0FiyFBOc24n4QMhBRaBdwtTD5wknRr39hjTXbJsz-AC201WZVuTzZU3x4LR4YofYJ0GFCUJO-p-D6ZsUOEmfXaC03BWoaVRx8iZP82ykX0SKFpIaew-s4Vxa3y0QPfHLBMQJ-SF7eTtr9wAzssROAaT8cvAg',
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
        />
      </div>
    );
  }
}

export default withRouter(
  withStyles(useStyles)(withMediaQuery("(min-width:600px)")(Dashboard))
);

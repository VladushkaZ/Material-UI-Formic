import React from 'react';
import { Link } from 'react-router-dom';
import TabContext from '@material-ui/lab/TabContext';
import Tabs from '@material-ui/core/Tabs';
import TabPanel from '@material-ui/lab/TabPanel';
import { Badge, Box } from '@material-ui/core';
import { Tab } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { logout } from '../../store/api-action';
import { PropTypes } from 'prop-types';


const useStyles = makeStyles((theme) => ({
  content:{
    position: 'absolute',
    left: '47.5vw',
    top: '-42vh',
    fontSize: 64,
    lineHeight: 24,
    color: 'black',
    width: 211,
    height: 24,
  },
  indicator: {
    backgroundColor: '#86bd24',
    width: '100%',
    height:'44px',
    color: 'white',
  },
  Tab: {
    textTransform: 'none',
    maxWidth: 'unset',
    justifyContent: 'left',
    '&:hover': {
      backgroundColor: '#c2d89b',
      color: 'white',
    },
    '&:target': {
      backgroundColor: '#c2d89b',
      color: 'white',
    },
    '&:hover path': {
      fill: '#86bd24',
    },
  },
}));

function Page(props) {
  const [value] = React.useState('1');
  const classes = useStyles();
  const { logoutApp } = props;

  return (
    <div id="content">
      <div id="menu">
        <div className="top">
          <img src="../images/user-page.png" alt="user" />
          <div>
            <p className="name">User/1</p>
            <p className="description">Team member Tube</p>
          </div>
        </div>
        <TabContext value={value}>
          <Box>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'green',
              }}
              classes={{
                indicator: classes.indicator,
              }}
            >
              <Tab className={classes.Tab}
                label={
                  <Badge color="primary" style={{
                    zIndex: 2,
                    fontSize: 18,
                    width: '100%',
                    fontFamily: 'Open Sans',
                    padding: '9px 28px',
                  }}
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{marginRight: '24px',
                        marginLeft: '17px',
                      }}
                    >
                      <rect width="26" height="26" rx="5" fill="white" />
                      <path className={classes.Svg}
                        d="M19 8.5H16V7C16 6.1675 15.3325 5.5 14.5 5.5H11.5C10.6675 5.5 10 6.1675 10 7V8.5H7C6.1675 8.5 5.5075 9.1675 5.5075 10L5.5 18.25C5.5 19.0825 6.1675 19.75 7 19.75H19C19.8325 19.75 20.5 19.0825 20.5 18.25V10C20.5 9.1675 19.8325 8.5 19 8.5ZM14.5 8.5H11.5V7H14.5V8.5Z"
                        fill="#C4C4C4"
                      />
                    </svg>
                    Page_1
                  </Badge>
                } value="1"
              />
              <Tab className={classes.Tab} label={
                <Badge color="primary" style={{
                  zIndex: 2,
                  fontSize: 18,
                  width: '100%',
                  fontFamily: 'Open Sans',
                  padding: '9px 28px',
                }}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{marginRight: '24px',
                      marginLeft: '17px',
                    }}
                  >
                    <rect width="26" height="26" rx="5" fill="white" />
                    <path className={classes.Svg}
                      d="M12.25 10.87V5.5C8.5 5.875 5.5 9.0925 5.5 13C5.5 16.9075 8.5 20.125 12.25 20.5V15.13C11.5 14.8225 10.75 13.99 10.75 13C10.75 12.01 11.5 11.1775 12.25 10.87ZM15.145 12.25H20.5C20.14 8.6875 17.5 5.8525 13.75 5.5V10.87C14.5 11.095 14.89 11.605 15.145 12.25ZM13.75 15.13V20.5C17.5 20.1475 20.14 17.3125 20.5 13.75H15.145C14.89 14.395 14.5 14.905 13.75 15.13Z"
                      fill="#C4C4C4"
                    />
                  </svg>
                Page_2
                </Badge>
              } value="2"
              />
              <Tab className={classes.Tab} label={
                <Badge color="primary" style={{
                  zIndex: 2,
                  fontSize: 18,
                  width: '100%',
                  fontFamily: 'Open Sans',
                  padding: '9px 28px',
                }}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{marginRight: '24px',
                      marginLeft: '17px',
                    }}
                  >
                    <rect width="26" height="26" rx="5" fill="white" />
                    <path
                      d="M12 13.5625C13.2225 13.5625 14.3025 13.855 15.18 14.2375C15.99 14.5975 16.5 15.4075 16.5 16.285V17.5H7.5V16.2925C7.5 15.4075 8.01 14.5975 8.82 14.245C9.6975 13.855 10.7775 13.5625 12 13.5625ZM6 13.75C6.825 13.75 7.5 13.075 7.5 12.25C7.5 11.425 6.825 10.75 6 10.75C5.175 10.75 4.5 11.425 4.5 12.25C4.5 13.075 5.175 13.75 6 13.75ZM6.8475 14.575C6.57 14.53 6.2925 14.5 6 14.5C5.2575 14.5 4.5525 14.6575 3.915 14.935C3.36 15.175 3 15.715 3 16.3225V17.5H6.375V16.2925C6.375 15.67 6.5475 15.085 6.8475 14.575ZM18 13.75C18.825 13.75 19.5 13.075 19.5 12.25C19.5 11.425 18.825 10.75 18 10.75C17.175 10.75 16.5 11.425 16.5 12.25C16.5 13.075 17.175 13.75 18 13.75ZM21 16.3225C21 15.715 20.64 15.175 20.085 14.935C19.4475 14.6575 18.7425 14.5 18 14.5C17.7075 14.5 17.43 14.53 17.1525 14.575C17.4525 15.085 17.625 15.67 17.625 16.2925V17.5H21V16.3225ZM12 8.5C13.245 8.5 14.25 9.505 14.25 10.75C14.25 11.995 13.245 13 12 13C10.755 13 9.75 11.995 9.75 10.75C9.75 9.505 10.755 8.5 12 8.5Z"
                      fill="#C4C4C4"
                    />
                  </svg>
                Page_3
                </Badge>
              } value="3"
              />
            </Tabs>
          </Box>
          <TabPanel className={classes.content} value="1">Page_1</TabPanel>
          <TabPanel className={classes.content} value="2">Page_2</TabPanel>
          <TabPanel className={classes.content} value="3">Page_3</TabPanel>
        </TabContext>

        <div className="bottom">
          <Link to="/">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.59 10.91L14 9.5L9 4.5L4 9.5L5.41 10.91L8 8.33L8 18L10 18L10 8.33L12.59 10.91ZM2.09815e-06 2L2.62268e-07 16C1.16709e-07 17.11 0.9 18 2 18L6 18L6 16L2 16L2 2L16 2L16 16L12 16L12 18L16 18C17.1 18 18 17.11 18 16L18 2C18 0.900002 17.1 2.24239e-06 16 2.09815e-06L2 2.62268e-07C0.900002 1.18021e-07 2.24239e-06 0.9 2.09815e-06 2Z"
                fill="#414549"
              />
            </svg>
            <span>Main Page</span>
          </Link>
          <Link
            to="/login"
            onClick={(evt) => {
              evt.preventDefault();
              logoutApp();
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.91 5.41L9.5 4L4.5 9L9.5 14L10.91 12.59L8.33 10L18 10L18 8L8.33 8L10.91 5.41ZM2 18L16 18C17.11 18 18 17.1 18 16L18 12L16 12L16 16L2 16L2 2L16 2L16 6L18 6L18 2C18 0.9 17.11 -7.78063e-08 16 -1.74846e-07L2 -1.39876e-06C0.900001 -1.49493e-06 1.49493e-06 0.899998 1.39876e-06 2L1.74846e-07 16C7.86805e-08 17.1 0.9 18 2 18Z"
                fill="#414549"
              />
            </svg>

            <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

Page.propTypes = {
  logoutApp: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  logoutApp() {
    dispatch(logout());
  },
});

export { Page };
export default connect(null, mapDispatchToProps)(Page);

import React from 'react';
import {Link} from 'react-router-dom';

import {makeStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DashboardIcon from '@material-ui/icons/Dashboard';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ExploreIcon from '@material-ui/icons/Explore';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';

/* Types */
type ContentLink = {
    title: string,
    icon: JSX.Element,
    route: string
};

/* Constants */
const publicLinks: ContentLink[] = [
  {title: 'Search', icon: <SearchIcon />, route: '/'},
  {title: 'Homebrew', icon: <LibraryBooksIcon />, route: '/'},
];
const userLinks: ContentLink[] = [
  {title: 'Dashboard', icon: <DashboardIcon />, route: '/dashboard'},
  {title: 'Campaigns', icon: <ExploreIcon />, route: '/'},
  {title: 'Races', icon: <EmojiPeopleIcon />, route: '/races'},
];
const otherLinks: ContentLink[] = [
  {title: 'Settings', icon: <SettingsIcon />, route: '/'},
];

/* Styles */
const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const NavigationList = () => {
  const classes = useStyles();

  const generateLinks = (links: ContentLink[]) => {
    return links.map((link, idx) => (
      <Link to={link.route} key={idx} className={classes.link}>
        <ListItem button key={idx}>
          <ListItemIcon>{link.icon}</ListItemIcon>
          <ListItemText primary={link.title}/>
        </ListItem>
      </Link>
    ));
  };

  const publicList = generateLinks(publicLinks);
  const userList = generateLinks(userLinks);
  const otherList = generateLinks(otherLinks);

  return (
    <>
      <Divider />
      <List>
        {publicList}
      </List>

      <Divider />
      <List>
        {userList}
      </List>

      <Divider />
      <List>
        {otherList}
      </List>
    </>
  );
};

export default NavigationList;

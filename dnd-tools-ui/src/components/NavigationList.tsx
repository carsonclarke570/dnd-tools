import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ExploreIcon from '@material-ui/icons/Explore';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

/* Types */
type ContentLink = {
    title: string,
    icon: JSX.Element
};

/* Constants */
const publicLinks: ContentLink[] = [
  {title: 'Search', icon: <SearchIcon />},
  {title: 'Homebrew', icon: <LibraryBooksIcon />},
];
const userLinks: ContentLink[] = [
  {title: 'Campaigns', icon: <ExploreIcon />},
  {title: 'Races', icon: <EmojiPeopleIcon />},
];
const otherLinks: ContentLink[] = [
  {title: 'Settings', icon: <SettingsIcon />},
];

/* Styles */
// const useStyles = makeStyles((theme) => ({

// }));

const NavigationList = () => {
  // const classes = useStyles();

  const generateLinks = (links: ContentLink[]) => {
    return links.map((link, idx) => (
      <ListItem button key={idx}>
        <ListItemIcon>{link.icon}</ListItemIcon>
        <ListItemText primary={link.title}/>
      </ListItem>
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

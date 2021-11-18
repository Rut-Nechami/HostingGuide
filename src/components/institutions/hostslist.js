import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';


export default function CheckboxListSecondary(props) {
  const [checked, setChecked] = React.useState([1]);
  // const [show,setShow]= React.useState(f)

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  /*
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };*/

  return (
    <>
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {props.list.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value.userName}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
             <ListItemText primary="Inbox" />
        {/* {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton> */}
            <ListItemButton >
            {/* //oClick - ope modal with details */}
              <ListItemAvatar >
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  //src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Host ${value.address}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    {/* <Modal /> */}
    </>
  );
}

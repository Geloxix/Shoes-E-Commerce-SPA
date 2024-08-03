import { red, grey } from "@mui/material/colors";

export const checkBoxStyle = {
   color: grey[500],
      '&.Mui-checked': {
      color: red[500],
   },
   '& .MuiSvgIcon-root': {
       fontSize: 25 
   }
}


export const style = {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 500,
      bgcolor: 'background.paper',
      p: 4,
   };


export const navLinks = [
   {  
      "id": 1,
      "name": "Home",
      "path": "/"
   },
   {
      "id": 2,
      "name": "About",
      "path": "/about"
   },
   {
      "id": 3,
      "name": "Shop",
      "path": "/products"
   },
   {
      "id": 4,
      "name": "Contact",
      "path": "/contact"
   }
];

export const contacts = [
   {
      "id": 1,
      "img": "../src/assets/icons/instagram-line.svg",
      "path": '#'
   },
   {
      "id": 2,
      "img": "../src/assets/icons/twitter-x-line.svg",
      "path": '#'
   },
   {
      "id": 3,
      "img": "../src/assets/icons/facebook-fill.svg",
      "path": '#'
   }
];


export const communications = [
   {
      "id": 1,
      "name": "EMAIL",
      "img": "../src/assets/icons/mail-line-black.svg",
      "contact": "Example@gmail.com",
   },
   {
      "id": 2,
      "name": "PHONE NUMBER",
      "img": "../src/assets/icons/phone-line.svg",
      "contact": "000-0000-0000",
   },
   {
      "id": 3,
      "name": "ADDRESS",
      "img": "../src/assets/icons/map-pin-line.svg",
      "contact": "0000 Undefined, Abstract street",
   }
];
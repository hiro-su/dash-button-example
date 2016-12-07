import DashButton from 'dash-button';

const DASH_BUTTON_MAC_ADDRESS = 'YOUR DASH BUTTON MAC ADDRESS';
const button = new DashButton(DASH_BUTTON_MAC_ADDRESS, { networkInterface: 'en1' });
let count = 0;

button.addListener(() => console.log(`DASH/${++count}`));


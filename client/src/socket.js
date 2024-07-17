import { io } from "socket.io-client";


const socket = io("https://onebid.lifexdreams.com", {
    autoConnect: false
});

export default socket;
/**
 * @author Bilal Cinarli
 */

class Resources {
    static addResources() {
        this.addSocket();
        this.addStyles();
    }

    static addSocket() {
        let io   = document.createElement('script'),
            lcs  = document.getElementById('liveChat-script'),
            path = '//young-cove-80904.herokuapp.com/';

        if(__DEV__) {
            path = '//localhost:8090/';
        }

        io.src = path + 'socket.io/socket.io.js';

        lcs.parentNode.insertBefore(io, lcs);
    }

    static addStyles() {
        let link = document.createElement('link'),
            path = '//young-cove-80904.herokuapp.com/';

        if(__DEV__) {
            path = '//localhost:8090/';
        }

        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = path + '/live-chat.css';

        document.getElementsByTagName('head')[0].appendChild(link);
    }
}

export default Resources;
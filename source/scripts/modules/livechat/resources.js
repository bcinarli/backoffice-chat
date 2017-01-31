/**
 * @author Bilal Cinarli
 */

class Resources {
    static addResources() {
        this.addSocket();
        this.addStyles();
    }

    static addSocket() {
        let io  = document.createElement('script'),
            lcs = document.getElementById('liveChat-script');

        io.src = __URL__ + 'socket.io/socket.io.js';

        lcs.parentNode.insertBefore(io, lcs);
    }

    static addStyles() {
        let link = document.createElement('link');

        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = __URL__ + '/backoffice-chat.css';

        document.getElementsByTagName('head')[0].appendChild(link);
    }
}

export default Resources;
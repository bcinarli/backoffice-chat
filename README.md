# Backoffice Chat
Help Desk Chat App with a Backoffice Agents

This sample app is embeddable to your website. If supports sample live chat screen for the website and agent screen for answering messages from visitors.

## Add to your webpage

### Client Chat Box
Add the following script right after the opening of `body` tag on your website

```html
<script>
(function() {
    var i, e,
        w = window,
        o = document,
        s = "script";
        
    w.liveChatOptions = {
        connection: "client"
    };
    
    i       = o.createElement(s);
    i.async = 1;
    i.src   = "//young-cove-80904.herokuapp.com/backoffice-chat.js";
    i.id    = 'liveChat-script';
    
    e = o.getElementsByTagName(s)[0];
    e.parentNode.insertBefore(i, e)
})();
</script>
```

### Agent Screen
Add the following script right after the opening of `body` tag on your website's backoffice screens e.g. http://yoursite.com/backfoffice page.

```html
<script>
(function() {
    var i, e,
        w = window,
        o = document,
        s = "script";
        
    w.liveChatOptions = {
        connection: "backoffice"
    };
    
    i       = o.createElement(s);
    i.async = 1;
    i.src   = "//young-cove-80904.herokuapp.com/backoffice-chat.js";
    i.id    = 'liveChat-script';
    
    e = o.getElementsByTagName(s)[0];
    e.parentNode.insertBefore(i, e)
})();
</script>
```

### Notes
When there are no active chat sessions, Agent's will see a blank page :)
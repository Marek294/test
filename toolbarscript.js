var MWPjs = {
    bar: function (arg) {
        var body = document.querySelector('body')
        var section = document.querySelector('section')

        var existToolbarTop = document.getElementById('toolbarTop');
        var existToolbarBottom = document.getElementById('toolbarBottom');

        if(arg.position === 'top' && existToolbarTop) return;

        if(arg.position === 'bottom' && existToolbarBottom) return;

        if(arg.position === 'top' && existToolbarBottom) {
            existToolbarBottom.remove();
        }

        if(arg.position === 'bottom' && existToolbarTop) {
            existToolbarTop.remove();
        }

        var message = arg.message
        var okButton = document.createElement('button')
        var okButtonText = document.createTextNode('Get widgets')
        okButton.appendChild(okButtonText)
        okButton.classList.add('okButton')

        okButton.onclick = () => arg.clickOk();

        var closebutton = document.createElement('button');
        var closeSign = document.createElement('p');
        closeSign.innerHTML = '&times;';
        closeSign.style.margin = 0;
        closebutton.appendChild(closeSign);
        closebutton.classList.add('closeButton');

        closebutton.onclick = () => arg.close();

        var messageText = document.createElement('p');
        messageText.innerHTML = message;
        messageText.classList.add('message');

        var toolbar = document.createElement('div');
        toolbar.appendChild(messageText);
        toolbar.appendChild(okButton); 
        toolbar.appendChild(closebutton); 
        toolbar.setAttribute('id', arg.position === 'top' ? 'toolbarTop' : 'toolbarBottom');

        body.insertBefore(toolbar, section);
        var transformY = arg.position === 'top' ? 'translateY('+(-toolbar.offsetHeight)+'px)' : 'translateY('+toolbar.offsetHeight+'px)';
        var keyframes = [
            { transform: transformY }, 
            { transform: 'translateY(0px)' }
        ];
        var options = {
            duration: 500
        }

        if (arg.position === 'top') body.animate(keyframes,options);
        if (arg.position === 'bottom') toolbar.animate(keyframes, options);
    }
}
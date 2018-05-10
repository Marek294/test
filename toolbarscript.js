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

        var closebutton = document.createElement('button')
        var closeSign = document.createElement('p');
        closeSign.innerHTML = '&times;';
        closebutton.appendChild(closeSign)
        closebutton.classList.add('closeButton');

        closebutton.onclick = () => arg.close();

        var messageText = document.createElement('p');
        messageText.innerHTML = message;

        var toolbar = document.createElement('div');
        toolbar.appendChild(messageText);
        toolbar.appendChild(okButton); 
        toolbar.appendChild(closebutton);  

        if (arg.position === 'top') {
            toolbar.setAttribute('id', 'toolbarTop');
            toolbar.classList.add('toolbarTop');
            body.insertBefore(toolbar, section);

            var transformY = 'translateY('+(-toolbar.offsetHeight)+'px)';
            body.animate([
                { transform: transformY }, 
                { transform: 'translateY(0px)' }
              ], { 
                duration: 500
              });
        }
        if (arg.position === 'bottom') {
            toolbar.setAttribute('id', 'toolbarBottom');
            toolbar.classList.add('toolbarBottom')    ;
            body.appendChild(toolbar);

            document.getElementById('toolbarBottom').animate([
                { transform: 'translateY(100%)' }, 
                { transform: 'translateY(0px)' }
              ], { 
                duration: 500
              });
        }
    }
}
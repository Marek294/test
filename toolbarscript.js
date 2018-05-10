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
        var pTag = document.createElement('p');
        pTag.innerHTML = '&times;';
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

        if (arg.position === 'top') {
            var toolbar = document.createElement('div');
            toolbar.setAttribute('id', 'toolbarTop');
            toolbar.classList.add('toolbarTop')
            toolbar.innerHTML = message
            toolbar.appendChild(okButton); 
            toolbar.appendChild(closebutton);   
            body.insertBefore(toolbar, section) 
        }
        if (arg.position === 'bottom') {
             var toolbar = document.createElement('div');
            toolbar.setAttribute('id', 'toolbarBottom');
            toolbar.classList.add('toolbarBottom')    
            toolbar.innerHTML = message
            toolbar.appendChild(okButton); 
            toolbar.appendChild(closebutton);
            body.appendChild(toolbar)
        }
    }
}
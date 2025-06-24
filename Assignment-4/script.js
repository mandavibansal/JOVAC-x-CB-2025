        const grand = document.querySelector('.box1');
        const par = document.querySelector('.box2');
        const chi = document.querySelector('.box3');
        const display = document.querySelector('.display');

        // Capturing phase
        [grand, par, chi].forEach(elem => {
            elem.addEventListener('click', (e) => {
                console.log('Capturing → ' + elem.className);
            }, true);
        });

        // Bubbling phase with different effect
        grand.addEventListener('click', () => {
            console.log('Bubbling Grandparent');
            grand.style.borderColor = '#ff9999';
        });

        par.addEventListener('click', () => {
            console.log('Bubbling Parent');
            par.style.borderColor = '#99ff99';
        });

        chi.addEventListener('click', () => {
            console.log('Bubbling Child');
            chi.style.borderColor = '#9999ff';
        });

        grand.addEventListener('click', () => {
            display.textContent = 'Result: grandparent';
        });

        par.addEventListener('click', (e) => {
            e.stopPropagation();
            display.textContent = 'Result: parent';
        });

        chi.addEventListener('click', (e) => {
            e.stopPropagation();
            display.textContent = 'Result: child';
        });
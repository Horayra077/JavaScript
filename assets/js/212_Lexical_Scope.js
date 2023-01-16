function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batman'];
    function cryForHelp() {
        // let color = 'purple';
        for (let hero of heroes) {
            console.log(`PLEASE HELP US, ${hero.toUpperCase()}.`);
        }
    }
    cryForHelp();
}

bankRobbery();

// variable heroes has access in inner function

//  So, An inner function nested inside of some parent function has access to the scope
// or to the variables defined in the scope of that outer function.


// But color variable don't have access to that up top instead of bankRobbery()
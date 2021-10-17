type MenuOptions = '' | 'home' | 'products' | 'stores' | 'about';

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        home: false,
        products: false,
        stores: false,
        about: false
    };

    if(activeMenu !== ''){
        returnObject[activeMenu] = true;
    }
    return returnObject
}
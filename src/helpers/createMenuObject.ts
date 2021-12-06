type MenuOptions = '' | 'home' | 'products' | 'stores' | 'about' | 'violins' | 'celos' | 'violas' | 'cbaixos';

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        home: false,
        products: false,
        stores: false,
        about: false,
        violins: false,
        celos: false,
        violas: false,
        cbaixos: false
    };

    if(activeMenu !== ''){
        returnObject[activeMenu] = true;
    }
    return returnObject
}
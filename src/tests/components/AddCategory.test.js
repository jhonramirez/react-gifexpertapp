import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => { 

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories } />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    });

    test('Debe de mostrarse correctamente', () => { 
        
        expect( wrapper).toMatchSnapshot();
     });

     test('Debe de cambiar la caja de texto', () => { 
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: { value } }); 

        expect( wrapper.find('p').text().trim()).toBe( value );
     });

     test('NO debe de postear la información con submit', () => { 

        wrapper.find('form').simulate('submit', { preventDefault(){} }); 

        expect( setCategories ).not.toHaveBeenCalled();
     });

     test('Debe de llamar el setCategories y limpiar la caja de texto', () => { 
        const value = 'Hola mundo';
        //1. Simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } });
        //2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} }); 
        //3. setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled();
        //Para evaluar cuantas veces se llamo la función
        expect( setCategories ).toHaveBeenCalledTimes(1);
        //Para evaluar que se alla llamado como una función
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        //4. El valor del input debe de estar ' '
        expect( wrapper.find('input').prop('value') ).toBe('');
     });
 });
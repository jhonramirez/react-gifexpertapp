import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Prueba GifGridItem.js', () => { 

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';

    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

    test('debe de mostrar <GifGridItem /> correctamente', () => {     
        expect( wrapper ).toMatchSnapshot();
     }); 

     test('debe de tener un parrafo con el title', () => { 
        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe(title);
      });

      test('debe tener la imagen igual al URL y alt de los props', () => { 
          const img = wrapper.find('img');

          expect( img.prop('src') ).toBe( url );
          expect( img.prop('alt') ).toBe( title );
       });

       test('debe de tener animate__bounce', () => { 
           const div = wrapper.find('div');
           const className = div.prop('className');

           expect(className.includes('animate__bounce')).toBe ( true );
        });
 }); 
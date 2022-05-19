import React from 'react';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en el hook <useFetchGifs />', () => { 

    test('Debe de retornar el estado inicial', async () => { 

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        const { data, loading } = result.current;
        //const { data, loading } = useFetchGifs( 'One Punch' );
        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
     });

     test('Debe de retornar un arreglo de imagenes y el login en false', async () => { 

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        await waitForNextUpdate();
        const { data, loading } = result.current;
        //const { data, loading } = useFetchGifs( 'One Punch' );

        expect( data.length ).toBe(10);
        expect( loading ).toBe(false);
     });
});

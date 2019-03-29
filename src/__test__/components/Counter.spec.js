import React from 'react';
import { Counter } from '../../containers/Counter'
import App from '../../components/App'
import { createStore } from 'redux'
import rootReducer from '../../reducers'
import actionCounter from '../../actions/Counter'
import { configure, shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux'

// Config store
const initialState = {
    counter: 0
}

// Config enzyme
configure({ adapter: new Adapter() });

// Description testing
describe('Counter Component', () => {

    const store = createStore( rootReducer, initialState )
    const ProviderApplication = function () {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
    const wrapper = mount( <ProviderApplication /> )

    // Testing . . .
    it("Init store", () => {
        expect( store.getState().counter ).toEqual( 0 )
    });

    it("Init component correct", () => {
        expect( wrapper.find(".counter > h3").length).toBe(1)
    });

    it("Increment button clicked correct result", () => {

        // store.dispatch( actionCounter.increment(0) )
        // expect( store.getState().counter ).toEqual( 1 )

        const result = parseInt(wrapper.find( '.counter > h3' ).text()) || 0;

        wrapper.find( '.counter--increment' ).simulate( 'click' )
        wrapper.update()

        expect( parseInt(wrapper.find( '.counter > h3' ).text()) ).toEqual( result + 1 )
    });

    it("Decrement button clicked correct result", () => {

        const result = parseInt(wrapper.find( '.counter > h3' ).text()) || 0;

        wrapper.find( '.counter--decrement' ).simulate( 'click' )
        wrapper.update()

        expect( parseInt(wrapper.find( '.counter > h3' ).text()) ).toEqual( result - 1 )
    });
});

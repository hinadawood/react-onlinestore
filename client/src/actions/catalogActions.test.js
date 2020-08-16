import * as actions from './catalogActions';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('test async call', () => {
    it('should verify API GET catalog when GET successful', async () => {
        const store = mockStore({});
        nock('http://localhost:8080').get('/api/catalog').reply(200, {});
        const expectedAction = [
            actions.FETCH_CATALOG_STARTED,
            actions.FETCH_CATALOG_SUCCEEDED
        ]
        await store.dispatch(actions.fetchCatalogInfo('http://localhost:8080/api/catalog'));
        const actualActions = store.getActions().map(action => action.type);
        expect(actualActions).toEqual(expectedAction);
    });
    it('should verify API GET catalog when GET failed', async () => {
        const store = mockStore({});
        nock('http://localhost:8080').get('/api/catalog').reply(400, {});
        const expectedAction = [
            actions.FETCH_CATALOG_STARTED,
            actions.FETCH_CATALOG_FAILED
        ]
        await store.dispatch(actions.fetchCatalogInfo('http://localhost:8080/api/catalog'));
        const actualActions = store.getActions().map(action => action.type);
        expect(actualActions).toEqual(expectedAction);
    })
})
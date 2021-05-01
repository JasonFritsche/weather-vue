import { shallowMount, createLocalVue } from '@vue/test-utils';
import CurrentDayHeader from '../../src/components/CurrentDay/CurrentDayHeader.vue';
import Vuex from 'vuex';

// add the 2 lines below
const localVue = createLocalVue();
localVue.use(Vuex);

describe('CurrentDayHeader Component', () => {
  // add the 2 lines below
  let actions;
  let store;

  // add this before each
  beforeEach(() => {
    actions = {
      loadCurrentForecast: jest.fn(),
    };
    store = new Vuex.Store({
      state: {},
      actions,
    });
  });

  it('should call loadCurrentForecast Action', () => {
    shallowMount(CurrentDayHeader, {
      localVue,
      store,
      computed: {
        currentForecast() {
          return {
            coord: {
              lon: -74.006,
              lat: 40.7143,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            base: 'stations',
            main: {
              temp: 63.03,
              feels_like: 60.21,
              temp_min: 60.01,
              temp_max: 66,
              pressure: 1013,
              humidity: 25,
            },
            visibility: 10000,
            wind: {
              speed: 3.44,
              deg: 0,
            },
            clouds: {
              all: 1,
            },
            dt: 1619898874,
            sys: {
              type: 1,
              id: 4610,
              country: 'US',
              sunrise: 1619862853,
              sunset: 1619913106,
            },
            timezone: -14400,
            id: 5128581,
            name: 'New York',
            cod: 200,
          };
        },
      },
    });
    expect(actions.loadCurrentForecast).toHaveBeenCalled();
  });
});

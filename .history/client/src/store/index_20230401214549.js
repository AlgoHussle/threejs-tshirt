import { proxy } from 'valtio'

const state = proxy({
    intro: true,
    color: '#EF'
});

export default state;
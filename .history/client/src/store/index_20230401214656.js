import { proxy } from 'valtio'

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoText: true,
    isFullTexture: false,
    logoDecal: './'
});

export default state;
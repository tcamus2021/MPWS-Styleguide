import Choice from '../components/Choice';

const pages = [
    { url: '/', title: 'Maquettes des pages', component: (<Choice title={'Maquettes des pages'} />) }
]

const getComponent = () => {
    const wantedPage = window.location.href.split('http://localhost:3000')[1];
    return pages.find(object => object.url === wantedPage).component;
}

export default getComponent;
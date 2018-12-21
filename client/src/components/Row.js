import Gallery from 'react-photo-gallery';

export default class Row extends React.Component {
    render() {
    return (
        <Gallery photos={PHOTO_SET} />
    );
    }
}
const PHOTO_SET = [
  {
    src: 'https://www.peraltawave.com/front-end-html/images/bslide03.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'https://www.peraltawave.com/petfinder/images/bslide03a.jpg',
    width: 1,
    height: 1
  }
];
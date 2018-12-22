import React from "react";
import axios from 'axios';
import Gallery from "react-photo-gallery";
import Photo from "./Photo";
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from "react-sortable-hoc";


const SortablePhoto = SortableElement(Photo);
const SortableGallery = SortableContainer(({ photos }) => {
  return <Gallery photos={photos} columns={4} ImageComponent={SortablePhoto} />;
});

class Kmoney extends React.Component {
  constructor() {
    super();
    this.onSortEnd = this.onSortEnd.bind(this);
    this.state = {
      photos: []
    };
  }
  componentDidMount() {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=599a090fac7d4698901471c3edff281c')
        .then(res => {

            var arr = [];
            for (var i= 0; i < 20; i++){
                arr.push({src: res.data.articles[i].urlToImage, width: 3, height:2})
               
            }

            this.setState({ photos: arr });
            console.log(this.state)
        })

}
  onSortEnd({ oldIndex, newIndex }) {
    this.setState({
      photos: arrayMove(this.state.photos, oldIndex, newIndex)
    });
  }
  render() {
    return (
      <SortableGallery
        axis={"xy"}
        photos={this.state.photos}
        onSortEnd={this.onSortEnd}
      />
    );
  }
}


export default Kmoney;


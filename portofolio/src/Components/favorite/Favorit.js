import React, { Component } from 'react';
import '../css/main.css';
import carousel from '../js/carousel';

class Favorit extends Component {
  render() {
    return (
      <section className="maps" id="favorit">
        <div className="max-width">
          <h2 className="title">Tempat Favorit Kelompok 2</h2>
          <div className="maps-content">
            <div className="column left">
              <div className="text">Tempat Favorit Kelompok 2</div>
              <p>Kelompok 2 punya tempat favorit nih temen-temen, Tempat favorit pertama yaitu masjid Raden Patah Universitas brawijaya, masjid ini menjadi tempat favorit karena selain memiliki kegiatan keagamaan yang cukup menarik.</p>
              <a href="https://goo.gl/maps/DhVE8sEZe7HXaiX69" className="">
                Explore!
              </a>
            </div>
            <div className="column right" onLoad={carousel}>
              <div className="slideshow-container">
                <div className="slide fade">
                  <div className="numbertext">1 / 4</div>
                  <iframe
                    title="myFrame"
                    id="gmap_canvas"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15805.823174691532!2d112.6154342!3d-7.9517601!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x519c1d4fdcc0cbd0!2sMasjid%20Raden%20Patah%20Universitas%20Brawijaya!5e0!3m2!1sid!2sid!4v1667825715259!5m2!1sid!2sid"
                  ></iframe>
                  <div className="text">Masjid Raden Patah</div>
                </div>
                <div className="slide fade">
                  <div className="numbertext">2 / 4</div>
                  <iframe
                    title="myFrame"
                    id="gmap_canvas"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.822122905909!2d106.83139!3d-6.17017!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcafaf042d5840c6c!2sMasjid%20Istiqlal!5e0!3m2!1sid!2sid!4v1667825549183!5m2!1sid!2sid"
                  ></iframe>
                  <div className="text">Masjid istiqlal</div>
                </div>
                <div className="slide fade">
                  <div className="numbertext">3 / 4</div>
                  <iframe title="myFrame" id="gmap_canvas" src="https://maps.google.com/maps?q=masjid%20baiturohman%20aceh&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                  <div className="text">Masjid Raya Baiturrahman</div>
                </div>
                <div className="slide fade">
                  <div className="numbertext">4 / 4</div>
                  <iframe title="myFrame" id="gmap_canvas" src="https://maps.google.com/maps?q=masjid%20demak&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                  <div className="text">Masjid Agung Demak</div>
                </div>
              </div>
              <div className="page">
                <span className="dot" onclick="currentSlide(1)"></span>
                <span className="dot" onclick="currentSlide(2)"></span>
                <span className="dot" onclick="currentSlide(3)"></span>
                <span className="dot" onclick="currentSlide(4)"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Favorit;

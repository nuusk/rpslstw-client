const getRandomImage = (array) => array[Math.floor(array.length * Math.random(1))];

const rock = [
  'https://animesuperhero.com/fansites/blogicon/55921/master/1463840890.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkO3GJ_jN1LKnXQocG8TUCB3Ca_Ug9yu7bPX0EML-BMJkA4A3F9Q',
  'https://images.homedepot-static.com/productImages/fa9fe9af-bd06-4a60-be35-384709e37a65/svn/outdoor-essentials-bagged-204952-64_1000.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/81YPB6jlJiL._SX355_.jpg',
  'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Limestone-060-RD010-C-SH_by22j3.jpg',
];

export const getRockImage = getRandomImage(rock);

const paper = [
  'https://images-na.ssl-images-amazon.com/images/I/61qSdyDYbZL._SX425_.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/410GWriJ-mL._AC_SY400_.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/5/52/Continuous_form_paper_%2814p875_x_11%29.jpg',
  'https://vignette.wikia.nocookie.net/narutofanon/images/d/df/408007-untitled_2.png/revision/latest?cb=20140124061923',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Coloured%2C_textured_craft_card.jpg/250px-Coloured%2C_textured_craft_card.jpg',
];

export const getPaperImage = getRandomImage(paper);

const scizors = [
  'https://images-na.ssl-images-amazon.com/images/I/71zX6H%2BKoKL._SL1500_.jpg',
  'https://i.dailymail.co.uk/i/pix/2013/05/16/article-0-0C5FB2A700000578-278_634x486.jpg',
  'https://pm1.narvii.com/6605/a933940fcf05351b317a8383a9c706520a010821_hq.jpg',
  'https://cdn.pixabay.com/photo/2016/03/31/23/11/scissors-1297454__340.png',
  'https://www.garrettwade.com/media/catalog/product/cache/1/image/730x/0dc2d03fe217f8c83829496872af24a0/6/5/65S0107_11.jpg',
];

export const getScizorsImage = getRandomImage(scizors);

const lizard = [
  'https://listverse.com/wp-content/uploads/2018/06/feature-reptilian-1280x720.jpg',
  'https://animals.sandiegozoo.org/sites/default/files/inline-images/animals-lizard-redheadedagamapair.jpg',
  'https://www.acidcave.net/tomb/lizie.png',
  'https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg',
  'https://images.newscientist.com/wp-content/uploads/2015/07/dn27814-1_800.jpg?width=800',
];

export const getLizardImage = getRandomImage(lizard);

const spock = [
  'https://i.ytimg.com/vi/ZicsVKdqIyE/maxresdefault.jpg',
  'https://static01.nyt.com/images/2016/09/09/arts/09FORLOVESPOCK/09FORLOVESPOCK-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
  'https://secure.i.telegraph.co.uk/multimedia/archive/01622/Leonard-Nimoy_1622089c.jpg',
  'https://ca-times.brightspotcdn.com/dims4/default/94b1aae/2147483647/strip/true/crop/1688x1125+156+0/resize/1680x1120!/quality/90/?url=https%3A%2F%2Fca-times.brightspotcdn.com%2F2d%2Fa2%2F65d9a0b9e2cc7577e550204b4550%2Fla-me-leonard-nimoy-pictures-025',
  'https://cdn1.thr.com/sites/default/files/imagecache/768x433/2018/02/star_trek_tv_spock_3_copy_-_h_2018.jpg',
];

export const getSpockImage = getRandomImage(spock);

const thumb = [
  'https://www.pthealth.ca/app/uploads/2018/08/trigger-thumb-881x441.jpg',
  'https://sociorocketnewsen.files.wordpress.com/2013/11/thumb-top1.jpg?w=640',
  'https://prairie-ortho.com/wp-content/uploads/2015/07/THUMB.jpg',
  'https://miro.medium.com/max/750/1*Dl1-HpOHRk1qs9MFNLyfAQ.jpeg',
  'https://427mahou.files.wordpress.com/2008/07/thumbs-up.jpg',
];

export const getThumbImage = getRandomImage(thumb);

const well = [
  'https://www.totalsoftwater.com/wp-content/uploads/2017/08/wells-2212974_1280.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/1/1f/Well%2C_Prague_Satalice.jpg',
  'https://i.pinimg.com/originals/96/85/52/968552c952682f6ed772c153ae7a380a.jpg',
  'https://wow.zamimg.com/uploads/screenshots/normal/651454-to-the-hills.jpg',
  'https://i.pinimg.com/originals/b5/36/aa/b536aa4c146725fc67d36e3fcd2d10e5.jpg',
];

export const getWellImage = getRandomImage(well);

export const getImage = (choice) => {
  switch (choice) {
    case 'rock': case 'ro': return getRandomImage(rock);
    case 'paper': case 'pa': return getRandomImage(paper);
    case 'scizors': case 'sc': return getRandomImage(scizors);
    case 'lizard': case 'li': return getRandomImage(lizard);
    case 'spock': case 'sp': return getRandomImage(spock);
    case 'thumb': case 'th': return getRandomImage(thumb);
    case 'well': case 'we': return getRandomImage(well);
    default: break;
  }
  return '';
};

import { resource, RESOURCE_TYPE, LOAD_EVENT } from '@eva/eva.js'
import sense_one_bg from '../../img/sense_one_bg.jpg'
import sense_one_shalou from '../../img/sense_one_shalou.png'
import sense_one_line_bg from '../../img/sense_one_line_bg.png'
import sense_one_line from '../../img/sense_one_line.png'
import sense_one_loading from '../../img/sense_one_loading.png'

const images = {
  sense_one_bg,
  sense_one_shalou,
  sense_one_line_bg,
  sense_one_line,
  sense_one_loading
}

const resources = [];
for (let name in images) {
  resources.push({
    name: name,
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url: images[name]
      }
    },
    preload: true
  })
}

export default resources


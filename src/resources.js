import { resource, RESOURCE_TYPE, LOAD_EVENT } from '@eva/eva.js'
import sense_four_bg from './img/sense_four_bg.png'
import sense_one_bg from './img/sense_one_bg.jpg'
import sense_one_shalou from './img/sense_one_shalou.png'
import sense_one_line_bg from './img/sense_one_line_bg.png'
import sense_one_line from './img/sense_one_line.png'

const images = {
  sense_four_bg,
  sense_one_bg,
  sense_one_shalou,
  sense_one_line_bg,
  sense_one_line
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


resource.addResource(resources)

resource.on(LOAD_EVENT.START, (args) => { console.log('START', args) }) // 开始loader
resource.on(LOAD_EVENT.PROGRESS, (args) => { console.log('PROGRESS', args)}) // 加载进度更新
resource.on(LOAD_EVENT.LOADED, (args) => { console.log('LOADED', args)}) // 某文件加载成功
resource.on(LOAD_EVENT.COMPLETE, (args) => {console.log('COMPLETE', args) }) // 加载完成
resource.on(LOAD_EVENT.ERROR, (args) => {console.log('ERROR', args) }) // 某文件加载失败
resource.preload()
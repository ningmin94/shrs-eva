// import { Game, GameObject } from '@eva/eva.js'
// import { RendererSystem } from '@eva/plugin-renderer'
// import { Img, ImgSystem } from '@eva/plugin-renderer-img'

// // 创建渲染系统
// const renderSystem = new RendererSystem({
//     canvas: document.querySelector('#canvas'), // 可选，自动生成 canvas 挂在 game.canvas 上
//     width: 750,
//     height: 1000,
//     transparent: false,
//     resolution: window.devicePixelRatio / 2, // 可选, 如果是2倍图设计 可以除以2
//     preventScroll: true, // 阻止页面滚动
//     renderType: 0 // 0:自动判断，1: WebGL，2:Canvas
// })

// // 创建游戏对象
// const game = new Game({
//     frameRate: 60, // 可选，游戏帧率，默认60
//     autoStart: true, // 可选，自动开始
//     systems: [renderSystem]
// })

// game.addSystem(new ImgSystem()) // 给游戏添加渲染图片的能力

// const gameObject = new GameObject('gameObj1', {
//     size: {
//         width: 658,
//         height: 1152
//     }
// })

// gameObject.addComponent(
//     new Img({
//         resource: 'sense_four_bg'
//     })
// )

// game.scene.addChild(gameObject) // 把游戏对象放入场景，这样画布上就可以显示这张图片了
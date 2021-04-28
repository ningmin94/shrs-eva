import { Game, Scene, GameObject, resource } from '@eva/eva.js';
import { Img, ImgSystem } from '@eva/plugin-renderer-img';
import { RendererSystem } from '@eva/plugin-renderer';
import { RenderSystem } from '@eva/plugin-renderer-render';
import { GraphicsSystem } from '@eva/plugin-renderer-graphics';
import { Transition, TransitionSystem } from '@eva/plugin-transition';
import { Mask, MaskSystem, MASK_TYPE } from '@eva/plugin-renderer-mask';
import { StatsSystem } from '@eva/plugin-stats';


import resources from './resources';

resource.addResource(resources);
resource.preload();

const game = new Game({
    frameRate: 60,
    autoStart: true,
    systems: [
        new RendererSystem({
            canvas: document.querySelector('#canvas'),
            width: 750,
            height: 1448,
            transparent: false,
            resolution: window.devicePixelRatio / 2,
            preventScroll: true,
            renderType: 0
        }),
        new ImgSystem(),
        new RenderSystem(),
        new GraphicsSystem(),
        new TransitionSystem(),
        new MaskSystem()
    ]
});

game.addSystem(new StatsSystem({
    show: true,
    style: {
      x: 0,
      y: 0,
      width: 20,
      height: 12
    }
  }))

game.scene.transform.size.width = 750;
game.scene.transform.size.height = 1448;

const scene = new Scene('loading');
scene.transform.size.width = 750;
scene.transform.size.height = 1448;

const go_one_bg = initBackground();
const go_one_funnel = initFunnel();
const goes = initProgress();

scene.addChild(go_one_bg);
goes.forEach(go => { scene.addChild(go) });
scene.addChild(go_one_funnel);

game.scene.addChild(scene);

//创建进度条
function initProgress() {
    const go = new GameObject('sense_one_line_bg', {
        size: {
            width: 526,
            height: 72
        },
        position: {
            x: 100,
            y: 590
        }
    });

    go.addComponent(
        new Img({
            resource: 'sense_one_line_bg'
        })
    );

    const go2 = new GameObject('sense_one_line', {
        size: {
            width: 498,
            height: 48
        },
        position: {
            x: 115,
            y: 602
        }
    });

    go2.addComponent(
        new Img({
            resource: 'sense_one_line'
        })
    );

    const mask = go2.addComponent(
        new Mask({
            type: MASK_TYPE.RoundedRect,
            style: {
                width: 100,
                height: 100,
                x: 0,
                y: 0,
                radius: 100
            }
        })
    );

    setInterval(() => {
        if (mask.style.width > 800) {
            return;
        }
        mask.style.width += 10;
    }, 100);


    return [go, go2];
}

//创建沙漏
function initFunnel() {
    const go = new GameObject('go_one_funnel', {
        size: {
            width: 91,
            height: 130
        },
        origin: {
            x: .5,
            y: .5
        },
        position: {
            x: 590,
            y: 623
        },
        rotation: 0
    });

    go.addComponent(
        new Img({
            resource: 'sense_one_shalou'
        })
    );

    //添加旋转
    let transition = go.addComponent(new Transition({
        group: {
            rotation: [
                {
                    name: 'rotation',
                    component: go.transform,
                    values: [
                        {
                            time: 0,
                            tween: 'linear',
                            value: 0
                        },
                        {
                            time: 2000,
                            tween: 'linear',
                            value: Math.PI * 2
                        }
                    ]
                }
            ]
        }
    }));
    transition.play('rotation', Infinity);
    transition.on('finish', animationName => {
        console.log('FINSIH')
    })
    return go;
}

//创建背景
function initBackground() {
    const go = new GameObject('go_one_bg', {
        size: {
            width: 750,
            height: 1448
        }
    });

    go.addComponent(
        new Img({
            resource: 'sense_one_bg'
        })
    );

    return go;
}

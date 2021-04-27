import { Game, Scene, GameObject, resource } from '@eva/eva.js';
import { Img, ImgSystem } from '@eva/plugin-renderer-img';
import { RendererSystem } from '@eva/plugin-renderer';
import { RenderSystem } from '@eva/plugin-renderer-render';
import { Graphics, GraphicsSystem } from '@eva/plugin-renderer-graphics';
import { Transition, TransitionSystem } from '@eva/plugin-transition';
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
        new TransitionSystem()
    ]
});

game.scene.transform.size.width = 750;
game.scene.transform.size.height = 1448;

const scene = new Scene('loading');
scene.transform.size.width = 750;
scene.transform.size.height = 1448;

const go_one_bg = initBackground();
const go_one_funnel = initFunnel();
const go_one_progress = initProgress();

scene.addChild(go_one_bg);
scene.addChild(go_one_funnel);

game.scene.addChild(scene);

//创建进度条
function initProgress() {
    const go_one_progress = new GameObject('go_one_progress', {
        size: {
            width: 600,
            height: 100
        },
        position: {
            x: 560,
            y: 600
        }
    });

    let graphics = go_one_progress.addComponent(new Graphics());
    graphics.beginFill();

    return go_one_progress;
}

//创建沙漏
function initFunnel() {
    const go_one_funnel = new GameObject('go_one_funnel', {
        size: {
            width: 91,
            height: 130
        },
        origin: {
            x: .5,
            y: .5
        },
        position: {
            x: 560,
            y: 600
        },
        rotation: 0
    });

    go_one_funnel.addComponent(
        new Img({
            resource: 'sense_one_shalou'
        })
    );

    //添加旋转
    let transition = go_one_funnel.addComponent(new Transition({
        group: {
            rotation: [
                {
                    name: 'rotation',
                    component: go_one_funnel.transform,
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
    return go_one_funnel;
}

//创建背景
function initBackground() {
    const go_one_bg = new GameObject('go_one_bg', {
        size: {
            width: 750,
            height: 1448
        }
    });

    go_one_bg.addComponent(
        new Img({
            resource: 'sense_one_bg'
        })
    );

    return go_one_bg;
}

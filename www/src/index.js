'use strict'

import './index.scss';
import './scss/input.scss';
import './scss/footer.scss';
import { init_func_rs, generate_mandelbrot_set_rs } from "../../pkg/mandelbrot";
import { generateMandelbrotSet } from "./js/mandelbrot";
import * as domops from "./js/domops";
import * as consts from "./js/consts";

console.log("start loading wasm");
const mandelbrotRsMod = import("../../pkg").catch(console.error);
const mandelbrotJsMod = import("./js/mandelbrot").catch(console.error);


// 配列を描画する関数
function draw(ctx, canvas_w, canvas_h, data) {
    let img = new ImageData(new Uint8ClampedArray(data), canvas_w, canvas_h);
    ctx.putImageData(img, 0, 0);
}

let sumGenerateTimeRs = 0.0;
let sumGenerateTimeJs = 0.0;

// wasmの読み込みは非同期で行われるので、Promiseで読み込み完了を待って、button要素のonClickに登録。
Promise.all([mandelbrotRsMod, mandelbrotJsMod]).then(async function () {
    console.log("finished loading wasm");
    init_func_rs();

    // イベント追加
    add_event_render();
    add_event_random_render();

    // クリック実行
    click_render_button();
});

// Renderのイベント追加
const add_event_render = () => {
    const renderBtn = document.getElementById(consts.ID_RENDER);
    renderBtn.addEventListener("click", click_render_button);
}

// Random Renderのイベント追加
const add_event_random_render = () => {
    const btn = document.getElementById(consts.ID_RANDOM_RENDER);
    btn.addEventListener("click", () => {
        domops.random_set();
        click_render_button();
    });
}

// Renderボタンクリックのイベント
export const click_render_button = () => {
    // ユーザ入力を取得
    const mandelbrot_type = domops.get_mandelbrot_type_value();
    const c_real = domops.get_mandelbrot_c_real_value();
    const c_image = domops.get_mandelbrot_c_image_value();
    const n_limit = domops.get_mandelbrot_n_limit_value();
    const lim_sup = domops.get_mandelbrot_lim_sup_value();
    const zoom = domops.get_mandelbrot_zoom_value();
    // wasmでマンデルブロ集合作成、wasmで描画
    // draw_mandelbrot_set_rs();

    // wasmでマンデルブロ集合作成、jsで描画
    let hybridResult = null;
    {
        let canvas = document.getElementById(consts.ID_HYBRID_CANVAS);
        let context = canvas.getContext("2d");
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        const generateStartTime = Date.now();
        hybridResult = generate_mandelbrot_set_rs(canvasWidth, canvasHeight, zoom, c_real, c_image, n_limit, lim_sup, mandelbrot_type);
        const generateEndTime = Date.now();
        const generateTime = generateEndTime - generateStartTime;
        sumGenerateTimeRs += generateTime;

        draw(context, canvasWidth, canvasHeight, hybridResult);

        domops.write_generate_time_rs(generateTime, sumGenerateTimeRs);
    }
    // jsでマンデルブロ集合作成、jsで描画
    let jsResult = null;
    {
        let canvas = document.getElementById(consts.ID_JS_CANVAS);
        let context = canvas.getContext("2d");
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        const generateStartTime = Date.now();
        jsResult = generateMandelbrotSet(canvasWidth, canvasHeight, zoom, c_real, c_image, n_limit, lim_sup, mandelbrot_type);
        const generateEndTime = Date.now();
        const generateTime = generateEndTime - generateStartTime;
        sumGenerateTimeJs += generateTime;

        draw(context, canvasWidth, canvasHeight, jsResult);

        domops.write_generate_time_js(generateTime, sumGenerateTimeJs);
    }
    {
        // 答えが等しいことを確認する
        // let isSame = true;
        // for (let i = 0; i < hybridResult.length; i++) {
        //     if (hybridResult[i] !== jsResult[i]) {
        //         console.log(i, hybridResult[i], jsResult[i]);
        //         isSame = false;
        //         break;
        //     }
        // }
        // console.log(`\n(hybridResult === jsResult):${isSame}`);
    }
}

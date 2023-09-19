'use strict'

import * as consts from "./consts";

// マンデルブロ集合のc_realを取得する
export const get_mandelbrot_c_real_value = () => {
    const input = document.getElementById(consts.ID_C_REAL);
    const value = Number(input.value);
    if (value === NaN) return 0;
    return value;
}

// マンデルブロ集合のc_imageを取得する
export const get_mandelbrot_c_image_value = () => {
    const input = document.getElementById(consts.ID_C_IMAGE);
    const value = Number(input.value);
    if (value === NaN) return 0;
    return value;
}

// マンデルブロ集合のn_limitを取得する
export const get_mandelbrot_n_limit_value = () => {
    const input = document.getElementById(consts.ID_N_LIMIT);
    const value = Number(input.value);
    if (value === NaN) return 1;
    return value;
}

// マンデルブロ集合の発散条件の値を取得する
export const get_mandelbrot_lim_sup_value = () => {
    const input = document.getElementById(consts.ID_LIM_SUP);
    const value = Number(input.value);
    if (value === NaN) return 0;
    return value;
}

// マンデルブロ集合のzoomの値を取得する
export const get_mandelbrot_zoom_value = () => {
    const input = document.getElementById(consts.ID_ZOOM);
    const value = Number(input.value);
    if (value === NaN) return 0;
    return value;
}

// マンデルブロ集合の種類の値を取得する
export const get_mandelbrot_type_value = () => {
    const selectElem = document.getElementById(consts.ID_MANDELBROT_TYPE);
    const selectedValue = selectElem.value;
    return selectedValue;
}

// wasmの生成時間を表示する
export const write_generate_time_rs = (generateTime, sumGenerateTime) => {
    {
        const span = document.getElementById(consts.ID_GENERATE_TIME_RS);
        span.textContent = generateTime;
    }
    {
        const span = document.getElementById(consts.ID_SUM_GENERATE_TIME_RS);
        span.textContent = sumGenerateTime;
    }
}

// jsの生成時間を表示する
export const write_generate_time_js = (generateTime, sumGenerateTime) => {
    {
        const span = document.getElementById(consts.ID_GENERATE_TIME_JS);
        span.textContent = generateTime;
    }
    {
        const span = document.getElementById(consts.ID_SUM_GENERATE_TIME_JS);
        span.textContent = sumGenerateTime;
    }
}

// マンデルブロ集合のタイプをセットする
const set_mandelbrot_type_value = (value) => {
    const elem = document.getElementById(consts.ID_MANDELBROT_TYPE);
    elem.value = value;
}

// マンデルブロ集合のRe(C)をセットする
const set_mandelbrot_c_real_value = (value) => {
    const elem = document.getElementById(consts.ID_C_REAL);
    elem.value = value;
}

// マンデルブロ集合のIm(C)をセットする
const set_mandelbrot_c_image_value = (value) => {
    const elem = document.getElementById(consts.ID_C_IMAGE);
    elem.value = value;
}

// マンデルブロ集合のzoomをセットする
const set_mandelbrot_zoom_value = (value) => {
    const elem = document.getElementById(consts.ID_ZOOM);
    elem.value = value;
}

// マンデルブロ集合のn_limitをセットする
const set_mandelbrot_n_limit_value = (value) => {
    const elem = document.getElementById(consts.ID_N_LIMIT);
    elem.value = value;
}

// マンデルブロ集合のlim_supをセットする
const set_mandelbrot_lim_sup_value = (value) => {
    const elem = document.getElementById(consts.ID_LIM_SUP);
    elem.value = value;
}

// 設定値をランダムセットする
const RANDOM_SET = [
    {
        "type": "mandelbrot_type1",
        "c_real": "0.1120068359375",
        "c_image": "0.638021240234375",
        "zoom": "0.000322265625",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "-0.746684956561724",
        "c_image": "-0.148407254991549",
        "zoom": "0.000304831581",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "0.235162322816695",
        "c_image": "-0.522569730223854",
        "zoom": "0.000274348423",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "0.431444931030272",
        "c_image": "-0.210285568237303",
        "zoom": "0.00000381469726",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "-0.0123701408058467",
        "c_image": "-0.654285235802281",
        "zoom": "0.00000376335285",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "-0.928145631790161",
        "c_image": "-0.241136137008666",
        "zoom": "0.000000514984131",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "0.399156056834167",
        "c_image": "-0.130409942025553",
        "zoom": "0.000000338701755",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "0.373888457566499",
        "c_image": "-0.596176167950033",
        "zoom": "0.0000000074505806",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "-1.35814260283019",
        "c_image": "-0.0390835766633972",
        "zoom": "0.000000000139698386",
        "n_limit": "500",
        "lim_sup": "2",
    },
    // wikipedia
    {
        "type": "mandelbrot_type1",
        "c_real": "-0.87591",
        "c_image": "0.20464",
        "zoom": "0.1",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "-0.759856",
        "c_image": "0.125547",
        "zoom": "0.1",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "-0.743030",
        "c_image": "0.126433",
        "zoom": "0.00005",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "-0.7435669",
        "c_image": "0.1314023",
        "zoom": "0.00123",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "-0.743645",
        "c_image": "0.13182733",
        "zoom": "0.000025",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "-0.7436447860",
        "c_image": "0.1318252536",
        "zoom": "0.0000025",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "-0.743645",
        "c_image": "0.1318252536",
        "zoom": "0.00000025",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "-1.5",
        "c_image": "0",
        "zoom": "0.001",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type2",
        "c_real": "0.39",
        "c_image": "0.0005",
        "zoom": "0.00005",
        "n_limit": "500",
        "lim_sup": "2",
    },
];

let pre_index = -1;
export const random_set = () => {
    const get_random_index = (length) => {
        // Math.random()は0以上1未満のランダムな浮動小数点数を返す
        // かなり適当な実装
        const r = Math.floor(Math.random() * 1000);
        return r % length;
    }

    // ランダムにインデックスを得る
    let rand_index = 0;
    while (1) {
        rand_index = get_random_index(RANDOM_SET.length);
        if (rand_index !== pre_index) {
            pre_index = rand_index;
            break;
        }
    }

    // デバッグ用
    // rand_index = RANDOM_SET.length - 1;

    // 設定値をセットする
    set_mandelbrot_type_value(RANDOM_SET[rand_index].type);
    set_mandelbrot_c_real_value(RANDOM_SET[rand_index].c_real);
    set_mandelbrot_c_image_value(RANDOM_SET[rand_index].c_image);
    set_mandelbrot_zoom_value(RANDOM_SET[rand_index].zoom);
    set_mandelbrot_n_limit_value(RANDOM_SET[rand_index].n_limit);
    set_mandelbrot_lim_sup_value(RANDOM_SET[rand_index].lim_sup);
}
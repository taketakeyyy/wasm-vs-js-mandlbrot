'use strict'

export const logic = {
    getNDiverged: function (c_real, c_image, n_limit, lim_sup) {
        let xn = 0.0;
        let yn = 0.0;
        for (let i = 1; i < n_limit; i++) {
            let x_next = xn * xn - yn * yn + c_real;
            let y_next = 2.0 * xn * yn + c_image;
            xn = x_next;
            yn = y_next;
            if (xn * xn + yn * yn > lim_sup * lim_sup) {
                return i;
            }
        }
        return n_limit;
    },
    generateMandelbrotSet: function (
        canvas_w,
        canvas_h,
        zoom,
        c_real,
        c_image,
        n_limit,
        lim_sup,
    ) {
        let y_min = -zoom;
        let y_max = zoom;
        let x_min = -zoom;
        let x_max = zoom;
        let data = [];
        for (let i = 0; i < canvas_h; i++) {
            let y = y_min + (y_max - y_min) * i / canvas_h;
            for (let j = 0; j < canvas_w; j++) {
                let x = x_min + (x_max - x_min) * j / canvas_w;
                let iter_index = this.getNDiverged(x + c_real, y + c_image, n_limit, lim_sup);
                let r_color = 255 - iter_index % 255;
                let g_color = iter_index % 16 * 17;
                let b_color = iter_index % 8 * 32; //8色に塗り分ける
                data.push(r_color); //R
                data.push(g_color); //G
                data.push(b_color); //B
                data.push(255);//A
            }
        }
        return data;
    }
}

// Z = Z^2 + C
function getNDiverged1(c_real, c_image, n_limit, lim_sup) {
    let xn = 0.0;
    let yn = 0.0;
    for (let i = 1; i < n_limit; i++) {
        let x_next = xn * xn - yn * yn + c_real;
        let y_next = 2.0 * xn * yn + c_image;
        xn = x_next;
        yn = y_next;
        if (xn * xn + yn * yn > lim_sup * lim_sup) {
            return i;
        }
    }
    return n_limit;
}

// Z = Z^3 + C
function getNDiverged2(c_real, c_image, n_limit, lim_sup) {
    let xn = 0.0;
    let yn = 0.0;
    for (let i = 1; i < n_limit; i++) {
        let x_next = xn * (xn * xn - 3.0 * yn * yn) + c_real;
        let y_next = yn * (3.0 * xn * xn - yn * yn) + c_image;
        xn = x_next;
        yn = y_next;
        if (xn * xn + yn * yn > lim_sup * lim_sup) {
            return i;
        }
    }
    return n_limit;
}

// Z = Z^4 + C
function getNDiverged3(c_real, c_image, n_limit, lim_sup) {
    let xn = 0.0;
    let yn = 0.0;
    for (let i = 1; i < n_limit; i++) {
        let x_next = xn * xn * xn * xn - 6.0 * xn * xn * yn * yn + yn * yn * yn * yn + c_real;
        let y_next = 4.0 * xn * yn * (xn * xn - yn * yn) + c_image;
        xn = x_next;
        yn = y_next;
        if (xn * xn + yn * yn > lim_sup * lim_sup) {
            return i;
        }
    }
    return n_limit;
}

// Z = Z^5 + C
function getNDiverged4(c_real, c_image, n_limit, lim_sup) {
    let xn = 0.0;
    let yn = 0.0;
    for (let i = 1; i < n_limit; i++) {
        let x_next = xn * (xn * xn * xn * xn - 10.0 * xn * xn * yn * yn + 5.0 * yn * yn * yn * yn) + c_real;
        let y_next = yn * (5.0 * xn * xn * xn * xn - 10.0 * xn * xn * yn * yn + yn * yn * yn * yn) + c_image;
        xn = x_next;
        yn = y_next;
        if (xn * xn + yn * yn > lim_sup * lim_sup) {
            return i;
        }
    }
    return n_limit;
}

// Z = (Z')^2 + C
function getNDiverged5(c_real, c_image, n_limit, lim_sup) {
    let xn = 0.0;
    let yn = 0.0;
    for (let i = 1; i < n_limit; i++) {
        let x_next = xn * xn - yn * yn + c_real;
        let y_next = -2.0 * xn * yn + c_image;
        xn = x_next;
        yn = y_next;
        if (xn * xn + yn * yn > lim_sup * lim_sup) {
            return i;
        }
    }
    return n_limit;
}

// Z = (Z')^3 + C
function getNDiverged6(c_real, c_image, n_limit, lim_sup) {
    let xn = 0.0;
    let yn = 0.0;
    for (let i = 1; i < n_limit; i++) {
        let x_next = xn * (xn * xn - 3.0 * yn * yn) + c_real;
        let y_next = yn * (yn * yn - 3.0 * xn * xn) + c_image;
        xn = x_next;
        yn = y_next;
        if (xn * xn + yn * yn > lim_sup * lim_sup) {
            return i;
        }
    }
    return n_limit;
}

// Z = (Z')^4 + C
function getNDiverged7(c_real, c_image, n_limit, lim_sup) {
    let xn = 0.0;
    let yn = 0.0;
    for (let i = 1; i < n_limit; i++) {
        let x_next = xn * xn * xn * xn - 6.0 * xn * xn * yn * yn + yn * yn * yn * yn + c_real;
        let y_next = 4.0 * xn * yn * (yn * yn - xn * xn) + c_image;
        xn = x_next;
        yn = y_next;
        if (xn * xn + yn * yn > lim_sup * lim_sup) {
            return i;
        }
    }
    return n_limit;
}

// Z = (Z')^5 + C
function getNDiverged8(c_real, c_image, n_limit, lim_sup) {
    let xn = 0.0;
    let yn = 0.0;
    for (let i = 1; i < n_limit; i++) {
        let x_next = xn * (xn * xn * xn * xn - 10.0 * xn * xn * yn * yn + 5.0 * yn * yn * yn * yn) + c_real;
        let y_next = -yn * (5.0 * xn * xn * xn * xn - 10.0 * xn * xn * yn * yn + yn * yn * yn * yn) + c_image;
        xn = x_next;
        yn = y_next;
        if (xn * xn + yn * yn > lim_sup * lim_sup) {
            return i;
        }
    }
    return n_limit;
}

// Z = Z^10 + C
function getNDiverged9(c_real, c_image, n_limit, lim_sup) {
    let xn = 0.0;
    let yn = 0.0;
    for (let i = 1; i < n_limit; i++) {
        let x_next = xn * xn * xn * xn * xn * xn * xn * xn * xn * xn - 45.0 * xn * xn * xn * xn * xn * xn * xn * xn * yn * yn + 210.0 * xn * xn * xn * xn * xn * xn * yn * yn * yn * yn - 210.0 * xn * xn * xn * xn * yn * yn * yn * yn * yn * yn + 45.0 * xn * xn * yn * yn * yn * yn * yn * yn * yn * yn - yn * yn * yn * yn * yn * yn * yn * yn * yn * yn + c_real;
        let y_next = 10.0 * xn * xn * xn * xn * xn * xn * xn * xn * xn * yn - 120.0 * xn * xn * xn * xn * xn * xn * xn * yn * yn * yn + 252.0 * xn * xn * xn * xn * xn * yn * yn * yn * yn * yn - 120.0 * xn * xn * xn * yn * yn * yn * yn * yn * yn * yn + 10.0 * xn * yn * yn * yn * yn * yn * yn * yn * yn * yn + c_image;
        xn = x_next;
        yn = y_next;
        if (xn * xn + yn * yn > lim_sup * lim_sup) {
            return i;
        }
    }
    return n_limit;
}

// Z = (Z')^10 + C
function getNDiverged10(c_real, c_image, n_limit, lim_sup) {
    let xn = 0.0;
    let yn = 0.0;
    for (let i = 1; i < n_limit; i++) {
        let x_next = xn * xn * xn * xn * xn * xn * xn * xn * xn * xn - 45.0 * xn * xn * xn * xn * xn * xn * xn * xn * yn * yn + 210.0 * xn * xn * xn * xn * xn * xn * yn * yn * yn * yn - 210.0 * xn * xn * xn * xn * yn * yn * yn * yn * yn * yn + 45.0 * xn * xn * yn * yn * yn * yn * yn * yn * yn * yn - yn * yn * yn * yn * yn * yn * yn * yn * yn * yn + c_real;
        let y_next = -10.0 * xn * xn * xn * xn * xn * xn * xn * xn * xn * yn + 120.0 * xn * xn * xn * xn * xn * xn * xn * yn * yn * yn - 252.0 * xn * xn * xn * xn * xn * yn * yn * yn * yn * yn + 120.0 * xn * xn * xn * yn * yn * yn * yn * yn * yn * yn - 10.0 * xn * yn * yn * yn * yn * yn * yn * yn * yn * yn + c_image;
        xn = x_next;
        yn = y_next;
        if (xn * xn + yn * yn > lim_sup * lim_sup) {
            return i;
        }
    }
    return n_limit;
}

const MANDELBROT_FUNC = {
    "mandelbrot_type1": getNDiverged1,
    "mandelbrot_type2": getNDiverged2,
    "mandelbrot_type3": getNDiverged3,
    "mandelbrot_type4": getNDiverged4,
    "mandelbrot_type5": getNDiverged5,
    "mandelbrot_type6": getNDiverged6,
    "mandelbrot_type7": getNDiverged7,
    "mandelbrot_type8": getNDiverged8,
    "mandelbrot_type9": getNDiverged9,
    "mandelbrot_type10": getNDiverged10,
};

export function generateMandelbrotSet(
    canvas_w,
    canvas_h,
    zoom,
    c_real,
    c_image,
    n_limit,
    lim_sup,
    mandelbrot_type,
) {
    let y_min = -zoom;
    let y_max = zoom;
    let x_min = -zoom;
    let x_max = zoom;
    let data = [];
    for (let i = 0; i < canvas_h; i++) {
        let y = y_min + (y_max - y_min) * i / canvas_h;
        for (let j = 0; j < canvas_w; j++) {
            let x = x_min + (x_max - x_min) * j / canvas_w;
            let iter_index = MANDELBROT_FUNC[mandelbrot_type](x + c_real, y + c_image, n_limit, lim_sup);
            let r_color = 255 - iter_index % 255;
            let g_color = iter_index % 16 * 17;
            let b_color = iter_index % 8 * 32; //8色に塗り分ける
            data.push(r_color); //R
            data.push(g_color); //G
            data.push(b_color); //B
            data.push(255);//A
        }
    }
    return data;
}

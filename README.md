
# wasm-vs-js-mandelbrot

wasm(Rust)とjs(JavaScript)で書かれたマンデルブロ集合の速度を比較する。

# フォルダ構成

* src
  - Rustファイル
* www
  - 動作確認用Webページ

# ビルドしてwasmを生成する

```sh
# develop版
> cargo build
# release版
> cargo build --release
```

# テストする

```
> cargo test
```

その他🤷‍♂️(See more: https://rustwasm.github.io/docs/wasm-pack/commands/test.html)

```
> wasm-pack test --headless --firefox
```


# License

* MIT license ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

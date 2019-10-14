import * as React from "react";
import ReactDOM from "react-dom";
import { A } from './component/atom/A/A'

const App = () => {
  return <div>
    <h1>八潮市災害サイトマップ / Yashio hazard site map</h1>

    <h2>八潮市 避難場所一覧</h2>
    <p>
      <A href="https://goo.gl/maps/k3LDkZKDqCrLxLSo9" blank>Google Map</A>
    </p>
    <p>
      <A href="https://www.city.yashio.lg.jp/kurashi/bohan_bosai/bosai/hinan/hinanjo.html" blank>八潮市 公式一覧</A>
    </p>
    <h2>八潮市 お知らせ</h2>
    <p>
      <A href="https://www.city.yashio.lg.jp/kurashi/bohan_bosai/bosai/oshirase/index.html" blank>八潮市 防災 お知らせ</A>
    </p>
    <p>
      <A href="https://www.city.yashio.lg.jp/allNewsList.html" blank>八潮市 全体 お知らせ</A>
    </p>

    <h2>八潮市 ハザードマップ</h2>
    <p>
      <A href="https://www.city.yashio.lg.jp/kurashi/bohan_bosai/bosai/hazardmap/index.html" blank>ハザードマップ 洪水・地震・内水</A>
    </p>
    <p>
      <A href="https://github.com/wilf312/yashio.drill.dev/raw/master/public/mini.pdf" blank>ハザードマップ 洪水 圧縮版 4.2MB</A>
    </p>
    <p>
      <A href="https://github.com/wilf312/yashio.drill.dev/raw/master/public/floodmap_full.pdf" blank>ハザードマップ 洪水 フル版 17.4MB</A>
    </p>
    <p>
      <A href="https://disaportal.gsi.go.jp/maps/index.html?ll=35.80786,139.844992&z=16&base=pale&ls=seamless%7Ctsunamishinsui_raster%2C0.8%7Cdisaster5&disp=010&vs=c1j0l0u0" blank>ハザードマップ 全国版</A>
    </p>



    <h2>水害リンク</h2>
    <p>
      <A href="https://typhoon.yahoo.co.jp/weather/river/" blank>河川水位情報</A>
    </p>
    <p>
      <A href="https://weather.yahoo.co.jp/weather/jp/11/4310/11234.html" blank>八潮市 天気予報</A>
    </p>
    <p>
      <A href="https://zutool.jp/" blank>頭痛ーる：気圧予報で体調管理　全国700万人の気象病対策アプリ</A>
    </p>
    <p>
      <A href="https://www.windy.com/35.819/139.839?35.310,139.839,8,m:eEQaj2e" blank>台風可視化 Windy: Wind map &amp; weather forecast</A>
    </p>

    <h2>交通網</h2>
    <p>
      <A href="https://traininfo.jreast.co.jp/train_info/kanto.aspx" blank>JR運行状況</A>
    </p>
    <p>
      <A href="https://ihighway.jp/pcsite/map/?area=area04" blank>高速道路 運行状況</A>
    </p>
    <p>
      <A href="https://www.tokyo-airport-bldg.co.jp/flight/" blank>羽田空港 国内線フライト情報</A>
    </p>
    <p>
      <A href="http://www.haneda-airport.jp/inter/flight/company_list.html" blank>羽田空港 就航航空会社一覧</A>
    </p>
    <p>
      <A href="http://www.haneda-airport.jp/inter/flight/showFlightInfoSearch?langId=ja" blank>羽田空港 国際線フライト検索</A>
    </p>




    <h2>その他</h2>
    <p>
      <A href="https://www.city.yashio.lg.jp/kurashi/bohan_bosai/bosai/hissaisya/mimaikin.html" blank>災害見舞金の案内</A>
    </p>
    <p>
      <A href="https://www.youtube.com/watch?v=dN07VPzK3eQ" blank>募金のやり方 Youtube</A>
    </p>

  </div>;
};

ReactDOM.render(<App />, document.getElementById("app"));

Vue.filter("number_format", function (val) {
  return val.toLocaleString();
});
let app = new Vue({
  el: "#app",
  data: {
    //消費税率
    taxRate: 0.1,
    //オプション料金(税抜き)
    optPrice: 0,
    //合計金額(税抜き)
    totalPrice: 0,
    //ページ数
    opt1_use: false,
    opt1_num: 0,
    opt1_price: 10000,
    //SEO対策
    opt2_use: false,
    opt2_price: 10000,
    //レスポンシブ
    opt3_use: false,
    opt3_price: 20000,
    //ECサイト作成
    opt4_use: false,
    opt4_price: 50000,
    //ページ更新依頼
    opt5_use: false,
    opt5_price: 18900,
  },
  methods: {
    //税抜きを税込に変換するメソッド
    incTax: function (untaxed) {
      return Math.floor(untaxed * (1 + this.taxRate));
    },
  },
  computed: {
    //SEO対策の税込金額
    taxedOpt1: function () {
      return this.incTax(this.opt1_price);
    },
    //レスポンシブの税込金額
    taxedOpt2: function () {
      return this.incTax(this.opt2_price);
    },
    //ECサイトの税込金額
    taxedOpt3: function () {
      return this.incTax(this.opt3_price);
    },
    //ページ更新依頼の税込金額
    taxedOpt4: function () {
      return this.incTax(this.opt4_price);
    },
    //ページ数の税込金額
    taxedOpt5: function () {
      return this.incTax(this.opt5_price);
    },
    //オプション料金(税込)を返すプロパティ
    taxedOptPrice: function () {
      let optPrice = 0;
      if (this.opt1_num === "") {
        this.opt1_num = 0;
      }
      optPrice += this.opt1_num * this.opt1_price;
      if (this.opt2_use) {
        optPrice += this.opt2_price;
      }
      if (this.opt3_use) {
        optPrice += this.opt3_price;
      }
      if (this.opt4_use) {
        optPrice += this.opt4_price;
      }
      if (this.opt5_use) {
        optPrice += this.opt5_price;
      }
      return this.incTax(optPrice);

    },//合計
    taxedTotalPrice: function () {
      return this.taxedOptPrice;
    }
  },
});

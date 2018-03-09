//home.js
Page({
  data: {
    screenHeight:375,
    dataSet:{productList:[]}
  },
  
  onLoad: function () {
    this.queryDataSet();
  },

  queryDataSet: function(){
    let values = [
      {productName:"【包邮】贵州特产-浓香山猪秘制肭肉 1Kg（1000g）精廋肉，纯天然有机食品",
       productId:"1002000000440",
       imgUrl:"http://pic11.secooimg.com/product/240/240/55/48/7056246dcd764583b35bbe75ce23a9a4.jpg",
       price:"￥3,350",
       rawPrice:"￥3，850"},
      {
        productName: "【包邮】贵州特产-浓香山猪秘制肭肉 1Kg（1000g）排骨，纯天然有机食品",
        productId: "1002000000441",
        imgUrl: "http://pic11.secooimg.com/product/240/240/99/57/c942a660d7d8456c9b1a8443cb21f274.jpg",
        price: "￥5,350",
        rawPrice: "￥5，850"
      },
      {
        productName: "【包邮】四川特产-浓香山猪秘制肭肉 5kg装（支持预定））猪后蹄，纯天然有机食品",
        productId: "1002000000442",
        imgUrl: "http://pic11.secooimg.com/product/240/240/10/51/e3d7b53bfd0d45e29e9fb709bafd8ca3.JPG",
        price: "￥3,050",
        rawPrice: "￥3，450"
      },
      {
        productName: "【包邮】贵州特产-浓香山猪秘制肭肉 1Kg（1000g）五花肉，纯天然有机食品",
        productId: "1002000000443",
        imgUrl: "http://pic11.secooimg.com/product/240/240/10/50/f23cae8fafa949dca6638a1381657810.JPG",
        price: "￥5,100",
        rawPrice: "￥5，650"
      },
      {
        productName: "四川特产-浓香山猪秘制肭肉 8kg装（支持预定）猪前腿，纯天然有机食品",
        productId: "1002000000444",
        imgUrl: "http://pic11.secooimg.com/product/240/240/50/99/2cdf04ef417948dd9d65967a1e5ac0bc.jpg",
        price: "￥2,150",
        rawPrice: "￥2，550"
      },
      {
        productName: "【包邮】贵州特产-浓香山猪秘制肭肉 5kg装（支持预定）猪前腿，纯天然有机食品",
        productId: "1002000000445",
        imgUrl: "http://pic11.secooimg.com/product/240/240/56/99/8c25d53ac40541cc905089f8cd77325c.JPG",
        price: "￥1,300",
        rawPrice: "￥1，400"
      },
      {
        productName: "【包邮】贵州特产-浓香山猪秘制肭肉 10kg装（支持预定）精廋肉，纯天然有机食品",
        productId: "1002000000446",
        imgUrl: "http://pic11.secooimg.com/product/240/240/10/97/da32c129866541dfbb2fb59864ce2a1e.jpg",
        price: "￥2,000",
        rawPrice: "￥2，450"
      },
      {
        productName: "【包邮】贵州特产-浓香山猪秘制肭肉 10kg装（支持预定）纯排骨，纯天然有机食品",
        productId: "1002000000447",
        imgUrl: "http://pic11.secooimg.com/product/240/240/99/57/c93e71fc3f874e26900160b26cd87a5a.jpg",
        price: "￥4,450",
        rawPrice: "￥4，800"
      },
      {
        productName: "【包邮】四川特产-浓香山猪秘制肭肉 20kg装（支持预定）纯排骨，纯天然有机食品",
        productId: "1002000000448",
        imgUrl: "http://pic11.secooimg.com/product/240/240/52/97/4ac20609b63f4649b513d342cf529104.jpg",
        price: "￥9,500",
        rawPrice: "￥10，800"
      },
      {
        productName: "【包邮】四川特产-浓香山猪秘制肭肉 1Kg（1000g）精廋肉，纯天然有机食品",
        productId: "1002000000449",
        imgUrl: "http://pic11.secooimg.com/product/240/240/51/99/3cac0c999419439391f7e075c0dee2d5.jpg",
        price: "￥350",
        rawPrice: "￥450"
      },
      {
        productName: "【包邮】四川特产-爽口生鲜农家土鸡（2.5-2kg/两只）现杀活鸡，纯天然有机食品",
        productId: "1002000000450",
        imgUrl: "http://pic11.secooimg.com/product/240/240/99/52/c4c9746be05448389b271ad8bee1e255.jpg",
        price: "￥750",
        rawPrice: "￥850"
      },
      {
        productName: "【包邮】四川特产-爽口生鲜农家土鸡（1.5-2kg/只）现杀活鸡，纯天然有机食品",
        productId: "1002000000451",
        imgUrl: "http://pic11.secooimg.com/product/240/240/56/56/882d6d0ba0b646c885c063d7662b021c.jpg",
        price: "￥350",
        rawPrice: "￥450"
      }];

    let list = this.data.dataSet.productList;
    values = list.concat(values);
    let dataSet = {productList:values};

    this.setData({
      dataSet: dataSet
    });
  }
})

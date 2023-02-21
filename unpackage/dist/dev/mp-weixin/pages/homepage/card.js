"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  components: {},
  setup() {
    function toPrepayCard() {
      console.log(1111);
    }
    return {
      toPrepayCard
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($setup.toPrepayCard)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/shilili/myGitHub/uniapp-template/pages/homepage/card.vue"]]);
wx.createComponent(Component);

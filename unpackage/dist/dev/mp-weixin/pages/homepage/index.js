"use strict";
const common_vendor = require("../../common/vendor.js");
const card = () => "./card.js";
const _sfc_main = {
  components: {
    card
  },
  setup() {
  },
  methods: {}
};
if (!Array) {
  const _component_card = common_vendor.resolveComponent("card");
  _component_card();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/shilili/myGitHub/uniapp-template/pages/homepage/index.vue"]]);
wx.createPage(MiniProgramPage);

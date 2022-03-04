<template>
  <content-box>
    <content-header />
    <tabs>
      <tab-item title="My debit cards">
        <card :card="card" />
      </tab-item>
      <tab-item title="All company cards">
        <h1>No Content</h1>
      </tab-item>
    </tabs>
  </content-box>
</template>
<script>
import ContentBox from "@/components/Content";
import ContentHeader from "@/components/Content/Header";

import Tabs from "@/components/Ui/Tab";
import TabItem from "@/components/Ui/Tab/Item";

import Card from "@/components/Card";
export default {
  data() {
    return {
      isNumberVisible: false,
    };
  },
  components: {
    ContentBox,
    ContentHeader,
    Tabs,
    TabItem,
    Card,
  },
  computed: {
    card() {
      let card = {
        visible: this.isNumberVisible,
        bank: "/images/base/Logo-light.svg",
        title: "Mark Henry",
        numbers: ["1234", "5678", "9012", "3456"],
        expiry: new Date(),
        cvv: "***",
        type: "/icons/Visa.svg",
      };
      return card;
    },
  },
};
</script>

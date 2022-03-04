<template>
  <content-box>
    <content-header />
    <tabs>
      <tab-item title="My debit cards">Data 1</tab-item>
      <tab-item title="All company cards">Data 2</tab-item>
    </tabs>
  </content-box>
</template>
<script>
import ContentBox from "@/components/Content";
import ContentHeader from "@/components/Content/Header";

import Tabs from "@/components/Ui/Tab";
import TabItem from "@/components/Ui/Tab/Item";
export default {
  components: {
    ContentBox,
    ContentHeader,
    Tabs,
    TabItem,
  },
};
</script>

<template>
  <content-box>
    <content-header />
    <tabs>
      <tab-item title="My debit cards">
        <div class="card__row">
          <div class="card__col--lt">
            <Splide :options="splideOptions" class="mb-32">
              <SplideSlide>
                <card :card="card" />
              </SplideSlide>
              <SplideSlide>
                <card :card="card" />
              </SplideSlide>
            </Splide>
            <card-actions :actions="actions" />
          </div>
          <div class="card__col--rt">
            <accordion title="Recent transactions"> Hello </accordion>
          </div>
        </div>
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
import CardActions from "@/components/Card/Actions";

import Accordion from "@/components/Ui/Accordion";
export default {
  data() {
    return {
      isNumberVisible: false,
      splideOptions: {
        arrows: false,
        type: "slide",
      },
      actions: [
        {
          title: "Freeze <br/> card",
          icon: "Freeze-card",
        },
        {
          title: "Set spend <br/> limit",
          icon: "Set-spend-limit",
        },
        {
          title: "Add to <br/> GPay",
          icon: "GPay",
        },
        {
          title: "Replace <br/> card",
          icon: "Replace-card",
        },
        {
          title: "Cancel <br/> card",
          icon: "Deactivate-card",
        },
      ],
    };
  },
  components: {
    ContentBox,
    ContentHeader,
    Tabs,
    TabItem,
    Card,
    CardActions,
    Accordion,
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

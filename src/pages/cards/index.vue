<template>
  <content-box>
    <content-header />
    <tabs>
      <tab-item title="My debit cards">
        <div class="flex flex-hCenter mb-12">
          <button
            class="btn--link btn--icon text--primary font--bold"
            type="button"
            @click.prevent="showCardNumbers"
          >
            <img src="/icons/eye-open.svg" alt="" />
            <span>Show card number</span>
          </button>
        </div>
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
            <accordion title="Card details" icon="Assets" class="mb-24">
              <h4>Card details</h4>
            </accordion>
            <accordion title="Recent transactions" icon="Transactions">
              <accordion-content>
                <card-list :lists="transactions" />
              </accordion-content>
              <accordion-footer title="View all card transactions" />
            </accordion>
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
import CardList from "@/components/Card/List";

import Accordion from "@/components/Ui/Accordion";
import AccordionContent from "@/components/Ui/Accordion/Content";
import AccordionFooter from "@/components/Ui/Accordion/Footer";
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
      transactions: [
        {
          id: 1,
          icon: "file-storage",
          title: "Hamleys",
          date: "20 May 2020",
          label: {
            text: "Refund on debit card",
          },
          amount: "+ S$ 150",
          type: "debit",
        },
        {
          id: 1,
          icon: "file-storage",
          title: "Hamleys",
          date: "20 May 2020",
          label: {
            text: "Refund on debit card",
          },
          amount: "+ S$ 150",
          type: "credit",
        },
        {
          id: 1,
          icon: "file-storage",
          title: "Hamleys",
          date: "20 May 2020",
          label: {
            text: "Refund on debit card",
          },
          amount: "+ S$ 150",
          type: "credit",
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
    AccordionContent,
    AccordionFooter,
    CardList,
  },
  computed: {
    card() {
      let card = {
        visible: false,
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

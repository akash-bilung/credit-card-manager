<template>
  <content-box>
    <content-header :balance="balance" />
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
            <Splide
              :options="splideOptions"
              class="mb-32"
              @splide:active="setActiveCardIndex"
            >
              <SplideSlide
                v-for="(card, index) in mutatedCardsArr"
                :key="index"
              >
                <card :card="card" />
              </SplideSlide>
            </Splide>
            <card-actions :actions="actions" />
          </div>
          <div class="card__col--rt">
            <accordion title="Card details" icon="Assets" class="mb-24">
              <accordion-content>
                <h4>Card details</h4>
              </accordion-content>
            </accordion>
            <accordion
              title="Recent transactions"
              open="true"
              icon="Transactions"
            >
              <accordion-content>
                <card-list :lists="loadedTransactions" />
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
import { mapGetters } from "vuex";

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
      activeCardIndex: null,
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
    AccordionContent,
    AccordionFooter,
    CardList,
  },
  computed: {
    ...mapGetters("cards", ["loadedCards"]),
    ...mapGetters("transactions", ["loadedTransactions"]),
    mutatedCardsArr() {
      const cards = this.loadedCards;
      cards.forEach((element) => {
        return (element.visible = false);
      });
      return cards;
    },
    balance() {
      let balance = null;
      this.loadedTransactions.forEach((e) => {
        balance += e.amount;
      });
      return balance;
    },
  },
  methods: {
    setActiveCardIndex(splide) {
      this.activeCardIndex = splide.index;
    },
    showCardNumbers() {
      this.isNumberVisible = !this.isNumberVisible;
      this.mutatedCardsArr[this.activeCardIndex].visible = this.isNumberVisible;
    },
  },
  created() {
    this.$store.dispatch("cards/fetchCards");
    this.$store.dispatch("transactions/fetchTransactions");
  },
};
</script>

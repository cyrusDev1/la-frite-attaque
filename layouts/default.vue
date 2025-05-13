<template>
  <NuxtLoadingIndicator color="#eab308" />
  <div class="flex flex-col justify-between">
    <div class="hidden xl:block top-0">
      <Header></Header>
    </div>
    <div class="xl:hidden top-0">
      <MobileHeader></MobileHeader>
    </div>
    <slot></slot>
    <div class="relative bottom-0">
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup>
import Header from "~/components/Header";
import MobileHeader from "~/components/MobileHeader";
import Footer from "~/components/Footer";
</script>

<style scoped></style>

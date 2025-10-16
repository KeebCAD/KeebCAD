<script setup lang="ts">
import { Grid, OrbitControls } from '@tresjs/cientos';
import { TresCanvas } from '@tresjs/core';
</script>

<template>
  <TresCanvas clear-color="#f2dfbc">
    <TresPerspectiveCamera :position="[0, 7, 0]" :look-at="[0, 0, 0]" />
    <OrbitControls make-default />
    <TresMesh :position="[0, 2, 0]">
      <TresTorusGeometry :args="[1, 0.4, 16, 32]" />
      <TresMeshBasicMaterial color="#ff6b35" />
    </TresMesh>
    <TresAmbientLight />
    <Grid
      :args="[10.5, 10.5]"
      cell-color="#bfa780"
      :cell-size="0.5"
      :cell-thickness="0.5"
      section-color="#bfa780"
      :section-size="2"
      :section-thickness="1.3"
      infinite-grid
    />
  </TresCanvas>
</template>

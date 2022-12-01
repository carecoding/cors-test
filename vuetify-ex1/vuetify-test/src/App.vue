<template>
  <v-app>
    <v-main>
      <!-- <HelloWorld /> -->
      <v-container>
        <v-row>
          <v-col>
            <v-btn block color="primary">Hello</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="8">
            <v-btn block color="success">World 1</v-btn>
          </v-col>

          <v-col cols="12" sm="4">
            <v-btn block color="success">World 2</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
</script>

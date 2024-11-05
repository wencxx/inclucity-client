<template>
    <div class="w-screen h-[90dvh] relative">
        <l-map class="!w-full !h-full" ref="map" v-model:zoom="zoom" :center="[$route.query.lat, $route.query.lng]">
            <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                layer-type="base"
                name="OpenStreetMap"
            ></l-tile-layer>
            <l-marker :lat-lng="[$route.query.lat, $route.query.lng]">
            </l-marker>
        </l-map>
        <router-link :to="{ name: 'map' }" class="absolute top-5 right-5 z-[1000] bg-white/55 rounded-full px-4 py-4">
            <Icon icon="solar:arrow-left-linear" class="text-3xl" />
        </router-link> 
    </div>
</template>

<script setup>
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import L from 'leaflet'
import { computed, ref } from 'vue'

const zoom = ref(20);
</script>

<template>
    <div class="w-screen h-[90dvh]">
        <l-map class="!w-full !h-full" ref="map" v-model:zoom="zoom" :center="[$route.query.lat, $route.query.lng]">
            <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                layer-type="base"
                name="OpenStreetMap"
            ></l-tile-layer>
            <l-marker :lat-lng="[$route.query.lat, $route.query.lng]">
            </l-marker>
        </l-map>
    </div>
</template>

<script setup>
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import L from 'leaflet'
import { computed, ref } from 'vue'

const zoom = ref(20);
</script>

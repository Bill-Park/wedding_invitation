<template>
    <v-app>
        <v-main>
            <v-container class="justify-center align-center fill-height">
                <v-text-field outlined>
                    this is auth
                </v-text-field>
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LayoutAuth extends Vue {

}
</script>

<style scoped>

</style>

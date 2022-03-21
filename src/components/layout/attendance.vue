<template>
    <v-app>
        <v-main>
            this is attendance
            <v-container class="justify-center align-center">
                <v-row>
                    <v-text-field outlined>
                    </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field outlined>
                    </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field outlined>
                    </v-text-field>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LayoutAttendance extends Vue {

}
</script>

<style scoped>

</style>

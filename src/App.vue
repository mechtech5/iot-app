<template>
  <div id="app" class="container">
    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>RATING</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(device, index) in devices" :key="index">
              <td>{{ device.id }}</td>
              <td>{{ device.name }}</td>
              <td>{{ device.rating }}</td>
              <td>{{ device.status }}</td>
            </tr>
          </tbody>
        </table>
        <div class="">
          <button class="button is-link is-rounded" @click="appendForm"><i class="fas fa-plus"></i> Add Device</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      device: {
        id: '',
        name: '',
        rating: '',
        status: ''
      }
    }
  },
  created() {
    this.fetchDevices();
  },
  computed: {
    ...mapState(['devices'])
  },
  methods: {
    ...mapActions(['fetchDevices']),
    appendForm() {
      let empty_device = {
        id: this.device.id,
        name: this.device.name,
        rating: this.device.rating,
        status: this.device.status,
      };

      this.devices.push(empty_device);

      this.device.id = '';
      this.device.name = '';
      this.device.rating = '';
      this.device.status = '';
    }
  }
}
</script>

<style>
</style>

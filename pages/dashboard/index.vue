<template>
  <div>
    <div class="row no-gutters dashboard-wrap">
      <div class="col-md-3 devices-list">
        <div class="device" :class="currentDeviceId === 0 ? 'active' : ''" @click="allDevices">
          <div class="device__name">All Devices</div>
        </div>
        <div class="device" :class="currentDeviceId === device.serial ? 'active' : ''" v-for="device in devices"
             :key="device._id" @click="showSingleDevice(device)">
          <div class="device__name">{{device.name}}</div>
          <!--          <div class="device__description">{{device.body}}</div>-->
        </div>
      </div>
      <div class="col-md-9">
        <div class="map-wrap">
          <div id="map" style="width:100%;height:88vh;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    layout: "dashboard",
    name: "index",
    data() {
      return {
        mapData: {
          markers: [],
          map: '',
        },
        currentDeviceId: 0,
        location: {
          lat: 52.1326,
          lng: 5.2913
        }
      }
    },
    mounted() {
      this.socket = this.$nuxtSocket({
        channel: ''
      });
      this.allDevices();

    },
    async asyncData({store}) {
      const response = await store.dispatch('device/getDevices');
      console.log(response)
      return {
        devices: response.data.payload.data.devices
      }
    },
    methods: {
      showSingleDevice(device) {
        this.location = device.coordinates;
        this.initMap();
        this.currentDeviceId = device.serial;
        this.mapData.markers.forEach(obj => {
          if (obj.device.serial !== device.serial) {
            obj.marker.setMap(null);
          } else {
            this.socket
              .on('update', (msg, cb) => {
                if (device.serial === msg.id) {
                  obj.marker.setPosition(msg.coordinates);
                  obj.marker.addListener('click', () => {
                    obj.infoWindow.open(this.mapData.map, obj.marker);
                  });
                }
              })
          }
        })
      },
      allDevices() {
        this.currentDeviceId = 0;
        google.maps.event.addDomListener(window, 'load', this.initMap());
        this.socket
          .on('update', (msg, cb) => {
            // console.log(msg)
            // const device = this.devices.filter(x => x.serial === msg.id);
            // const structured_device = {...device[0], ...msg};
            // let changeObjIndex = this.devices.findIndex(single => single.serial === msg.id);
            // this.devices[changeObjIndex] = structured_device;
            const device = this.mapData.markers.filter(x => x.device.serial === msg.id);
            device[0].marker.setPosition(msg.coordinates);
            device[0].marker.addListener('click', () => {
              device[0].infoWindow.open(this.mapData.map, device[0].marker);
            });
          })
      },
      initMap() {
        this.mapData.markers = [];

        const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: this.location
        });

        this.devices.forEach(device => {
          const marker = new google.maps.Marker({
            position: device.coordinates,
            map: map,
            title: device.name
          });

          const infoWindow = new google.maps.InfoWindow({
            content: `<h5>${device.name}</h5>`
          });
          // device[0].marker.addListener('click', () => {
          //   device[0].infoWindow.open(this.mapData.map, device[0].marker);
          // });

          this.mapData.map = map;
          this.mapData.markers.push({
            marker: marker,
            device: device,
            infoWindow: infoWindow
          });
        })
      },
    }
  }
</script>

<style scoped>
  .active {
    color: #495057;
    background: #e0e0e0;
  }
</style>

<template>
  <div class="popup">
    <div class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Notification</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="closePopup"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>{{ popupContent }}</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="closePopup"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: mapState(["popupContent"]),
  name: "PopUpNoti",
  methods: {
    closePopup() {
      this.changePopupMode("");
    },
    ...mapMutations(["changePopupMode"]),
  },
};
</script>

<style>
.popup {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.608);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
}

.modal {
  display: block !important;
}
</style>

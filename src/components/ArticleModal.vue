<template>
  <!-- Modal -->
  <div class="modal modal-lg fade right" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog m-0 ms-auto">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.modal-content{
  width: 80%;
  height: 100vh;
}
.modal.fade.right .modal-dialog {
  transform: translate(100%, 0);
}

.modal.fade.right.show .modal-dialog {
  transform: translate(20%, 0);
}
</style>

<template>
  <div class="container mt-5">
    <h1 class="mb-4">Contacto</h1>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="fullName" class="form-label">Nombre Completo</label>
        <input
          v-model="formData.fullName"
          type="text"
          id="fullName"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">Número de Teléfono</label>
        <input
          v-model="formData.phone"
          type="tel"
          id="phone"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Correo Electrónico</label>
        <input
          v-model="formData.email"
          type="email"
          id="email"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="comments" class="form-label">Comentarios</label>
        <textarea
          v-model="formData.comments"
          id="comments"
          rows="3"
          class="form-control"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>

    <div v-if="showMessage" class="modal fade show d-block" tabindex="-1" style="background: rgba(0, 0, 0, 0.5);">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Mensaje Enviado</h5>
            <button type="button" class="btn-close" @click="showMessage = false"></button>
          </div>
          <div class="modal-body">
            <p>Información suministrada. Se le estará contactando en 2 días.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="showMessage = false">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactoView",
  data() {
    return {
      formData: {
        fullName: "",
        phone: "",
        email: "",
        comments: "",
      },
      showMessage: false,
    };
  },
  methods: {
    handleSubmit() {
      this.showMessage = true;
    },
  },
};
</script>

<style scoped>
.container{
  background-color: #9ff86b;
  padding: 40px;
} 

</style>
<template>
  <div class="container mt-4">
    <h1>Contacto</h1>
    <form @submit.prevent="handleSubmit">
      <div v-for="(field, index) in fields" :key="index" class="mb-3">
        <label :for="field.name" class="form-label">{{ field.label }}</label>
        <input
          v-model="formData[field.name]"
          :type="field.type"
          :name="field.name"
          :required="field.required"
          class="form-control"
        />
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>

    <div v-if="showMessage" class="modal fade show d-block" tabindex="-1">
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

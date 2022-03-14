<template>
  <div class="mb-5">
    <b-card title="Formulario">
      <div class="row">
        <div class="col-md-3">
          <div class="form-group">
            <label for="ciudad_origen">Ciudad Origen:</label>
            <b-form-input id="ciudad_origen" type="text"></b-form-input>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="ciudad_destino">Ciudad Destino:</label>
            <b-form-input id="ciudad_destino" type="text"></b-form-input>
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label for="fecha_salida">Fecha de salida:</label>
            <b-form-input id="fecha_salida" type="date"></b-form-input>
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label for="fecha_retorno">Fecha de retorno:</label>
            <b-form-input id="fecha_retorno" type="date"></b-form-input>
          </div>
        </div>
        <div class="col-md-2 text-right">
          <div class="form-group pt-4">
            <b-button id="searchBtn" block>Buscar</b-button>
          </div>
        </div>
      </div></b-card
    >
  </div>
</template>

<script>
export default {
  name: "Form",
};
</script>

<style>
.text-right {
  text-align: right;
}
</style>

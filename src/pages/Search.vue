<template>
  <div>
    <Form />
    <div class="mb-4">Resultados:</div>
    <div class="mb-3" v-for="(result, index) in results" :key="index">
      <b-card :title="'Viajes ' + (index + 1)">
        <div class="row">
          <div class="col-md-3">
            <div class="form-group">
              <label for="precio">Precio:</label>
              <div id="precio">{{ result.precio }}</div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <label for="aerolinea">Aerolinea:</label>
              <div id="aerolinea">{{ result.aerolinea }}</div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <label for="nro_escalas">Nro Escalas:</label>
              <div id="nro_escalas">{{ result.nro_escalas }}</div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <label for="duracion">Duración:</label>
              <div id="duracion">{{ result.duracion }}</div>
            </div>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Form from "../components/Form.vue";
export default {
  name: "Search",
  components: {
    Form,
  },
  computed: {
    ...mapState(["results"]),
  },
};
</script>

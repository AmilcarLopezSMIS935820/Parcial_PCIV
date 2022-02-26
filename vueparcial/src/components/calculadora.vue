<template>
   <div class="p-3 bg-calc" style="max-width: 400px; margin: 10px auto;">
      <!-- Resultado Final -->
      <div
         class="w-full rounded m-1 p-3 text-end lead font-weight-bold text-white bg-vue-dark">
         {{ calculatorValue || 0 }}
      </div>
      <div class="row no-gutters">
         <div class="col-3" v-for="n in calculatorElement" :key="n">
            <div
               class="lead text-white text-center m-1 py-3 bg-vue-dark rounded hover-class"
               :class="{
                  'bg-vue-red': [
                     'C',
                     '/',
                     '*',
                     '+',
                     '=',
                     '-',
                     '%',
                     '.',
                  ].includes(n),
               }"
               @click="action(n)"
            >
               {{ n }}
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import "../assets/css/style.css";
export default {
   name: "Calculator",
   data() {
      return {
         operator: null,
         previousCalculatorValue: "",
         calculatorValue: "",
         calculatorElement: [
            "C",
            "*",
            "/",
            "-",
            7,
            8,
            9,
            "+",
            4,
            5,
            6,
            "%",
            1,
            2,
            3,
            "=",
            0,
            ".",
         ],
      };
   },
   methods: {
      action(n) {
         //    Agregar Valor
         if (!isNaN(n) || n === ".") {
            this.calculatorValue += n + "";
         }
         //  Limpiar valores
         if (n === "C") {
            this.calculatorValue = "";
         }
         //  Operaciones Aritmeticas
         if (["/", "+", "*", "-"].includes(n)) {
            this.operator = n;
            this.previousCalculatorValue = this.calculatorValue;
            this.calculatorValue = "";
         }
         //  Porcentaje
         if (n === "%") {
            this.calculatorValue = this.calculatorValue / 100 + "";
         }

         // Resultado
         if (n === "=") {
            this.calculatorValue = eval(
               this.previousCalculatorValue +
                  this.operator +
                  this.calculatorValue
            );
            console.log(eval);
            this.previousCalculatorValue = "";
            this.operator = null;
         }
      },
   },
};
</script>
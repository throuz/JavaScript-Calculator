<template>
  <div id="wrap">
    <div id="display">
      <div id="discribe" v-dragscroll>
        {{ discribe ? discribe : 0 }}
      </div>
      <div id="result" v-dragscroll>{{ result ? result : 0 }}</div>
    </div>
    <div
      v-for="(item, index) in buttonsData"
      :key="index"
      @click="inputData(item.name)"
      :class="['buttons', item.class]"
      :id="item.id"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  setup: () => {
    const discribe = ref("");
    const result = ref("");
    const previousResult = ref("");
    const buttonsData = reactive([
      {
        name: "AC",
        id: "clear",
        class: "",
      },
      {
        name: "+",
        id: "add",
        class: "operators",
      },
      {
        name: "-",
        id: "subtract",
        class: "operators",
      },
      {
        name: "*",
        id: "multiply",
        class: "operators",
      },
      {
        name: "/",
        id: "divide",
        class: "operators",
      },
      {
        name: "=",
        id: "equals",
        class: "",
      },
      {
        name: "0",
        id: "zero",
        class: "numbers",
      },
      {
        name: "1",
        id: "one",
        class: "numbers",
      },
      {
        name: "2",
        id: "two",
        class: "numbers",
      },
      {
        name: "3",
        id: "three",
        class: "numbers",
      },
      {
        name: "4",
        id: "four",
        class: "numbers",
      },
      {
        name: "5",
        id: "five",
        class: "numbers",
      },
      {
        name: "6",
        id: "six",
        class: "numbers",
      },
      {
        name: "7",
        id: "seven",
        class: "numbers",
      },
      {
        name: "8",
        id: "eight",
        class: "numbers",
      },
      {
        name: "9",
        id: "nine",
        class: "numbers",
      },
      {
        name: ".",
        id: "decimal",
        class: "numbers",
      },
    ]);

    const inputData = (name: string) => {
      if (/[1-9]/.test(name)) {
        if (result.value !== "0") {
          /[*/+]/.test(result.value) || /=/.test(discribe.value)
            ? (result.value = name)
            : (result.value += name);
          /=/.test(discribe.value)
            ? (discribe.value = name)
            : (discribe.value += name);
        } else {
          result.value = name;
          discribe.value = discribe.value.slice(0, -1) + name;
        }
      } else if (/0/.test(name)) {
        if (result.value !== "0") {
          /[*/+-]/.test(result.value) || /=/.test(discribe.value)
            ? (result.value = name)
            : (result.value += name);
          /=/.test(discribe.value)
            ? (discribe.value = name)
            : (discribe.value += name);
        }
      } else if (/\./.test(name)) {
        if (!/\./.test(result.value) && /\d/.test(result.value)) {
          result.value += name;
          discribe.value += name;
        }
      } else if (/[*/+-]/.test(name)) {
        result.value = name;
        if (/=/.test(discribe.value)) {
          discribe.value = previousResult.value + name;
        } else {
          const lastLetter = discribe.value.charAt(discribe.value.length - 1);
          /[+-]/.test(lastLetter)
            ? (discribe.value = discribe.value.replace(/[*/+-]$/, name))
            : (discribe.value += name);
        }
      } else if (
        /=/.test(name) &&
        !/=/.test(discribe.value) &&
        discribe.value !== ""
      ) {
        const demicalNum = discribe.value
          .replace(/[*/+-]/, ".")
          .split(".")
          .sort((a, b) => {
            return b.length - a.length;
          })[0].length;
        const fixedNum = demicalNum > 4 ? 4 : demicalNum;

        const evalVal = parseFloat(eval(discribe.value).toFixed(fixedNum));
        result.value = evalVal.toString();
        previousResult.value = evalVal.toString();
        discribe.value += `=${evalVal}`;
      } else if (/AC/.test(name)) {
        result.value = "";
        discribe.value = "";
        previousResult.value = "";
      }
    };

    return { discribe, result, buttonsData, inputData };
  },
});
</script>

<style scoped>
::-webkit-scrollbar {
  height: 2px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
#wrap {
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(6, 100px);
  grid-template-areas:
    "display display display display"
    "clear clear divide multiply"
    "seven eight nine subtract"
    "four five six add"
    "one two three equals"
    "zero zero decimal equals";
  color: #fff;
  padding: 10px;
  background: #000;
  font-size: 20px;
  font-weight: bold;
}
#display {
  grid-area: display;
  background: #000;
  text-align: right;
}
#discribe {
  overflow: auto;
  white-space: nowrap;
  font-size: 30px;
  color: #990;
}
#result {
  overflow: auto;
  white-space: nowrap;
  font-size: 40px;
}
.buttons {
  text-align: center;
  line-height: 100px;
  cursor: pointer;
  border: 1px solid #000;
  transition: all 0.1s;
}
.buttons:hover {
  color: #000;
  border: 1px solid #fff;
}
.operators {
  background: #999;
}
.numbers {
  background: #666;
}
#clear {
  grid-area: clear;
  background: #c00;
}
#add {
  grid-area: add;
}
#multiply {
  grid-area: multiply;
}
#divide {
  grid-area: divide;
}
#zero {
  grid-area: zero;
}
#one {
  grid-area: one;
}
#two {
  grid-area: two;
}
#three {
  grid-area: three;
}
#four {
  grid-area: four;
}
#five {
  grid-area: five;
}
#six {
  grid-area: six;
}
#seven {
  grid-area: seven;
}
#eight {
  grid-area: eight;
}
#nine {
  grid-area: nine;
}
#decimal {
  grid-area: decimal;
}
#equals {
  grid-area: equals;
  background: #069;
  line-height: 200px;
}
</style>

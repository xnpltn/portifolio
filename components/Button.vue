<script setup>
import { cva} from "class-variance-authority";

 const props = defineProps({
   as: {
     type: [String, Object],
     default: 'button',
   },

   intent: {
     type:String,
     validator: (val)=>["primary", "secondary", "danger", "text"].includes(val),
     default: "secondary",
   },
  disabled: {
    type: Boolean,
  },
 }); 

 const btnClass = computed(()=>{
  return cva("btn", {
    variants:{
      intent: {
        primary: "primary",
        secondary: "secondary",
        danger: "danger",
        text: "text",
      },
      disabled:{
        true: "disabled"
      }
    }

  })({intent: props.intent, disabled: props.disabled});
 })
</script>

<template>
  <component :is="as" :class="btnClass">
    <slot/>
  </component >
</template>



<template>
  <section class="h-screen w-screen bg-blue-900 flex flex-col gap-4 items-center justify-center">
    <div class="h-24 w-76 bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl flex justify-center items-center tracking-wide text-5xl font-bold text-white">
      {{ hour }} : {{ minute }} : {{ second }}
    </div>
    
    <div v-if="ho" class="h-12 w-20 flex items-center justify-center text-3xl font-bold bg-[#b1c9e5] rounded-full">
      {{ forma }}
    </div>
    
    <div class="h-10 w-20 rounded-full flex items-center justify-center text-xl font-bold bg-white/10">
      <button 
        class="h-full w-1/2 rounded-full cursor-pointer transition-all" 
        :class="ho ? 'bg-sky-300 text-black' : 'bg-transparent text-white hover:bg-white/20'" 
        @click="ho = true; clock()"
      >
        12
      </button>
      <button 
        :class="ho ? 'bg-transparent text-white hover:bg-white/20' : 'bg-sky-300 text-black'" 
        @click="ho = false; clock()" 
        class="h-full w-1/2 rounded-full cursor-pointer transition-all"
      >
        24
      </button>
    </div>
  </section>
</template>

<script setup>
import { onUnmounted, ref } from 'vue';

const second = ref('00')
const minute = ref('00')
const hour = ref('00')
const forma = ref('AM')
const ho = ref(true)

function clock() {
  const now = new Date()
  second.value = String(now.getSeconds()).padStart(2, '0')
  minute.value = String(now.getMinutes()).padStart(2, '0')
  
  if (ho.value) {
    const currentHour = now.getHours()
    const hour12 = currentHour % 12 || 12
    hour.value = String(hour12).padStart(2, '0')
    forma.value = currentHour >= 12 ? 'PM' : 'AM'
  }
  else {
    hour.value = String(now.getHours()).padStart(2, '0')
  }
}

clock()
const timer = setInterval(clock, 1000)

onUnmounted(() => {
  clearInterval(timer)
})
</script>
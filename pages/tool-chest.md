---
preload: false
---

# Technology

## Back End

<div class="w-60 relative mt-6">
  <div class="relative w-40 h-40">
    <img
      v-motion
      :initial="{ x: 800, y: -100, scale: 1.5, rotate: -50 }"
      :enter="final"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="/img/supabase-logo.png"
    />
    <img
      v-motion
      :initial="{ y: -500, x: -100, scale: 2 }"
      :enter="hide"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="https://sli.dev/logo-circle.png"
    />
    <img
      v-motion
      :initial="{ x: -600, y: -400, scale: 2, rotate: 100 }"
      :enter="hide"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="https://sli.dev/logo-triangle.png"
    />
  </div>

  <div
    class="text-5xl absolute top-14 left-40 text-[#2B90B6] -z-1"
    style="color:white;"
    v-motion
    :initial="{ x: -80, opacity: 0}"
    :enter="{ x: 0, opacity: 1, transition: { delay: 2000, duration: 1000 } }">
    supabase
  </div>
</div>

<!-- vue script setup scripts can be directly used in markdown, and will only affects current page -->
<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
const hide = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 0,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

<div
  v-motion
  :initial="{ x:35, y: 40, opacity: 0}"
  :enter="{ y: 0, opacity: 1, transition: { delay: 3500 } }">

[Learn More](https://supabase.com)

</div>

<v-clicks>
<div
  v-motion
  :initial="{x:0, y:0, opacity: 0}"
  :enter="{ x:450, y:-250, opacity: 1, transition: { duration: 2000 } }">
  Low Admin
</div>
<div
  v-motion
  :initial="{x:0, y:0, opacity: 0}"
  :enter="{ x:450, y:-250, opacity: 1, transition: { duration: 2000 } }">
  Database
</div>
<div
  v-motion
  :initial="{x:0, y:0, opacity: 0}"
  :enter="{ x:450, y:-250, opacity: 1, transition: { duration: 2000 } }">
  API
</div>
<div
  v-motion
  :initial="{x:0, y:0, opacity: 0}"
  :enter="{ x:450, y:-250, opacity: 1, transition: { duration: 2000 } }">
  Authentication
</div>
<div
  v-motion
  :initial="{x:0, y:0, opacity: 0}"
  :enter="{ x:450, y:-250, opacity: 1, transition: { duration: 2000 } }">
  Storage
</div>
<div
  v-motion
  :initial="{x:0, y:0, opacity: 0}"
  :enter="{ x:450, y:-250, opacity: 1, transition: { duration: 2000 } }">
  Edge Functions
</div>
</v-clicks>

---
preload: false
---

# Technology

## Front End

<div class="w-60 relative mt-6">
  <div class="relative w-40 h-40">
    <img
      v-motion
      :initial="{ x: 800, y: -100, scale: 1.5, rotate: -50 }"
      :enter="final"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="/img/vue-logo.png"
    />
    <img
      v-motion
      :initial="{ y: -500, x: -100, scale: 2 }"
      :enter="hide"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="https://sli.dev/logo-circle.png"
    />
    <img
      v-motion
      :initial="{ x: -600, y: -400, scale: 2, rotate: 100 }"
      :enter="hide"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="https://sli.dev/logo-triangle.png"
    />
  </div>

  <div
    class="text-5xl absolute top-14 left-40 text-[#2B90B6] -z-1"
    style="color:white;"
    v-motion
    :initial="{ x: -80, opacity: 0}"
    :enter="{ x: 20, opacity: 1, transition: { delay: 2000, duration: 1000 } }">
    Vue
  </div>
</div>

<!-- vue script setup scripts can be directly used in markdown, and will only affects current page -->
<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
const hide = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 0,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

<div
  v-motion
  :initial="{ x:35, y: 40, opacity: 0}"
  :enter="{ y: 0, opacity: 1, transition: { delay: 3500 } }">

[Learn More](https://vuejs.org)

</div>

<v-clicks>
<div
  v-motion
  :initial="{x:0, y:0, opacity: 0}"
  :enter="{ x:450, y:-250, opacity: 1, transition: { duration: 2000 } }">
  Router for SPA
</div>
<div
  v-motion
  :initial="{x:0, y:0, opacity: 0}"
  :enter="{ x:450, y:-250, opacity: 1, transition: { duration: 2000 } }">
  Pinia for Shared Local Data State
</div>
<div
  v-motion
  :initial="{x:0, y:0, opacity: 0}"
  :enter="{ x:450, y:-250, opacity: 1, transition: { duration: 2000 } }">
  API: Via Supbase.js
</div>
<div
  v-motion
  :initial="{x:0, y:0, opacity: 0}"
  :enter="{ x:450, y:-250, opacity: 1, transition: { duration: 2000 } }">
  Authentication: Via Supabase.js
</div>
<div
  v-motion
  :initial="{x:0, y:0, opacity: 0}"
  :enter="{ x:450, y:-250, opacity: 1, transition: { duration: 2000 } }">
  Vue Use (more benefits weekly)
</div>
<div
  v-motion
  :initial="{x:0, y:0, opacity: 0}"
  :enter="{ x:450, y:-250, opacity: 1, transition: { duration: 2000 } }">
  Vite, Typescript, + More
</div>
</v-clicks>

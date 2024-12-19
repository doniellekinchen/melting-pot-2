<template>
    <div class="flag-item" @click="showResources">
      <img :src="flagSrc" :alt="language" class="flag-image" />
      <div class="flag-label">{{ language }}</div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      flagSrc: {
        type: String,
        required: true
      },
      language: {
        type: String,
        required: true
      },
      resources: {
        type: Array,
        required: true
      }
    },
    methods: {
      showResources() {
  this.$emit('show-resources', this.language, this.resources);
}
    }
  };
  </script>
  
  <style scoped>
  .flag-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 10px;
    transition: transform 0.3s ease;
    cursor: pointer;
  }
  
  .flag-item:hover {
    transform: translateY(-10px);
  }
  
  .flag-image {
    max-width: 150px;
    max-height: 100px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .flag-label {
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 30px; 
    text-align: center; 
    color: #000000;
  }
  </style>
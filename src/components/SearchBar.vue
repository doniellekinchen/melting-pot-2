<template>
    <div class="search-container">
      <input
        type="text"
        placeholder="Search languages..."
        v-model="searchTerm"
        @input="emitSearch"
      />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchTerm: ''
      };
    },
    methods: {
      emitSearch() {
        this.$emit('search', this.searchTerm);
      }
    }
  };
  </script>
  
  <style scoped>
  .search-container {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
  
  input {
    padding: 10px 15px;
    font-size: 1rem;
    border: none;
    border-radius: 5px 0 0 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  button {
    background-color: #3c8dbc;
    color: white;
    border: none;
    border-radius: 0 5px 5px 0;
    padding: 10px 15px;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  button:hover {
    background-color: #00c0ef;
  }
  </style>
  
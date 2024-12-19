<template>
    <div>
      <h2>{{ language }} Resources</h2>
      <ul>
        <li v-for="(resource, index) in resources" :key="index">
          <a :href="resource.link" target="_blank">{{ resource.title }}</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>

  export default {
    props: {
      language: {
        type: String,
        required: true
      },
      resources: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style>
.resources-container {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #3c8dbc;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

a {
  color: #00c0ef;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #3c8dbc;
}
</style>
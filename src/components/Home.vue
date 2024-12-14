<template>
   <div class="home-container">
    <div class="logo-container">
        <img :src="logoSrc" :alt="logoAlt" class="logo-image" />
        </div>
    <!-- <h1>The Melting Pot</h1> -->
    <h3>Select a Language</h3>
    <SearchBar @search="handleSearch" />

    <div class="flag-container">
      <Flag
        v-for="(language, index) in filteredLanguages"
        :key="index"
        :flagSrc="language.flag"
        :language="language.name"
        :resources="language.resources"
        @show-resources="openResources(language.name, language.resources)"
      />
    </div>

    <div v-if="isResourcesVisible" class="popup-overlay">
      <div class="popup">
        <div class="popup-content">
          <LanguageResources :language="selectedLanguage" :resources="selectedResources" />
          <button @click="closeResources">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import Flag from './Flag.vue';
import LanguageResources from './LanguageResources.vue';
import SearchBar from './SearchBar.vue';

export default {
  components: {
    Flag,
    LanguageResources,
    SearchBar
  },
    data() {
      return {
        languages: [
          {
            name: 'English',
            flag: new URL('@/assets/USA Flag XL.jpg', import.meta.url).href,
            resources: [
              { title: 'English Beginner', link: 'https://google.com' },
              { title: 'English Intermediate', link: 'https://google.com' },
              { title: 'English Advanced', link: 'https://google.com' }
            ]
          },
          {
            name: 'Spanish',
            flag: new URL('@/assets/Spain Flag.jpg', import.meta.url).href,
            resources: [
              { title: 'Spanish Beginner', link: 'https://google.com' },
              { title: 'Spanish Intermediate', link: 'https://google.com' },
              { title: 'Spanish Advanced', link: 'https://google.com' }
            ]
          },
          {
            name: 'French',
            flag: new URL('@/assets/France Flag XL.jpg', import.meta.url).href,
            resources: [
              { title: 'French Beginner', link: 'https://google.com' },
              { title: 'French Intermediate', link: 'https://google.com' },
              { title: 'French Advanced', link: 'https://google.com' }
            ]
          },
          {
            name: 'Chinese (Mandarian)',
            flag: new URL('@/assets/China Flag.jpg', import.meta.url).href,
            resources: [
              { title: 'Chinese (Mandarian) Beginner', link: 'https://google.com' },
              { title: 'Chinese (Mandarian) Intermediate', link: 'https://google.com' },
              { title: 'Chinese (Mandarian) Advanced', link: 'https://google.com' }
            ]
          },
          {
            name: 'Chinese (Cantonese)',
            flag: new URL('@/assets/China Flag.jpg', import.meta.url).href,
            resources: [
              { title: 'Chinese (Cantonese) Beginner', link: 'https://google.com' },
              { title: 'Chinese (Cantonese) Intermediate', link: 'https://google.com' },
              { title: 'Chinese (Cantonese) Advanced', link: 'https://google.com' }
            ]
          },
          {
            name: 'Korean',
            flag: new URL('@/assets/South Korea Flag.jpg', import.meta.url).href,
            resources: [
              { title: 'Korean Beginner', link: 'https://google.com' },
              { title: 'Korean Intermediate', link: 'https://google.com' },
              { title: 'Korean Advanced', link: 'https://google.com' }
            ]
          },
          {
            name: 'Portuguese',
            flag: new URL('@/assets/portugal-flag-xl.jpg', import.meta.url).href,
            resources: [
              { title: 'Portuguese Beginner', link: 'https://google.com' },
              { title: 'Portuguese Intermediate', link: 'https://google.com' },
              { title: 'Portuguese Advanced', link: 'https://google.com' }
            ]
          },
          {
            name: 'Japanese',
            flag: new URL('@/assets/Japan Flag.jpg', import.meta.url).href,
            resources: [
              { title: 'Japanese Beginner', link: 'https://google.com' },
              { title: 'Japanese Intermediate', link: 'https://google.com' },
              { title: 'Japanese Advanced', link: 'https://google.com' }
            ]
          },
          // Add more languages and their resources
        ],
        filteredLanguages: [],
        isResourcesVisible: false,
        selectedLanguage: '',
        selectedResources: [],
        logoSrc: new URL('@/assets/Logo from Canva (1).png', import.meta.url).href,
        logoAlt: 'My Logo'
      };
    },
    created() {
        this.filteredLanguages = this.languages;
    },
    methods: {
        handleSearch(searchTerm) {
      this.filteredLanguages = this.languages.filter(language =>
        language.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
      openResources(language, resources) {
        this.selectedLanguage = language;
        this.selectedResources = resources;
        this.isResourcesVisible = true;
      },
      closeResources() {
        this.isResourcesVisible = false;
        this.selectedLanguage = '';
        this.selectedResources = [];
      }
    }
  };
  </script>
  
  <style scoped>
.flag-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: auto; /* Add this line to allow scrolling if needed */
}

.popup {
  background: white;
  padding: 20px;
  border-radius: 5px;
  max-height: 80vh;
  overflow-y: auto;
}

.popup-content {
  max-height: 100%;
  overflow-y: auto;
}
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  /* background-image: linear-gradient(to bottom right, #3c8dbc, #00c0ef); */
  color: white;
}
.logo-container {
    display: flex;
    justify-content: center;
    margin-bottom: 0px;
}
h1 {
  font-size: 3rem;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.flag-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 30px;
  width: 100%;
  max-width: 1200px;
}
</style>
export default {
  name: 'TarantinoScreen',
  template: `
    <div class="tarantino">
      <div class="topbar">Cinematography</div>
      <div class="container">
        <div>
        <video controls class="tarantino-screen" :src="current.video">
        </video>
        </div>
        <div class="title">
          <div class="title-name">{{ current.movieName }}</div>
          <div class="title-shot">{{ current.cameraShot }}</div>
        </div>
        <input type="range" min="1" max="100" class="slider" v-model="shotSlider">
        <div class="description">
          <div class="description-body">{{ current.description }}</div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      shotSlider: 0,
      currentIndex: 0,
      items: [
        {
          movieName: 'Kill Bill: Vol. 1 (2003)',
          cameraShot: 'Extreme Close up',
          description: 'Tarantino dives in close to show an audience detail on what is important. With his unnerving foot fetish, this “big toe” scene creates a style of tension and suspense that leads up to the extreme close-up shot These close shots are meant to reveal more about a character then an audience could just grasp from dialogue.',
          video: './assets/Tarantino/Wiggle.mp4'
        },
        {
          movieName: 'Django Unchained (2012)',
          cameraShot: 'Crash Zooms',
          description: 'A “Crash Zoom” also known as a snap zoom, is a sudden, rapid zoom in on an object or person. As you see in Django Unchained, the intense effect heightens the drama around any moment. ',
          video: './assets/Tarantino/DUCrash.mp4'
        },
        {
          movieName: 'Trunk Compilation',
          cameraShot: 'Low Angle',
          description: 'The absolute trademark of Tarantino is his trunk shot camera angle, his use of it in every movie is for the audience to feel as if they are right there with the characters. The claustrophobic feeling of the “trunk technique” ensures the audience will be. He also uses reverse trunk shots with characters being watched from outside the trunk.',
          video: './assets/Tarantino/Trunk.mp4'
        },
        {
          movieName: 'Reservoir Dogs (1992)',
          cameraShot: 'Staged Wide Shot',
          description: 'This shot is mainly used when a director wants the audience to appreciate the full scope of a subject’s predicament within those surroundings. In the case of the Mexican Standoff, the audience can see that each character has full range of shooting each other within an empty space. The audience is directed to the actions of the characters rather than the environment.',
          video: './assets/Tarantino/RDogs.mp4'
        },
        {
          movieName: 'Jackie Brown (1997)',
          cameraShot: 'Tracking Long Shot',
          description: 'Tarantino uses these shots to stay with the same character or characters for several minutes as they perform actions or interact with each other. The opening sequence follows the character of Jackie, as she makes her way towards her workplace, only rushing towards the end when she realizes she is late. ',
          video: './assets/Tarantino/JBrown.mp4'
        },
        {
          movieName: 'The Hateful Eight (2015)',
          cameraShot: 'Establishing Location Shot',
          description: 'As Tarantino likes to keep things up-close and personal, he still has a stylistic eye when showing a location establishing shot. The establishing shots provide the audience where and when the next scene will occur. In Tarantino’s case, he frequently uses these shots when characters are telling a story or a flashback is taking place. ',
          video: './assets/Tarantino/THE.mp4'
        },
      ]
    }
  },
  computed: {
    current() {
      return this.items[this.currentIndex]
    }
  },
  watch: {
    shotSlider() {
      if (this.shotSlider >= 0 && this.shotSlider <= 16) {
        this.currentIndex = 0
      } else if (this.shotSlider > 16 && this.shotSlider < 32) {
        this.currentIndex = 1
      } else if (this.shotSlider > 32 && this.shotSlider < 48) {
        this.currentIndex = 2
      } else if (this.shotSlider > 48 && this.shotSlider < 64) {
        this.currentIndex = 3
      } else if (this.shotSlider > 64 && this.shotSlider < 80) {
        this.currentIndex = 4
      } else if (this.shotSlider > 80 && this.shotSlider <= 100) {
        this.currentIndex = 5
      }
    }
  },
  methods: {
  }
}
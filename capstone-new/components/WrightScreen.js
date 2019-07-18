export default {
  name: 'WrightScreen',
  template: `
    <div class="wright">
      <div class="topbar"> Sound Effects </div>
        <div class="wright-container">
            <div class="player">
              <div class="player-title">
                <div class="songs">
                  <div class="songs-title">{{ current.songTitle }}</div>
                  <div class="songs-movie">{{ current.movieName }}</div>
                </div>
              </div>
              <div class="player-controls">
                <div
                <video controls class="player-image" :src="current.videoSource"> </video>
                </div>
              </div>
                <div class="player-buttons">
                  <button @click="previous" class="player-button">
                    <i class="material-icons">fast_rewind</i>
                  </button>
                  <template v-if="isPlaying">
                    <button @click="playToggle" class="player-button">
                      <i class="material-icons" style="font-size:90px">pause</i>
                    </button>
                  </template>
                  <template v-else>
                    <button @click="playToggle" class="player-button">
                      <i class="material-icons" style="font-size:90px">play_arrow</i>
                    </button>
                  </template>
                  <button @click="next" class="player-button">
                    <i class="material-icons">fast_forward</i>
                  </button>
                </div>
            </div>
      <div class="wright-description">
        <div class="wright-description-body">{{ current.description }}</div>
      </div>
    </div>
</div>
  `,
  computed: {
    current() {
      return this.songs[this.currentIndex]
    },
  },
  data() {
    return {
      isPlaying: false,
      currentIndex: 0,
      songs: [
        {
          songTitle: 'Alabama Song',
          movieName: 'The World\'s End (2013)',
          videoSource: '../assets/Wright/TWEOne.mp4',
          description: 'Editing music to the beat of action (in this case, characters walking and suspiciously taking in their surroundings). This is effective for progressing the storyline further by condensing time as well as incorporating comedic relief in an otherwise tense scene.'
        },
        {
          songTitle: 'The Twins',
          movieName: 'Scott Pilgram VS the World (2010)',
          videoSource: './assets/Wright/SPOne.mp4',
          description: 'A great example of how he incorporates the use of sound effects from video games, (i.e. Collecting coins or points in a game) within a film. The scene is ultimately a battle of sound and music. '
        },
        {
          songTitle: 'Sound Effect Compilation',
          movieName: 'Varity',
          videoSource: './assets/Wright/SEffectComp.mp4',
          description: 'This is a compilation of jump-cuts and sound effects from a range of Edgar Wright films. The jump-cuts are an editing technique that jumps in time or shows a person or object from different angles. These jump cuts are edited to amplify certain sound effects (usually of mundane or ordinary actions, like pouring a drink), which can underscore the importance of that object for a character or plot, create symbolism or metaphor, and most importantly create a comedic effect in an otherwise routine scene.  '
        },
        {
          songTitle: 'Oblivious to the Zombies',
          movieName: 'Shaun of the Dead (2004)',
          videoSource: './assets/Wright/SotDOne.mp4',
          description: 'When returning from an identical trip to the store that was shown earlier in the film, the television voices are clipped together to provide information to the audience of what cause the apocalyptic environment but could be otherwise oblivious to the character. This scene also provides an example of how there is never silence within Wrights films, there is always amplified sound to intrigue the viewer '
        },
        {
          songTitle: 'Opening Sequence',
          movieName: 'Baby Driver (2017)',
          videoSource: './assets/Wright/BBDriver.mp4',
          description: 'Getting the actors to sing or dance to the music creates an emotional connection to the audience. The audience may want to sing along but also are attentive to the characters of how much they enjoy it as well. We begin to understand the characters confidence and the risks he is willing to take to complete a job. This confidence reflects the coming actions later in the movie. '
        },
        {
          songTitle: 'Sea Mine',
          movieName: 'Hot Fuzz (2007)',
          videoSource: './assets/Wright/HotFuzz.mp4',
          description: 'This scene provides information in a comedic style, and sets up future action (i.e. Our characters will use these weapons later. The use of jump-cuts to show the guns is effective and entertaining and of course jarring, as opposed to just a regular shot of showing the room. The recall ammunition sounds within the jump cuts are amplified as a hint that this scene important. '
        },
        {
          songTitle: 'Don\'t Stop Me Now',
          movieName: 'Shaun of the Dead (2004)',
          videoSource: './assets/Wright/SotDTwo.mp4',
          description: 'Editing music to the beat of action, this is effective for comedic relief'
        },
      ]
    }
  },
  methods: {
    playToggle() {
      this.isPlaying = !this.isPlaying
    },
    next() {
      if (this.currentIndex >= this.songs.length) {
        this.currentIndex = 0
      } else {
        this.currentIndex = this.currentIndex + 1
      }
      console.log('next', this.currentIndex)
    },
    previous() {
      if (this.currentIndex <= 0) {
        this.currentIndex = this.songs.length
      } else {
        this.currentIndex = this.currentIndex - 1
      }
      console.log('previous', this.currentIndex)
    }
 },
};

import levelExperienceData from '../data/level_experience.js'

export default {
    template: `
      <div>
      <table style="display: table;">
        <thead>
        <tr>
          <th>等级</th>
          <th>经验</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="it of levelExperienceData" :key="it.level">
          <td style="text-align: center;">{{ getFormattedLevelText(it.level) }}</td>
          <td style="text-align: center;">{{ getFormattedExperienceText(it.value) }}</td>
        </tr>
        </tbody>
      </table>
      </div>
    `,
    data() {
        return {
            levelExperienceData,
        }
    },
    methods: {
        getFormattedLevelText(level) {
            return level
        },
        getFormattedExperienceText(num) {
            return num.toLocaleString()
        },
    },
}
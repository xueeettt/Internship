import axios from "axios";

const base = {
  baseUrl: "http://localhost:5566",
  teamBio: "/api/bio/team-member",
  researchContent: "/api/research/content"
}

const api = {
  getTeamBio() {
    return axios.get(base.baseUrl + base.teamBio)
  },

  getResearchInfo() {
    return axios.get(base.baseUrl + base.researchContent)
  }
}

export default api
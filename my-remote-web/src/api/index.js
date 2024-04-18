import axios from "axios";

const base = {
  baseUrl: "http://localhost:5566",
  teamBio: "/api/bio/team-member"
}

const api = {
  getTeamBio() {
    return axios.get(base.baseUrl + base.teamBio)
  } 
}

export default api
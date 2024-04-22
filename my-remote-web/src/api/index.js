import axios from "axios";

const base = {
  baseUrl: "http://localhost:5566",
  teamBio: "/api/bio/team-member",
  researchContent: "/api/research/content",
  sendEmail: "/api/contact/send-email"
}

const api = {
  getTeamBio() {
    return axios.get(base.baseUrl + base.teamBio)
  },

  getResearchInfo() {
    return axios.get(base.baseUrl + base.researchContent)
  },

  sendContactForm(data) {
    return axios.post(base.baseUrl + base.sendEmail, data)
      .then(response => response.data) 
      .catch(error => {
        console.error('Failed to send contact form data:', error);
        throw error;
      });
  }
}

export default api